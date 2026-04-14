import ImacIcon from "@/assets/icons/ui/imac-icon.svg";
import PaintIcon from "@/assets/icons/ui/paint-icon.svg";
import UpsideIcon from "@/assets/icons/ui/upside-arrow-icon.svg";
import WordpressIcon from "@/assets/icons/ui/wordpress-icon.svg";
import LandingPageIcon from "@/assets/icons/ui/landing-page-icon.svg";
import WooCommerceIcon from "@/assets/icons/ui/woocommerce-icon.svg";
import SpeedSecurityIcon from "@/assets/icons/ui/speed-security-icon.svg";
import MaintenanceSupportIcon from "@/assets/icons/ui/maintenance-support-icon.svg";

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

export const LP_SERVICES_CARD = [
  {
    icon: WordpressIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Custom WordPress",
    description: "Custom WordPress Website Design focused on conversions",
    link: "/services/#design-build",
    linkText: "Explore Service",
    color: "#3078FF",
    boxShadow: "4px 12px 30px 0px #3078FF1C",
  },
  {
    icon: LandingPageIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Landing Page Design",
    description: "High-Converting Landing Pages for PPC campaigns",
    link: "/services/#design-build",
    linkText: "Explore Service",
    color: "#EE7621",
    boxShadow: "4px 12px 30px 0px #EE76211C",
  },
  {
    icon: WooCommerceIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "WooCommerce Integration",
    description: "WooCommerce Development for scalable sales",
    link: "/services/#growth-2",
    linkText: "Explore Service",
    color: "#FF37B3",
    boxShadow: "4px 12px 30px 0px #FF37B31C",
  },
  {
    icon: SpeedSecurityIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Speed & Security",
    description: "Speed Optimization to reduce bounce and improve performance",
    link: "/services/#growth-2",
    linkText: "Explore Service",
    color: "#44B276",
    boxShadow: "4px 12px 30px 0px #44B2761C",
  },
  {
    icon: MaintenanceSupportIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Maintenance & Support",
    description: "SEO Setup to support long-term growth",
    link: "/services/#growth-2",
    linkText: "Explore Service",
    color: "#BF00B4",
    boxShadow: "4px 12px 30px 0px #BF00B41C",
  },
];
