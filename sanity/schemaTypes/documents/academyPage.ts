import { defineArrayMember, defineField, defineType } from "sanity";

export const academyPage = defineType({
  name: "academyPage",
  title: "Academy page",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "pageTitle", title: "Page title", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "introCopy", title: "Intro copy", type: "text", rows: 3, group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "academyPhilosophy", title: "Academy philosophy", type: "text", rows: 4, group: "content" }),
    defineField({ name: "supportiveEnvironment", title: "Supportive environment", type: "text", rows: 4, group: "content" }),
    defineField({ name: "parentFamilyMessaging", title: "Parent/family messaging", type: "text", rows: 4, group: "content" }),
    defineField({ name: "pathwayMessaging", title: "Pathway messaging", type: "text", rows: 4, group: "content" }),
    defineField({
      name: "valuePillars",
      title: "Value pillars",
      type: "array",
      group: "content",
      of: [{ type: "valuePillar" }],
      validation: (Rule) => Rule.max(6)
    }),
    defineField({
      name: "supportingImages",
      title: "Supporting images",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
        })
      ],
      validation: (Rule) => Rule.max(4)
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    prepare: () => ({ title: "About / Academy page" })
  }
});
