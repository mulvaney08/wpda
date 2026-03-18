import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";
import { singletonActions, singletonDocuments, structure } from "@/sanity/structure";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default defineConfig({
  name: "default",
  title: "WPDA CMS",
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonDocuments.has(schemaType))
  },
  plugins: [
    deskTool({ structure }),
    presentationTool({
      previewUrl: {
        origin,
        previewMode: {
          enable: "/api/draft-mode/enable"
        }
      }
    }),
    visionTool({ defaultApiVersion: apiVersion })
  ],
  document: {
    actions: (prev, context) => (singletonDocuments.has(context.schemaType) ? prev.filter(({ action }) => action && singletonActions.has(action)) : prev)
  }
});
