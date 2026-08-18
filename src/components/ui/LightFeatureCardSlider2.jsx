"use client";

import Carousel from "@/components/ui/Carousel";
import LightFeatureCard2 from "./LightFeatureCard2";

const LightFeatureCardSlider2 = ({ slideData }) => {
  return (
    <Carousel
      items={slideData}
      breakpoints={{
        767: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      slideClassName="!flex !h-auto !justify-center px-[1rem] pt-[.5rem] pb-[5rem]"
      renderItem={(item) => (
        <LightFeatureCard2
          title={item.title}
          description={item.description}
          color={item.color}
          link={item.link}
          linkText={item.linkText}
          points={item.listItem}
          icon={item.icon}
        />
      )}
    />
  );
};

export default LightFeatureCardSlider2;
