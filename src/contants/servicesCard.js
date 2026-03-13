import ImacIcon from "@/assets/icons/ui/imac-icon.svg";
import PaintIcon from "@/assets/icons/ui/paint-icon.svg";
import UpsideIcon from "@/assets/icons/ui/upside-arrow-icon.svg";

export const SERVICES_CARD = [
  {
    icon: ImacIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Websites & Platforms",
    description:
      "Custom websites built on WordPress, WooCommerce, Shopify, Webflow, and headless React.",
    listItem: [
      "WordPress & WooCommerce",
      "Shopify & Webflow",
      "Headless & React",
      "Platform Migrations",
    ],
    link: "/services/#design-build",
    linkText: "Explore Website Services",
    color: "#F14A58",
    boxShadow: "4px 12px 30px 0px #F14A581C",
  },
  {
    icon: PaintIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Branding & Identity",
    description:
      "Stand out with visual identities that resonate. Logos, brand guidelines, and design systems.",
    listItem: [
      "Logo Design",
      "Brand Guidelines",
      "Marketing Collateral",
      "UI/UX Design",
    ],
    link: "/services/#design-build",
    linkText: "Explore Branding Services",
    color: "#44B276",
    boxShadow: "4px 12px 30px 0px #44B2761C",
  },
  {
    icon: UpsideIcon,
    iconWidth: 28,
    iconHeight: 17,
    title: "Growth & Support",
    description:
      "Your website is never 'done.' We provide ongoing SEO, CRO, maintenance, and strategic growth.",
    listItem: [
      "SEO & Content Strategy",
      "Conversion Optimisation",
      "Maintenance & Support",
      "Analytics & Reporting",
    ],
    link: "/services/#growth-2",
    linkText: "Explore Growth Services",
    color: "#3078FF",
    boxShadow: "4px 12px 30px 0px #3078FF1C",
  },
];
