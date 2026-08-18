"use client";

import Carousel from "@/components/ui/Carousel";
import GlassFeatureCard from "./GlassFeatureCard";

const GlassFeatureCardSlider = ({ slideData }) => {
  return (
    <Carousel
      items={slideData}
      breakpoints={{
        767: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      slideClassName="!flex !h-auto !justify-center px-[1rem] pt-[.5rem] pb-[5rem]"
      renderItem={(item) => (
        <GlassFeatureCard
          icon={item.icon}
          color={item.color}
          shadow={item.shadow}
          description={item.description}
          title={item.title}
          link={item.link}
          linkText={item.linkText}
          number={item.number}
        />
      )}
    />
  );
};

export default GlassFeatureCardSlider;
