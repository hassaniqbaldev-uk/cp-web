import Image from "next/image";
import CalenderIcon from "@/assets/icons/ui/calender-icon.svg";
import TimelineIcon from "../icons/TimelineIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Link from "next/link";

const BlogCard = ({
  category,
  img,
  readTime,
  publishedDate,
  title,
  excerpt,
  link = "",
}) => {
  return (
    <>
      <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-white">
        <div className="relative flex h-[24rem] w-full xl:h-[33.6rem]">
          <span className="absolute top-[1.5rem] left-[1.5rem] inline-flex h-[2.8rem] items-center justify-center rounded-[20rem] bg-[#FF37B3] px-[1.2rem] text-center text-[1.1rem] leading-[2.4rem] font-bold tracking-normal text-white uppercase xl:text-[1.4rem]">
            {category}
          </span>

          <Image
            src={img}
            width={583}
            height={336}
            alt="Card Image"
            className="size-full object-cover"
            unoptimized
          />
        </div>

        <div className="pt-[2rem] pr-[2rem] pb-[2rem] pl-[2rem] xl:pt-[2.5rem] xl:pr-[4rem] xl:pb-[3.2rem] xl:pl-[2.5rem]">
          <div className="flex items-center gap-[2.4rem]">
            <div className="inline-flex items-center gap-[6px]">
              <i>
                <Image src={CalenderIcon} width={12} height={14} alt="Icon" />
              </i>
              <span className="text-[1.1rem] leading-[2.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.4rem]">
                {new Date(publishedDate).toLocaleDateString()}
              </span>
            </div>

            <div className="inline-flex items-center gap-[6px]">
              <i>
                <TimelineIcon color="#FF37B3" />
              </i>
              <span className="text-[1.1rem] leading-[2.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.4rem]">
                {readTime} MIN READ
              </span>
            </div>
          </div>

          <h4 className="mt-[8px] text-[2rem] font-semibold tracking-[-0.02em] text-[#312749] xl:text-[2.4rem]">
            {title}
          </h4>

          <p className="mt-[1.2rem] mb-[6.2rem] text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70] xl:text-[1.6rem] xl:leading-[2.6rem]">
            {excerpt}
          </p>
        </div>

        <Link
          href={link}
          style={{
            color: "#FF37B3",
          }}
          className="absolute bottom-[3.2rem] left-[2.5rem] inline-flex items-center gap-[.8rem] text-[1.4rem] leading-[1.4rem] font-semibold tracking-normal xl:text-[1.6rem]"
        >
          <span>Read Article</span>{" "}
          <i>
            <RightArrowIcon color="#FF37B3" />
          </i>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
