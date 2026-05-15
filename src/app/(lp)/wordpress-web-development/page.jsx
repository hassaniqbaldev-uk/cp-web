import LpAuditSection from "@/components/lp/LpAuditSection";
import LpCtaSection from "@/components/lp/LpCtaSection";
import LpEstablishedSection from "@/components/lp/LpEstablishedSection";
import LpFooter from "@/components/lp/LpFooter";
import LpHeader from "@/components/lp/LpHeader";
import LpHero from "@/components/lp/LpHero";
import LpProblemSection from "@/components/lp/LpProblemSection";
import LpProcessSection from "@/components/lp/LpProcessSection";
import LpResultSection from "@/components/lp/LpResultSection";
import LpServicesSection from "@/components/lp/LpServicesSection";
import LpTestimonialSection from "@/components/lp/LpTestimonialSection";
import LpWhySection from "@/components/lp/LpWhySection";
import Questions from "@/components/sections/questions/Questions";

export const metadata = {
  title: "WordPress Web Development | Get Your Free WordPress Audit",
  description:
    "CreativePixels offers WordPress web development services with custom builds, fast performance, SEO-ready setup & easy CMS control. Claim your free audit today.",
  alternates: {
    canonical: "/wordpress-web-development",
  },
};

export const questionsData = [
  {
    question: "How long does a WordPress project take?",
    answer:
      "A typical custom build takes 8-12 weeks from strategy to launch, depending on the complexity and scope of content.",
  },
  {
    question: "Will I be able to update content myself?",
    answer:
      "Absolutely. We build with the native WordPress block editor (Gutenberg), giving you full control over text, images, and layouts without needing to touch code.",
  },
  {
    question: "Is WordPress secure?",
    answer:
      "Yes, when built and maintained correctly. We implement enterprise-grade security practices including firewalls, regular updates, and secure hosting.",
  },
  {
    question: "Can you migrate my existing site to WordPress?",
    answer:
      "Yes, we specialize in migrations from other platforms (Wix, Squarespace, Drupal), ensuring your SEO rankings are preserved.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing maintenance and growth packages to keep your site secure, fast, and constantly improving.",
  },
  {
    question: "How do you handle plugin updates?",
    answer:
      "We test all updates on a staging environment first to ensure they don't break your site. Only then do we push them to the live site. This is part of our maintenance plan.",
  },
  {
    question: "Can you improve my Core Web Vitals?",
    answer:
      "Yes. We are performance experts. We optimize images, minify code, and configure caching to ensure you pass Google's Core Web Vitals assessment.",
  },
  {
    question: "Is WordPress good for enterprise?",
    answer:
      "Yes. Big brands like Sony, TechCrunch, and Time use WordPress. It scales incredibly well when architected correctly with the right hosting infrastructure..",
  },
  {
    question: "Do you build headless WordPress sites?",
    answer:
      "Yes. For maximum performance and security, we can build a 'Headless' site where WordPress manages content, but the frontend is built in React/Next.js.",
  },
];

const WordpressWebDevelopmentPage = () => {
  return (
    <>
      <LpHeader />
      <LpHero />
      <LpProblemSection />
      <LpWhySection />
      <LpProcessSection />
      <LpServicesSection />
      <LpEstablishedSection />
      <LpResultSection />
      <LpTestimonialSection />
      {/* <LpAuditSection /> */}
      <LpCtaSection />
      <Questions
        data={questionsData}
        title="Common Questions"
        description="Everything you need to know about WordPress."
      />
      <LpFooter />
    </>
  );
};

export default WordpressWebDevelopmentPage;
