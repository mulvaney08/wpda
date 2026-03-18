import { defineField, defineType } from "sanity";
import { galleryCategoryOptions } from "@/sanity/schemaTypes/constants";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery image",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "caption", title: "Caption", type: "string" })
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: galleryCategoryOptions },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 100 }),
    defineField({
      name: "wojtekOnly",
      title: "Wojtek profile only image",
      type: "boolean",
      description: "Enable this if the image should only appear on the Wojtek page.",
      initialValue: false
    })
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image"
    }
  }
});
