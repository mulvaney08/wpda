import { type SchemaTypeDefinition } from "sanity";
import { seo } from "@/sanity/schemaTypes/objects/seo";
import { link } from "@/sanity/schemaTypes/objects/link";
import { socialLink } from "@/sanity/schemaTypes/objects/socialLink";
import { valuePillar } from "@/sanity/schemaTypes/objects/valuePillar";
import { highlightItem } from "@/sanity/schemaTypes/objects/highlightItem";
import { faqItem } from "@/sanity/schemaTypes/objects/faqItem";
import { styleCard } from "@/sanity/schemaTypes/objects/styleCard";
import { siteSettings } from "@/sanity/schemaTypes/documents/siteSettings";
import { homepage } from "@/sanity/schemaTypes/documents/homepage";
import { classCategory } from "@/sanity/schemaTypes/documents/classCategory";
import { teamMember } from "@/sanity/schemaTypes/documents/teamMember";
import { wojtekProfile } from "@/sanity/schemaTypes/documents/wojtekProfile";
import { academyPage } from "@/sanity/schemaTypes/documents/academyPage";
import { competitionPage } from "@/sanity/schemaTypes/documents/competitionPage";
import { testimonial } from "@/sanity/schemaTypes/documents/testimonial";
import { galleryImage } from "@/sanity/schemaTypes/documents/galleryImage";
import { contactPage } from "@/sanity/schemaTypes/documents/contactPage";
import { joinPage } from "@/sanity/schemaTypes/documents/joinPage";
import { pageSeo } from "@/sanity/schemaTypes/documents/pageSeo";

export const schemaTypes: SchemaTypeDefinition[] = [
  seo,
  link,
  socialLink,
  valuePillar,
  highlightItem,
  faqItem,
  styleCard,
  siteSettings,
  homepage,
  classCategory,
  teamMember,
  wojtekProfile,
  academyPage,
  competitionPage,
  testimonial,
  galleryImage,
  contactPage,
  joinPage,
  pageSeo
];
