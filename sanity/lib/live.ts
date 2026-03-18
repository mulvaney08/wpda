import "server-only";
import { defineLive } from "next-sanity/live";
import { client } from "@/sanity/lib/client";
import { viewerToken } from "@/sanity/env";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: viewerToken,
  browserToken: viewerToken || false
});
