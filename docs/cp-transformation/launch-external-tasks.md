# Launch tasks that CANNOT be done from the codebase

One list of everything outside the repo — dashboards, DNS, cloud consoles — that must be actioned before
(or at) cutover. The code side is done for each of these; these are the settings that make it work in production.
Owner in **bold**. Nothing here has been changed (per the standing rules).

---

## 1. GTM container — Consent Mode configuration (**MTB / whoever owns GTM-B8FV6K69**)

**Why this matters:** the code now sends the correct Consent Mode v2 signals — default **denied** before GTM loads,
and an **update** to granted/denied when the visitor uses the banner. But *whether each tag obeys those signals* is
configured **inside the GTM container UI**, not in the repo. If this is skipped, the banner is cosmetic for any tag
that ignores consent.

**What to do in GTM (GTM-B8FV6K69), then Publish the container:**
1. **Turn on Consent Overview** (Admin → Container Settings → "Enable consent overview", the shield icon in Tags).
   It lists every tag and whether it has consent checks.
2. **Google tags (GA4 Configuration/Event, Google Ads, remarketing/Floodlight):** these have **built-in** consent
   checks and honour Consent Mode automatically — with `analytics_storage`/`ad_storage` denied they switch to
   cookieless pings. No per-tag change needed, but confirm each shows "Consent: built-in" in the overview.
3. **Any NON-Google tag** (custom HTML, Meta/Facebook pixel, LinkedIn Insight, Hotjar, etc. — audit the container):
   these do **NOT** respect Consent Mode on their own. For each, open **Tag → Advanced Settings → Consent Settings →
   "Require additional consent for tag to fire"** and require the appropriate type:
   - analytics/measurement pixels → require **`analytics_storage`**
   - advertising/remarketing pixels → require **`ad_storage`** (and typically `ad_user_data`, `ad_personalization`)
4. **Publish** the container. Consent config does nothing until the version is published.

**What happens if this is NOT done:**
- Google tags: still fine (they self-limit to cookieless when denied).
- **Non-Google tags: fire and set cookies / collect data regardless of the banner choice.** The visitor's "Reject"
  is ignored for those tags — a UK GDPR/PECR breach and the exact problem the consent layer was built to fix.

**How to verify (after publishing):** GTM Preview + GA4 DebugView. Load the site (banner unanswered → denied): GA4
events should arrive **without** a client id / cookies (cookieless). Click Accept: cookies (`_ga`) set and normal
hits resume. Click Reject: back to cookieless. Confirm no non-Google pixel sets cookies in the denied state
(DevTools → Application → Cookies).

---

## 2. Production email — SES identity, DNS, production access (**MTB**)

Full detail in `production-email-spec.md`. Summary of the out-of-repo actions:
- **SES (eu-west-2):** verify a **`cp.agency`** sending identity — recommend the subdomain **`mail.cp.agency`**
  (send as `website@mail.cp.agency`). Currently staging sends from `cpdev.uk`.
- **DNS (cp.agency):** DKIM (3× CNAME) + custom MAIL FROM (`mail.cp.agency` MX → `feedback-smtp.eu-west-2.amazonses.com`
  + SPF `include:amazonses.com`) + DMARC TXT at `_dmarc.cp.agency` (`p=none` to start).
- **SES production access:** confirm the account is out of the sandbox; request production access if not (otherwise
  the customer thank-you to arbitrary addresses fails).
- **Production SMTP credentials** created in SES, set in **Vercel Production env** (`SMTP_HOST/PORT/USER/PASSWORD`,
  `SMTP_FROM`, `LP_AUDIT_RECIPIENTS`).
- **Acceptance test:** re-submit all four forms against production and confirm each email lands **in inbox, not
  spam**, with DKIM=pass / SPF=pass in headers.

---

## 3. Vercel — production environment variables (**MTB / Hassan**)

At cutover, the Production scope needs the real values (staging currently holds them locally in `.env.local`):
- Sanity: `NEXT_PUBLIC_SANITY_PROJECT_ID=4m0eqoi1`, `NEXT_PUBLIC_SANITY_DATASET` (the production dataset name),
  `SANITY_API_READ_TOKEN` (a token scoped to the production dataset).
- Email: the SES production SMTP vars from §2.
- Analytics: confirm the GTM id (`GTM-B8FV6K69`) is the intended production container.

---

## 4. Sanity — content promotion at cutover (**Hassan / Claude at cutover**)

The whole transformation lives in the **`staging`** dataset. Going live means the **production** dataset serves the
new content. That is a data-promotion step (Sanity CLI/dashboard export→import, or repoint the prod env to the
approved dataset) — deliberately not touched now (rules: no production changes until cutover). Decide the mechanism
before cutover.

---

## 5. Sanity Studio — schema field definitions (**MTB / whoever owns the Studio repo**)

The Studio is a **separate project** from this frontend, so new field definitions must be added there. The
frontend already queries these and renders them **only when populated** (no empty sections):
- `caseStudies.designDecisions` — object `{ title: string, description: text, points: array of {label} }`
  ("Design decisions" section, CP-12).
- `caseStudies.technicalDecisions` — same shape ("Technical decisions" section, CP-12).
Full spec in `custom-fields-registry.md`. Until these exist in the Studio, the sections simply don't render.

## 6. DNS + Search Console at cutover (**MTB / Hassan**)

- **Domain/DNS:** point `creativepixels.agency` at the new deployment (Vercel) when ready.
- **Google Search Console:** verify the domain, submit `/sitemap.xml`, and watch coverage after the redirects go
  live (the CP-15 redirect map must be complete first — see "What's left").
- **Cookies policy content:** confirm `/legal/cookies-policy` accurately lists the cookies actually set once the GTM
  container is finalised (content task, but depends on §1).

---

_Everything above is a console/DNS/dashboard action. The corresponding code is already in place and verified on
`development` + `staging`._
