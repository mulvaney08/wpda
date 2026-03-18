import { defineArrayMember, defineField, defineType } from "sanity";
import { audienceOptions, styleTagOptions } from "@/sanity/schemaTypes/constants";

export const classCategory = defineType({
  name: "classCategory",
  title: "Class category",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "settings", title: "Settings" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "audienceType",
      title: "Audience type",
      type: "string",
      options: { list: audienceOptions },
      group: "settings",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "styleTags",
      title: "Style tags",
      type: "array",
      group: "settings",
      of: [defineArrayMember({ type: "string", options: { list: styleTagOptions } })],
      validation: (Rule) => Rule.min(1)
    }),
    defineField({ name: "shortDescription", title: "Short description", type: "text", rows: 2, group: "content" }),
    defineField({ name: "longDescription", title: "Long description", type: "text", rows: 4, group: "content" }),
    defineField({ name: "partnerRequired", title: "Partner required note", type: "string", group: "content" }),
    defineField({ name: "levelInfo", title: "Level info", type: "string", group: "content" }),
    defineField({ name: "ctaText", title: "CTA text", type: "string", group: "content" }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
    }),
    defineField({ name: "displayOrder", title: "Display order", type: "number", group: "settings", initialValue: 100 }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  orderings: [
    { title: "Display order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "audienceType",
      media: "featuredImage"
    }
  }
});
