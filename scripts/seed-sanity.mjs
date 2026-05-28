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
  { title: "Ballroom", description: "A gentle, confidence-building way to learn posture, movement and partner work at a comfortable pace." },
  { title: "Latin", description: "Lively classes full of rhythm, expression and music, with encouragement for every level of dancer." },
  { title: "Breaking", description: "Energetic classes where young dancers can build strength, musicality and their own creative style." },
  { title: "Hip-Hop", description: "Upbeat choreography that helps dancers find their timing, confidence and stage presence." }
];

const successHighlights = [
  "Children growing from nervous first classes into confident performers",
  "Friendly preparation for Irish and international dance events",
  "Students proudly representing Ireland in Ballroom and Latin settings",
  "Academy milestones celebrated with families, dancers and the wider WPDA community"
];

const valuePillars = [
  { title: "Kind Coaching", text: "Experienced coaches help dancers learn with patience, warmth and clear guidance." },
  { title: "Space To Grow", text: "Beginners can settle in gently, and motivated dancers can keep growing when they are ready." },
  { title: "Parents Included", text: "We help parents understand the class options and feel confident about the next step." },
  { title: "A Friendly Studio", text: "A caring atmosphere where children, teens and adults feel welcome, safe and respected." }
];

const classCategories = [
  {
    title: "Early Years",
    classes: [{ description: "A playful first step into dance through rhythm and movement games.", partnerRequired: "No" }]
  },
  {
    title: "Children & Teens",
    classes: [{ description: "Friendly classes across Ballroom, Latin and street styles that help children build confidence.", partnerRequired: "Not required" }]
  },
  {
    title: "Adults",
    classes: [{ description: "Supportive adult classes for new and returning dancers.", partnerRequired: "Solo or couple" }]
  },
  {
    title: "Specialist Sessions",
    classes: [{ description: "Private lessons and workshops for dancers who would like extra support or a new challenge.", partnerRequired: "Optional" }]
  }
];

const teamMembers = [
  { name: "Wojtek Potaszkin", role: "Founder, Director and Principal Teacher", focus: "Ballroom & Latin", bio: "Wojtek is the Director and Principal Teacher at WPDA. He started dancing as a little boy in Poland and brings a lifetime of Ballroom and Latin experience to the academy. Since moving to Ireland in 2009, he has shared that experience with dancers of all ages.", extra: "Wojtek holds Irish National and World DanceSport Federation adjudicator licences, and brings that depth of knowledge into the studio in a calm, approachable way. Students know him as a supportive teacher who cares about confidence, progress and the joy of dancing.", featured: true },
  { name: "Elaine O'Dwyer", role: "Ballroom & Latin Coach", focus: "Ballroom & Latin", bio: "Elaine has been involved with ballroom dancing since age 8 having danced & competed throughout that time. Elaine has a BA degree in Business Studies and 20 years experience in the finance industry. She has been working with WPDA for over 10 years originally as a dancer and now as a teacher.", extra: "In that time Elaine has won national titles in both UK and Ireland in adult & senior categories. Having completed her teaching qualifications Elaine now teaches classes within our academy across all levels. Elaine places a big focus on adult classes to help adults overcome any fears of learning to dance or returning to dancefloor as an older competitor." },
  { name: "Sinead Doyle", role: "Ballroom & Latin Coach", focus: "Ballroom & Latin", bio: "Sinead brings over 13 years of dance experience to WPDA, with a warm, energetic teaching style across Standard and Latin. She helps dancers enjoy the work, understand the music and feel more confident in their movement.", extra: "Beyond classes, Sinead supports team choreography, shows, showcases and community events. Her energy and love for dance help younger dancers feel excited about learning." },
  { name: "Volodymyr Belei", role: "Ballroom Coach", focus: "Ballroom", bio: "Volodymyr is a WDSF licensed adjudicator, choreographer and dance educator with over 30 years of teaching experience, working with both children and adults. After graduating from college and university with a degree in choreography, he dedicated his life to the dance world.", extra: "His career includes helping beginners find their footing as well as supporting dancers who want to grow further. He brings patience, experience and a deep love of dance to Ireland." },
  { name: "Zhenya Kovalenko", role: "Hiphop & Breaking Teacher", focus: "Hip-Hop & Breaking", bio: "Recent addition to the team, Zhenya brings 26 years of dance experience to the studio and has a range of dance skills including HipHop, Breaking, Jazz Funk, Jazz modern, Acro, Waacking and classic dance.", extra: "We're looking forward to the new 2025 season to see what exciting new attributes he will bring to the school." },
  { name: "Elena Konopljova", role: "Fitness Coach", focus: "Fitness & Conditioning", bio: "Elena is an experienced physical training instructor across spin, body pump, strength and conditioning, step aerobics, personal training, yoga and bodybuilding coaching.", extra: "She will provide coaching for our dancers to help with strength, stamina, flexibility and cardio fitness." },
  { name: "Cathy Caulfield", role: "Studio Manager", focus: "Operations", bio: "Cathy has over 15 years' experience in the dance industry as both dance parent and as manager of our studio. Having previously worked in childcare industry, Cathy has almost 10 years experience in the financial services industry and is QFA Financial Advisor qualified.", extra: "Cathy is often the first person new students and parents meet. She is always happy to help with class choices, payments, lessons, shoes, dresses and the many little questions that come with joining a dance academy." },
  { name: "LesleyAnn Jones", role: "Child Liaison Officer", focus: "Student Wellbeing", bio: "LesleyAnn is our designated Child Liaison Person with over 15 years' experience working in childcare. She helps keep our team up to date with Garda Vetting, child protection training and First Aid.", extra: "LesleyAnn is available for questions, concerns or suggestions from parents, and helps make the studio a safe, welcoming space for children and adults to train and enjoy." }
];

