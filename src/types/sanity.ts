export type DisplayImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavLink = {
  href: string;
  label: string;
};

export type SiteShell = {
  academyName: string;
  shortName: string;
  tagline: string;
  domain: string;
  primaryEmail: string;
  primaryPhone: string;
  whatsapp: string;
  addressText: string;
  footerText: string;
  socialLinks: { platform: string; url: string }[];
  defaultSeo?: SeoFields;
  navLinks: NavLink[];
};

export type TeamMemberCard = {
  name: string;
  role: string;
  focus: string;
  shortBio: string;
  fullBio?: string;
  featured?: boolean;
  image: DisplayImage | null;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
};

export type SeoFields = {
  title?: string;
  description?: string;
  noindex?: boolean;
};

export type HomeStyleCard = {
  title: string;
  description: string;
  image: DisplayImage;
};
