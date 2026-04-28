export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const academyImageByStyle = {
  ballroom: {
    src: "/images/wpda9.jpg",
    alt: "Ballroom couple in formal competition hold",
    width: 1365,
    height: 2048
  },
  latin: {
    src: "/images/wpda12.jpg",
    alt: "Latin solo performance under stage lights",
    width: 1365,
    height: 2048
  },
  breaking: {
    src: "/images/breakdance.jpg",
    alt: "Breakdance crew in a dynamic street-style freeze",
    width: 612,
    height: 408
  },
  hiphop: {
    src: "/images/wpda6.jpeg",
    alt: "Children in a hip-hop and breaking class with coach",
    width: 1179,
    height: 714
  }
} as const;

export const homepageImages = {
  hero: {
    src: "/images/wpda1.webp",
    alt: "Group ballroom and latin class in WPDA studio",
    width: 1440,
    height: 1080
  },
  kids: {
    src: "/images/wpda9.jpeg",
    alt: "Young children smiling during class",
    width: 1536,
    height: 2048
  },
  beginners: {
    src: "/images/wpda5.webp",
    alt: "Adults learning partner dance in a beginner class",
    width: 1080,
    height: 810
  },
  warmup: {
    src: "/images/wpda4.webp",
    alt: "Students in a conditioning and warm-up session",
    width: 1310,
    height: 778
  },
  competitionKids: {
    src: "/images/wpda7.png",
    alt: "Young competition dancers with number bibs",
    width: 469,
    height: 415
  },
  teamMoment: {
    src: "/images/wpda14.jpeg",
    alt: "WPDA team at a dance event backdrop",
    width: 2048,
    height: 1877
  }
} as const;

export const classesImages = {
  earlyYears: {
    src: "/images/wpda8.jpeg",
    alt: "Very young dancers in a circle activity",
    width: 1536,
    height: 2048
  },
  childrenTeens: {
    src: "/images/wpda2.webp",
    alt: "Children and teen ballroom class in studio",
    width: 1440,
    height: 1080
  },
  adults: {
    src: "/images/wpda5.webp",
    alt: "Adult partner dancers in beginner session",
    width: 1080,
    height: 810
  },
  specialist: {
    src: "/images/wpda4.webp",
    alt: "Cross-training and fitness work supporting dancers",
    width: 1310,
    height: 778
  }
} as const;

export const aboutImages = {
  community: {
    src: "/images/wpda10.jpg",
    alt: "Children celebrating together at a dance event",
    width: 1440,
    height: 1920
  },
  support: {
    src: "/images/wpda11.jpeg",
    alt: "Young dancer in competition attire preparing backstage",
    width: 1200,
    height: 1600
  },
  academyLife: {
    src: "/images/wpda3.webp",
    alt: "Structured class line-up in the academy studio",
    width: 1440,
    height: 1080
  }
} as const;

export const competitiveImages = {
  feature: {
    src: "/images/wpda13.jpg",
    alt: "Ballroom pair in vibrant competition performance",
    width: 1365,
    height: 2048
  },
  kidsComp: {
    src: "/images/wpda7.png",
    alt: "Junior dancers at competition venue",
    width: 469,
    height: 415
  },
  hug: {
    src: "/images/mat_dak.webp",
    alt: "Young dancers celebrating after a performance",
    width: 960,
    height: 1280
  }
} as const;

export const contactImage: ImageAsset = {
  src: "/images/wpda.webp",
  alt: "Wojtek Potaszkin Dance Academy logo",
  width: 574,
  height: 600
};

