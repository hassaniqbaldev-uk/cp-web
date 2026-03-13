import MagnifyingGlassIcon from "@/assets/icons/ui/magnifying-glass-icon.svg";
import UxIcon from "@/assets/icons/ui/ux-icon.svg";
import ProgrammingIcon from "@/assets/icons/ui/programming-icon.svg";
import RocketIcon3 from "@/assets/icons/ui/rocket-icon-3.svg";
import BarChartIcon from "@/assets/icons/ui/bar-chart-icon.svg";
import MagnifyingGlassIcon2 from "@/assets/icons/ui/magnifying-glass-icon-2.svg";
import IdeaIcon from "@/assets/icons/ui/idea-icon.svg";
import DeveloperIcon from "@/assets/icons/ui/developer-icon.svg";
import DataCloudIcon from "@/assets/icons/ui/data-cloud-icon.svg";
import OnlineSupportIcon from "@/assets/icons/ui/online-support-icon.svg";
import Process2CardImg1 from "@/assets/images/cards/process-2-card-img-1.webp";
import Process2CardImg2 from "@/assets/images/cards/process-2-card-img-2.webp";
import Process2CardImg3 from "@/assets/images/cards/process-2-card-img-3.webp";
import Process2CardImg4 from "@/assets/images/cards/process-2-card-img-4.webp";
import Process2CardImg5 from "@/assets/images/cards/process-2-card-img-5.webp";

export const PROCESS_CARD = [
  {
    step: "1",
    title: "Discovery",
    description:
      "We dive deep into your business goals, audience, and competitors to build a solid strategy.",
    color: "#ED910C",
    boxShadow: "5px 5px 44px 0px #ED910CCC",
  },
  {
    step: "2",
    title: "Design",
    description:
      "We create high-fidelity prototypes and visual systems that align with your brand identity.",
    color: "#3078FF",
    boxShadow: "5px 5px 44px 0px #3078FFCC",
  },
  {
    step: "3",
    title: "Develop",
    description:
      "Our engineers build pixel-perfect, clean code that is fast, secure, and scalable.",
    color: "#FF37B3",
    boxShadow: "5px 5px 44px 0px #FF37B3CC",
  },
  {
    step: "4",
    title: "Launch & Grow",
    description:
      "We deploy your site and provide ongoing support, SEO, and optimisation to ensure growth.",
    color: "#7EE972",
    boxShadow: "5px 5px 44px 0px #44B276CC",
  },
];

export const PROCESS_2_CARD = [
  {
    step: "1",
    title: "Discovery & Strategy",
    subTitle: "We don't guess. We research.",
    description:
      "Before we design a single pixel, we dive deep into your business. We analyse your competitors, interview your stakeholders, & map out a digital strategy that aligns with your revenue goals.",
    list: [
      "Competitor Analysis",
      "Sitemap & Architecture",
      "User Personas",
      "Technical Scope",
    ],
    cardImage: Process2CardImg1,
    cardImageWidth: 474,
    cardImageHeight: 331,
    cardImageBg: "#FF37B30D",
    icon: MagnifyingGlassIcon,
    color: "#FF37B3",
    alignment: "end",
    textAlign: "right",
    flexDirection: "row-reverse",
  },
  {
    step: "2",
    title: "UX & Design",
    subTitle: "Form follows function.",
    description:
      "We create interactive wireframes to validate user flows, then apply a bespoke visual identity. No templates. Every screen is crafted to guide your users towards conversion.",
    list: [
      "Wireframes",
      "High-Fidelity UI",
      "Moodboards",
      "Interactive Prototype",
    ],
    cardImage: Process2CardImg2,
    cardImageWidth: 489,
    cardImageHeight: 326,
    cardImageBg: "#EE76210D",
    icon: UxIcon,
    color: "#EE7621",
    alignment: "start",
    textAlign: "left",
    flexDirection: "row",
  },
  {
    step: "3",
    title: "Development",
    subTitle: "Clean code. Fast performance.",
    description:
      "Our developers build your site using modern, scalable tech stacks. We focus on speed, security, and accessibility (WCAG 2.1) to ensure your site performs perfectly on every device.",
    list: [
      "Frontend Build",
      "Animations",
      "CMS Integration",
      "Performance Optimisation",
    ],
    cardImage: Process2CardImg3,
    cardImageWidth: 391,
    cardImageHeight: 366,
    cardImageBg: "#3078FF0D",
    icon: ProgrammingIcon,
    color: "#3078FF",
    alignment: "end",
    textAlign: "right",
    flexDirection: "row-reverse",
  },
  {
    step: "4",
    title: "Launch & Training",
    subTitle: "Handing over the keys.",
    description:
      "We handle the complex deployment process, DNS updates, and testing. Then, we record custom training videos so your team feels confident managing the new site.",
    list: [
      "QA Testing",
      "Training Library",
      "Live Deployment",
      "Source Code Handoff",
    ],
    cardImage: Process2CardImg4,
    cardImageWidth: 402,
    cardImageHeight: 364,
    cardImageBg: "#BF00B40D",
    icon: RocketIcon3,
    color: "#BF00B4",
    alignment: "start",
    textAlign: "left",
    flexDirection: "row",
  },
  {
    step: "5",
    title: "Growth & Optimisation",
    subTitle: "Launch is just day one.",
    description:
      "We monitor your site's performance post-launch. We use real user data to make iterative improvements, improving your conversion rate and SEO rankings month over month.",
    list: [
      "Security Patches",
      "Monthly Reporting",
      "Content Updates",
      "A/B Testing",
    ],
    cardImage: Process2CardImg5,
    cardImageWidth: 362,
    cardImageHeight: 353,
    cardImageBg: "#F14A580D",
    icon: BarChartIcon,
    color: "#F14A58",
    alignment: "end",
    textAlign: "right",
    flexDirection: "row-reverse",
  },
];

export const PROCESS_3_CARD = [
  {
    step: "1",
    icon: MagnifyingGlassIcon2,
    iconWidth: 35,
    iconHeight: 35,
    title: "Discovery and Fit",
    description:
      "We start by understanding your agency's processes, tools, and clients to ensure a seamless fit.",
    color: "#FF37B3",
    boxShadow: "5px 5px 44px 0px #FF37B32E",
  },
  {
    step: "2",
    icon: IdeaIcon,
    iconWidth: 35,
    iconHeight: 35,
    title: "Collaborative Planning",
    description:
      "We scope out projects together, setting clear milestones, timelines, and deliverables under your brand.",
    color: "#44B276",
    boxShadow: "5px 5px 44px 0px #44B2762E",
  },
  {
    step: "3",
    icon: DeveloperIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Design & Development",
    description:
      "Our team executes the work while communicating directly with you (or your client, if preferred).",
    color: "#3078FF",
    boxShadow: "5px 5px 44px 0px #3078FF2E",
  },
  {
    step: "4",
    icon: DataCloudIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Seamless Integration",
    description:
      "We hand over files, code, and assets in your preferred format, ready for you to present to the client.",
    color: "#ED910C",
    boxShadow: "5px 5px 44px 0px #ED910C2E",
  },
  {
    step: "5",
    icon: OnlineSupportIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Quality & Ongoing Support",
    description:
      "We hand over files, code, and assets in your preferred format, ready for you to present to the client.",
    color: "#F14A58",
    boxShadow: "5px 5px 44px 0px #F14A582E",
  },
];
