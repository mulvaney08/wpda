import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ImagePanel } from "@/components/image-panel";
import { getContactPage } from "@/sanity/lib/loaders";

const contactPhone = "+353858755367";
const whatsappUrl =
  "https://wa.me/353858755367?text=Hi%2C%20I%20got%20your%20WhatsApp%20information%20from%20your%20website.";
const palmerstownMapsUrl = "https://maps.google.com/?q=Wojtek+Potaszkin+Dance+Academy+Palmerstown";
const palmerstownMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.231564707825!2d-6.37729682275584!3d53.35701057392494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670d23b1062cb3%3A0x881b2319fc55f4b7!2sWojtek%20Potaszkin%20Dance%20Academy!5e0!3m2!1sen!2sie!4v1777418644329!5m2!1sen!2sie";

const socialIconLinks = [
  {
    platform: "WhatsApp",
    url: whatsappUrl,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.38-1.67a11.82 11.82 0 0 0 5.68 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Zm-8.46 18.3h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.7-.23-.38a9.82 9.82 0 0 1-1.52-5.25c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.02 6.98 2.89a9.8 9.8 0 0 1 2.9 6.97c0 5.44-4.44 9.86-9.84 9.86Zm5.4-7.38c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5a9.1 9.1 0 0 1-1.68-2.09c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.51 0 1.48 1.09 2.92 1.24 3.12.15.2 2.13 3.25 5.15 4.55.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    )
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/wojtek_potaszkin",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm8.39 1.72H7.86a4.14 4.14 0 0 0-4.14 4.14v8.28a4.14 4.14 0 0 0 4.14 4.14h8.28a4.14 4.14 0 0 0 4.14-4.14V7.86a4.14 4.14 0 0 0-4.14-4.14ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.72A3.28 3.28 0 1 0 12 15.28 3.28 3.28 0 0 0 12 8.72Zm5.18-2.46a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
      </svg>
    )
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/WPDanceAcademy/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8v3h2.1v8h3.4Z" />
      </svg>
    )
  }
];

const otherSocialLinks = [
  {
    platform: "Twitter",
    url: "https://twitter.com/WPotaszkin/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.82L6.08 22H3l7.24-8.28L.8 2h6.35l4.42 6.17L18.9 2Zm-1.1 18h1.73L6.2 3.9H4.34L17.8 20Z" />
      </svg>
    )
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/channel/UCQEKtyPazgjqwHe8cIBZUAQ",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
        <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.6 4.6 12 4.6 12 4.6s-7.6 0-9.4.5A3 3 0 0 0 .5 7.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-4.8ZM9.6 15.2V8.8L15.8 12l-6.2 3.2Z" />
      </svg>
    )
  }
];

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
          {/* Left Column - Contact Info */}
          <article className="surface p-7 md:p-10">
            <h2 className="font-serif text-3xl md:text-4xl">Get in touch</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Reach out via WhatsApp, phone, or follow us on social media for the fastest response to your inquiries.</p>
            
            {/* WhatsApp CTA */}
            <div className="mt-8 rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-6 md:p-8">
              <p className="text-sm font-semibold text-gold">💬 Preferred contact method</p>
              <p className="mt-2 text-sm md:text-base !text-white">Get a fast response by messaging us on WhatsApp. Perfect for class inquiries, trial bookings, and questions!</p>
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noreferrer" 
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory transition-colors"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.38-1.67a11.82 11.82 0 0 0 5.68 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Zm-8.46 18.3h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.7-.23-.38a9.82 9.82 0 0 1-1.52-5.25c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.02 6.98 2.89a9.8 9.8 0 0 1 2.9 6.97c0 5.44-4.44 9.86-9.84 9.86Zm5.4-7.38c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5a9.1 9.1 0 0 1-1.68-2.09c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.51 0 1.48 1.09 2.92 1.24 3.12.15.2 2.13 3.25 5.15 4.55.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>

            {/* Direct Contact & Socials */}
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Direct contact</p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>
                    <div className="text-gold font-semibold mb-1">📞 Phone</div>
                    <a href={`tel:${contactPhone}`} className="text-gold hover:text-ivory">
                      {contactPhone}
                    </a>
                  </li>
                  <li>
                    <div className="text-gold font-semibold mb-1">📍 Studio Location</div>
                    <a href={palmerstownMapsUrl} target="_blank" rel="noreferrer" className="text-gold hover:text-ivory">
                      Palmerstown, Dublin
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Most effective</p>
                <div className="flex flex-wrap gap-3">
                  {socialIconLinks.map((item) => (
                    <a
                      key={item.platform}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.platform}
                      title={item.platform}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/35 hover:border-gold hover:text-gold transition-colors"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {page.openingContactNotes ? <p className="mt-8 text-sm text-white/70">{page.openingContactNotes}</p> : null}
          </article>

          {/* Right Column - Image */}
          <article className="surface overflow-hidden">
            <ImagePanel
              image={page.contactImage}
              className="rounded-none border-0 h-[360px] md:h-[500px] bg-[#1d1d1b]"
              imgClassName="object-contain"
              imgStyle={{ objectFit: "contain", objectPosition: "center" }}
            />
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/20 bg-black/25 px-7 pb-7">
              <iframe
                src={palmerstownMapEmbedUrl}
                className="h-[300px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wojtek Potaszkin Dance Academy location map"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
