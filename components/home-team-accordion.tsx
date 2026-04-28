"use client";

import { useState } from "react";
import { ImagePanel } from "@/components/image-panel";
import type { TeamMemberCard } from "@/src/types/sanity";

type HomeTeamAccordionProps = {
  members: TeamMemberCard[];
};

export function HomeTeamAccordion({ members }: HomeTeamAccordionProps) {
  const safeMembers = members.filter((member) => member.image);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = safeMembers[activeIndex] || safeMembers[0];

  if (!active) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
      <div className="surface p-3">
        <ul className="space-y-2" aria-label="Team profiles">
          {safeMembers.map((member, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={member.name}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    isActive ? "border-gold/70 bg-gold/10" : "border-white/10 bg-black/25 hover:border-white/30"
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
        {active.image ? (
          <ImagePanel
            image={active.image}
            className="aspect-[4/3] rounded-none border-0"
            imgFit={active.imageFit}
            imgStyle={{ objectPosition: active.imagePosition ?? "50% 50%" }}
          />
        ) : null}
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">{active.focus}</p>
          <h3 className="mt-2 font-serif text-2xl">{active.name}</h3>
          <p className="mt-2 text-sm text-white/75">{active.role}</p>
          <p className="mt-3 text-sm text-white/85">{active.shortBio}</p>
        </div>
      </article>
    </div>
  );
}
