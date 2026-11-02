"use client";

import { Container } from "../ui/Container";
import Section from "../ui/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const objections = [
  {
    id: "redo",
    question: "I’ll end up redoing it.",
    answer:
      "You check every stage before sign-off. Then it’s covered by our 3-month guarantee.",
  },
  {
    id: "paid",
    question: "What if it goes wrong and I’ve already paid?",
    answer:
      "Work is split into milestones. You only pay for stages you’ve signed off.",
  },
  {
    id: "clients",
    question: "They’ll go after my clients.",
    answer: "We never contact your clients. NDA signed before we start.",
  },
  {
    id: "steady",
    question: "I don’t have steady work for someone.",
    answer: "No minimums, no retainer. Send a job when you have one.",
  },
  {
    id: "chasing",
    question: "I’ll be chasing updates.",
    answer:
      "You check every stage before sign-off. Then it’s covered by our 3-month guarantee.",
  },
  {
    id: "good",
    question: "How do I know you’re any good?",
    answer: "Start with one small job, and ask us for agency references.",
  },
];

const ObjectionCard = ({ question, answer }) => (
  <div className="h-full rounded-[20px] bg-white p-[35px] max-bf-sm:p-[25px]">
    <h3 className="text-[22px] font-bold tracking-[-0.02em] text-black max-bf-sm:text-[18px]">
      “{question}”
    </h3>

    <p className="max-bf-sm:text-text-body mt-[20px] text-[18px] tracking-[-0.02em] text-black max-bf-sm:mt-[12px] max-bf-sm:text-[14px]">
      {answer}
    </p>
  </div>
);

const BlackFridayObjections = () => {
  return (
    <Section
      id="black-friday-objections"
      className="bg-[#FAF3E8] py-[120px] max-bf-xl:py-[60px]"
    >
      <Container className="max-bf-xl:px-[40px] max-bf-sm:pr-0 max-bf-sm:pl-[20px]">
        <h2 className="text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black max-bf-lg:text-[40px] max-bf-lg:leading-[45px] max-bf-sm:mx-auto max-bf-sm:max-w-[270px] max-bf-sm:text-[28px] max-bf-sm:leading-[32px]">
          Worried about handing work over?
          <br />
          <span className="text-black/40">So were most of our partners.</span>
        </h2>

        <div className="mt-[60px] grid grid-cols-3 gap-[33px] max-bf-xl:hidden">
          {objections.map(({ id, question, answer }) => (
            <ObjectionCard key={id} question={question} answer={answer} />
          ))}
        </div>

        <div className="hidden max-bf-xl:mt-[40px] max-bf-xl:block max-bf-sm:mt-[30px]">
          <Swiper
            modules={[Pagination]}
            slidesPerView="auto"
            spaceBetween={16}
            slidesOffsetAfter={20}
            breakpoints={{
              480: { slidesPerView: 2, slidesOffsetAfter: 0 },
              1024: { slidesPerView: 3, slidesOffsetAfter: 0 },
            }}
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#1A1A1A",
              "--swiper-pagination-bullet-inactive-color": "#1A1A1A",
              "--swiper-pagination-bullet-inactive-opacity": "0.2",
            }}
            className="pb-[40px]!"
          >
            {objections.map(({ id, question, answer }) => (
              <SwiperSlide key={id} className="h-auto! max-bf-sm:w-[82%]!">
                <ObjectionCard question={question} answer={answer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayObjections;
