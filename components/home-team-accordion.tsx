"use client";

import { useState } from "react";
import { ImagePanel } from "@/components/image-panel";
import { teamHeadshots } from "@/data/images";
import { teamMembers } from "@/data/site";

const logoFallback = {
  src: "/images/wpda.webp",
  alt: "Wojtek Potaszkin Dance Academy logo",
  width: 574,
  height: 600
} as const;

const membersWithImages = teamMembers
  .map((member) => {
    const image = teamHeadshots[member.name];
    if (image) {
      return { ...member, image };
    }
    if (member.name === "Cathy Caulfield" || member.name === "LesleyAnn Jones") {
      return { ...member, image: logoFallback };
    }
    return null;
  })
  .filter((member): member is NonNullable<typeof member> => member !== null);

export function HomeTeamAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = membersWithImages[activeIndex];
  const activeImageClass = active.image.src === logoFallback.src ? "object-contain p-8" : "object-[50%_32%]";

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
      <div className="surface p-3">
        <ul className="space-y-2" aria-label="Team profiles">
          {membersWithImages.map((member, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={member.name}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-gold/70 bg-gold/10"
                      : "border-white/10 bg-black/25 hover:border-white/30"
                  }`}
                  aria-pressed={isActive}
                >
                  <p className="text-sm font-semibold">{member.name}</p>
                  <p className="mt-1 text-xs text-white/70">{member.role}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <article className="surface overflow-hidden">
        <ImagePanel image={active.image} className="aspect-[4/3] rounded-none border-0" imgClassName={activeImageClass} />
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">{active.focus}</p>
          <h3 className="mt-2 font-serif text-2xl">{active.name}</h3>
          <p className="mt-2 text-sm text-white/75">{active.role}</p>
          <p className="mt-3 text-sm text-white/85">{active.bio}</p>
        </div>
      </article>
    </div>
  );
}
