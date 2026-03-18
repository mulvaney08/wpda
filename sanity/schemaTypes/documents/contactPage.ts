import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "settings", title: "Settings" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "introText", title: "Intro text", type: "text", rows: 3, group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "contactGuidance", title: "Contact guidance", type: "text", rows: 4, group: "content" }),
    defineField({ name: "inquiryCtaText", title: "Inquiry CTA text", type: "string", group: "content" }),
    defineField({ name: "mapEmbedUrl", title: "Map embed URL", type: "url", group: "settings" }),
    defineField({ name: "openingContactNotes", title: "Opening/contact notes", type: "text", rows: 3, group: "content" }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    prepare: () => ({ title: "Contact page" })
  }
});
