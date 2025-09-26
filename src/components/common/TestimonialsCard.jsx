import Image from "next/image";
import RatingStar from "@/assets/icons/rating-star.svg";

const TestimonialsCard = ({ review, authorImage, authorName, authorRole }) => {
  return (
    <div className="testimonials-card flex h-full flex-col items-center text-center lg:items-start lg:text-left">
      <div className="relative h-[2.042rem] w-[11.379rem]">
        <RatingStar />
      </div>

      {/* Review Text */}
      <p className="mt-[1.958rem] mb-[4.042rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
        {review}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-[1.2rem] text-left">
        <div className="relative h-[5.6rem] min-w-[5.6rem] overflow-hidden rounded-full">
          <Image
            src={authorImage}
            alt={authorName}
            width={56}
            height={56}
            className="size-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
            {authorName}
          </span>
          <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]">
            {authorRole}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
