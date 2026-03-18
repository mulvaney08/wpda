import { defineArrayMember, defineField, defineType } from "sanity";

export const wojtekProfile = defineType({
  name: "wojtekProfile",
  title: "Wojtek profile",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "name", title: "Name", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "headline", title: "Headline", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3, group: "content", validation: (Rule) => Rule.required() }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
    }),
    defineField({
      name: "biographySections",
      title: "Biography sections",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "highlightItem" })],
      validation: (Rule) => Rule.min(3)
    }),
    defineField({
      name: "qualifications",
      title: "Qualifications",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "judgingCredentials",
      title: "Judging credentials",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "mediaAppearances",
      title: "Media appearances",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({ name: "philosophy", title: "Philosophy / message", type: "text", rows: 4, group: "content" }),
    defineField({
      name: "gallery",
      title: "Wojtek gallery",
      type: "array",
      description: "Only use Wojtek-specific images here.",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
        })
      ]
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    select: { title: "name", subtitle: "headline", media: "heroImage" }
  }
});
