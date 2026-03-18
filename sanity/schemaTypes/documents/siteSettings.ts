import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "brand", title: "Brand" },
    { name: "contact", title: "Contact" },
    { name: "social", title: "Social" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "academyName", title: "Academy name", type: "string", group: "brand", validation: (Rule) => Rule.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", group: "brand", validation: (Rule) => Rule.required().max(12) }),
    defineField({ name: "tagline", title: "Tagline", type: "string", group: "brand", validation: (Rule) => Rule.required().max(120) }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "brand",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })]
    }),
    defineField({ name: "domain", title: "Site domain", type: "url", group: "brand", validation: (Rule) => Rule.required() }),
    defineField({ name: "primaryEmail", title: "Primary email", type: "string", group: "contact", validation: (Rule) => Rule.required().email() }),
    defineField({ name: "primaryPhone", title: "Primary phone", type: "string", group: "contact", validation: (Rule) => Rule.required() }),
    defineField({ name: "whatsapp", title: "WhatsApp URL", type: "url", group: "contact" }),
    defineField({ name: "addressText", title: "Address / location text", type: "text", rows: 2, group: "contact" }),
    defineField({ name: "footerText", title: "Footer description", type: "text", rows: 3, group: "brand" }),
    defineField({
      name: "navLinks",
      title: "Navigation links",
      type: "array",
      group: "brand",
      of: [{ type: "link" }],
      validation: (Rule) => Rule.max(10)
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      group: "social",
      of: [{ type: "socialLink" }],
      validation: (Rule) => Rule.max(6)
    }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seo", group: "seo" })
  ],
  preview: {
    select: { title: "academyName", subtitle: "tagline", media: "logo" }
  }
});
