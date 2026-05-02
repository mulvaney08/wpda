import {
  academyImageByStyle,
  aboutImages,
  classesImages,
  competitiveImages,
  contactImage,
  curatedGallery,
  homepageImages,
  teamHeadshots,
  wojtekGallery
} from "@/data/images";
import {
  classCategories as fallbackClassCategories,
  navLinks as fallbackNavLinks,
  siteConfig,
  styleCards as fallbackStyleCards,
  successHighlights,
  teamMembers as fallbackTeamMembers,
  valuePillars as fallbackValuePillars
} from "@/data/site";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { toDisplayImage } from "@/sanity/lib/image";
import {
  academyPageQuery,
  classCategoriesQuery,
  competitionPageQuery,
  contactPageQuery,
  galleryImagesQuery,
  homepageQuery,
  joinPageQuery,
  newsArticleBySlugQuery,
  newsArticleSlugsQuery,
  newsArticlesQuery,
  pageSeoByKeyQuery,
  siteSettingsQuery,
  teamMembersQuery,
  testimonialsQuery,
  wojtekGalleryFallbackQuery,
  wojtekPageQuery
} from "@/sanity/lib/queries";
import type { DisplayImage, HomeStyleCard, NavLink, NewsArticle, NewsArticleSummary, SeoFields, SiteShell, TeamMemberCard } from "@/src/types/sanity";

type SanityClassCategory = {
  title: string;
  audienceType?: string;
  shortDescription?: string;
  longDescription?: string;
  partnerRequired?: string;
  featuredImage?: Parameters<typeof toDisplayImage>[0];
};

type SanityTeamMember = {
  name: string;
  role: string;
  focus?: string;
  shortBio: string;
  fullBio?: string;
  featured?: boolean;
  profileImage?: Parameters<typeof toDisplayImage>[0];
};

type SanityNewsArticle = {
  _id: string;
  title: string;
  slug?: string;
  category?: "news" | "success" | "event";
  excerpt: string;
  publishedAt?: string;
  eventDate?: string;
  location?: string;
  featured?: boolean;
  body?: string;
  seo?: SeoFields;
  coverImage?: Parameters<typeof toDisplayImage>[0];
};

export const getSiteShell = cache(async (): Promise<SiteShell> => {
  const { data } = await sanityFetch({ query: siteSettingsQuery, tags: ["siteSettings"] });

  const baseNavLinks = (data?.navLinks?.length ? data.navLinks : fallbackNavLinks) as NavLink[];
  const navLinks = baseNavLinks.some((link) => link.href === "/news-success")
    ? baseNavLinks
    : [...baseNavLinks, { href: "/news-success", label: "News & Success" }];

  const baseSocialLinks = (data?.socialLinks?.length
    ? data.socialLinks
    : [
        { platform: "facebook", url: siteConfig.facebook },
        { platform: "instagram", url: siteConfig.instagram },
        { platform: "twitter", url: siteConfig.twitter },
        { platform: "youtube", url: siteConfig.youtube }
      ]) as { platform: string; url: string }[];

  const socialLinks = [
    ...baseSocialLinks,
    { platform: "facebook", url: siteConfig.facebook },
    { platform: "instagram", url: siteConfig.instagram },
    { platform: "twitter", url: siteConfig.twitter },
    { platform: "youtube", url: siteConfig.youtube }
  ].filter((item, index, list) => list.findIndex((entry) => entry.platform.toLowerCase() === item.platform.toLowerCase()) === index);

  const siteWhatsapp = data?.whatsapp && data.whatsapp !== "#" ? data.whatsapp : siteConfig.whatsapp;

  return {
    academyName: data?.academyName || siteConfig.name,
    shortName: data?.shortName || siteConfig.shortName,
    tagline: data?.tagline || siteConfig.tagline,
    domain: data?.domain || siteConfig.domain,
    primaryEmail: data?.primaryEmail || siteConfig.email,
    primaryPhone: data?.primaryPhone || siteConfig.phone,
    whatsapp: siteWhatsapp,
    addressText: data?.addressText || `${siteConfig.city}, ${siteConfig.country}`,
    footerText:
      data?.footerText ||
      "Premium Ballroom, Latin, Breaking and Hip-Hop training in Dublin for children, teens, adults and competitive dancers.",
    socialLinks,
    defaultSeo: data?.defaultSeo,
    navLinks
  };
});

