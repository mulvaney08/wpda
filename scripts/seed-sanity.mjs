import { createClient } from "@sanity/client";

const siteConfig = {
  name: "Wojtek Potaszkin Dance Academy",
  shortName: "WPDA",
  domain: "https://wojtekdance.com",
  city: "Dublin",
  country: "Ireland",
  email: "contact@replace-this-email.ie",
  phone: "+353 (0)00 000 0000",
  whatsapp: "#",
  instagram: "https://www.instagram.com/wojtekdance/",
  facebook: "https://www.facebook.com/WojtekDance",
  youtube: "https://www.youtube.com/channel/UCuTfVfM0dNf1Zx3kJ7gR-UQ"
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/competitive", label: "Competitive" },
  { href: "/gallery", label: "Gallery" },
  { href: "/wojtek", label: "Wojtek" },
  { href: "/contact", label: "Contact" }
];

const styleCards = [
  { title: "Ballroom", description: "Precision, posture and partnership-led training in Standard and Smooth-inspired foundations for social and competitive dancers." },
  { title: "Latin", description: "Rhythm, performance quality and technical clarity across core Latin disciplines with progressive class pathways." },
  { title: "Breaking", description: "Athletic fundamentals, musicality and battle confidence for young dancers building strong movement vocabulary." },
  { title: "Hip-Hop", description: "High-energy choreography classes that develop timing, confidence and stage presence from beginner level upward." }
];

const successHighlights = [
  "Dancers progressing from first classes to national-level competition pathways",
  "Regular participation in Irish and international dance events",
  "Students representing Ireland in competitive Ballroom and Latin settings",
  "Ongoing academy milestones celebrated through WPDA news and event updates"
];

const valuePillars = [
  { title: "World-Class Coaching", text: "Experienced coaches blend high standards with clear, supportive instruction." },
  { title: "Pathways For All Levels", text: "From complete beginner to serious competitor, dancers can grow at the right pace." },
  { title: "Family Partnership", text: "WPDA works closely with parents to create consistency, trust and long-term progress." },
  { title: "Safe, Positive Culture", text: "A caring studio atmosphere where children, teens and adults feel welcome and respected." }
];

const classCategories = [
  {
    title: "Early Years",
    classes: [{ description: "A playful first step into dance through rhythm and movement games.", partnerRequired: "No" }]
  },
  {
    title: "Children & Teens",
    classes: [{ description: "Structured classes across Ballroom, Latin and street styles.", partnerRequired: "Not required" }]
  },
  {
    title: "Adults",
    classes: [{ description: "Supportive adult classes for new and returning dancers.", partnerRequired: "Solo or couple" }]
  },
  {
    title: "Specialist Sessions",
    classes: [{ description: "Private lessons, workshops and focused progression support.", partnerRequired: "Optional" }]
  }
];

const teamMembers = [
  { name: "Wojtek Potaszkin", role: "Founder | Ballroom & Latin Director", focus: "Ballroom & Latin", bio: "Founder profile.", extra: "Qualifications and adjudicator credentials.", featured: true },
  { name: "Elaine O'Dwyer", role: "Studio Management & Parent Support", focus: "Operations", bio: "Leads communication and family support.", extra: "Warm and organised studio experience." },
  { name: "Sinead Doyle", role: "Ballroom & Latin Coach", focus: "Technique Coaching", bio: "Supports dancers from beginner foundations onward.", extra: "Works closely with youth dancers." },
  { name: "Volodymyr Belei", role: "Breaking & Hip-Hop Coach", focus: "Street Styles", bio: "High-energy breaking and hip-hop coaching.", extra: "Supports recreational and ambitious dancers." }
];

