"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type SecondaryLinkProps = {
  href: string;
  label: string;
  eventLabel: string;
  location?: string;
};

export function SecondaryLink({ href, label, eventLabel, location = "page" }: SecondaryLinkProps) {
  const handleClick = () => {
    trackEvent("secondary_link_click", {
      link_label: eventLabel,
      location: location,
      destination: href
    });
  };

  return (
    <Link href={href} onClick={handleClick} className="text-sm font-semibold text-gold hover:text-ivory">
      {label}
    </Link>
  );
}