export const teamHeadshots: Record<string, ImageAsset | null> = {
  "Wojtek Potaszkin": {
    src: "/images/wojtek.webp",
    alt: "Wojtek Potaszkin portrait",
    width: 1376,
    height: 2048
  },
  "Elaine O'Dwyer": {
    src: "/images/elaine.webp",
    alt: "Elaine O'Dwyer portrait",
    width: 1188,
    height: 2047
  },
  "Sinead Doyle": {
    src: "/images/sinead.jpeg",
    alt: "Sinead Doyle profile image",
    width: 1366,
    height: 2048
  },
  "Volodymyr Belei": {
    src: "/images/volodymr.jpg",
    alt: "Volodymyr Belei portrait",
    width: 400,
    height: 600
  },
  "Zhenya Kovalenko": {
    src: "/images/zhenya.jpg",
    alt: "Breaking performance connected to Zhenya Kovalenko",
    width: 538,
    height: 807
  },
  "Elena Konopljova": {
    src: "/images/elena.jpg",
    alt: "Elena Konopljova portrait",
    width: 400,
    height: 600
  },
  "Cathy Caulfield": null,
  "LesleyAnn Jones": null
};

export const curatedGallery: { title: string; images: ImageAsset[] }[] = [
  {
    title: "Ballroom",
    images: [
      { src: "/images/wpda9.jpg", alt: "Ballroom couple in competition", width: 1365, height: 2048 },
      { src: "/images/wpda13.jpg", alt: "Ballroom pair in pink gown", width: 1365, height: 2048 }
    ]
  },
  {
    title: "Latin",
    images: [
      { src: "/images/wpda12.jpg", alt: "Latin solo costume performance", width: 1365, height: 2048 },
      { src: "/images/wpda11.jpeg", alt: "Latin costume portrait before event", width: 1200, height: 1600 }
    ]
  },
  {
    title: "Breaking / Hip-Hop",
    images: [
      { src: "/images/zhenya.jpg", alt: "Breaking stage freeze", width: 538, height: 807 },
      { src: "/images/wpda6.jpeg", alt: "Kids breaking and hip-hop class", width: 1179, height: 714 }
    ]
  },
  {
    title: "Classes",
    images: [
      { src: "/images/wpda1.webp", alt: "Youth group class in studio", width: 1440, height: 1080 },
      { src: "/images/wpda5.webp", alt: "Adults learning partner steps", width: 1080, height: 810 }
    ]
  },
  {
    title: "Competitions",
    images: [
      { src: "/images/wpda7.png", alt: "Junior dancers at event", width: 469, height: 415 },
      { src: "/images/wpda10.jpg", alt: "Young dancers hugging at competition", width: 1440, height: 1920 }
    ]
  },
  {
    title: "Academy Life",
    images: [
      { src: "/images/wpda8.jpeg", alt: "Small children circle activity", width: 1536, height: 2048 },
      { src: "/images/wpda14.jpeg", alt: "Team and dancers at event backdrop", width: 2048, height: 1877 }
    ]
  }
];

export const wojtekGallery: ImageAsset[] = [
  { src: "/images/wojtek_main.webp", alt: "Wojtek Potaszkin founder portrait", width: 960, height: 1280 },
  { src: "/images/wojtek.webp", alt: "Wojtek Potaszkin studio portrait", width: 1376, height: 2048 },
  { src: "/images/wojtek3.webp", alt: "Wojtek Potaszkin at WDSF event", width: 960, height: 959 },
  { src: "/images/wojtek2.webp", alt: "Wojtek Potaszkin adjudicating event", width: 878, height: 524 },
  { src: "/images/wojtek8.webp", alt: "Wojtek Potaszkin at championship floor", width: 720, height: 721 },
  { src: "/images/wojtek7.webp", alt: "Wojtek Potaszkin on adjudicator panel", width: 496, height: 496 },
  { src: "/images/wojtek6.webp", alt: "Wojtek Potaszkin with international officials", width: 992, height: 992 },
  { src: "/images/wojtek_1.webp", alt: "Wojtek Potaszkin judging detail", width: 591, height: 1214 },
  { src: "/images/wojtek5.webp", alt: "Wojtek Potaszkin adjudicator lineup", width: 496, height: 496 }
];
