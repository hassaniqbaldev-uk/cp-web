import { urlFor } from "@/sanity/legal.image";
import { LEGAL_DETAIL_QUERY } from "@/sanity/queries.legal";
import { legalClient } from "@/sanity/sanity.legal";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { cache } from "react";

const options = { next: { revalidate: 30 } };

const getLegal = cache(async (slug) => {
  return legalClient.fetch(LEGAL_DETAIL_QUERY, { slug }, options);
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const legal = await getLegal(slug);

  if (!legal) return {};

  const title = legal.seo?.metaTitle || legal.title;
  const description = legal.seo?.metaDescription || "";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: `https://creativepixels.agency/legal/${slug}`,
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

const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-[1.5rem]">{children}</p>,
    h5: ({ children }) => (
      <h5 className="text-[2.2rem] font-bold">{children}</h5>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-[1rem] list-disc pl-[2rem]">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-[1rem] list-decimal pl-[2rem]">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="underline hover:text-[#0073F8]"
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};

const LegalDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const legal = await getLegal(slug);

  if (!legal) {
    notFound();
  }

  const iconUrl = legal.icon?.asset
    ? urlFor(legal.icon)?.width(60)?.height(60)?.url()
    : null;

  return (
    <div className="px-[2rem] pt-[20rem] pb-[10rem] xl:px-[0rem]">
      <div className="container">
        {/* Back link */}
        <Link
          href="/legal"
          className="inline-flex items-center gap-[1rem] text-[1.6rem] font-medium tracking-normal text-[#312749]"
        >
          <ArrowLeft className="size-[2rem] text-[#312749]" />
          <span>Back to Legal Hub</span>
        </Link>

        {/* Header */}
        <div className="mt-[3rem] flex items-center gap-[3rem]">
          {iconUrl && (
            <div className="relative size-[6.3rem] min-w-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <Image
                  src={iconUrl}
                  alt={legal.title}
                  width={30}
                  height={30}
                  unoptimized
                />
              </div>
              <div
                className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                style={{ backgroundColor: legal.color }}
              />
            </div>
          )}

          <div>
            <h4 className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.9px] text-[#312749]">
              {legal.title}
            </h4>
            {legal.subtitle && (
              <span className="text-[1.6rem] leading-[2.4rem] text-[#312749]">
                {legal.subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* Intro */}
          {legal.introText && (
            <div>
              <PortableText
                value={legal.introText}
                components={portableTextComponents}
              />
            </div>
          )}

          {/* Sections */}
          {legal.sections?.map((section, index) => (
            <div key={index}>
              {section.sectionTitle && (
                <h5 className="text-[2.2rem] font-bold">
                  {section.sectionTitle}
                </h5>
              )}
              {section.content && (
                <PortableText
                  value={section.content}
                  components={portableTextComponents}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalDetailPage;
