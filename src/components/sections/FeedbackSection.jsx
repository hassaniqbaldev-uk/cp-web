import RatingStar from "@/assets/icons/rating-star.svg";
import Image from "next/image";
import LineStroke33 from "@/assets/decorative-elements/line-stroke-33.svg";

const FeedbackSection = () => {
  return (
    <section>
      <div
        style={{
          background:
            "linear-gradient(0deg, #070707, #070707),linear-gradient(119.9deg, #070707 1.18%, #212121 49.71%, #070707 100%)",
        }}
        className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[7rem]"
      >
        <div className="absolute inset-0 z-[0]">
          <LineStroke33 className="absolute right-[-45rem] bottom-[-6.8rem] w-full" />
        </div>

        <div className="mx-auto grid max-w-[122.3rem] grid-cols-1 items-center gap-[3.3rem] lg:grid-cols-2 xl:h-[56rem]">
          <div className="feedback-card h-full w-full p-[2rem] md:px-[3.5rem] md:py-[4.4rem]">
            <RatingStar />

            <h4 className="mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
              Imaginative vision. Outstanding Design.
            </h4>

            <p className="mt-[2rem] mb-[5rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
              "From beginning to end, it was an incredible experience. Working
              with the entire team was enjoyable due to their creativity and
              expertise. They completely understood our goals as a studio with a
              very ambitious and distinctive website, from concept to design. We
              are quite happy with the outcome.”
            </p>

            <div className="flex items-center gap-[1.2rem] text-left">
              <div className="relative h-[5.6rem] min-w-[5.6rem] overflow-hidden rounded-full">
                <Image
                  src="/images/feedback-avatar.png"
                  alt="Image"
                  width={56}
                  height={56}
                  className="size-full object-cover object-center"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
                  Jake Lin
                </span>
                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]">
                  Website & Branding Project
                </span>
              </div>
            </div>
          </div>

          <div className="feedback-card h-full w-full p-[2rem]">
            <Image
              src="/images/feedback-card-img.png"
              width={585}
              height={520}
              alt="IMage"
              className="size-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
