import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ImagePanel } from "@/components/image-panel";
import { getContactPage } from "@/sanity/lib/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage();

  return {
    title: page.seo?.title || "Contact",
    description:
      page.seo?.description ||
      "Contact Wojtek Potaszkin Dance Academy in Dublin for class guidance, trial options, private lessons and competition pathway inquiries.",
    robots: page.seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function ContactPage() {
  const page = await getContactPage();

  return (
    <>
      <PageHero eyebrow="Contact WPDA" title={page.heading} intro={page.introText} />

      <section className="section-wrap pb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface p-7">
            <h2 className="font-serif text-3xl">Send an inquiry</h2>
            <form className="mt-6 space-y-4" aria-label="Contact form">
              <label className="block text-sm">
                Name
                <input type="text" className="mt-2 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3" required />
              </label>
              <label className="block text-sm">
                Email
                <input type="email" className="mt-2 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3" required />
              </label>
              <label className="block text-sm">
                Class interest
                <select className="mt-2 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3" defaultValue="">
                  <option value="" disabled>
                    Select a class type
                  </option>
                  <option>Children’s Classes</option>
                  <option>Teen Classes</option>
                  <option>Adult Beginner</option>
                  <option>Competitive Training</option>
                  <option>Private Lessons</option>
                  <option>Wedding Lessons</option>
                </select>
              </label>
              <label className="block text-sm">
                Message
                <textarea rows={4} className="mt-2 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3" />
              </label>
              <button type="submit" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
                {page.inquiryCtaText}
              </button>
            </form>
            <p className="mt-4 text-xs text-white/55">{page.contactGuidance || "Form wiring can be connected to your preferred email/service provider."}</p>
          </article>

          <article className="surface overflow-hidden">
            <ImagePanel
              image={page.contactImage}
              className="rounded-none border-0 h-[360px] md:h-[420px] bg-[#1d1d1b]"
              imgClassName="object-contain"
              imgStyle={{ objectFit: "contain", objectPosition: "center" }}
            />
            <div className="p-7">
              <h2 className="font-serif text-3xl">Talk to the academy</h2>
              <ul className="mt-5 space-y-3 text-white/80">
                <li>
                  Email:{" "}
                  <a href={`mailto:${page.site.primaryEmail}`} className="text-gold hover:text-ivory">
                    {page.site.primaryEmail}
                  </a>
                </li>
                <li>
                  Phone: <span className="text-white/60">{page.site.primaryPhone}</span>
                </li>
                {page.site.whatsapp ? (
                  <li>
                    WhatsApp:{" "}
                    <a href={page.site.whatsapp} className="text-gold hover:text-ivory">
                      Start chat
                    </a>
                  </li>
                ) : null}
                <li>
                  Dublin studio location: <span className="text-white/60">{page.site.addressText}</span>
                </li>
              </ul>

              {page.mapEmbedUrl ? (
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/20 bg-black/25">
                  <iframe
                    src={page.mapEmbedUrl}
                    className="h-[320px] w-full md:h-[380px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wojtek Potaszkin Dance Academy location map"
                  />
                </div>
              ) : null}

              <div className="mt-6 space-y-2 text-sm text-white/80">
                {page.site.socialLinks.map((item: { platform: string; url: string }) => (
                  <p key={item.platform}>
                    <a href={item.url} target="_blank" rel="noreferrer" className="hover:text-gold">
                      {item.platform[0].toUpperCase() + item.platform.slice(1)}
                    </a>
                  </p>
                ))}
              </div>
              {page.openingContactNotes ? <p className="mt-5 text-sm text-white/70">{page.openingContactNotes}</p> : null}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
