import qs from "qs";

export async function getCaseStudies(slug) {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";

  const path = "/api/case-studies";

  const url = new URL(path, baseUrl);

  url.search = qs.stringify({
    populate: {
      ThumbnailImage: {
        fields: ["alternativeText", "name", "url"],
      },
      Tags: {
        fields: ["Tag"],
      },
      Tools: {
        fields: ["alternativeText", "name", "url"],
      },
      CaseStudyDetails: {
        on: {
          "case-study-details.case-study-hero-section": {
            populate: {
              BadgeImage: {
                fields: ["alternativeText", "name", "url"],
              },
              FeaturedImage: {
                fields: ["alternativeText", "name", "url"],
              },
            },
          },
          "case-study-details.case-study-overview-section": {
            populate: {
              GridImage1: {
                fields: ["alternativeText", "name", "url"],
              },
              GridImage2: {
                fields: ["alternativeText", "name", "url"],
              },
            },
          },
          "case-study-details.case-study-challenge-section": {
            populate: {
              GridImage1: {
                fields: ["alternativeText", "name", "url"],
              },
              GridImage2: {
                fields: ["alternativeText", "name", "url"],
              },
              GridImage3: {
                fields: ["alternativeText", "name", "url"],
              },
              Lists: {
                fields: ["List"],
              },
            },
          },
          "case-study-details.case-study-approach-section": {
            populate: {
              CardImage1: {
                fields: ["alternativeText", "name", "url"],
              },
              CardImage2: {
                fields: ["alternativeText", "name", "url"],
              },
              Lists: {
                fields: ["List"],
              },
            },
          },
          "case-study-details.case-study-solution-section": {
            populate: {
              SliderImages: {
                fields: ["alternativeText", "name", "url"],
              },
            },
          },
          "case-study-details.case-study-results-section": {
            populate: {
              MainImage: {
                fields: ["alternativeText", "name", "url"],
              },
              Column1: {
                fields: ["Label1", "Label2"],
              },
              Column2: {
                fields: ["Label1", "Label2"],
              },
              Column3: {
                fields: ["Label1", "Label2"],
              },
              Column4: {
                fields: ["Label1", "Label2"],
              },
            },
          },
          "case-study-details.case-study-feedback-section": {
            populate: {
              ProjectImage: {
                fields: ["alternativeText", "name", "url"],
              },
              ClientDetails: {
                populate: {
                  AvatarImage: {
                    fields: ["alternativeText", "name", "url"],
                  },
                },
              },
            },
          },
          "case-study-details.case-study-seo": {
            populate: true,
          },
        },
      },
    },
    filters: {
      Slug: {
        $eq: slug, // This is the slug for our team member
      },
    },
  });

  // 👇 Add ISR revalidation here
  const res = await fetch(url, {
    next: { revalidate: 3600 }, // every 2 minutes, you can increase to 300 for 5min
  });

  if (!res.ok) throw new Error("Failed to fetch Case Studies");

  const data = await res.json();

  return data;
}
