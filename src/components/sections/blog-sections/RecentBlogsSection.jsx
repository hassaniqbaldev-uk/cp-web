"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RecentBlogsSection = () => {
  const [posts, setPosts] = useState([]); // all posts
  const [categories, setCategories] = useState([]); // categories
  const [activeTab, setActiveTab] = useState("explore-all");

  // ✅ Calculate reading time from content or excerpt
  const calculateReadingTime = (html) => {
    if (!html) return 1;
    const text = html.replace(/<[^>]+>/g, ""); // strip tags
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 225);
    return minutes;
  };

  // ✅ Step 1: Load from localStorage first, then fetch API
  useEffect(() => {
    const cached = localStorage.getItem("recentPosts");
    if (cached) {
      const parsed = JSON.parse(cached);
      setPosts(parsed.posts);
      setCategories(parsed.categories);
    }

    const fetchData = async () => {
      try {
        const catRes = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/categories`,
        );
        const cats = await catRes.json();

        const postRes = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?_embed&per_page=20`,
        );

        const data = await postRes.json();

        // 🧠 Manual sorting logic here
        const desiredOrder = [
          "design-and-branding",
          "website-development",
          "maintenance-and-growth",
          "general",
        ];

        const orderedCategories = desiredOrder
          .map((slug) => cats.find((c) => c.slug === slug))
          .filter(Boolean);

        setCategories(orderedCategories);
        setPosts(data);

        localStorage.setItem(
          "recentPosts",
          JSON.stringify({ posts: data, categories: orderedCategories }),
        );
      } catch (err) {
        console.error("Failed to load posts:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ Step 2: Filter posts by selected category
  const filteredPosts =
    activeTab === "explore-all"
      ? posts
      : posts.filter((post) => {
          const catSlug = post._embedded?.["wp:term"]?.[0]?.[0]?.slug || "";
          return catSlug === activeTab;
        });

  // ✅ Step 3: Fallback sample data (only for first render)
  const hasRealData = posts.length > 0;
  const displayPosts = hasRealData
    ? filteredPosts
    : [
        {
          id: 1,
          slug: "#",
          title: { rendered: "Sample Blog Post" },
          excerpt: { rendered: "Lorem ipsum dolor sit amet..." },
          _embedded: {
            "wp:featuredmedia": [
              { source_url: "/images/news-article-tab-img-1.png" },
            ],
            "wp:term": [
              [{ name: "Design and Branding", slug: "design-branding" }],
            ],
          },
        },
      ];

  return (
    <section className="px-[3rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <Tabs
          defaultValue="explore-all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="gap-[5rem]"
        >
          {/* Tab buttons */}
          <TabsList className="flex w-full flex-wrap justify-center gap-[1rem] text-center xl:justify-start xl:text-left">
            <TabsTrigger
              value="explore-all"
              className="border-text-primary inline-flex h-[3.8rem] min-w-[11.4rem] cursor-pointer items-center justify-center rounded-full border px-[2.4rem] py-[.6rem] text-[2rem] font-normal transition-all duration-300 hover:bg-[#FF37B3] hover:text-white data-[state=active]:bg-[#FF37B3] data-[state=active]:font-semibold data-[state=active]:text-white"
            >
              Explore All
            </TabsTrigger>

            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.slug}
                className="border-text-primary inline-flex h-[3.8rem] min-w-[11.4rem] cursor-pointer items-center justify-center rounded-full border px-[2.4rem] py-[.6rem] text-[2rem] font-normal transition-all duration-300 hover:bg-[#FF37B3] hover:text-white data-[state=active]:bg-[#FF37B3] data-[state=active]:font-semibold data-[state=active]:text-white"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab content */}
          <div>
            <h3 className="mb-[4rem] text-center text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em] text-[#070707] xl:text-left">
              Our Recent Blogs
            </h3>
            <TabsContent value={activeTab}>
              <div className="grid size-full grid-cols-1 gap-[3.3rem] md:grid-cols-2 xl:grid-cols-3">
                {displayPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="recent-blogs-glass flex size-full flex-col overflow-hidden"
                  >
                    <div className="relative flex h-[24rem] w-full items-center justify-center">
                      <Image
                        src={
                          post._embedded?.["wp:featuredmedia"]?.[0]
                            ?.source_url || "/images/placeholder.jpg"
                        }
                        width={379}
                        height={240}
                        alt={post.title.rendered}
                        className="size-full object-cover object-top"
                      />
                    </div>

                    <div className="flex flex-col gap-[2rem] p-[2rem] md:pt-[2.5rem] md:pr-[1.5rem] md:pb-[3.5rem] md:pl-[2.5rem]">
                      <div className="flex items-center justify-between">
                        <span
                          className="inline-flex h-[3.2rem] items-center justify-center rounded-[.8rem] bg-[#070707] px-[1.2rem] text-center text-[1.2rem] leading-[2.4rem] font-medium text-white md:text-[1.6rem]"
                          dangerouslySetInnerHTML={{
                            __html:
                              post._embedded?.["wp:term"]?.[0]?.[0]?.name ||
                              "General",
                          }}
                        />

                        <span className="text-[1.4rem] leading-[2.4rem] font-medium text-[#070707]/60 md:text-[1.6rem]">
                          {calculateReadingTime(
                            post.content?.rendered || post.excerpt?.rendered,
                          )}{" "}
                          min read
                        </span>
                      </div>

                      <div className="flex flex-col gap-[1.5rem]">
                        <h4
                          className="line-clamp-2 overflow-hidden text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[2.6rem] md:leading-[3.2rem]"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />

                        <p
                          className="line-clamp-3 overflow-hidden text-[1.6rem] leading-[2.4rem] font-normal text-[#070707] md:text-[1.8rem] md:leading-[2.6rem]"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default RecentBlogsSection;
