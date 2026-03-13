import { createImageUrlBuilder } from "@sanity/image-url";
import { blogClient } from "./sanity.blog";

const { projectId, dataset } = blogClient.config();

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source) {
  return builder ? builder.image(source) : null;
}