export const getHomepageContent = cache(async () => {
  const [{ data: home }, { data: categories }, { data: team }, { data: testimonials }] = await Promise.all([
    sanityFetch({ query: homepageQuery, tags: ["homepage"] }),
    sanityFetch({ query: classCategoriesQuery, tags: ["classCategory"] }),
    sanityFetch({ query: teamMembersQuery, tags: ["teamMember"] }),
    sanityFetch({ query: testimonialsQuery, tags: ["testimonial"] })
  ]);

  const stylesFromSanity = (home?.styles || [])
    .map((style: { title: string; description: string; image?: Parameters<typeof toDisplayImage>[0] }) => {
      const image = toDisplayImage(style.image, style.title);
      if (!image) return null;
      return {
        title: style.title,
        description: style.description,
        image
      };
    })
    .filter(Boolean) as HomeStyleCard[];

  const fallbackStyles: HomeStyleCard[] = fallbackStyleCards.map((style) => ({
    title: style.title,
    description: style.description,
    image:
      style.title === "Ballroom"
        ? academyImageByStyle.ballroom
        : style.title === "Latin"
          ? academyImageByStyle.latin
          : style.title === "Breaking"
            ? academyImageByStyle.breaking
            : academyImageByStyle.hiphop
  }));

  return {
    heroEyebrow: home?.heroEyebrow || "Dance Academy",
    heroHeadline: home?.heroHeadline || "High-level training with a warm, supportive academy culture.",
    heroSubheadline:
      home?.heroSubheadline ||
      "WPDA welcomes children, teens and adults into Ballroom, Latin, Breaking and Hip-Hop. Beginners feel comfortable from day one, and committed dancers can grow toward competitive goals.",
    heroPrimaryCta: home?.heroPrimaryCta || { label: "Find Your Class", href: "/classes" },
    heroSecondaryCta: home?.heroSecondaryCta || { label: "Talk To The Academy", href: "/contact" },
    heroImage: toDisplayImage(home?.heroImage, "Hero image") || homepageImages.hero,
    introEyebrow: home?.introEyebrow || "Academy Atmosphere",
    introTitle: home?.introTitle || "Serious standards, encouraging experience",
    introText:
      home?.introText ||
      "Families trust WPDA because dancers are coached with care, clear structure and positive discipline. We focus on progress, confidence and enjoyment in equal measure.",
    introImages: (home?.introImages || [])
      .map((item: unknown, index: number) => toDisplayImage(item as never, `Intro image ${index + 1}`))
      .filter(Boolean) as DisplayImage[],
    styleTitle: home?.stylesSectionTitle || "Four disciplines. One academy standard.",
    styles: stylesFromSanity.length ? stylesFromSanity : fallbackStyles,
    categories: categories?.length
      ? categories
      : fallbackClassCategories.map((group) => ({
          title: group.title,
          classes: group.classes,
          featuredImage: null
        })),
    competitiveHighlights: home?.competitiveHighlights?.length
      ? home.competitiveHighlights.map((item: { text: string }) => item.text)
      : successHighlights,
    valuePillars: home?.valuePillars?.length ? home.valuePillars : fallbackValuePillars,
    teamSectionTitle: home?.teamSectionTitle || "Guided by experienced coaches and caring academy staff",
    teamPreview: normalizeTeam(team),
    galleryPreviewImages: (home?.galleryPreviewImages || [])
      .map((item: unknown, index: number) => toDisplayImage(item as never, `Gallery preview ${index + 1}`))
      .filter(Boolean) as DisplayImage[],
    finalCtaEyebrow: home?.finalCtaEyebrow || "Start Your Journey",
    finalCtaTitle: home?.finalCtaTitle || "Everyone can start with confidence at WPDA",
    finalCtaText:
      home?.finalCtaText ||
      "If you are choosing a first class for your child, returning to dance as an adult, or aiming toward competition, we will help you find the right next step.",
    finalPrimaryCta: home?.finalPrimaryCta || { label: "View Timetable Pathways", href: "/join" },
    finalSecondaryCta: home?.finalSecondaryCta || { label: "WhatsApp Inquiry", href: siteConfig.whatsapp },
    testimonials: testimonials || [],
    seo: home?.seo
  };
});

