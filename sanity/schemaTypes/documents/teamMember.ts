import { defineArrayMember, defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "settings", title: "Settings" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "name", title: "Name", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "role", title: "Role", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "shortBio", title: "Short bio", type: "text", rows: 3, group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "fullBio", title: "Full bio", type: "text", rows: 5, group: "content" }),
    defineField({
      name: "specialties",
      title: "Specialties",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "profileImage",
      title: "Profile image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean", group: "settings", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number", group: "settings", initialValue: 100 }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      group: "content",
      of: [{ type: "socialLink" }]
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "profileImage",
      featured: "featured"
    },
    prepare: ({ title, subtitle, media, featured }) => ({
      title,
      subtitle: featured ? `Featured • ${subtitle || ""}` : subtitle,
      media
    })
  }
});
