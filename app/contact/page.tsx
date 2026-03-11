import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Wojtek Potaszkin Dance Academy in Dublin for class guidance, trial options, private lessons and competition pathway inquiries."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact WPDA"
        title="Let’s find the right class for you"
        intro="Children and adults are welcome, including complete beginners. Reach out and we will guide you toward the right class pathway."
      />

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
                Send Inquiry
              </button>
            </form>
            <p className="mt-4 text-xs text-white/55">Form wiring can be connected to your preferred email/service provider.</p>
          </article>

          <article className="surface p-7">
            <h2 className="font-serif text-3xl">Talk to the academy</h2>
            <ul className="mt-5 space-y-3 text-white/80">
              <li>Email: <a href={`mailto:${siteConfig.email}`} className="text-gold hover:text-ivory">{siteConfig.email}</a></li>
              <li>Phone: <span className="text-white/60">{siteConfig.phone} (placeholder)</span></li>
              <li>
                WhatsApp: <a href={siteConfig.whatsapp} className="text-gold hover:text-ivory">Start chat (placeholder link)</a>
              </li>
              <li>Dublin studio location: <span className="text-white/60">exact address to be confirmed</span></li>
            </ul>

            <div className="mt-6 rounded-2xl border border-dashed border-white/20 bg-black/25 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Map Placeholder</p>
              <p className="mt-3 text-sm text-white/70">
                Embed Google Maps once final studio address details are confirmed.
              </p>
            </div>

            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>
                <a href={siteConfig.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                  Facebook
                </a>
              </p>
              <p>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
                  Instagram
                </a>
              </p>
              <p>
                <a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="hover:text-gold">
                  YouTube
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
