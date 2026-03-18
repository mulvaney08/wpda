import { defineField, defineType } from "sanity";

export const socialLink = defineType({
  name: "socialLink",
  title: "Social link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "YouTube", value: "youtube" },
          { title: "TikTok", value: "tiktok" },
          { title: "X", value: "x" }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "url",
      title: "Profile URL",
      type: "url",
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: "platform",
      subtitle: "url"
    }
  }
});