export const getClassCategories = cache(async () => {
  const { data } = await sanityFetch({ query: classCategoriesQuery, tags: ["classCategory"] });

  if (!data?.length) {
    return fallbackClassCategories.map((group, index) => ({
      title: group.title,
      classes: group.classes,
      featuredImage: [classesImages.earlyYears, classesImages.childrenTeens, classesImages.adults, classesImages.specialist][index]
    }));
  }

  return (data as SanityClassCategory[]).map((group, index: number) => ({
    title: group.title,
    classes: [
      {
        name: group.title,
        audience: group.audienceType || "mixed",
        description: group.longDescription || group.shortDescription || "",
        partnerRequired: group.partnerRequired || "Optional"
      }
    ],
    featuredImage:
      toDisplayImage(group.featuredImage, group.title) ||
      [classesImages.earlyYears, classesImages.childrenTeens, classesImages.adults, classesImages.specialist][index % 4]
  }));
});

export const getTeamMembers = cache(async () => {
  const { data } = await sanityFetch({ query: teamMembersQuery, tags: ["teamMember"] });
  return normalizeTeam(data);
});

export const getAcademyPage = cache(async () => {
  const { data } = await sanityFetch({ query: academyPageQuery, tags: ["academyPage"] });
  return {
    pageTitle: data?.pageTitle || "Built on dedication, attitude and passion",
    introCopy:
      data?.introCopy ||
      "Wojtek Potaszkin Dance Academy is a Dublin dance community where high standards and a genuinely caring atmosphere grow side by side.",
    academyPhilosophy: data?.academyPhilosophy,
    supportiveEnvironment: data?.supportiveEnvironment,
    parentFamilyMessaging: data?.parentFamilyMessaging,
    pathwayMessaging: data?.pathwayMessaging,
    valuePillars: data?.valuePillars?.length ? data.valuePillars : fallbackValuePillars,
    supportingImages: (data?.supportingImages || [])
      .map((item: unknown, index: number) => toDisplayImage(item as never, `About image ${index + 1}`))
      .filter(Boolean) as DisplayImage[],
    seo: data?.seo,
    fallbackImages: [aboutImages.community, aboutImages.academyLife, aboutImages.support]
  };
});

export const getCompetitionPage = cache(async () => {
  const { data } = await sanityFetch({ query: competitionPageQuery, tags: ["competitionPage"] });
  return {
    intro:
      data?.intro ||
      "WPDA offers a structured performance and competition pathway backed by technical coaching, strategic preparation and strong team support.",
    pathway: data?.competitiveTrainingPathway?.length
      ? data.competitiveTrainingPathway.map((item: { text: string }) => item.text)
      : [
          "Foundation technique and movement quality",
          "Performance mindset and choreography blocks",
          "Partnering, floorcraft and event simulation",
          "National and international event preparation"
        ],
    achievements:
      data?.featuredAchievements?.length
        ? data.featuredAchievements.map((item: { text: string }) => item.text)
        : successHighlights,
    eventHighlights:
      data?.eventHighlights?.length ? data.eventHighlights.map((item: { text: string }) => item.text) : successHighlights,
    milestones: data?.milestones || successHighlights,
    supportingImages: (data?.supportingImages || [])
      .map((item: unknown, index: number) => toDisplayImage(item as never, `Competitive image ${index + 1}`))
      .filter(Boolean) as DisplayImage[],
    fallbackImages: [competitiveImages.feature, competitiveImages.kidsComp, competitiveImages.hug],
    seo: data?.seo
  };
});