const faqs = [
  { q: "Do I need a partner to join?", a: "No. Many classes are designed for solo participation." },
  { q: "Are beginners welcome?", a: "Yes. WPDA runs beginner-friendly classes for children, teens and adults." },
  { q: "Can dancers move into competitions?", a: "Yes. Committed dancers can transition into competition-focused coaching." },
  { q: "Do you offer private sessions?", a: "Yes. Private lessons are available for technical development and choreography." }
];

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "eiyahath";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_VIEWER_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN (or SANITY_VIEWER_TOKEN with write permissions).");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const singletonDocs = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    academyName: siteConfig.name,
    shortName: siteConfig.shortName,
    tagline: "Dance Academy",
    domain: siteConfig.domain,
    primaryEmail: siteConfig.email,
    primaryPhone: siteConfig.phone,
    whatsapp: siteConfig.whatsapp,
    addressText: `${siteConfig.city}, ${siteConfig.country}`,
    footerText:
      "Premium Ballroom, Latin, Breaking and Hip-Hop training in Dublin for children, teens, adults and competitive dancers.",
    navLinks,
    socialLinks: [
      { _key: "facebook", _type: "socialLink", platform: "facebook", url: siteConfig.facebook },
      { _key: "instagram", _type: "socialLink", platform: "instagram", url: siteConfig.instagram },
      { _key: "youtube", _type: "socialLink", platform: "youtube", url: siteConfig.youtube }
    ],
    defaultSeo: {
      _type: "seo",
      title: `${siteConfig.name} | Dance Academy Dublin`,
      description:
        "Premium dance academy in Dublin for Ballroom, Latin, Breaking and Hip-Hop. Classes for children, teens and adults from beginner to competitive level.",
      noindex: false
    }
  },
  {
    _id: "homepage",
    _type: "homepage",
    heroEyebrow: "Dance Academy Dublin",
    heroHeadline: "High-level training with a warm, supportive academy culture.",
    heroSubheadline:
      "WPDA welcomes children, teens and adults into Ballroom, Latin, Breaking and Hip-Hop. Beginners feel comfortable from day one, and committed dancers can grow toward competitive goals.",
    heroPrimaryCta: { _type: "link", label: "Find Your Class", href: "/classes" },
    heroSecondaryCta: { _type: "link", label: "Talk To The Academy", href: "/contact" },
    introEyebrow: "Academy Atmosphere",
    introTitle: "Serious standards, encouraging experience",
    introText:
      "Families trust WPDA because dancers are coached with care, clear structure and positive discipline. We focus on progress, confidence and enjoyment in equal measure.",
    stylesSectionTitle: "Four disciplines. One academy standard.",
    styles: styleCards.map((card, idx) => ({ _key: `style-${idx}`, _type: "styleCard", title: card.title, description: card.description })),
    competitiveHighlights: successHighlights.map((text, idx) => ({ _key: `highlight-${idx}`, _type: "highlightItem", text })),
    valuePillars: valuePillars.map((item, idx) => ({ _key: `pillar-${idx}`, _type: "valuePillar", title: item.title, text: item.text })),
    teamSectionTitle: "Guided by experienced coaches and caring academy staff",
    finalCtaEyebrow: "Start Your Journey",
    finalCtaTitle: "Everyone can start with confidence at WPDA",
    finalCtaText:
      "If you are choosing a first class for your child, returning to dance as an adult, or aiming toward competition, we will help you find the right next step.",
    finalPrimaryCta: { _type: "link", label: "View Timetable Pathways", href: "/join" },
    finalSecondaryCta: { _type: "link", label: "WhatsApp Inquiry", href: siteConfig.whatsapp }
  },
  {
    _id: "academyPage",
    _type: "academyPage",
    pageTitle: "Built on dedication, attitude and passion",
    introCopy:
      "Wojtek Potaszkin Dance Academy is a Dublin dance community where high standards and a genuinely caring atmosphere grow side by side.",
    academyPhilosophy:
      "Great dance training combines technical precision with emotional confidence. WPDA coaches focus on fundamentals, musicality, performance expression and healthy long-term habits.",
    supportiveEnvironment:
      "Beginners are welcomed with patience, while experienced dancers are guided toward advanced goals with structure and accountability.",
    parentFamilyMessaging:
      "The academy works closely with families through transparent communication, class guidance and practical support around events and milestones.",
    pathwayMessaging: "This partnership helps dancers stay confident, happy and consistent as they progress.",
    valuePillars: valuePillars.map((item, idx) => ({ _key: `value-${idx}`, _type: "valuePillar", title: item.title, text: item.text }))
  },
  {
    _id: "competitionPage",
    _type: "competitionPage",
    intro:
      "WPDA offers a structured performance and competition pathway backed by technical coaching, strategic preparation and strong team support.",
    competitiveTrainingPathway: [
      "Foundation technique and movement quality",
      "Performance mindset and choreography blocks",
      "Partnering, floorcraft and event simulation",
      "National and international event preparation"
    ].map((text, idx) => ({ _key: `path-${idx}`, _type: "highlightItem", text })),
    featuredAchievements: successHighlights.map((text, idx) => ({ _key: `ach-${idx}`, _type: "highlightItem", text })),
    eventHighlights: successHighlights.map((text, idx) => ({ _key: `event-${idx}`, _type: "highlightItem", text })),
    milestones: successHighlights
  },
  {
    _id: "contactPage",
    _type: "contactPage",
    heading: "Let's find the right class for you",
    introText:
      "Children and adults are welcome, including complete beginners. Reach out and we will guide you toward the right class pathway.",
    inquiryCtaText: "Send Inquiry"
  },
  {
    _id: "wojtekProfile",
    _type: "wojtekProfile",
    name: "Wojtek Potaszkin",
    headline: "Wojtek Potaszkin",
    intro:
      "Wojtek built WPDA to combine discipline, passion and elite dance standards in a supportive academy structure for every generation of dancer.",
    biographySections: [
      "Started dancing in Poland as a child and developed a strong competitive foundation.",
      "Built successful competition results and international dance experience.",
      "Moved to Ireland in 2009 and rose to become one of the country's top dancers.",
      "Competed internationally while expanding his role as coach and academy leader."
    ].map((text, idx) => ({ _key: `bio-${idx}`, _type: "highlightItem", text }))
  },
  {
    _id: "joinPage",
    _type: "joinPage",
    eyebrow: "Join WPDA",
    title: "Find your timetable pathway",
    intro:
      "Class slots vary by age group, level and season. Contact the academy for current timetable guidance and placement support.",
    ctaLabel: "Request Current Timetable",
    ctaHref: "/contact",
    pathways: [
      { title: "Children Starter Path", text: "Introductory classes including Baby Ballroom and beginner youth foundations." },
      { title: "Teen Development Path", text: "Style progression through Ballroom/Latin and Breaking/Hip-Hop training blocks." },
      { title: "Adult Beginner Path", text: "Supportive classes for adults learning solo or as a couple in a no-pressure setting." },
      { title: "Competitive Path", text: "Coaching intensity and performance preparation for dancers targeting events." }
    ].map((p, idx) => ({ _key: `join-${idx}`, _type: "object", ...p })),
    howToStartTitle: "How to start",
    howToStartText:
      "Share your dancer’s age, current experience and preferred style. WPDA will recommend the best class and next available option.",
    primaryCtaLabel: "Contact Academy Team",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "View Class Types",
    secondaryCtaHref: "/classes"
  }
];

