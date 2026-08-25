/**
 * Safe Sanity authoring helper — the STRUCTURAL guard against the createOrReplace field-loss bug.
 *
 * Background: `createOrReplace` (and `replace`) overwrite the WHOLE document, so any field you omit is
 * DELETED. That silently dropped a field four times (case-study images, goal icons, solution excerpts,
 * industry slugs). A "use patch instead" note did not hold. This helper makes the failure impossible:
 *
 *   - There is NO exported createOrReplace. Updates go through `patchSet` (change only the named fields;
 *     nothing else can be dropped). New documents use `create`.
 *   - `run()` REJECTS any raw `createOrReplace` / `replace` mutation in the payload, so a script cannot
 *     smuggle one in.
 *   - If a full-document write is ever genuinely required, `mergeReplace()` is the only sanctioned path:
 *     it READS the existing document first and shallow-merges your fields over it, so no existing
 *     top-level field is lost, and tags the result so `run()` accepts it.
 *
 * Every authoring script MUST import from here and use `run()` — never call the mutate API directly with
 * a createOrReplace.
 *
 * Usage:
 *   const S = require("../../scripts/sanity/safe-mutate");
 *   await S.run("staging", [ S.patchSet(id, { hasPage: true }), S.create(newDoc) ]);
 *   await S.run("staging", [ await S.mergeReplace("staging", { _id, _type, slug: {...} }) ]);
 */
const https = require("https");

const PROJECT = process.env.SANITY_PROJECT_ID || "4m0eqoi1";
const API = "v2024-01-01";

function writeToken() {
  if (process.env.SANITY_WRITE_TOKEN) return process.env.SANITY_WRITE_TOKEN;
  // eslint-disable-next-line global-require
  const cfg = require(process.env.SANITY_CONFIG || "C:/Users/tahab/.config/sanity/config.json");
  if (!cfg.authToken) throw new Error("[safe-mutate] no write token (config.authToken / SANITY_WRITE_TOKEN)");
  return cfg.authToken;
}

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = https.request(
      {
        host: `${PROJECT}.api.sanity.io`,
        path,
        method,
        headers: {
          Authorization: `Bearer ${writeToken()}`,
          ...(payload ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) } : {}),
        },
      },
      (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => {
          let json;
          try { json = JSON.parse(d); } catch { json = d; }
          if (res.statusCode >= 200 && res.statusCode < 300) resolve(json);
          else reject(new Error(`[safe-mutate] ${res.statusCode}: ${d.slice(0, 300)}`));
        });
      }
    );
    req.on("error", reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function query(dataset, groq) {
  const res = await request("GET", `/${API}/data/query/${dataset}?query=${encodeURIComponent(groq)}`);
  return res.result;
}

// ---- Safe mutation builders ----
const patchSet = (id, set) => ({ patch: { id, set } });
const patchSetIfMissing = (id, setIfMissing) => ({ patch: { id, setIfMissing } });
const patchUnset = (id, unset) => ({ patch: { id, unset: [].concat(unset) } });
const create = (doc) => ({ create: doc });

// The ONLY sanctioned full-document write: read existing, shallow-merge, tag as safe.
async function mergeReplace(dataset, partial) {
  if (!partial || !partial._id) throw new Error("[safe-mutate] mergeReplace needs a doc with _id");
  const existing = (await query(dataset, `*[_id=="${partial._id}"][0]`)) || {};
  const merged = { ...existing, ...partial }; // existing top-level fields preserved; nothing dropped
  return { createOrReplace: merged, __safe: true };
}

function assertSafe(mutations) {
  for (const m of mutations) {
    if (m.replace) throw new Error("[safe-mutate] `replace` drops omitted fields — use patchSet().");
    if (m.createOrReplace && !m.__safe) {
      throw new Error(
        "[safe-mutate] raw createOrReplace is blocked (it drops omitted fields). " +
          "Use patchSet() to update, create() for a new doc, or mergeReplace() for a read-merge full write."
      );
    }
  }
}

async function run(dataset, mutations, { returnIds = true } = {}) {
  assertSafe(mutations);
  const clean = mutations.map(({ __safe, ...m }) => m); // strip internal flag before sending
  return request("POST", `/${API}/data/mutate/${dataset}?returnIds=${returnIds}`, { mutations: clean });
}

module.exports = { query, patchSet, patchSetIfMissing, patchUnset, create, mergeReplace, run };
