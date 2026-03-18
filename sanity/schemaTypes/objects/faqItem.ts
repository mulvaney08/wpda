import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ item",
  type: "object",
  fields: [
    defineField({ name: "q", title: "Question", type: "string", validation: (Rule) => Rule.required().max(140) }),
    defineField({ name: "a", title: "Answer", type: "text", rows: 3, validation: (Rule) => Rule.required().max(320) })
  ],
  preview: {
    select: { title: "q", subtitle: "a" }
  }
});
