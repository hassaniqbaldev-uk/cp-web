import Image from "next/image";
import Link from "next/link";

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <>
      <Link
        href={`/case-studies/${caseStudy.Slug}`}
        className="case-study-card flex w-full items-center justify-between gap-[4rem] p-[4rem]"
        style={{ boxShadow: "0px 4px 24px 0px #1A1A1A33" }}
      >
        <div
          className="relative block h-[34.6rem] w-[48.8rem] overflow-hidden rounded-[1.4rem]"
          style={{ boxShadow: "0px 4px 24px 0px #1A1A1A80" }}
        >
          <Image
            src={`${caseStudy.ThumbnailImage.url}`}
            fill
            priority
            className="size-full object-cover"
            alt={`${caseStudy.ThumbnailImage.alternativeText}`}
            unoptimized
          />
        </div>

        <div className="flex w-[55.9rem] flex-col items-center gap-[1.8rem] text-center lg:items-start lg:text-left">
          <ul className="flex flex-wrap gap-[1rem]">
            {caseStudy.Tags.map((tag) => (
              <li
                key={tag.id}
                className="bg-text-primary inline-flex h-[4rem] items-center justify-center gap-[.8rem] rounded-[4px] px-[1.2rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase"
              >
                <span>{tag.Tag}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-text-primary line-clamp-1 overflow-hidden text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
            {caseStudy.Title}
          </h3>

          <p className="text-text-primary line-clamp-3 overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal">
            {caseStudy.ShortDescription}
          </p>

          <div className="flex w-full flex-col gap-[1.8rem]">
            <span className="text-text-primary/60 text-[1.6rem] leading-[2.4rem] font-medium uppercase">
              TECHNOLOGY USED
            </span>

            <ul className="flex w-full flex-wrap items-center justify-center gap-[3.3rem] border-y border-[#424242]/50 py-[1.8rem] md:flex-row lg:justify-start">
              {caseStudy.Technologies.map((tech) => (
                <li key={tech.id} className="h-[2.2rem]">
                  <img
                    src={`${tech.Technology.url}`}
                    alt={`${tech.Technology.alternativeText}`}
                    className="size-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CaseStudyCard;
