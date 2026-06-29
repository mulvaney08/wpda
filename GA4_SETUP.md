# Google Analytics 4 Setup Guide

## What's Been Configured

✅ **GA4 Package Installed** - `@next/third-parties/google`
✅ **Analytics Utility** - `lib/analytics.ts` with reusable tracking functions
✅ **Root Layout Updated** - GA4 script automatically injected
✅ **Button Tracking** - Main CTAs and secondary links track clicks
✅ **Social Links Tracking** - Social media clicks tracked
✅ **Article Links Tracking** - News article reads tracked

## Next Steps to Enable Tracking

### 1. Set Up Google Analytics 4

1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Create** and select **Web**
3. Enter your site details:
   - Property name: "WPDA" (or your name)
   - Website URL: `https://wojtekdance.com`
4. Accept terms and create
5. Go to **Data Streams** → **Web**
6. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### 2. Add to Environment

Update `.env.local`:
```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### 3. Deploy & Wait for Data

- Push code changes
- Deploy to production (Vercel/host)
- Wait 24-48 hours for GA4 to process events
- Check **Real-time** report to verify clicks are being tracked

## What's Being Tracked

### Primary CTAs (Hero & Final CTA Sections)
- Join/Start buttons
- Secondary action buttons
- Event: `cta_click`
- Tracks: label, location, destination

### Secondary Links
- View Full Gallery
- View All News
- Meet The Full Team
- Event: `secondary_link_click`
- Tracks: link_label, location, destination

### Content Engagement
- Individual news article clicks
- Event: `article_link_click`
- Tracks: article_title, location

### Social Media
- Facebook, Instagram, YouTube, Twitter clicks
- Event: `social_click`
- Tracks: platform, location

## How to Use Analytics Utility

```typescript
import { trackEvent, analytics } from "@/lib/analytics";

// Custom event
trackEvent("button_clicked", { 
  button_name: "join",
  section: "hero" 
});

// Pre-built helpers
analytics.trackCtaClick("Join Classes", "hero_section");
analytics.trackSocialClick("instagram");
analytics.trackExternalLink("https://example.com");
```

## Adding Tracking to New Components

### For Links
```tsx
import { TrackedLink } from "@/components/tracked-link";

<TrackedLink
  href="/classes"
  label="View Classes"
  location="navigation"
  className="your-classes"
>
  View Classes
</TrackedLink>
```

### For Custom Events
```tsx
"use client";
import { trackEvent } from "@/lib/analytics";

<button onClick={() => trackEvent("form_submitted", { form_type: "inquiry" })}>
  Submit
</button>
```

## GA4 Dashboard Tips

- **Real-time**: See clicks as they happen
- **Events**: Track `cta_click`, `social_click`, `article_link_click`
- **Parameters**: Filter by location, label, platform
- **Conversions**: Set up custom goals (e.g., email signups)

## Troubleshooting

- GA4 takes 24-48 hours to show data
- Check browser console for GA4 warnings
- Verify `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` is set
- Test in Dev Tools > Network tab to see gtag requests
