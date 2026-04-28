import { defineField, defineType } from "sanity";

export const newsArticle = defineType({
  name: "newsArticle",
  title: "News & success article",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "settings", title: "Settings" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (Rule) => Rule.required().max(120) }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "settings",
      options: {
        list: [
          { title: "News", value: "news" },
          { title: "Success", value: "success" },
          { title: "Event", value: "event" }
        ]
      },
      initialValue: "news",
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "publishedAt", title: "Published date", type: "datetime", group: "settings", validation: (Rule) => Rule.required() }),
    defineField({ name: "eventDate", title: "Event date", type: "date", group: "settings" }),
    defineField({ name: "location", title: "Location", type: "string", group: "settings" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, group: "content", validation: (Rule) => Rule.required().min(40).max(300) }),
    defineField({ name: "body", title: "Article content", type: "text", rows: 10, group: "content", validation: (Rule) => Rule.required().min(80) }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
    }),
    defineField({ name: "featured", title: "Featured article", type: "boolean", group: "settings", initialValue: false }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  orderings: [
    { title: "Published date, newest", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      date: "publishedAt",
      featured: "featured",
      media: "coverImage"
    },
    prepare: ({ title, subtitle, date, featured, media }) => {
      const dateLabel = date ? new Date(date).toLocaleDateString("en-IE") : "No date";
      const chip = featured ? "Featured" : subtitle || "Article";

      return {
        title,
        subtitle: `${chip} - ${dateLabel}`,
        media
      };
    }
  }
});
