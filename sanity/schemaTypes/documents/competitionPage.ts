import { defineArrayMember, defineField, defineType } from "sanity";

export const competitionPage = defineType({
  name: "competitionPage",
  title: "Competition page",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3, group: "content", validation: (Rule) => Rule.required() }),
    defineField({
      name: "competitiveTrainingPathway",
      title: "Competitive training pathway",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "highlightItem" })],
      validation: (Rule) => Rule.min(3)
    }),
    defineField({
      name: "featuredAchievements",
      title: "Featured achievements",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "highlightItem" })]
    }),
    defineField({
      name: "eventHighlights",
      title: "Event highlights",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "highlightItem" })]
    }),
    defineField({
      name: "milestones",
      title: "Milestones",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })]
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
      validation: (Rule) => Rule.max(3)
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    prepare: () => ({ title: "Competitive page" })
  }
});
