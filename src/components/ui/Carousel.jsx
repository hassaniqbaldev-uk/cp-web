"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CarouselAutoplayControl from "@/components/ui/CarouselAutoplayControl";

/*
  Shared carousel primitive (Step 3). Replaces the ~30 near-identical Swiper
  wrappers. It emits the SAME DOM/classes as the hand-written sliders (a
  `<Swiper className="mySwiper">` with `<SwiperSlide>` children), so migrating a
  slider to it is behaviour- and layout-preserving.

  It absorbs three accessibility behaviours by DEFAULT so every autoplay carousel
  inherits them without per-slider work:
    1. the pause/play control (rendered automatically at slot="container-end"),
    2. prefers-reduced-motion handling (owned by CarouselAutoplayControl),
    3. the visually-hidden-until-focus treatment (owned by CarouselAutoplayControl).
  The control is only rendered when autoplay is enabled — a non-autoplay carousel
  (e.g. Testimonials2) has nothing to pause, so no control appears.

  Slides come from `items` + `renderItem`. Raw `<SwiperSlide>` children are also
  accepted for callers with bespoke slide structures. Any Swiper prop not modelled
  here can be passed through `swiperProps` (e.g. `effect`, `centeredSlides`,
  `effect`-module via `extraModules`).
*/
const Carousel = ({
  items = [],
  renderItem,
  children,
  slideClassName = "",
  className = "mySwiper",
  slidesPerView = 1,
  spaceBetween = 0,
  breakpoints,
  loop = true,
  autoplay = { delay: 2500, disableOnInteraction: false },
  pagination = { clickable: true },
  navigation = false,
  extraModules = [],
  swiperProps = {},
}) => {
  const modules = [
    ...(autoplay ? [Autoplay] : []),
    ...(pagination ? [Pagination] : []),
    ...(navigation ? [Navigation] : []),
    ...extraModules,
  ];

  const resolveSlideClass = (item, idx) =>
    typeof slideClassName === "function" ? slideClassName(item, idx) : slideClassName;

  return (
    <Swiper
      className={className}
      modules={modules}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      {...(breakpoints ? { breakpoints } : {})}
      {...(autoplay ? { autoplay } : {})}
      {...(pagination ? { pagination } : {})}
      {...(navigation ? { navigation } : {})}
      {...swiperProps}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx} className={resolveSlideClass(item, idx)}>
          {renderItem ? renderItem(item, idx) : null}
        </SwiperSlide>
      ))}
      {children}
      {autoplay ? <CarouselAutoplayControl slot="container-end" /> : null}
    </Swiper>
  );
};

export default Carousel;
