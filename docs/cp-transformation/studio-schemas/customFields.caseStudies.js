// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM FIELDS for the existing `caseStudies` DOCUMENT TYPE.
// Paste into the caseStudies type's `fields` array.
// Requires `decisionBlock` from ./objectTypes.js.
// ─────────────────────────────────────────────────────────────────────────────
import { defineField } from "sanity";

export const caseStudiesCustomFields = [
  defineField({
    name: "designation",
    title: "Designation",
    type: "string",
    description:
      "Controls the fallback ordering of \"relevant work\" across the site (tagged → flagship → supporting → newest). \"archive\" NEVER surfaces via the fallback (kept for the /case-studies hub only).",
    options: {
      list: [
        { title: "Flagship", value: "flagship" },
        { title: "Supporting", value: "supporting" },
        { title: "Archive", value: "archive" },
      ],
      layout: "radio",
    },
  }),
  defineField({
    name: "designDecisions",
    title: "Design decisions",
    type: "decisionBlock",
    description:
      "The \"Design decisions\" section on the detail page — the key design choices and why. Render-when-populated: shows only when filled.",
  }),
  defineField({
    name: "technicalDecisions",
    title: "Technical decisions",
    type: "decisionBlock",
    description:
      "The \"Technical decisions\" section on the detail page — the key technical/architecture choices and why. Render-when-populated: shows only when filled.",
  }),
];
