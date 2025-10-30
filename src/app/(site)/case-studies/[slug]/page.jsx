import CaseStudyApproachSection from "@/components/case-studies/CaseStudyApproachSection";
import CaseStudyChallengeSection from "@/components/case-studies/CaseStudyChallengeSection";
import CaseStudyHeroSection from "@/components/case-studies/CaseStudyHeroSection";
import CaseStudyOverviewSection from "@/components/case-studies/CaseStudyOverviewSection";
import CaseStudyResultsSection from "@/components/case-studies/CaseStudyResultsSection";
import CaseStudySolutionSection from "@/components/case-studies/CaseStudySolutionSection";
import CaseStudyDetailSection from "@/components/sections/CaseStudyDetailSection";
import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import { fetchAPI, getCaseStudies, getStrapiMedia } from "@/lib/strapi";

export async function generateMetadata({ params }) {
  const { slug } = await params; // Add await here

  // Fetch this case study with SEO
  const response = await fetchAPI("/api/case-studies", {
    filters: { slug: { $eq: slug } },
    populate: { seo: true },
  });

  const item = response.data?.[0];

  if (!item) {
    return {
      title: "Case Study Not Found",
      description: "This case study could not be found.",
    };
  }

  const seo = item.seo;

  return {
    title: seo?.title || item.title,
    description: seo?.description || item.excerpt,
    keywords: seo?.keywords,
  };
}

