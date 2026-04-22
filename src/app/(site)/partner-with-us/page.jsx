export async function generateMetadata() {
  const title = "White Label Web Design Agency | Book Free Strategy Call";
  const description =
    "Scale your agency with white-label web design, branding and support from CreativePixels. Book a free 15-min call with Hassan & grow faster today online!";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/partner-with-us",
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image-compressed.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/og-image-assets/og-image-compressed.jpg"],
    },
  };
}

import Cta from "@/components/sections/cta/Cta";
import Growth from "@/components/sections/growth/Growth";
import PartnerWithUsHero from "@/components/sections/hero/PartnerWithUsHero";
import PartnerWithUs from "@/components/sections/partner-with-us/PartnerWithUs";
import Process3 from "@/components/sections/process/Process3";
import Questions from "@/components/sections/questions/Questions";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import WhatClientsSay from "@/components/sections/what-clients-say/WhatClientsSay";

export const questionsData = [
  {
    question: "Are you okay with signing NDAs?",
    answer:
      "Yes, absolutely. Most of our agency partnerships start with an NDA. We know how important confidentiality is when working under a white label arrangement, so we're happy to sign agreements that protect your clients, your processes, and your brand. You can be confident that any web design, WordPress development, or creative work we deliver will remain fully under your agency's name.",
  },
  {
    question: "What is your typical working process?",
    answer:
      "Our process always adapts to your workflow, but typically it follows five steps: discovery, wireframing and design, custom development, quality assurance, and launch. We integrate with your project management tools, keep communication streamlined, and provide clear milestones so you can update your clients with confidence.",
  },
  {
    question: "Do you only work with WordPress?",
    answer:
      "No. While WordPress is at the core of most of our agency partnerships, we also work with React, custom web applications, and front-end development. If your client needs something beyond WordPress, we're open to scoping and delivering it under your brand.",
  },
  {
    question:
      "Can you work directly with our clients using our own email addresses?",
    answer:
      "Yes. Many agencies ask us to work as part of their in-house team, which often means communicating with clients using the agency's email domain. We're comfortable doing this and it's a great way to create a seamless experience for your clients. Everything we do is structured around making your agency look stronger, not us.",
  },
  {
    question: "Can you help with agency growth strategy?",
    answer:
      "Yes. Beyond just delivering projects, we also support agencies with strategy. That could mean consulting on SEO, CRO, or site structure, advising on scalable workflows, or helping your agency pitch and win bigger projects with professional proposals and technical insights.",
  },
  {
    question: "How does post-completion maintenance work?",
    answer:
      "We provide one to two months of post-completion support as standard to make sure websites and projects run smoothly after launch. If you need longer-term maintenance, we can agree on a monthly support plan where we handle updates, bug fixes, and performance monitoring. Alternatively, we can hand over full documentation so your internal team can take it forward in-house.",
  },
  {
    question: "Do you work with agencies outside the UK?",
    answer:
      "Yes. While we're based in Manchester, we work with agencies across the UK, US, and Australia. We adjust our communication and availability to suit your time zone, and we already have experience delivering white label projects internationally.",
  },
];

const PartnerWithUsPage = () => {
  return (
    <>
      <PartnerWithUsHero />
      <Growth />
      <PartnerWithUs />
      <Process3 />
      <WhatClientsSay />
      <Questions
        linkText="Have More Questions?"
        link="/contact"
        data={questionsData}
      />
      <section className="overflow-hidden px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
    </>
  );
};

export default PartnerWithUsPage;