const pageSeoDocs = [
  ["classes", "Classes"],
  ["team", "Team"],
  ["gallery", "Gallery"],
  ["join", "Join"]
].map(([pageKey, title]) => ({
  _id: `pageSeo.${pageKey}`,
  _type: "pageSeo",
  pageKey,
  seo: {
    _type: "seo",
    title,
    description: `${title} page metadata`
  }
}));

const classDocs = classCategories.map((group, idx) => ({
  _id: `classCategory.${idx + 1}`,
  _type: "classCategory",
  title: group.title,
  slug: { _type: "slug", current: group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") },
  audienceType:
    group.title.toLowerCase().includes("adult")
      ? "adults"
      : group.title.toLowerCase().includes("teen") || group.title.toLowerCase().includes("children")
        ? "children"
        : "mixed",
  styleTags: ["ballroom"],
  shortDescription: group.classes[0]?.description || "",
  longDescription: group.classes.map((c) => c.description).join(" "),
  partnerRequired: group.classes[0]?.partnerRequired || "Optional",
  displayOrder: idx + 1
}));

const teamDocs = teamMembers.map((member, idx) => ({
  _id: `teamMember.${idx + 1}`,
  _type: "teamMember",
  name: member.name,
  slug: { _type: "slug", current: member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") },
  role: member.role,
  shortBio: member.bio,
  fullBio: member.extra,
  specialties: [member.focus],
  featured: !!member.featured,
  order: idx + 1
}));

const testimonialDocs = faqs.map((item, idx) => ({
  _id: `testimonial.${idx + 1}`,
  _type: "testimonial",
  quote: item.a,
  name: item.q,
  dancerType: "student",
  tag: "FAQ",
  featured: idx < 2,
  order: idx + 1
}));

async function run() {
  console.log(`Seeding Sanity project ${projectId}/${dataset}...`);

  for (const doc of singletonDocs) {
    await client.createOrReplace(doc);
  }

  for (const doc of pageSeoDocs) {
    await client.createOrReplace(doc);
  }

  for (const doc of classDocs) {
    await client.createOrReplace(doc);
  }

  for (const doc of teamDocs) {
    await client.createOrReplace(doc);
  }

  for (const doc of testimonialDocs) {
    await client.createOrReplace(doc);
  }

  console.log("Sanity seed complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
