import { createImageUrlBuilder } from "@sanity/image-url";
import { legalClient } from "./sanity.legal";

const { projectId, dataset } = legalClient.config();

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source) {
  return builder ? builder.image(source) : null;
}
