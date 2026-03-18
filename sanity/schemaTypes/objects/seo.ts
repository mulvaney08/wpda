import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "SEO title",
      type: "string",
      validation: (Rule) => Rule.max(70)
    }),
    defineField({
      name: "description",
      title: "Meta description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(160)
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required().max(120)
        })
      ]
    }),
    defineField({
      name: "noindex",
      title: "Noindex",
      type: "boolean",
      initialValue: false,
      description: "Enable this to prevent search engines from indexing this page."
    })
  ]
});
