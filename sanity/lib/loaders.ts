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
  classCategoriesQuery,
  competitionPageQuery,
  contactPageQuery,
  galleryImagesQuery,
  joinPageQuery,
  newsArticleBySlugQuery,
  newsArticleSlugsQuery,
  newsArticlesQuery,
  pageSeoByKeyQuery,
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
  const baseNavLinks = fallbackNavLinks as NavLink[];
  const navLinks = baseNavLinks.some((link) => link.href === "/news-success")
    ? baseNavLinks
    : [...baseNavLinks, { href: "/news-success", label: "News & Success" }];

  const baseSocialLinks = [
    { platform: "facebook", url: siteConfig.facebook },
    { platform: "instagram", url: siteConfig.instagram },
    { platform: "twitter", url: siteConfig.twitter },
    { platform: "youtube", url: siteConfig.youtube }
  ] as { platform: string; url: string }[];

  const socialLinks = [
    ...baseSocialLinks,
    { platform: "facebook", url: siteConfig.facebook },
    { platform: "instagram", url: siteConfig.instagram },
    { platform: "twitter", url: siteConfig.twitter },
    { platform: "youtube", url: siteConfig.youtube }
  ].filter((item, index, list) => list.findIndex((entry) => entry.platform.toLowerCase() === item.platform.toLowerCase()) === index);

  return {
    academyName: siteConfig.name,
    shortName: siteConfig.shortName,
    tagline: siteConfig.tagline,
    domain: siteConfig.domain,
    primaryEmail: siteConfig.email,
    primaryPhone: siteConfig.phone,
    whatsapp: siteConfig.whatsapp,
    addressText: `${siteConfig.city}, ${siteConfig.country}`,
    footerText: "Welcoming Ballroom, Latin, Breaking and Hip-Hop classes in Dublin for children, teens and adults.",
    socialLinks,
    defaultSeo: {
      title: `${siteConfig.name} | Dance Academy Dublin`,
      description: "Welcoming dance classes in Dublin for children, teens and adults across Ballroom, Latin, Breaking and Hip-Hop."
    },
    navLinks
  };
});

export const getHomepageContent = cache(async () => {
  const [{ data: categories }, { data: team }, { data: testimonials }] = await Promise.all([
    sanityFetch({ query: classCategoriesQuery, tags: ["classCategory"] }),
    sanityFetch({ query: teamMembersQuery, tags: ["teamMember"] }),
    sanityFetch({ query: testimonialsQuery, tags: ["testimonial"] })
  ]);
  const home = undefined as
    | {
        styles?: { title: string; description: string; image?: Parameters<typeof toDisplayImage>[0] }[];
        heroEyebrow?: string;
        heroHeadline?: string;
        heroSubheadline?: string;
        heroPrimaryCta?: { label: string; href: string };
        heroSecondaryCta?: { label: string; href: string };
        heroImage?: Parameters<typeof toDisplayImage>[0];
        introEyebrow?: string;
        introTitle?: string;
        introText?: string;
        introImages?: unknown[];
        stylesSectionTitle?: string;
        competitiveHighlights?: { text: string }[];
        valuePillars?: { title: string; text: string }[];
        teamSectionTitle?: string;
        galleryPreviewImages?: unknown[];
        finalCtaEyebrow?: string;
        finalCtaTitle?: string;
        finalCtaText?: string;
        finalPrimaryCta?: { label: string; href: string };
        finalSecondaryCta?: { label: string; href: string };
        seo?: SeoFields;
      }
    | undefined;

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
    heroEyebrow: home?.heroEyebrow || "Dance Academy Dublin",
    heroHeadline: home?.heroHeadline || "A friendly place for your child to start dancing.",
    heroSubheadline:
      home?.heroSubheadline ||
      "At WPDA, children, teens and adults can try Ballroom, Latin, Breaking and Hip-Hop in a warm, encouraging studio. No experience is needed, just come as you are and we will help you find the right class.",
    heroPrimaryCta: home?.heroPrimaryCta || { label: "Find The Right Class", href: "/classes" },
    heroSecondaryCta: home?.heroSecondaryCta || { label: "Ask Us A Question", href: "/contact" },
    heroImage: toDisplayImage(home?.heroImage, "Hero image") || homepageImages.hero,
    introEyebrow: home?.introEyebrow || "For Families",
    introTitle: home?.introTitle || "A studio where dancers are known by name",
    introText:
      home?.introText ||
      "Starting something new can feel like a big step. Our coaches make it easier with friendly guidance, clear routines and a positive atmosphere where children can settle in, build confidence and enjoy moving.",
    introImages: (home?.introImages || [])
      .map((item: unknown, index: number) => toDisplayImage(item as never, `Intro image ${index + 1}`))
      .filter(Boolean) as DisplayImage[],
    styleTitle: home?.stylesSectionTitle || "Let them try a style that feels fun.",
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
    teamSectionTitle: home?.teamSectionTitle || "Supportive coaches, friendly faces",
    teamPreview: normalizeTeam(team),
    galleryPreviewImages: (home?.galleryPreviewImages || [])
      .map((item: unknown, index: number) => toDisplayImage(item as never, `Gallery preview ${index + 1}`))
      .filter(Boolean) as DisplayImage[],
    finalCtaEyebrow: home?.finalCtaEyebrow || "Start Here",
    finalCtaTitle: home?.finalCtaTitle || "Come say hello and we will help you choose.",
    finalCtaText:
      home?.finalCtaText ||
      "Tell us your child's age, experience and interests, and we will point you toward a class that feels like a good first step.",
    finalPrimaryCta: home?.finalPrimaryCta || { label: "Start Here", href: "/join" },
    finalSecondaryCta: home?.finalSecondaryCta || { label: "Message Us On WhatsApp", href: siteConfig.whatsapp },
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
  return {
    pageTitle: "A dance academy where families feel at home",
    introCopy:
      "WPDA is a friendly Dublin dance community where children, teens and adults can feel welcome, build confidence and enjoy learning from coaches who care.",
    academyPhilosophy:
      "We keep classes clear, upbeat and encouraging. Dancers learn the foundations properly, but they are also given space to relax, enjoy the music and feel proud of small wins along the way.",
    supportiveEnvironment:
      "New dancers are never expected to know what to do straight away. Coaches explain each step, check in often and help every student feel included from the beginning.",
    parentFamilyMessaging:
      "Choosing a class for your child can bring a lot of questions. We are happy to talk through age groups, styles, timetables and what to expect before they arrive.",
    pathwayMessaging:
      "As dancers grow, we keep the next step clear, whether that means building confidence in class, trying a new style or preparing for a performance.",
    valuePillars: fallbackValuePillars,
    supportingImages: [],
    seo: undefined,
    fallbackImages: [aboutImages.community, aboutImages.academyLife, aboutImages.support]
  };
});

