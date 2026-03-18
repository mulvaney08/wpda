import { defineField, defineType } from "sanity";

export const highlightItem = defineType({
  name: "highlightItem",
  title: "Highlight item",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required().max(220)
    })
  ],
  preview: {
    select: { title: "text" }
  }
});
