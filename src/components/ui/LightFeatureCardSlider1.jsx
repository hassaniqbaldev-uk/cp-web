"use client";

import Carousel from "@/components/ui/Carousel";
import LightFeatureCard1 from "./LightFeatureCard1";

const LightFeatureCardSlider1 = ({ slideData }) => {
  return (
    <Carousel
      items={slideData}
      breakpoints={{
        767: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      slideClassName="!flex !h-auto !justify-center px-[1rem] pt-[.5rem] pb-[5rem]"
      renderItem={(item) => (
        <LightFeatureCard1
          icon={item.icon}
          color={item.color}
          description={item.description}
          title={item.title}
          link={item.link}
          linkText={item.linkText}
        />
      )}
    />
  );
};

export default LightFeatureCardSlider1;
