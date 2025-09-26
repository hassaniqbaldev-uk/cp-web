import CaseStudyDetailSection from "@/components/sections/CaseStudyDetailSection";
import ContactSection from "@/components/sections/ContactSection";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

const CaseStudyDetailPage = async ({ params }) => {
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
            ], // Add main_image here
          },
          "button.link-button": {
            populate: "*",
          },
          "grid.grid-row": {
            populate: {
              grid_column_1: true,
              grid_column_2: true,
              grid_column_3: true,
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
          column3: gridRowComponent.grid_column_3,
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
        }
      : null,
    contentDescription: contentDescriptionComponent
      ? {
          description1: contentDescriptionComponent.description_1,
          description2: contentDescriptionComponent.description_2,
        }
      : null,
    gridRow2: gridRowComponent2
      ? {
          column1: gridRowComponent2.grid_column_1,
          column2: gridRowComponent2.grid_column_2,
          column3: gridRowComponent2.grid_column_3,
        }
      : null,
    imageColumn1: imageColumn1,
    imageColumn2: imageColumn2,
    imageColumn3: imageColumn3,
    imageColumn4: imageColumn4,
    imageColumn5: imageColumn5,
    gridCardRow: gridCardRow,
    gridCardRow2: gridCardRow2,
  };

  return (
    <>
      <CaseStudyDetailSection caseStudy={caseStudy} />
      <ContactSection />
    </>
  );
};

export default CaseStudyDetailPage;
