"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import FbDarkIcon from "@/assets/icons/facebook-dark-icon.svg";
import TwitterDarkIcon from "@/assets/icons/twitter-dark-icon.svg";
import LinkedinDarkIcon from "@/assets/icons/linkedin-dark-icon.svg";
import CopyDarkIcon from "@/assets/icons/copy-dark-icon.svg";

const ShareSection = () => {
  const { slug } = useParams();
  const [postData, setPostData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}&_embed`,
        );
        const data = await res.json();
        setPostData(data[0]);
      } catch (err) {
        console.error("Error fetching post for share section:", err);
      }
    };

    fetchPost();
  }, [slug]);

  if (!postData) return null;

  // ✅ Author data
  const author = postData._embedded?.author?.[0];
  const authorName = author?.name || "Unknown Author";
  const authorAvatar =
    author?.avatar_urls?.["96"] || "/images/cta-btn-avatar-icon.png";

  // ✅ Share URLs
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${postData.slug}`;
  const shareUrls = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      postUrl,
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      postUrl,
    )}&text=${encodeURIComponent(postData.title.rendered)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postUrl,
    )}`,
  };

  // ✅ Copy link handler
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <section className="post-share px-[3rem] pt-[5rem] pb-[8rem] xl:px-[0rem] xl:pb-[12rem]">
      <div className="mx-auto max-w-[120rem]">
        <hr className="mb-[5rem] w-full border-t border-[#9C9C9C]" />

        <div className="flex flex-col items-center justify-between gap-[3rem] text-center md:flex-row md:text-left">
          <div className="share-buttons flex flex-col gap-[1.5rem]">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]/60">
              Share this article with friends
            </p>

            <ul className="flex items-center gap-[1.2rem]">
              <li>
                <Link
                  href={shareUrls.linkedin}
                  target="_blank"
                  className="flex size-[6rem] items-center justify-center"
                >
                  <LinkedinDarkIcon />
                </Link>
              </li>

              <li>
                <Link
                  href={shareUrls.twitter}
                  target="_blank"
                  className="flex size-[6rem] items-center justify-center"
                >
                  <TwitterDarkIcon />
                </Link>
              </li>

              <li>
                <Link
                  href={shareUrls.facebook}
                  target="_blank"
                  className="flex size-[6rem] items-center justify-center"
                >
                  <FbDarkIcon />
                </Link>
              </li>

              <li>
                <button
                  onClick={handleCopy}
                  className="flex size-[6rem] cursor-pointer items-center justify-center"
                  title="Copy link"
                >
                  <CopyDarkIcon />
                  {copied && (
                    <span className="absolute bottom-[-2rem] text-[1.2rem] text-[#070707]/70">
                      Copied!
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>

          <div className="post-author-again flex items-center gap-[1.2rem]">
            <img
              src="/images/cta-btn-avatar-icon.png"
              alt={authorName}
              className="size-[5rem]"
            />

            <p className="text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]">
              Uploaded: {authorName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
