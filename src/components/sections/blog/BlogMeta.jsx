import CalendarIcon from "@/components/icons/CalendarIcon";
import TimelineIcon from "@/components/icons/TimelineIcon";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/assets/icons/social/facebook-dark-icon.svg";
import InstagramIcon from "@/assets/icons/social/instagram-dark-icon.svg";
import LinkedinIcon from "@/assets/icons/social/linkedin-dark-icon.svg";
import { MotionEffect } from "@/components/effects/motion-effect";

const BlogMeta = ({ post }) => {
  return (
    <>
      <section className="px-[2rem] pt-[5rem] xl:px-[0rem] xl:pt-[28.6rem]">
        <div className="container flex flex-col items-start justify-between gap-[4rem] border-b border-[#E6E6E6] pb-[5rem] md:items-center xl:flex-row xl:pb-[5.6rem]">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.1}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-[2.4rem]">
              <div className="flex items-center gap-[1.6rem]">
                <div className="size-[5rem] overflow-hidden rounded-full md:size-[6.2rem]">
                  <Image
                    src={post.author.image.asset.url}
                    width={50}
                    height={50}
                    alt="Avatar Image"
                    className="size-full object-cover"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-start gap-[.6rem] text-left">
                  <h5 className="text-[2rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.4rem] md:leading-[2.4rem]">
                    {post.author.name}
                  </h5>

                  <span className="text-[1.6rem] leading-[1.6rem] font-normal tracking-normal text-[#625C70]">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <div className="hidden h-[6.2rem] w-[.1rem] bg-[#E6E6E6] md:block" />

              <div className="flex items-center gap-[1.6rem]">
                <div className="inline-flex size-[5rem] items-center justify-center overflow-hidden rounded-full bg-[#FF37B3] md:size-[6.2rem]">
                  <CalendarIcon width="20" height="23" />
                </div>

                <div className="flex flex-col items-start gap-[.6rem] text-left">
                  <h5 className="text-[2rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.4rem] md:leading-[2.4rem]">
                    Date
                  </h5>

                  <span className="text-[1.6rem] leading-[1.6rem] font-normal tracking-normal text-[#625C70]">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="hidden h-[6.2rem] w-[.1rem] bg-[#E6E6E6] md:block" />

              <div className="flex items-center gap-[1.6rem]">
                <div className="inline-flex size-[5rem] items-center justify-center overflow-hidden rounded-full bg-[#44B276] md:size-[6.2rem]">
                  <TimelineIcon height="23" width="23" color="#ffffff" />
                </div>

                <div className="flex flex-col items-start gap-[.6rem] text-left">
                  <h5 className="text-[2rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.4rem] md:leading-[2.4rem]">
                    Time
                  </h5>

                  <span className="text-[1.6rem] leading-[1.6rem] font-normal tracking-normal text-[#625C70]">
                    {post.readTime} Min Read
                  </span>
                </div>
              </div>
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.25}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <ul className="flex items-center gap-[8px]">
              <li>
                <Link
                  href="https://www.facebook.com/CPAgencyUK"
                  className="inline-flex size-[5rem] items-center justify-center rounded-full bg-black/15 md:size-[5.7rem]"
                >
                  <Image
                    src={FacebookIcon}
                    width={34}
                    height={34}
                    alt="Icon"
                    className="size-[2.5rem] md:size-[3.4rem]"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/cpagencyuk/"
                  className="inline-flex size-[5rem] items-center justify-center rounded-full bg-black/15 md:size-[5.7rem]"
                >
                  <Image
                    src={InstagramIcon}
                    width={34}
                    height={34}
                    alt="Icon"
                    className="size-[2.5rem] md:size-[3.4rem]"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/company/creativepixels/"
                  className="inline-flex size-[5rem] items-center justify-center rounded-full bg-black/15 md:size-[5.7rem]"
                >
                  <Image
                    src={LinkedinIcon}
                    width={34}
                    height={34}
                    alt="Icon"
                    className="size-[2.5rem] md:size-[3.4rem]"
                  />
                </Link>
              </li>
            </ul>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default BlogMeta;