const CaseStudyDetailPage = async ({ params }) => {
  // const { slug } = await params;

  // if (!slug) <p>No Case Study found</p>;

  // const caseStudies = await getCaseStudies(slug);

  // const caseStudy = caseStudies.data[0];

  const { slug } = await params; // Add await here

  // Fetch only the case study with this slug
  const response = await fetchAPI("/api/case-studies", {
    filters: { slug: { $eq: slug } },
    populate: {
      hero_image: true,
      tags: true,
      technologies: { populate: ["logo"] },
      detail_content: {
        on: {
          "media.image-gallery": {
            populate: [
              "badge_image",
              "main_image",
              "image_column_1",
              "image_column_2",
              "image_column_3",
              "image_column_4",
              "image_column_5",
              "image_column_6",
              "image_column_7",
              "image_column_8",
              "image_column_9",
              "image_column_10",
              "image_column_11",
              "image_column_12",
              "image_column_13",
              "image_column_14",
              "image_column_15",
            ], // Add main_image here
          },
          "button.link-button": {
            populate: "*",
          },
          "grid.grid-row": {
            populate: {
              grid_column_1: true,
              grid_column_2: true,
              grid_column_4: {
                populate: ["images"], // populate images for column 4
              },
            },
          },
          "heading.content-title": {
            // Add this for the heading component
            populate: "*",
          },
          "description.content-description": {
            // Add this for the desc component
            populate: "*",
          },
          "grid.grid-row-2": {
            populate: "*",
          },
          "grid.grid-card-row": {
            populate: {
              grid_card_1: {
                populate: ["icon"], // Add this to populate the icon
              },
              grid_card_2: {
                populate: {
                  grid_inner_card: {
                    // Populate the inner card array
                    populate: {
                      label_list: {
                        // Populate the label list array
                        populate: "*",
                      },
                    },
                  },
                },
              },
            },
          },
          "grid.grid-card-row-2": {
            populate: {
              grid_card_column_1: {
                populate: {
                  workflow_list: {
                    populate: "*",
                  },
                },
              },
              grid_card_column_2: {
                populate: ["image"], // Add this to populate the icon
              },
            },
          },
        },
      },
    },
  });

  const item = response.data?.[0];

  if (!item) {
    return <div>Case study not found</div>;
  }

  // extract gallery component from dynamic zone
  const galleryComponent = item.detail_content?.find(
    (component) => component.__component === "media.image-gallery",
  );

  const badgeImage = galleryComponent?.badge_image
    ? getStrapiMedia(galleryComponent.badge_image)
    : null;

  const mainImage = galleryComponent?.main_image
    ? getStrapiMedia(galleryComponent.main_image)
    : null;

  const imageColumn1 = galleryComponent?.image_column_1
    ? getStrapiMedia(galleryComponent.image_column_1)
    : null;

  const imageColumn2 = galleryComponent?.image_column_2
    ? getStrapiMedia(galleryComponent.image_column_2)
    : null;

  const imageColumn3 = galleryComponent?.image_column_3
    ? getStrapiMedia(galleryComponent.image_column_3)
    : null;

  const imageColumn4 = galleryComponent?.image_column_4
    ? getStrapiMedia(galleryComponent.image_column_4)
    : null;

  const imageColumn5 = galleryComponent?.image_column_5
    ? getStrapiMedia(galleryComponent.image_column_5)
    : null;

  const imageColumn6 = galleryComponent?.image_column_6
    ? getStrapiMedia(galleryComponent.image_column_6)
    : null;

  const imageColumn7 = galleryComponent?.image_column_7
    ? getStrapiMedia(galleryComponent.image_column_7)
    : null;

  const imageColumn8 = galleryComponent?.image_column_8
    ? getStrapiMedia(galleryComponent.image_column_8)
    : null;

  const imageColumn9 = galleryComponent?.image_column_9
    ? getStrapiMedia(galleryComponent.image_column_9)
    : null;

  const imageColumn10 = galleryComponent?.image_column_10
    ? getStrapiMedia(galleryComponent.image_column_10)
    : null;

  const imageColumn11 = galleryComponent?.image_column_11
    ? getStrapiMedia(galleryComponent.image_column_11)
    : null;

  const imageColumn12 = galleryComponent?.image_column_12
    ? getStrapiMedia(galleryComponent.image_column_12)
    : null;

  const imageColumn13 = galleryComponent?.image_column_13
    ? getStrapiMedia(galleryComponent.image_column_13)
    : null;

  const imageColumn14 = galleryComponent?.image_column_14
    ? getStrapiMedia(galleryComponent.image_column_14)
    : null;

  const imageColumn15 = galleryComponent?.image_column_15
    ? getStrapiMedia(galleryComponent.image_column_15)
    : null;

  // extract link button component from dynamic zone
  const linkButtonComponent = item.detail_content?.find(
    (component) => component.__component === "button.link-button",
  );

  // extract grid row component from dynamic zone
  const gridRowComponent = item.detail_content?.find(
    (component) => component.__component === "grid.grid-row",
  );

  // extract content title component from dynamic zone
  const contentTitleComponent = item.detail_content?.find(
    (component) => component.__component === "heading.content-title",
  );

  // extract content desc component from dynamic zone
  const contentDescriptionComponent = item.detail_content?.find(
    (component) => component.__component === "description.content-description",
  );

  // extract grid row 2 component from dynamic zone
  const gridRowComponent2 = item.detail_content?.find(
    (component) => component.__component === "grid.grid-row-2",
  );

  // Extract and process the grid card row
  const gridCardRowComponent = item.detail_content?.find(
    (component) => component.__component === "grid.grid-card-row",
  );

  const gridCardRow = gridCardRowComponent
    ? {
        id: gridCardRowComponent.id,
        card1: gridCardRowComponent.grid_card_1
          ? {
              label: gridCardRowComponent.grid_card_1.label,
              icon: gridCardRowComponent.grid_card_1.icon
                ? getStrapiMedia(gridCardRowComponent.grid_card_1.icon)
                : null,
            }
          : null,
        card2: gridCardRowComponent.grid_card_2
          ? {
              innerCards: (
                gridCardRowComponent.grid_card_2.grid_inner_card || []
              ).map((innerCard) => ({
                id: innerCard.id,
                title: innerCard.title,
                labels: (innerCard.label_list || []).map(
                  (labelItem) => labelItem.label,
                ),
              })),
            }
          : null,
      }
    : null;

  // Extract grid card row 2 component from dynamic zone
  const gridCardRow2Component = item.detail_content?.find(
    (component) => component.__component === "grid.grid-card-row-2",
  );

  // Process the data
  const gridCardRow2 = gridCardRow2Component
    ? {
        id: gridCardRow2Component.id,
        column1: gridCardRow2Component.grid_card_column_1
          ? {
              title: gridCardRow2Component.grid_card_column_1.title,
              workflowItems: (
                gridCardRow2Component.grid_card_column_1.workflow_list
                  ?.list_item || []
              ).map((item) => ({
                id: item.id,
                label1: item.label_1,
                label2: item.label_2,
              })),
            }
          : null,
        column2: gridCardRow2Component.grid_card_column_2
          ? {
              image: gridCardRow2Component.grid_card_column_2.image
                ? getStrapiMedia(gridCardRow2Component.grid_card_column_2.image)
                : null,
            }
          : null,
      }
    : null;

  const caseStudy = {
    id: item.id,
    title: item.title,
    slug: item.slug,
    description: item.excerpt,
    image: getStrapiMedia(item.hero_image),
    tags: (item.tags || []).map((tag) => ({
      id: tag.id,
      name: tag.name,
    })),
    technologies: (item.technologies || []).map((tech) => ({
      id: tech.id,
      name: tech.name,
      logo: getStrapiMedia(tech.logo),
    })),
    badgeImage: badgeImage,
    linkButton: linkButtonComponent ? linkButtonComponent.label : null,
    gridRow: gridRowComponent
      ? {
          column1: gridRowComponent.grid_column_1,
          column2: gridRowComponent.grid_column_2,
          column4: {
            label: gridRowComponent.grid_column_4?.label,
            images: (gridRowComponent.grid_column_4?.images || []).map(
              (image) => getStrapiMedia(image),
            ),
          },
        }
      : null,
    mainImage: mainImage,
    contentTitle: contentTitleComponent
      ? {
          title1: contentTitleComponent.title_1,
          title2: contentTitleComponent.title_2,
          title3: contentTitleComponent.title_3,
          title4: contentTitleComponent.title_4,
          title5: contentTitleComponent.title_5,
          title6: contentTitleComponent.title_6,
          title7: contentTitleComponent.title_7,
          title8: contentTitleComponent.title_8,
        }
      : null,
    contentDescription: contentDescriptionComponent
      ? {
          description1: contentDescriptionComponent.description_1,
          description2: contentDescriptionComponent.description_2,
          description3: contentDescriptionComponent.description_3,
          description4: contentDescriptionComponent.description_4,
          description5: contentDescriptionComponent.description_5,
          description6: contentDescriptionComponent.description_6,
        }
      : null,
    gridRow2: gridRowComponent2
      ? {
          column1: gridRowComponent2.grid_column_1,
          column2: gridRowComponent2.grid_column_2,
          column3: gridRowComponent2.grid_column_3,
          column5: gridRowComponent2.grid_column_5,
        }
      : null,
    imageColumn1: imageColumn1,
    imageColumn2: imageColumn2,
    imageColumn3: imageColumn3,
    imageColumn4: imageColumn4,
    imageColumn5: imageColumn5,
    imageColumn6: imageColumn6,
    imageColumn7: imageColumn7,
    imageColumn8: imageColumn8,
    imageColumn9: imageColumn9,
    imageColumn10: imageColumn10,
    imageColumn11: imageColumn11,
    imageColumn12: imageColumn12,
    imageColumn13: imageColumn13,
    imageColumn14: imageColumn14,
    imageColumn15: imageColumn15,
    gridCardRow: gridCardRow,
    gridCardRow2: gridCardRow2,
  };

  return (
    <>
      <CaseStudyDetailSection caseStudy={caseStudy} />
      {/* <CaseStudyHeroSection caseStudy={caseStudy} />
      <CaseStudyOverviewSection />
      <CaseStudyChallengeSection />
      <CaseStudyApproachSection />
      <CaseStudySolutionSection />
      <CaseStudyResultsSection /> */}
      <div className="overflow-hidden">
        {/* <FeedbackSection
          reverse
          title="Client Feedback"
          description="Creative Pixels transformed our digital presence. The old site didn't reflect the strength of our software, but now we have a platform that's fast, modern, and flexible. The process was smooth from start to finish, with clear communication and real attention to detail.Our team now has full control to update the site, and we've already seen positive feedback from clients who say the design feels sharp and professional. Most importantly, the website now matches the quality of the product we deliver. We couldn't be happier with the results."
          projectType="E-Commerce Website"
          avatar="/images/ui-ux-feedback-avatar.png"
          image="/images/ui-ux-feedback-card-img.png"
        /> */}
        <ContactSection />
      </div>
    </>
  );
};

export default CaseStudyDetailPage;
