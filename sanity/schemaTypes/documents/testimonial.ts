import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (Rule) => Rule.required().min(20).max(400) }),
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "dancerType",
      title: "Dancer type",
      type: "string",
      options: {
        list: [
          { title: "Parent", value: "parent" },
          { title: "Adult", value: "adult" },
          { title: "Student", value: "student" },
          { title: "Dancer", value: "dancer" }
        ]
      }
    }),
    defineField({ name: "tag", title: "Tag/category", type: "string" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 100 })
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "quote", featured: "featured" },
    prepare: ({ title, subtitle, featured }) => ({
      title,
      subtitle: `${featured ? "Featured • " : ""}${subtitle || ""}`
    })
  }
});
