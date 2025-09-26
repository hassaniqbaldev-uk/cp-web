import FbWhiteIcon from "@/assets/icons/facebook-white-icon.svg";
import IgWhiteIcon from "@/assets/icons/instagram-white-icon.svg";
import LinkedinWhiteIcon from "@/assets/icons/linkedin-white-icon.svg";
import ClickArrowYellow2Icon from "@/assets/icons/click-arrow-yellow-2.svg";
import ClickArrowPink from "@/assets/icons/click-arrow-pink.svg";
import ClickArrowGreen from "@/assets/icons/click-arrow-green.svg";
import UkFlag from "@/assets/icons/uk-flag.svg";

// Offer Services Dropdown Tab

export const offerServicesDropdownData = [
  {
    name: "Design & Branding",
    icon: ClickArrowYellow2Icon,
    columns: [
      {
        title: "Designing",
        links: [
          { label: "UI / UX Design", href: "/services" },
          { label: "Website Design", href: "/services" },
          { label: "Mobile App Design", href: "/services" },
          { label: "Landing Page Design", href: "/services" },
          { label: "Dashboards", href: "/services" },
        ],
      },
      {
        title: "Branding",
        links: [
          { label: "Logo Design", href: "/services" },
          { label: "Brand Guidelines", href: "/services" },
          { label: "Social Media Branding", href: "/services" },
          { label: "Infographics", href: "/services" },
          { label: "Business Cards", href: "/services" },
        ],
      },
    ],
    image: "/images/services-dropdown-tab-img-1.png",
  },
  {
    name: "Website Development",
    icon: ClickArrowPink,
    columns: [
      {
        title: "Web Design",
        links: [
          { label: "UI / UX Design", href: "/services" },
          { label: "Website Design", href: "/services" },
          { label: "Mobile App Design", href: "/services" },
          { label: "Landing Page Design", href: "/services" },
          { label: "Dashboards", href: "/services" },
        ],
      },
      {
        title: "SEO Optimization",
        links: [
          { label: "Logo ", href: "/services" },
          { label: "Brand Guidelines", href: "/services" },
          { label: "Social Media Branding", href: "/services" },
          { label: "Infographics", href: "/services" },
          { label: "Business ", href: "/services" },
        ],
      },
    ],
    image: "/images/services-dropdown-tab-img-1.png",
  },
  {
    name: "Maintenance and Growth",
    icon: ClickArrowGreen,
    columns: [
      {
        title: "Optimization",
        links: [
          { label: "UI / UX Design", href: "/services" },
          { label: "Website Design", href: "/services" },
          { label: "Mobile App", href: "/services" },
          { label: "Landing Page Design", href: "/services" },
          { label: "Dashboards", href: "/services" },
        ],
      },
      {
        title: "Branding",
        links: [
          { label: "Logo Design", href: "/services" },
          { label: "Brand Guidelines", href: "/services" },
          { label: "Social Media Branding", href: "/services" },
          { label: "Infographics", href: "/services" },
          { label: "Business Cards", href: "/services" },
        ],
      },
    ],
    image: "/images/services-dropdown-tab-img-1.png",
  },
];

// Logo Popups Data

export const logoPopupsData = [
  {
    logo: "/images/game-art-logo.png",
    popupImage: "/images/game-art-popup-img.png",
    href: "/case-studies/game-art-brain-studio",
  },
  {
    logo: "/images/new-compass-logo.png",
    popupImage: "/images/new-compass-popup-img.png",
    href: "/case-studies/new-compass",
  },
  {
    logo: "/images/ayoa-logo.png",
    popupImage: "/images/ayoa-popup-img.png",
    href: "/case-studies/ayoa",
  },
  {
    logo: "/images/casabolanica-logo.png",
    popupImage: "/images/casabolanica-popup-img.png",
    href: "/case-studies/casa",
  },

  {
    logo: "/images/ivy-logo.png",
    popupImage: "/images/ivy-popup-img.png",
    href: "/case-studies/ivy",
  },
  {
    logo: "/images/fultons-logo.png",
    popupImage: "/images/fultons-popup-img.png",
    href: "/case-studies/fultons",
  },
  {
    logo: "/images/lola-logo.png",
    popupImage: "/images/lola-popup-img.png",
    href: "/case-studies/lola",
  },
];

