import Image from "next/image";
import TiltArrowIcon from "../icons/TiltArrowIcon";
import Link from "next/link";

const CaseStudyCard = ({
  href = "",
  img,
  title,
  excerpt,
  iconColor = "#ffffff",
  iconBg = "#000000",
}) => {
  return (
    <>
      <Link href={href} className="flex w-full flex-col gap-[2.7rem]">
        <div className="flex h-[28.9rem] w-full overflow-hidden rounded-[1.1rem]">
          <Image
            src={img}
            alt="Card Image"
            width={429}
            height={289}
            className="object-cover object-center"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start text-left">
            <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
              {title}
            </h4>

            <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
              {excerpt}
            </span>
          </div>

          <i
            className="inline-flex size-[6rem] items-center justify-center rounded-full"
            style={{
              background: iconBg,
            }}
          >
            <TiltArrowIcon color={iconColor} />
          </i>
        </div>
      </Link>
    </>
  );
};

export default CaseStudyCard;
