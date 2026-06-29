"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  label: string;
  location: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

/**
 * Link component that automatically tracks clicks to GA4
 * @param label - The button/link label for tracking
 * @param location - Where the link appears (e.g., 'hero_section', 'final_cta')
 */
export function TrackedLink({ href, label, location, children, className, onClick }: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent("cta_click", {
      cta_label: label,
      location: location,
      destination: href
    });
    onClick?.();
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children || label}
    </Link>
  );
}
