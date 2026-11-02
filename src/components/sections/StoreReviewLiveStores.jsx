"use client";

import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";

// Live stores. Thumbnails already include the device + coloured panel; we
// overlay the platform badge + URL pill on the active card.
// NOTE: domains known from live URLs are filled in; the others (case-study
// links) need the real store URL — left null for now so no wrong URL shows.
const stores = [
  {
    id: "ivy-duke",
    image: "/images/black-friday/ivy-duke-thumbnail.jpg",
    title: "Ivy & Duke",
    platform: "WooCommerce",
    href: "https://ivyandduke.co.uk/",
    domain: "ivyandduke.co.uk",
  },
  {
    id: "lola-blake",
    image: "/images/black-friday/lola-thumbnail.jpg",
    title: "Lola & Blake",
    platform: "WooCommerce",
    href: "https://lolaandblake.co.uk/",
    domain: "lolaandblake.co.uk",
  },
  {
    id: "fultons",
    image: "/images/black-friday/fultons-thumbnail.jpg",
    title: "Fultons Jewellery",
    platform: "WooCommerce",
    href: "https://creativepixels.agency/case-studies/fultons",
    domain: null, // TODO: real store URL
  },
  {
    id: "smokey-carter",
    image: "/images/black-friday/smokey-carter-thumbnail.jpg",
    title: "The Smokey Carter",
    platform: "WooCommerce",
    href: "https://creativepixels.agency/case-studies/the-smokey-carter",
    domain: null, // TODO: real store URL
  },
  {
    id: "minessak",
    image: "/images/black-friday/minessak-thumbnail.jpg",
    title: "Minessak",
    platform: "Shopify",
    href: "https://creativepixels.agency/case-studies/minnessak",
    domain: null, // TODO: real store URL
  },
];

const platformBadge = {
  WooCommerce: "/icons/woocommerce-icon-color.svg",
  Shopify: "/icons/woocommerce-icon-color.svg", // TODO: add a Shopify brand icon
};

const StoreCard = ({ image, title, platform, href, domain }) => (
  <div className="store-card relative">
    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
      <Image
        src={image}
        alt={`${title} store, built by CreativePixels`}
        fill
        sizes="(max-width: 1280px) 88vw, 720px"
        className="object-cover"
        unoptimized
      />
    </div>

    {/* Overlay: platform badge + info pill. Shown only on the active (centre)
        card — hidden on the small side cards (see .store-overlay CSS). */}
    <div className="store-overlay pointer-events-none absolute inset-0">
      {platformBadge[platform] && (
        <span className="max-bf-sm:size-[40px] absolute top-[15px] right-[15px] flex size-[68px] items-center justify-center rounded-full bg-white">
          <Image
            src={platformBadge[platform]}
            alt={platform}
            width={30}
            height={30}
            className="max-bf-sm:size-[20px] size-[30px]"
          />
        </span>
      )}

      <div className="max-bf-sm:px-[18px] max-bf-sm:py-[12px] absolute inset-x-[20px] bottom-[20px] flex items-center justify-between gap-[16px] rounded-full bg-white px-[28px] py-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div className="max-bf-sm:gap-[10px] flex items-center gap-[16px]">
          <span className="max-bf-sm:text-[14px] text-[18px] font-bold tracking-[-0.02em] text-black">
            {title}
          </span>

          <span className="h-[18px] w-px bg-black/15" />

          <span className="text-text-body max-bf-sm:hidden text-[15px] tracking-[-0.02em]">
            Built on {platform}
          </span>
        </div>

        {domain && (
          <Link
            href={href}
            target="_blank"
            className="max-bf-sm:gap-[6px] pointer-events-auto flex items-center gap-[8px]"
          >
            <span className="flex size-[20px] items-center justify-center rounded-full bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)]">
              <Globe size={14} strokeWidth={2.2} className="text-white" />
            </span>

            <span className="max-bf-sm:text-[13px] text-[15px] font-semibold tracking-[-0.02em] text-black">
              {domain}
            </span>
          </Link>
        )}
      </div>
    </div>
  </div>
);

const StoreReviewLiveStores = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <Section
      id="live-stores"
      className="max-bf-sm:py-[60px] overflow-hidden bg-white py-[100px]"
    >
      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <p className="max-bf-sm:text-[13px] text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
          Real stores, built by us
        </p>

        <h2 className="max-bf-sm:text-[30px] max-bf-sm:leading-[34px] mt-[14px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black">
          Live stores we’ve
          <br />
          <span className="text-black/40">designed and built.</span>
        </h2>
      </Container>

      <div className="max-bf-sm:mt-[30px] mt-[60px]">
        <div className="relative">
          <Swiper
            onSwiper={setSwiper}
            modules={[Autoplay]}
            loop
            centeredSlides
            slidesPerView="auto"
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="live-stores-swiper !overflow-visible"
          >
            {stores.map((store) => (
              <SwiperSlide key={store.id} className="w-[720px]! max-w-[88vw]!">
                <StoreCard {...store} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Edge fades so the side cards dissolve into the background */}
          <div className="max-bf-sm:w-[60px] pointer-events-none absolute inset-y-0 left-0 z-10 w-[200px] bg-[linear-gradient(to_right,#fff_15%,transparent)]" />
          <div className="max-bf-sm:w-[60px] pointer-events-none absolute inset-y-0 right-0 z-10 w-[200px] bg-[linear-gradient(to_left,#fff_15%,transparent)]" />
        </div>
      </div>
    </Section>
  );
};

export default StoreReviewLiveStores;