export const getCompetitionPage = cache(async () => {
  const { data } = await sanityFetch({ query: competitionPageQuery, tags: ["competitionPage"] });
  return {
    intro:
      data?.intro ||
      "When a dancer is ready for performances or competitions, WPDA helps them take that step with encouragement, clear coaching and steady support.",
    pathway: data?.competitiveTrainingPathway?.length
      ? data.competitiveTrainingPathway.map((item: { text: string }) => item.text)
      : [
          "Build strong basics with patient coaching",
          "Learn routines and performance confidence",
          "Practice with feedback and encouragement",
          "Prepare calmly for events when ready"
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
      "Wojtek built WPDA as a place where dancers can learn well, feel encouraged and enjoy the confidence that dance brings.",
    heroImage: toDisplayImage(profile?.heroImage, "Wojtek hero") || wojtekGallery[0],
    biographySections: profile?.biographySections?.length
      ? profile.biographySections.map((item: { text: string }) => item.text)
      : [
          "Started dancing in Poland as a child and fell in love with Ballroom and Latin.",
          "Built a rich competition background and international dance experience.",
          "Moved to Ireland in 2009 and became a trusted teacher and academy leader.",
          "Now shares his experience with dancers of all ages in a warm, supportive studio."
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
      "Children and adults are welcome, including complete beginners. Send us a message and we will help you choose a comfortable first class.",
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
    title: data?.title || "Let's find the right class together",
    intro:
      data?.intro ||
      "Tell us a little about the dancer and we will help with class times, age groups and the best place to begin.",
    ctaLabel: data?.ctaLabel || "Ask About Classes",
    ctaHref: data?.ctaHref || "/contact",
    pathways:
      data?.pathways || [
        {
          title: "Young Beginners",
          text: "Gentle first classes for children who are ready to try dance in a friendly group."
        },
        {
          title: "Teens",
          text: "Welcoming classes where teens can build confidence, learn technique and enjoy their chosen style."
        },
        {
          title: "Adults",
          text: "Supportive classes for adults learning solo or as a couple in a relaxed setting."
        },
        {
          title: "Ready For More",
          text: "For dancers who want performances or competitions, we can guide the next step when the time feels right."
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
      "Share your dancer's age, current experience and any style they are curious about. We will recommend a class and explain what to expect.",
    primaryCtaLabel: data?.primaryCtaLabel || "Ask Us A Question",
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