// Offer Services Data

export const offerServicesWebData = {
  columns: [
    {
      title: "CMS Solutions",
      links: [
        { label: "WooCommerce", href: "/services" },
        { label: "WordPress Development", href: "/services" },
        { label: "Mobile App Design", href: "/services" },
        { label: "Shopify", href: "/services" },
        { label: "Squarespace", href: "/services" },
      ],
    },
    {
      title: "Custom Solutions",
      links: [
        { label: "Wix", href: "/services" },
        { label: "Webflow", href: "/services" },
        { label: "Bricks Builder", href: "/services" },
        { label: "React", href: "/services" },
        { label: "Laravel", href: "/services" },
      ],
    },
  ],
};

export const offerServicesDesignData = {
  columns: [
    {
      title: "Designing",
      links: [
        { label: "UI / UX Design", href: "/services" },
        { label: "Website Design", href: "/services" },
        { label: "Mobile App Design", href: "/services" },
        { label: "Landing Page Design", href: "/services" },
        { label: "Dashboards", href: "/services" },
      ],
    },
    {
      title: "Branding",
      links: [
        { label: "Logo Design", href: "/services" },
        { label: "Brand Guidelines", href: "/services" },
        { label: "Social Media Branding", href: "/services" },
        { label: "Infographics", href: "/services" },
        { label: "Business Cards", href: "/services" },
      ],
    },
  ],
};

export const offerServicesMaintenanceData = {
  columns: [
    {
      title: "Fast & Quick",
      links: [
        { label: "Hosting", href: "/services" },
        { label: "Maintenance", href: "/services" },
        { label: "Security Audits", href: "/services" },
        { label: "Speed & Performance Reviews", href: "/services" },
      ],
    },
    {
      title: "Bugs Fixing",
      links: [
        { label: "Bug Fixing and Support", href: "/services" },
        { label: "General Wordpress Support", href: "/services" },
      ],
    },
  ],
};

// Case Studies Card Data