export const getWojtekPage = cache(async () => {
  const [{ data: profile }, { data: fallbackGallery }] = await Promise.all([
    sanityFetch({ query: wojtekPageQuery, tags: ["wojtekProfile"] }),
    sanityFetch({ query: wojtekGalleryFallbackQuery, tags: ["galleryImage"] })
  ]);

  const gallery = (profile?.gallery || fallbackGallery || [])
    .map((item: unknown, index: number) => toDisplayImage(item as never, `Wojtek image ${index + 1}`))
    .filter(Boolean) as DisplayImage[];

  return {
    name: profile?.name || "Wojtek Potaszkin",
    headline: profile?.headline || "Wojtek Potaszkin",
    intro:
      profile?.intro ||
      "Wojtek built WPDA to combine discipline, passion and elite dance standards in a supportive academy structure for every generation of dancer.",
    heroImage: toDisplayImage(profile?.heroImage, "Wojtek hero") || wojtekGallery[0],
    biographySections: profile?.biographySections?.length
      ? profile.biographySections.map((item: { text: string }) => item.text)
      : [
          "Started dancing in Poland as a child and developed a strong competitive foundation.",
          "Built successful competition results and international dance experience.",
          "Moved to Ireland in 2009 and rose to become one of the country's top dancers.",
          "Competed internationally while expanding his role as coach and academy leader."
        ],
    qualifications: profile?.qualifications || [],
    achievements: profile?.achievements || [],
    judgingCredentials: profile?.judgingCredentials || [],
    mediaAppearances: profile?.mediaAppearances || [],
    philosophy: profile?.philosophy,
    gallery: gallery.length ? gallery : wojtekGallery.slice(1),
    seo: profile?.seo
  };
});

export const getGalleryPage = cache(async () => {
  const { data } = await sanityFetch({ query: galleryImagesQuery, tags: ["galleryImage"] });

  if (!data?.length) {
    return curatedGallery;
  }

  const grouped = new Map<string, DisplayImage[]>();

  for (const item of data) {
    const image = toDisplayImage(item.image, item.title);
    if (!image) continue;

    const title = toTitleCase(item.category || "Gallery");
    const list = grouped.get(title) || [];
    list.push(image);
    grouped.set(title, list);
  }

  return Array.from(grouped.entries()).map(([title, images]) => ({ title, images }));
});

export const getContactPage = cache(async () => {
  const [{ data: page }, site] = await Promise.all([
    sanityFetch({ query: contactPageQuery, tags: ["contactPage"] }),
    getSiteShell()
  ]);

  return {
    heading: page?.heading || "Let's find the right class for you",
    introText:
      page?.introText ||
      "Children and adults are welcome, including complete beginners. Reach out and we will guide you toward the right class pathway.",
    contactGuidance: page?.contactGuidance,
    inquiryCtaText: page?.inquiryCtaText || "Send Inquiry",
    openingContactNotes: page?.openingContactNotes,
    mapEmbedUrl: page?.mapEmbedUrl,
    seo: page?.seo,
    contactImage,
    site
  };
});

export const getJoinPage = cache(async () => {
  const { data } = await sanityFetch({ query: joinPageQuery, tags: ["joinPage"] });

  return {
    eyebrow: data?.eyebrow || "Join WPDA",
    title: data?.title || "Find your timetable pathway",
    intro:
      data?.intro ||
      "Class slots vary by age group, level and season. Contact the academy for current timetable guidance and placement support.",
    ctaLabel: data?.ctaLabel || "Request Current Timetable",
    ctaHref: data?.ctaHref || "/contact",
    pathways:
      data?.pathways || [
        {
          title: "Children Starter Path",
          text: "Introductory classes including Baby Ballroom and beginner youth foundations."
        },
        {
          title: "Teen Development Path",
          text: "Style progression through Ballroom/Latin and Breaking/Hip-Hop training blocks."
        },
        {
          title: "Adult Beginner Path",
          text: "Supportive classes for adults learning solo or as a couple in a no-pressure setting."
        },
        {
          title: "Competitive Path",
          text: "Coaching intensity and performance preparation for dancers targeting events."
        }
      ],
    timetableImage:
      toDisplayImage(data?.timetableImage, "Wojtek Potaszkin Dance Academy timetable image") || {
        src: "/images/timetable_wpda.png",
        alt: "Wojtek Potaszkin Dance Academy timetable image",
        width: 862,
        height: 588
      },
    howToStartTitle: data?.howToStartTitle || "How to start",
    howToStartText:
      data?.howToStartText ||
      "Share your dancer’s age, current experience and preferred style. WPDA will recommend the best class and next available option.",
    primaryCtaLabel: data?.primaryCtaLabel || "Contact Academy Team",
    primaryCtaHref: data?.primaryCtaHref || "/contact",
    secondaryCtaLabel: data?.secondaryCtaLabel || "View Class Types",
    secondaryCtaHref: data?.secondaryCtaHref || "/classes",
    seo: data?.seo
  };
});

