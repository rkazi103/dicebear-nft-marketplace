import { createCurrentUserHook, createClient, ClientConfig } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(config);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);
