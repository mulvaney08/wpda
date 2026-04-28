import { defineField, defineType } from "sanity";

export const pageSeo = defineType({
  name: "pageSeo",
  title: "Page SEO",
  type: "document",
  fields: [
    defineField({
      name: "pageKey",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Classes", value: "classes" },
          { title: "Team", value: "team" },
          { title: "Gallery", value: "gallery" },
          { title: "Join", value: "join" },
          { title: "News & Success", value: "news-success" }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", validation: (Rule) => Rule.required() })
  ],
  preview: {
    select: { title: "pageKey", subtitle: "seo.title" },
    prepare: ({ title, subtitle }) => ({
      title: title ? `SEO: ${title}` : "Page SEO",
      subtitle
    })
  }
});