export const getNewsArticles = cache(async (): Promise<NewsArticleSummary[]> => {
  const { data } = await sanityFetch({ query: newsArticlesQuery, tags: ["newsArticle"] });

  if (!data?.length) return [];

  return (data as SanityNewsArticle[])
    .filter((item) => Boolean(item.slug))
    .map((item) => ({
      id: item._id,
      title: item.title,
      slug: item.slug || "",
      category: item.category || "news",
      excerpt: item.excerpt,
      publishedAt: item.publishedAt || new Date().toISOString(),
      eventDate: item.eventDate,
      location: item.location,
      featured: item.featured,
      coverImage: toDisplayImage(item.coverImage, item.title)
    }));
});

export const getNewsArticleBySlug = cache(async (slug: string): Promise<NewsArticle | null> => {
  const { data } = await sanityFetch({
    query: newsArticleBySlugQuery,
    params: { slug },
    tags: ["newsArticle", `newsArticle:${slug}`]
  });

  const item = data as SanityNewsArticle | null;
  if (!item || !item.slug) return null;

  return {
    id: item._id,
    title: item.title,
    slug: item.slug,
    category: item.category || "news",
    excerpt: item.excerpt,
    body: item.body || "",
    publishedAt: item.publishedAt || new Date().toISOString(),
    eventDate: item.eventDate,
    location: item.location,
    featured: item.featured,
    coverImage: toDisplayImage(item.coverImage, item.title),
    seo: item.seo
  };
});

export const getNewsArticleSlugs = cache(async (): Promise<string[]> => {
  const data = await client.withConfig({ stega: { enabled: false } }).fetch(newsArticleSlugsQuery);
  if (!data?.length) return [];

  return (data as { slug?: string }[]).map((item) => item.slug).filter((slug): slug is string => Boolean(slug));
});

export const getPageSeo = cache(async (pageKey: "classes" | "team" | "gallery" | "join" | "news-success") => {
  const { data } = await sanityFetch({
    query: pageSeoByKeyQuery,
    params: { pageKey },
    tags: ["pageSeo", `pageSeo:${pageKey}`]
  });

  return (data?.seo || null) as SeoFields | null;
});

export const getTestimonials = cache(async () => {
  const { data } = await sanityFetch({ query: testimonialsQuery, tags: ["testimonial"] });
  return data || [];
});

function normalizeTeam(data: SanityTeamMember[] | null | undefined): TeamMemberCard[] {
  if (!data?.length) {
    return fallbackTeamMembers.map((member) => ({
      ...getTeamImagePresentation(member.name, Boolean(teamHeadshots[member.name])),
      name: member.name,
      role: member.role,
      focus: member.focus,
      shortBio: member.bio,
      fullBio: member.extra,
      featured: member.featured,
      image: teamHeadshots[member.name] || contactImage
    }));
  }

  return data.map((member) => ({
    ...getTeamImagePresentation(member.name, Boolean(member.profileImage)),
    name: member.name,
    role: member.role,
    focus: member.focus || "Team",
    shortBio: member.shortBio,
    fullBio: member.fullBio,
    featured: member.featured,
    image: toDisplayImage(member.profileImage, member.name) || contactImage
  }));
}

function getTeamImagePresentation(name: string, hasProfileImage: boolean): Pick<TeamMemberCard, "imageFit" | "imagePosition"> {
  if (!hasProfileImage) {
    return { imageFit: "contain", imagePosition: "50% 50%" };
  }

  if (name === "Wojtek Potaszkin") {
    return { imageFit: "cover", imagePosition: "50% 20%" };
  }

  if (name === "Elaine O'Dwyer") {
    return { imageFit: "cover", imagePosition: "50% 20%" };
  }

  if (name === "Sinead Doyle") {
    return { imageFit: "cover", imagePosition: "50% 18%" };
  }

  if (name === "Elena Konopljova") {
    return { imageFit: "cover", imagePosition: "50% 22%" };
  }

  return { imageFit: "cover", imagePosition: "50% 50%" };
}

function toTitleCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
import { cache } from "react";
