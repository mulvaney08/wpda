/**
 * Google Analytics 4 Event Tracking
 * Usage: trackEvent('button_click', { location: 'hero_section' })
 */

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: EventParams) {
  // Only runs in browser
  if (typeof window === "undefined") return;

  // Access gtag from global window object
  const gtag = (window as any).gtag;
  if (!gtag) {
    console.warn("Google Analytics not loaded yet");
    return;
  }

  gtag("event", eventName, params);
}

// Common event tracking helpers
export const analytics = {
  // CTA clicks
  trackCtaClick: (label: string, location: string) =>
    trackEvent("cta_click", { cta_label: label, location }),

  // Navigation
  trackNavigation: (destination: string) =>
    trackEvent("navigation", { destination }),

  // Form interactions
  trackFormStart: (formName: string) =>
    trackEvent("form_start", { form_name: formName }),

  trackFormSubmit: (formName: string) =>
    trackEvent("form_submit", { form_name: formName }),

  // Social links
  trackSocialClick: (platform: string) =>
    trackEvent("social_click", { platform }),

  // External links
  trackExternalLink: (url: string) =>
    trackEvent("external_link", { url }),

  // Page sections
  trackSectionView: (sectionName: string) =>
    trackEvent("section_view", { section: sectionName })
};
