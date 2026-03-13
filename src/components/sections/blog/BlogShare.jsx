"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FacebookIcon from "@/assets/icons/social/facebook-dark-icon.svg";
import InstagramIcon from "@/assets/icons/social/instagram-dark-icon.svg";
import LinkedinIcon from "@/assets/icons/social/linkedin-dark-icon.svg";

const SITE_URL = "https://creativepixels.agency/"; // 🔴 change this

const BlogShare = ({ post }) => {
  const pathname = usePathname();
  const url = `${SITE_URL}${pathname}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

  return (
    <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[7.4rem]">
      <div className="container flex flex-col items-start justify-between gap-[4rem] border-t border-[#E6E6E6] pt-[3.5rem] md:flex-row">
        {/* Share */}
        <div className="flex flex-col items-start gap-[1.8rem]">
          <h5 className="text-[2rem] leading-[3.2rem] font-normal text-[#625C70]">
            Share this post:
          </h5>

          <ul className="flex items-center gap-[8px]">
            <li>
              <Link
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-[3.4rem] items-center justify-center rounded-full bg-black/15"
              >
                <Image
                  src={FacebookIcon}
                  width={20}
                  height={20}
                  alt="Facebook"
                />
              </Link>
            </li>

            {/* Instagram doesn't support direct sharing */}
            <li>
              <span
                title="Copy link to share on Instagram"
                className="inline-flex size-[3.4rem] cursor-not-allowed items-center justify-center rounded-full bg-black/15 opacity-60"
              >
                <Image
                  src={InstagramIcon}
                  width={20}
                  height={20}
                  alt="Instagram"
                />
              </span>
            </li>

            <li>
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-[3.4rem] items-center justify-center rounded-full bg-black/15"
              >
                <Image
                  src={LinkedinIcon}
                  width={20}
                  height={20}
                  alt="LinkedIn"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="w-[33rem]">
            <ul className="flex w-full flex-wrap gap-[1rem]">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex h-[2.8rem] items-center justify-center rounded-[20rem] border border-[#D2D2D2] px-[1.2rem] text-[1.4rem] font-bold uppercase transition-all duration-200 hover:border-[#FF37B3] hover:bg-[#FF37B3] hover:text-white"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogShare;
