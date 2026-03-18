import { defineArrayMember, defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string", group: "hero", validation: (Rule) => Rule.required().max(60) }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string", group: "hero", validation: (Rule) => Rule.required().max(140) }),
    defineField({ name: "heroSubheadline", title: "Hero subheadline", type: "text", rows: 3, group: "hero", validation: (Rule) => Rule.required().max(260) }),
    defineField({ name: "heroPrimaryCta", title: "Hero primary CTA", type: "link", group: "hero" }),
    defineField({ name: "heroSecondaryCta", title: "Hero secondary CTA", type: "link", group: "hero" }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
    }),
    defineField({ name: "introEyebrow", title: "Intro eyebrow", type: "string", group: "content" }),
    defineField({ name: "introTitle", title: "Intro title", type: "string", group: "content" }),
    defineField({ name: "introText", title: "Intro text", type: "text", rows: 3, group: "content" }),
    defineField({
      name: "introImages",
      title: "Intro images",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
        })
      ],
      validation: (Rule) => Rule.min(3).max(3)
    }),
    defineField({
      name: "stylesSectionTitle",
      title: "Styles section title",
      type: "string",
      group: "content",
      initialValue: "Four disciplines. One academy standard."
    }),
    defineField({
      name: "styles",
      title: "Style cards",
      type: "array",
      group: "content",
      of: [{ type: "styleCard" }],
      validation: (Rule) => Rule.min(4).max(6)
    }),
    defineField({
      name: "competitiveHighlights",
      title: "Competitive highlights",
      type: "array",
      group: "content",
      of: [{ type: "highlightItem" }]
    }),
    defineField({
      name: "valuePillars",
      title: "Academy values",
      type: "array",
      group: "content",
      of: [{ type: "valuePillar" }],
      validation: (Rule) => Rule.min(2).max(6)
    }),
    defineField({ name: "teamSectionTitle", title: "Team section title", type: "string", group: "content" }),
    defineField({
      name: "galleryPreviewImages",
      title: "Gallery preview images",
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
    defineField({ name: "finalCtaEyebrow", title: "Final CTA eyebrow", type: "string", group: "content" }),
    defineField({ name: "finalCtaTitle", title: "Final CTA title", type: "string", group: "content" }),
    defineField({ name: "finalCtaText", title: "Final CTA text", type: "text", rows: 3, group: "content" }),
    defineField({ name: "finalPrimaryCta", title: "Final primary CTA", type: "link", group: "content" }),
    defineField({ name: "finalSecondaryCta", title: "Final secondary CTA", type: "link", group: "content" }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    prepare: () => ({ title: "Homepage" })
  }
});