const faqs = [
  { q: "Do I need a partner to join?", a: "No. Many classes are designed for solo participation." },
  { q: "Are beginners welcome?", a: "Yes. WPDA runs beginner-friendly classes for children, teens and adults." },
  { q: "Can dancers move into competitions?", a: "Yes. If a dancer becomes interested in events, we can guide that step when they are ready." },
  { q: "Do you offer private sessions?", a: "Yes. Private lessons are available for extra support, choreography, confidence or event preparation." }
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
      "Welcoming Ballroom, Latin, Breaking and Hip-Hop classes in Dublin for children, teens and adults.",
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
        "Friendly dance academy in Dublin for Ballroom, Latin, Breaking and Hip-Hop. Classes for children, teens and adults from first steps to confident performance.",
      noindex: false
    }
  },
  {
    _id: "homepage",
    _type: "homepage",
    heroEyebrow: "Dance Academy Dublin",
    heroHeadline: "A friendly place for your child to start dancing.",
    heroSubheadline:
      "At WPDA, children, teens and adults can try Ballroom, Latin, Breaking and Hip-Hop in a warm, encouraging studio. No experience is needed, just come as you are and we will help you find the right class.",
    heroPrimaryCta: { _type: "link", label: "Find The Right Class", href: "/classes" },
    heroSecondaryCta: { _type: "link", label: "Ask Us A Question", href: "/contact" },
    introEyebrow: "For Families",
    introTitle: "A studio where dancers are known by name",
    introText:
      "Starting something new can feel like a big step. Our coaches make it easier with friendly guidance, clear routines and a positive atmosphere where children can settle in, build confidence and enjoy moving.",
    stylesSectionTitle: "Let them try a style that feels fun.",
    styles: styleCards.map((card, idx) => ({ _key: `style-${idx}`, _type: "styleCard", title: card.title, description: card.description })),
    competitiveHighlights: successHighlights.map((text, idx) => ({ _key: `highlight-${idx}`, _type: "highlightItem", text })),
    valuePillars: valuePillars.map((item, idx) => ({ _key: `pillar-${idx}`, _type: "valuePillar", title: item.title, text: item.text })),
    teamSectionTitle: "Supportive coaches, friendly faces",
    finalCtaEyebrow: "Start Here",
    finalCtaTitle: "Come say hello and we will help you choose.",
    finalCtaText:
      "Tell us your child's age, experience and interests, and we will point you toward a class that feels like a good first step.",
    finalPrimaryCta: { _type: "link", label: "Start Here", href: "/join" },
    finalSecondaryCta: { _type: "link", label: "Message Us On WhatsApp", href: siteConfig.whatsapp }
  },
  {
    _id: "academyPage",
    _type: "academyPage",
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
    valuePillars: valuePillars.map((item, idx) => ({ _key: `value-${idx}`, _type: "valuePillar", title: item.title, text: item.text }))
  },
  {
    _id: "competitionPage",
    _type: "competitionPage",
    intro:
      "When a dancer is ready for performances or competitions, WPDA helps them take that step with encouragement, clear coaching and steady support.",
    competitiveTrainingPathway: [
      "Build strong basics with patient coaching",
      "Learn routines and performance confidence",
      "Practice with feedback and encouragement",
      "Prepare calmly for events when ready"
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
      "Children and adults are welcome, including complete beginners. Send us a message and we will help you choose a comfortable first class.",
    inquiryCtaText: "Send Inquiry"
  },
  {
    _id: "wojtekProfile",
    _type: "wojtekProfile",
    name: "Wojtek Potaszkin",
    headline: "Wojtek Potaszkin",
    intro:
      "Wojtek built WPDA as a place where dancers can learn well, feel encouraged and enjoy the confidence that dance brings.",
    biographySections: [
      "Started dancing in Poland as a child and fell in love with Ballroom and Latin.",
      "Built a rich competition background and international dance experience.",
      "Moved to Ireland in 2009 and became a trusted teacher and academy leader.",
      "Now shares his experience with dancers of all ages in a warm, supportive studio."
    ].map((text, idx) => ({ _key: `bio-${idx}`, _type: "highlightItem", text }))
  },
  {
    _id: "joinPage",
    _type: "joinPage",
    eyebrow: "Join WPDA",
    title: "Let's find the right class together",
    intro:
      "Tell us a little about the dancer and we will help with class times, age groups and the best place to begin.",
    ctaLabel: "Ask About Classes",
    ctaHref: "/contact",
    pathways: [
      { title: "Young Beginners", text: "Gentle first classes for children who are ready to try dance in a friendly group." },
      { title: "Teens", text: "Welcoming classes where teens can build confidence, learn technique and enjoy their chosen style." },
      { title: "Adults", text: "Supportive classes for adults learning solo or as a couple in a relaxed setting." },
      { title: "Ready For More", text: "For dancers who want performances or competitions, we can guide the next step when the time feels right." }
    ].map((p, idx) => ({ _key: `join-${idx}`, _type: "object", ...p })),
    howToStartTitle: "How to start",
    howToStartText:
      "Share your dancer's age, current experience and any style they are curious about. We will recommend a class and explain what to expect.",
    primaryCtaLabel: "Ask Us A Question",
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
