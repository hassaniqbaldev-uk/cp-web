import { FAQ_CARD } from "./faqCard";

export const SITE_URL = "https://creativepixels.agency";

// Stable @id so other pages can reference the same entity instead of
// redefining it (e.g. "publisher": { "@id": ORGANIZATION_ID } on blog posts).
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "CreativePixels",
  alternateName: "CreativePixels Agency",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 171,
    height: 65,
  },
  image: `${SITE_URL}/logo.svg`,
  description:
    "CreativePixels is a Manchester-based web design and digital marketing agency specialising in custom website design, AI-assisted web development, WordPress development, SEO, branding, PPC and digital growth services for businesses across the United Kingdom.",
  email: "hello@cp.agency",
  telephone: "+441618202667",
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "Hassan Iqbal",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bartle House, Oxford Court",
    addressLocality: "Manchester",
    postalCode: "M2 3WQ",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  knowsAbout: [
    "Custom Website Design",
    "Web Design",
    "Web Development",
    "AI Web Development",
    "WordPress Development",
    "Search Engine Optimisation",
    "Technical SEO",
    "Local SEO",
    "Ecommerce SEO",
    "Brand Identity",
    "Branding",
    "Google Ads",
    "Pay Per Click",
    "Content Marketing",
    "Conversion Rate Optimisation",
    "Responsive Web Design",
    "UX Design",
    "UI Design",
  ],
  sameAs: [
    "https://www.linkedin.com/company/creativepixels/",
    "https://www.facebook.com/CPAgencyUK",
    "https://www.instagram.com/cpagencyuk/",
  ],
};

// Built from the same source as the visible accordion — Google requires the
// markup to match the on-page content.
export const faqSchema = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQ_CARD.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, faqSchema],
};
