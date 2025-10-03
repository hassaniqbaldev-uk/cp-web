import CloseEye from "@/assets/decorative-elements/close-eye";
import RatingStar from "@/assets/icons/rating-star.svg";
import LineStroke24 from "@/assets/decorative-elements/line-stroke-24.svg";
import LineStroke25 from "@/assets/decorative-elements/line-stroke-25.svg";

const ReviewSection = () => {
  return (
    <section
      className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[7rem]"
      style={{
        background:
          "linear-gradient(0deg, #070707, #070707),linear-gradient(119.9deg, #070707 1.18%, #212121 49.71%, #070707 100%)",
      }}
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke24 className="absolute top-[28rem] right-[-23.6rem] xl:top-[32.5rem]" />
      </div>

      <div className="absolute inset-0 z-[0]">
        <LineStroke25 className="absolute top-[-9.3rem] left-[-103.9rem]" />
      </div>

      <div className="mx-auto flex max-w-[120rem] flex-col items-center lg:flex-row">
        <div className="testimonials-card !z-[10] flex w-full flex-col items-center text-center md:w-[64.5rem] lg:items-start lg:text-left">
          <RatingStar />

          <h4 className="mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
            Imaginative vision. Outstanding Web Design.
          </h4>

          <p className="mt-[1.8rem] mb-[6.4rem] max-w-[49.8rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
            "From beginning to end, it was an incredible experience. Working
            with the entire team was enjoyable due to their creativity and
            expertise. <br /> <br /> They completely understood our goals as a
            studio with a very ambitious and distinctive website, from concept
            to design. We are quite happy with the outcome.”
          </p>

          <div className="flex items-center gap-[1.2rem] text-left">
            <div className="relative inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center overflow-hidden rounded-full bg-white">
              <i className="relative inline-flex items-center justify-center">
                <CloseEye className="h-[3rem] w-[4rem]" />
              </i>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
                Agency Owner, Managing Director
              </span>
              <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]">
                Award Winning Agency based in Cheshire
              </span>
            </div>
          </div>
        </div>

        <div className="testimonials-card h-[40rem] w-full !p-[2rem] md:h-[51.6rem] md:w-[57.5rem] lg:ml-[-2rem]">
          <div className="flex size-full items-center justify-center rounded-[2rem] bg-white">
            <i className="relative inline-flex items-center justify-center">
              <CloseEye className="h-[19.2rem] w-[20rem] md:w-[25.5rem]" />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
