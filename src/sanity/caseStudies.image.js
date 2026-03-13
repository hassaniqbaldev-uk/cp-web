import { createImageUrlBuilder } from "@sanity/image-url";
import { caseStudiesClient } from "./sanity.caseStudies";

const { projectId, dataset } = caseStudiesClient.config();

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source) {
  return builder ? builder.image(source) : null;
}
