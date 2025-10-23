"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ContentSection = () => {
  const { slug } = useParams();
  const [contentHTML, setContentHTML] = useState("");

  useEffect(() => {
    // 1️⃣ Try loading from cache first
    const cached = localStorage.getItem(`post_${slug}`);
    if (cached) {
      const cachedPost = JSON.parse(cached);
      if (cachedPost?.content?.rendered) {
        setContentHTML(cachedPost.content.rendered);
      }
    }

    // 2️⃣ Fetch fresh data
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}&_embed`,
        );
        const data = await res.json();
        const post = data[0];
        if (post) {
          setContentHTML(post.content?.rendered || "");
          localStorage.setItem(`post_${slug}`, JSON.stringify(post));
        }
      } catch (err) {
        console.error("Failed to fetch post content:", err);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <section className="post-content px-[3rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        {contentHTML ? (
          <article dangerouslySetInnerHTML={{ __html: contentHTML }} />
        ) : (
          <p className="text-center text-[1.8rem] text-gray-500">
            Loading content...
          </p>
        )}

        {/* <article>
          <h3 className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#070707]">
            Owner and Data Controller
          </h3>

          <h5 className="my-[2rem] text-[2.2rem] leading-[3.2rem] font-medium text-[#070707]">
            Types of Data collected
          </h5>

          <div className="flex flex-col gap-[2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
            <p>
              Among the types of Personal Data that this Website collects, by
              itself or through third parties, there are: Cookies; Usage Data;
              first name; last name; phone number; company name; profession;
              address; country; county; email address; ZIP/Postal code; city;
              website; various types of Data; Data communicated while using the
              service.
            </p>

            <p>
              Complete details on each type of Personal Data collected are
              provided in the dedicated sections of this privacy policy or by
              specific explanation texts displayed prior to the Data collection.
            </p>

            <p>
              Personal Data may be freely provided by the User, or, in case of
              Usage Data, collected automatically when using this Website.
            </p>

            <p>
              Unless specified otherwise, all Data requested by this Website is
              mandatory and failure to provide this Data may make it impossible
              for this Website to provide its services. In cases where this
              Website specifically states that some Data is not mandatory, Users
              are free not to communicate this Data without consequences to the
              availability or the functioning of the Service.
            </p>

            <p>
              Users who are uncertain about which Personal Data is mandatory are
              welcome to contact the Owner.
            </p>

            <p>
              Any use of Cookies - or of other tracking tools — by this Website
              or by the owners of third-party services used by this Website
              serves the purpose of providing the Service required by the User,
              in addition to any other purposes described in the present
              document and in the Cookie Policy.
            </p>

            <p>
              Users are responsible for any third-party Personal Data obtained,
              published or shared through this Website.
            </p>
          </div>
        </article>

        <article>
          <div className="my-[5rem] grid h-[42.6rem] grid-cols-2 gap-[3.3rem]">
            <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem]">
              <Image
                src="/images/blog-post-featured-img.png"
                width={585}
                height={426}
                alt="Featured Graphic"
                className="size-full"
              />
            </div>

            <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem]">
              <Image
                src="/images/blog-post-featured-img.png"
                width={585}
                height={426}
                alt="Featured Graphic"
                className="size-full"
              />
            </div>
          </div>

          <h3 className="mb-[2rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#070707]">
            Owner and Data Controller
          </h3>

          <div className="flex flex-col gap-[2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
            <p>
              Among the types of Personal Data that this Website collects, by
              itself or through third parties, there are: Cookies; Usage Data;
              first name; last name; phone number; company name; profession;
              address; country; county; email address; ZIP/Postal code; city;
              website; various types of Data; Data communicated while using the
              service.
            </p>

            <p>
              Complete details on each type of Personal Data collected are
              provided in the dedicated sections of this privacy policy or by
              specific explanation texts displayed prior to the Data collection.
            </p>

            <p>
              Personal Data may be freely provided by the User, or, in case of
              Usage Data, collected automatically when using this Website.
            </p>

            <p>
              Unless specified otherwise, all Data requested by this Website is
              mandatory and failure to provide this Data may make it impossible
              for this Website to provide its services. In cases where this
              Website specifically states that some Data is not mandatory, Users
              are free not to communicate this Data without consequences to the
              availability or the functioning of the Service.
            </p>
          </div>
        </article>

        <article>
          <h3 className="mt-[4rem] mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#070707]">
            Nunc viverra faucibus diam.
          </h3>

          <ul className="flex list-inside list-disc flex-col text-[1.8rem] leading-[3.6rem] font-normal text-[#070707]">
            <li>Nulla laoreet augue id ipsum tincidunt viverra.</li>
            <li>Nam vitae enim a nunc tempus eleifend.</li>
            <li>
              Fusce malesuada nulla in magna ornare, nec lobortis tortor
              laoreet.
            </li>
            <li>
              Donec malesuada lacus ut tortor blandit, in congue purus bibendum.
            </li>
            <li>Aliquam tincidunt nunc in ligula vulputate tempor.</li>
            <li>Nulla vel nisl cursus ex vehicula elementum.</li>
          </ul>
        </article>

        <article>
          <div className="relative my-[5rem] items-center justify-center overflow-hidden rounded-[2rem]">
            <Image
              src="/images/blog-post-featured-img.png"
              width={1200}
              height={348}
              alt="Comparision Chart"
              className="size-full"
            />
          </div>

          <h3 className="mb-[2rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#070707]">
            Venenatis aliquet pulvinar. Nunc viverra faucibus diam.
          </h3>

          <div className="flex flex-col gap-[2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
            <p>
              Among the types of Personal Data that this Website collects, by
              itself or through third parties, there are: Cookies; Usage Data;
              first name; last name; phone number; company name; profession;
              address; country; county; email address; ZIP/Postal code; city;
              website; various types of Data; Data communicated while using the
              service.
            </p>

            <p>
              Complete details on each type of Personal Data collected are
              provided in the dedicated sections of this privacy policy or by
              specific explanation texts displayed prior to the Data collection.
            </p>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default ContentSection;
