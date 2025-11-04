import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ourServicesCardData } from "@/constants/servicesPage";
import Link from "next/link";
import Image from "next/image";

const DraggableMarqueeSlider = () => {
  return (
    <Swiper
      className="mySwiper draggable-slider"
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      spaceBetween={15}
      loop={true}
      speed={3500}
      slidesPerView={"auto"}
      freeMode={true}
    >
      {ourServicesCardData.map((item, idx) => (
        <SwiperSlide key={idx} className="!flex !h-auto !w-auto !items-center">
          <Link
            href={item.href}
            className="group relative inline-block h-[22rem] w-[30rem] overflow-hidden rounded-[2rem] md:h-[32.6rem] md:w-[47rem]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority
              className="size-full transition-all duration-300 group-hover:scale-[1.05]"
              unoptimized
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DraggableMarqueeSlider;