export const caseStudiesCardData = [
  {
    slug: "game-art-brain-studio",
    image: "/images/brain-studio-case-study.png",
    title: "Game Art Brain Studio - Specialized in stylized 2D & 3D Game art.",
    description:
      "Lorem ipsum dolor amet, consectetur adipiscing elit. Venenatis aliquet pulvinar. Nunc viverra faucibus diam.",
    tags: [
      {
        label: "United Kingdom",
      },
      { label: "2024" },
      { label: "Website Design" },
    ],
    technologies: [
      { src: "/images/figma-logo.png", alt: "Figma", width: 74, height: 22 },
      { src: "/images/notion-logo.png", alt: "Notion", width: 82, height: 23 },
      {
        src: "/images/wordpress-logo.png",
        alt: "WordPress",
      },
      {
        src: "/images/photoshop-logo.png",
        alt: "Photoshop",
      },
    ],
  },
  {
    slug: "ndifo-safari",
    image: "/images/ndifo-case-study.png",
    title: "NDifo Safari - The Authentic Tanzanian Safari Experience",
    description:
      "Lorem ipsum dolor amet, consectetur adipiscing elit. Venenatis aliquet pulvinar. Nunc viverra faucibus diam.",
    tags: [
      {
        label: "United Kingdom",
      },
      { label: "2024" },
      { label: "Website Design" },
    ],
    technologies: [
      { src: "/images/figma-logo.png", alt: "Figma", width: 74, height: 22 },
      { src: "/images/notion-logo.png", alt: "Notion", width: 82, height: 23 },
      {
        src: "/images/wordpress-logo.png",
        alt: "WordPress",
      },
      {
        src: "/images/photoshop-logo.png",
        alt: "Photoshop",
      },
    ],
  },
  {
    slug: "alert-force",
    image: "/images/alert-force-case-study.png",
    title:
      "AlertForce - Specialises in compliance training for work health and safety",
    description:
      "Lorem ipsum dolor amet, consectetur adipiscing elit. Venenatis aliquet pulvinar. Nunc viverra faucibus diam.",
    tags: [
      {
        label: "United Kingdom",
      },
      { label: "2024" },
      { label: "Website Design" },
    ],
    technologies: [
      { src: "/images/figma-logo.png", alt: "Figma", width: 74, height: 22 },
      { src: "/images/notion-logo.png", alt: "Notion", width: 82, height: 23 },
      {
        src: "/images/wordpress-logo.png",
        alt: "WordPress",
      },
      {
        src: "/images/photoshop-logo.png",
        alt: "Photoshop",
      },
    ],
  },
  {
    slug: "ntw-it-logsdail",
    image: "/images/ntw-case-study.png",
    title:
      "Ntw & It Logsdail - Spectacular Forestry services and keeping your home warm",
    description:
      "Lorem ipsum dolor amet, consectetur adipiscing elit. Venenatis aliquet pulvinar. Nunc viverra faucibus diam.",
    tags: [
      {
        label: "United Kingdom",
      },
      { label: "2024" },
      { label: "Website Design" },
    ],
    technologies: [
      { src: "/images/figma-logo.png", alt: "Figma", width: 74, height: 22 },
      { src: "/images/notion-logo.png", alt: "Notion", width: 82, height: 23 },
      {
        src: "/images/wordpress-logo.png",
        alt: "WordPress",
      },
      {
        src: "/images/photoshop-logo.png",
        alt: "Photoshop",
      },
    ],
  },
];

// Testimonials Card Data

export const testimonialsCardData = [
  {
    review:
      "Thank you, CreativePixels, for supporting the 2018 Halloween Ball. Your expertise on the programme and menu/pledge card was invaluable. Together, we raised over £478,000 to protect children in danger.",
    authorImage: "/images/testimonials-avatar-1.png",
    authorName: "Unicef UK",
    authorRole: "Special Events Coordinator, Unicef UK",
  },
  {
    review:
      "CreativePixels delivered a poster and ticket design under intense time pressure. They were responsive, creative, precise with complex logos, providing multiple concepts quickly, and excellent finished artwork within 48 hours.",
    authorImage: "/images/testimonials-avatar-2.png",
    authorName: "Herbert Smith Freehills LLP",
    authorRole: "Clare Huddlestone, Herbert Smith Freehills LLP",
  },
  {
    review:
      "CreativePixels perfectly merged English and Urdu logos, delivering an outstanding website.",
    authorImage: "/images/testimonials-avatar-3.png",
    authorName: "Manzar",
    authorRole: "Faisal Ahmed, Manzar",
  },
  {
    review:
      "CreativePixels did an outstanding job! I’m really glad I chose to work with them. They created our website quickly, accurately, and have continued to provide excellent updates and management. Every email and call I sent was handled with speed and professionalism, making the entire process smooth and stress-free. My new site is significantly faster and much easier to navigate compared to my old sluggish site. Additionally, it’s hosted on Creative Hosting, which has further improved performance and reliability. Overall, CreativePixels exceeded all expectations.",
    authorImage: "/images/testimonials-avatar-4.png",
    authorName: "Precise Print",
    authorRole: "Simon Hobbs, Precise Print",
  },
  {
    review:
      "We were blown away by CreativePixels’ work and service. They exceeded expectations, attended our training events, guided us on design, and their new logo and website have made a significant, positive impact on Drive UK.",
    authorImage: "/images/testimonials-avatar-5.png",
    authorName: "Drive UK",
    authorRole: "Mumtaz Khan, Drive UK",
  },
  {
    review:
      "CreativePixels designed the perfect logo for our new business, helping us promote ourselves across Birmingham and the West Midlands. It allowed us to start working immediately. Huge thanks to the CreativePixels team for their outstanding support.",
    authorImage: "/images/testimonials-avatar-6.png",
    authorName: "Excellence Car Specialists",
    authorRole: "Management, Excellence Car Specialists",
  },
  {
    review:
      "We believe every website and brand should work harder for the people behind it.Since 2014, Creative Pixels has delivered WordPress web design, creative branding, and ongoing support for businesses in the UK, US, and Australia – building digital experiences that are easy to use, simple to manage, and designed for lasting growth.",
    authorImage: "/images/testimonials-avatar-7.png",
    authorName: "Unltd Communications Team",
    authorRole: "Unltd Communications Team",
  },
];

