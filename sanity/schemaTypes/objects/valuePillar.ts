import { defineField, defineType } from "sanity";

export const valuePillar = defineType({
  name: "valuePillar",
  title: "Value pillar",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "text", title: "Text", type: "text", rows: 3, validation: (Rule) => Rule.required() })
  ],
  preview: {
    select: { title: "title", subtitle: "text" }
  }
});
