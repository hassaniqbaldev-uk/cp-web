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

// The delivery method for EVERY project, not just websites. Whether the work is a
// brand, a website or store, a growth retainer or an automation, it runs through the
// same five stages; what changes is what happens inside each one. Stage 5 names the
// launch -> improve -> grow -> automate arc, so it closes the loop with the homepage
// Lifecycle section that links here. Copy rewritten; structure, images, colours and
// layout props are unchanged.
export const PROCESS_2_CARD = [
  {
    step: "1",
    title: "Discovery & scope",
    subTitle: "We understand the business before we quote.",
    description:
      "Every project starts the same way, whether it is a website, a rebrand, a growth retainer or an automation. We learn how your business works, what you are trying to achieve and what a good outcome looks like, then agree a clear scope and a fixed price before any work begins. No open-ended hourly billing.",
    list: [
      "Scope document",
      "Fixed price",
      "Timeline",
      "One point of contact",
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
    title: "Plan & design",
    subTitle: "You sign off the shape of the work first.",
    description:
      "What this stage looks like depends on the work. For a website it is structure and interface design; for a brand it is identity and messaging; for growth it is the channel plan; for automation it is mapping the process we are going to take off your team. You see and approve the plan before we commit to building anything.",
    list: [
      "Wireframes or identity",
      "Channel or process map",
      "A sign-off stage",
      "No surprises later",
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
    title: "Build & deliver",
    subTitle: "Senior people do the actual work.",
    description:
      "This is the build. Sites and stores are developed and tested, brands are produced and rolled out, campaigns go live, automations are built and connected to your tools. The same senior people who scoped the project deliver it, and you get regular updates rather than silence until the end.",
    list: [
      "Regular updates",
      "Senior delivery",
      "Tested as we go",
      "Connected to your tools",
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
    title: "Launch & handover",
    subTitle: "Live, tested, and yours to run.",
    description:
      "We handle the parts that go wrong when they are rushed: deployment, DNS, quality checks across devices, and a proper handover. Where it helps, we record short training videos so your team can manage what we have built without depending on us for every small change.",
    list: [
      "Checks across devices",
      "Clean deployment",
      "Training videos",
      "Full handover",
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
    title: "Support & grow",
    subTitle: "Where launch, improve, grow and automate come in.",
    description:
      "Launch is the start, not the end. This is where the four parts of what we do work together over time. We improve the experience, grow traffic and revenue through search and paid media, and automate the repetitive work so growing does not mean more headcount. You keep the same team throughout.",
    list: [
      "Ongoing support",
      "Search & paid media",
      "Conversion work",
      "Automation",
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
      "We test everything before handover, then offer ongoing support and maintenance so your client's project keeps running smoothly after launch.",
    color: "#F14A58",
    boxShadow: "5px 5px 44px 0px #F14A582E",
  },
];

export const LP_PROCESS_CARD = [
  {
    step: "1",
    title: "Tell Us What You Need",
    description:
      "Fill in the form or give us a call. No tech knowledge required  just tell us what's wrong or what you're trying to achieve.",
    color: "#ED910C",
    boxShadow: "5px 5px 44px 0px #ED910CCC",
  },
  {
    step: "2",
    title: "We Diagnose & Plan",
    description:
      "We review your site, identify exactly what's holding it back, and send you a clear plan with an honest, no-surprise quote.",
    color: "#3078FF",
    boxShadow: "5px 5px 44px 0px #3078FFCC",
  },
  {
    step: "3",
    title: "We Get to Work",
    description:
      "Most fixes are done in 24–72 hours. New builds launch in 2–4 weeks. You'll be updated every step of the way.",
    color: "#BF00B4",
    boxShadow: "5px 5px 44px 0px #BF00B4CC",
  },
  {
    step: "4",
    title: "You Get a Site That Actually Works",
    description:
      "Fast, secure, and easy to manage and we'll walk you through everything before we hand it over.",
    color: "#44B276",
    boxShadow: "5px 5px 44px 0px #44B276CC",
  },
];
