"use client";

import { trackEvent } from "@/lib/analytics";

type TrackedAnchorProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  title?: string;
  eventLabel: string;
  eventLocation?: string;
  eventType?: string;
};

/**
 * Anchor/link element that tracks clicks to GA4
 * Use for external links, social links, or any <a> tag that needs tracking
 */
export function TrackedAnchor({
  href,
  children,
  className,
  target,
  rel,
  "aria-label": ariaLabel,
  title,
  eventLabel,
  eventLocation = "page",
  eventType = "link_click"
}: TrackedAnchorProps) {
  const handleClick = () => {
    trackEvent(eventType, {
      link_label: eventLabel,
      location: eventLocation,
      url: href
    });
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      title={title}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
