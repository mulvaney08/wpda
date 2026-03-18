import { defineField, defineType } from "sanity";

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required().max(40)
    }),
    defineField({
      name: "href",
      title: "URL or path",
      type: "string",
      description: "Use internal paths like /contact or full URLs.",
      validation: (Rule) => Rule.required().max(200)
    })
  ]
});
