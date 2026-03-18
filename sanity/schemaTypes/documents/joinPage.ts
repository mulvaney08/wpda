import { defineArrayMember, defineField, defineType } from "sanity";

export const joinPage = defineType({
  name: "joinPage",
  title: "Join page",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3, group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "ctaLabel", title: "Hero CTA label", type: "string", group: "content" }),
    defineField({ name: "ctaHref", title: "Hero CTA path", type: "string", group: "content" }),
    defineField({
      name: "pathways",
      title: "Pathways",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "text", title: "Text", type: "text", rows: 2, validation: (Rule) => Rule.required() })
          ],
          preview: { select: { title: "title", subtitle: "text" } }
        })
      ]
    }),
    defineField({
      name: "timetableImage",
      title: "Timetable image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
    }),
    defineField({ name: "howToStartTitle", title: "How-to-start title", type: "string", group: "content" }),
    defineField({ name: "howToStartText", title: "How-to-start text", type: "text", rows: 3, group: "content" }),
    defineField({ name: "primaryCtaLabel", title: "Primary CTA label", type: "string", group: "content" }),
    defineField({ name: "primaryCtaHref", title: "Primary CTA path", type: "string", group: "content" }),
    defineField({ name: "secondaryCtaLabel", title: "Secondary CTA label", type: "string", group: "content" }),
    defineField({ name: "secondaryCtaHref", title: "Secondary CTA path", type: "string", group: "content" }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    prepare: () => ({ title: "Join page" })
  }
});
