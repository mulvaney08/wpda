import { defineField, defineType } from "sanity";

export const styleCard = defineType({
  name: "styleCard",
  title: "Style card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })],
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: { title: "title", subtitle: "description", media: "image" }
  }
});
