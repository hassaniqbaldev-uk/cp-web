import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

// Single image URL builder for the consolidated project (CP-00K).
const { projectId, dataset } = client.config();

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source) {
  return builder ? builder.image(source) : null;
}
