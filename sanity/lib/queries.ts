import { groq } from "next-sanity";

const imageFields = groq`
  alt,
  asset->{
    metadata{dimensions{width,height}}
  },
  crop,
  hotspot
`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  academyName,
  shortName,
  tagline,
  domain,
  primaryEmail,
  primaryPhone,
  whatsapp,
  addressText,
  footerText,
  navLinks[]{label,href},
  socialLinks[]{platform,url},
  defaultSeo{title,description,noindex,ogImage{${imageFields}}}
}`;

export const homepageQuery = groq`*[_type == "homepage"][0]{
  heroEyebrow,
  heroHeadline,
  heroSubheadline,
  heroPrimaryCta{label,href},
  heroSecondaryCta{label,href},
  heroImage{${imageFields}},
  introEyebrow,
  introTitle,
  introText,
  introImages[]{${imageFields}},
  stylesSectionTitle,
  styles[]{
    title,
    description,
    image{${imageFields}}
  },
  competitiveHighlights[]{text},
  valuePillars[]{title,text},
  teamSectionTitle,
  galleryPreviewImages[]{${imageFields}},
  finalCtaEyebrow,
  finalCtaTitle,
  finalCtaText,
  finalPrimaryCta{label,href},
  finalSecondaryCta{label,href},
  seo{title,description,noindex,ogImage{${imageFields}}}
}`;

export const classCategoriesQuery = groq`*[_type == "classCategory"]|order(displayOrder asc){
  _id,
  title,
  audienceType,
  styleTags,
  shortDescription,
  longDescription,
  partnerRequired,
  levelInfo,
  ctaText,
  featuredImage{${imageFields}}
}`;

export const teamMembersQuery = groq`*[_type == "teamMember"]|order(order asc){
  _id,
  name,
  role,
  "focus": select(defined(specialties[0]) => specialties[0], "Team"),
  shortBio,
  fullBio,
  featured,
  profileImage{${imageFields}}
}`;

export const academyPageQuery = groq`*[_type == "academyPage"][0]{
  pageTitle,
  introCopy,
  academyPhilosophy,
  supportiveEnvironment,
  parentFamilyMessaging,
  pathwayMessaging,
  valuePillars[]{title,text},
  supportingImages[]{${imageFields}},
  seo{title,description,noindex,ogImage{${imageFields}}}
}`;

export const competitionPageQuery = groq`*[_type == "competitionPage"][0]{
  intro,
  competitiveTrainingPathway[]{text},
  featuredAchievements[]{text},
  eventHighlights[]{text},
  milestones,
  supportingImages[]{${imageFields}},
  seo{title,description,noindex,ogImage{${imageFields}}}
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"]|order(featured desc, order asc){
  _id,
  quote,
  name,
  dancerType,
  tag,
  featured
}`;

export const galleryImagesQuery = groq`*[_type == "galleryImage" && !wojtekOnly]|order(featured desc, order asc){
  _id,
  title,
  category,
  featured,
  image{${imageFields}}
}`;

export const wojtekPageQuery = groq`*[_type == "wojtekProfile"][0]{
  name,
  headline,
  intro,
  heroImage{${imageFields}},
  biographySections[]{text},
  qualifications,
  achievements,
  judgingCredentials,
  mediaAppearances,
  philosophy,
  gallery[]{${imageFields}},
  seo{title,description,noindex,ogImage{${imageFields}}}
}`;

export const contactPageQuery = groq`*[_type == "contactPage"][0]{
  heading,
  introText,
  contactGuidance,
  inquiryCtaText,
  mapEmbedUrl,
  openingContactNotes,
  seo{title,description,noindex,ogImage{${imageFields}}}
}`;

export const joinPageQuery = groq`*[_type == "joinPage"][0]{
  eyebrow,
  title,
  intro,
  ctaLabel,
  ctaHref,
  pathways[]{title,text},
  timetableImage{${imageFields}},
  howToStartTitle,
  howToStartText,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  seo{title,description,noindex,ogImage{${imageFields}}}
}`;

export const pageSeoByKeyQuery = groq`*[_type == "pageSeo" && pageKey == $pageKey][0]{
  seo{title,description,noindex,ogImage{${imageFields}}}
}`;

export const wojtekGalleryFallbackQuery = groq`*[_type == "galleryImage" && wojtekOnly == true]|order(featured desc, order asc){
  _id,
  title,
  image{${imageFields}}
}`;
