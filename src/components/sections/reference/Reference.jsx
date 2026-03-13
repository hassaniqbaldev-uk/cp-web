"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import CheckMarkIcon2 from "@/components/icons/CheckMarkIcon2";

export const referenceData = [
  {
    step: "1",
    title: "Data Protection",
    listItem: ["ICO Registered: ZA123456", "GDPR Compliant", "SSL Encrypted"],
  },
  {
    step: "2",
    title: "Company Details",
    listItem: [
      "CreativePixels Ltd",
      "Company No: 12345678",
      "VAT: GB 123 4567 89",
    ],
  },
  {
    step: "3",
    title: "Insurance",
    listItem: [
      "Professional Indemnity: £1M",
      "Public Liability: £2M",
      "Cyber Insurance: £500K",
    ],
  },
];

export const themeColors = {
  primary: {
    color: "#EE7621",
  },
  secondary: {
    color: "#FF37B3",
  },
  accent: {
    color: "#3078FF",
  },
};

export const themeColorList = Object.values(themeColors);

const Reference = () => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="relative z-[10] container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center gap-[6rem] text-center"
          >
            <motion.hr
              variants={itemVariants}
              className="hidden w-full border-t border-[#625c70]/20 md:block"
            />
            <motion.div variants={itemVariants} className="min-w-max">
              <SectionTitle text="Quick Reference" textColor="#312749" />
            </motion.div>
            <motion.hr
              variants={itemVariants}
              className="hidden w-full border-t border-[#625c70]/20 md:block"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-[5rem] hidden w-full grid-cols-3 gap-[3rem] xl:grid"
          >
            {referenceData.map((item, idx) => {
              const theme = getThemeColor(idx);

              return (
                <motion.div variants={itemVariants} key={idx}>
                  <div
                    style={{
                      background: theme.color,
                    }}
                    className="flex h-[29rem] w-full flex-col items-start justify-center rounded-[3rem] px-[3rem] text-left"
                  >
                    <div
                      style={{
                        boxShadow: "5px 5px 44px 0px #FFFFFFCC",
                        color: theme.color,
                      }}
                      className="inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] bg-white text-center text-[2.6rem] font-semibold tracking-normal"
                    >
                      0{item.step}
                    </div>

                    <h4 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                      {item.title}
                    </h4>

                    <ul className="flex flex-col gap-[.8rem]">
                      {item.listItem.map((item2, idx) => (
                        <li
                          key={idx}
                          className="inline-flex items-center gap-[1rem] text-[1.6rem] font-medium tracking-[2.4rem] tracking-normal text-white"
                        >
                          <CheckMarkIcon2 fillColor="#ffffff" /> {item2}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Responsive */}
          <div className="mt-[5rem] block w-full xl:hidden">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                767: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
              className="mySwiper"
            >
              {referenceData.map((item, idx) => {
                const theme = getThemeColor(idx);

                return (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
                  >
                    <div
                      style={{
                        background: theme.color,
                      }}
                      className="flex h-full w-full flex-col items-start justify-center rounded-[3rem] p-[2rem] text-left"
                    >
                      <div
                        style={{
                          boxShadow: "5px 5px 44px 0px #FFFFFFCC",
                          color: theme.color,
                        }}
                        className="inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] bg-white text-center text-[2.6rem] font-semibold tracking-normal"
                      >
                        0{item.step}
                      </div>

                      <h4 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                        {item.title}
                      </h4>

                      <ul className="flex flex-col gap-[.8rem]">
                        {item.listItem.map((item2, idx) => (
                          <li
                            key={idx}
                            className="inline-flex items-center gap-[1rem] text-[1.6rem] font-medium tracking-[2.4rem] tracking-normal text-white"
                          >
                            <CheckMarkIcon2 fillColor="#ffffff" /> {item2}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reference;
