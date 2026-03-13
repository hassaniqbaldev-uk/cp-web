export async function generateMetadata() {
  const title = "White Label for Agencies";
  const description =
    "CreativePixels offers white label web design and development for agencies. Scale your output without hiring — we work under your brand.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/agencies",
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image.jpg",
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
      images: ["/images/og-image-assets/og-image.jpg"],
    },
  };
}

import ClientReview from "@/components/sections/client-review/ClientReview";
import Difference from "@/components/sections/difference/Difference";
import AgenciesHero from "@/components/sections/hero/AgenciesHero";
import Message from "@/components/sections/message/Message";
import Process4 from "@/components/sections/process/Process4";
import Questions from "@/components/sections/questions/Questions";

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
  {
    question: "Is there any limit to white labelling?",
    answer:
      "No. Our white label service covers design, development, and ongoing support. We can be as involved as you need, whether that's delivering a single WordPress build or providing long-term monthly retainers for multiple projects. The only limit we set is that we prefer ongoing collaboration rather than small one-off tasks, as it allows us to work more effectively with your agency.",
  },
  {
    question: "How quickly can you start on a new project?",
    answer:
      "Timelines vary depending on scope, but we can usually begin within a week of signing an agreement. For ongoing agency partners, we often start even faster since we're already embedded in their workflows. If you have urgent needs, we can also provide rush delivery when required.",
  },
  {
    question: "Do you offer monthly design services?",
    answer:
      "Yes. We can set up a recurring monthly design package that gives your agency access to our designers for a set number of hours each month. This can include Figma wireframes, UI/UX updates, or marketing assets such as banners and campaign graphics. A monthly arrangement gives you predictable support and priority turnaround times.",
  },
  {
    question: "What kind of agencies do you usually partner with?",
    answer:
      "We work with small to mid-sized agencies that want to scale without hiring full-time staff. Some focus purely on design and need development support, while others handle strategy but need help with execution. Our flexibility means we fit into whatever gap your team has.",
  },
];

const AgenciesPage = () => {
  return (
    <>
      <AgenciesHero />
      <Message />
      <Difference />
      <Process4 />
      <ClientReview />
      <div className="bg-[#ED910C0D]">
        <Questions data={questionsData} />
      </div>
    </>
  );
};

export default AgenciesPage;
