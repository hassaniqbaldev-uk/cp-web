// Free Website Audit — the two facts Hassan still owes, in ONE place.
//
// Both are written so the page reads correctly today (soft, non-committal phrasing that does not promise
// a specific number or name), and so dropping in the real value later is a one-line change here — nothing
// in the components needs editing.
//
// ─── FLAG 1 ──────────────────────────────────────────────────────────────────────────────────────────
// TURNAROUND. The current value repeats the phrasing already live in the hero ("a few working days"), so
// there is no regression, but it is a PLACEHOLDER. Replace with the real committed turnaround once decided
// (e.g. "2 working days", "48 hours"). If you set a hard number, also flip AUDIT_TURNAROUND_IS_COMMITTED
// to true so the copy can state it plainly instead of hedging.
export const AUDIT_TURNAROUND = "a few working days"; // TODO(hassan): confirm the real turnaround
export const AUDIT_TURNAROUND_IS_COMMITTED = false; // TODO(hassan): set true once the number is firm

// ─── FLAG 2 ──────────────────────────────────────────────────────────────────────────────────────────
// REVIEWER. Who actually records the audit. Left generic ("a senior specialist from our team") because no
// name has been confirmed. Set AUDIT_REVIEWER_NAME to the real person (e.g. "Hassan") to strengthen the
// "a person, not a plugin" argument with an actual name; the copy falls back to the generic phrase while
// it is null.
export const AUDIT_REVIEWER_NAME = null; // TODO(hassan): confirm who reviews the audit
export const AUDIT_REVIEWER = AUDIT_REVIEWER_NAME
  ? `${AUDIT_REVIEWER_NAME}, a senior specialist on our team,`
  : "A senior specialist from our team";

// ─── FLAG 3 ──────────────────────────────────────────────────────────────────────────────────────────
// AUDIT-SPECIFIC PROOF. There is no real quote from an audit recipient yet, so none is shown — the proof
// band uses only things that are true (a real person reviews it, the track record behind that person).
// When a genuine audit testimonial exists, add it here and it will render; until then it stays empty and
// NO placeholder/fake quote is displayed. Never invent one.
export const AUDIT_TESTIMONIAL = null; // TODO(hassan): add a real quote from someone who received an audit
// e.g. { quote: "…", name: "…", role: "…", company: "…" }