export const testimonialsCardData2 = [
  {
    review:
      "Thank you, CreativePixels, for supporting the 2018 Halloween Ball. Your expertise on the programme and menu card was invaluable. Together, we raised over £478,000…",
    authorImage: "/images/testimonials-avatar-1.png",
    authorName: "Unicef UK",
    authorRole: "Special Events Coordinator, Unicef UK",
  },
  {
    review:
      "CreativePixels delivered a poster and ticket design under intense time pressure. They were responsive, creative, precise with complex logos, providing multiple concepts quickly, and excellent finished artwork…",
    authorImage: "/images/testimonials-avatar-2.png",
    authorName: "Herbert Smith Freehills LLP",
    authorRole: "Clare Huddlestone, Herbert Smith Freehills LLP",
  },
  {
    review:
      "CreativePixels perfectly merged English and Urdu logos, delivering an outstanding website. Their professionalism, speed, and design sense impressed us deeply, and we are excited to continue working with…",
    authorImage: "/images/testimonials-avatar-3.png",
    authorName: "Manzar",
    authorRole: "Faisal Ahmed, Manzar",
  },
  {
    review:
      "CreativePixels did an outstanding job! I’m really glad I chose to work with them. They created our website quickly, accurately, and have continued to provide excellent updates and management…",
    authorImage: "/images/testimonials-avatar-4.png",
    authorName: "Precise Print",
    authorRole: "Simon Hobbs, Precise Print",
  },
  {
    review:
      "We were blown away by CreativePixels’ work and service. They exceeded expectations, attended our training events, guided us on design, and their new logo and website…",
    authorImage: "/images/testimonials-avatar-5.png",
    authorName: "Drive UK",
    authorRole: "Mumtaz Khan, Drive UK",
  },
  {
    review:
      "CreativePixels designed the perfect logo for our new business, helping us promote ourselves across Birmingham and the West Midlands. It allowed us to start working immediately. Huge thanks…",
    authorImage: "/images/testimonials-avatar-6.png",
    authorName: "Excellence Car Specialists",
    authorRole: "Management, Excellence Car Specialists",
  },
  {
    review:
      "CreativePixels produced marketing materials and a complete website refresh for us under a very tight deadline and at short notice. They went above and beyond to deliver…",
    authorImage: "/images/testimonials-avatar-7.png",
    authorName: "Unltd Communications Team",
    authorRole: "Unltd Communications Team",
  },
];

// Footer Links Card Data

export const footerLinksCardData = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Design and Branding", href: "/services#design-branding" },
      { label: "Website Development", href: "/services#website-development" },
      { label: "Maintenance and Growth", href: "/services#maintenance-growth" },
      { label: "For Agencies", href: "/services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookies Policy", href: "/cookies-policy" },
    ],
  },
];

// Social Links

export const socialLinks = [
  {
    icon: FbWhiteIcon,
    href: "https://www.facebook.com/CPAgencyUK",
  },
  {
    icon: IgWhiteIcon,
    href: "https://www.instagram.com/cpagencyuk/",
  },
  {
    icon: LinkedinWhiteIcon,
    href: "https://www.linkedin.com/company/creativepixels/",
  },
];
