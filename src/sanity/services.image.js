import { createImageUrlBuilder } from "@sanity/image-url";
import { servicesClient } from "./sanity.services";

const { projectId, dataset } = servicesClient.config();

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source) {
  return builder ? builder.image(source) : null;
}
