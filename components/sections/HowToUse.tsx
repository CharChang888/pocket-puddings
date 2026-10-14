import type { SVGProps } from "react";
import { howTo } from "@/lib/content";
import { tornClip } from "@/lib/torn";
import { Reveal } from "../Reveal";
import { BoltSticker, PouchSticker } from "../Stickers";
import { SectionTitle } from "../ui";

const ink = "#2a1d17";

function SqueezeDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M44 30h32l10 70H34z" fill="#f7eddc" />
      <path d="M50 18h20v12H50z" fill="#f26d5b" />
      <path d="M20 60c8-4 10 8 18 4M100 60c-8-4-10 8-18 4" />
      <path d="M60 4c-6 6-6 10 0 10s6-4 0-10z" fill="#7a4a35" />
      <path d="M44 74c10-6 20 6 32 0" />
    </svg>
  );
}

function SealDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="40" y="40" width="40" height="34" rx="6" fill="#f26d5b" />
      <path d="M46 48v18M54 48v18M62 48v18M70 48v18" strokeWidth="2.5" />
      <path d="M24 60a36 36 0 0 1 60-28" />
      <path d="M86 22l-2 12-12-2" />
      <path d="M96 60a36 36 0 0 1-60 28" />
      <path d="M34 98l2-12 12 2" />
    </svg>
  );
}

const steps = [
  { Icon: PouchSticker, bg: "bg-periwinkle", rotate: -2 },
  { Icon: SqueezeDoodle, bg: "bg-butter", rotate: 1.5 },
  { Icon: SealDoodle, bg: "bg-lime", rotate: -1 },
  { Icon: BoltSticker, bg: "bg-tangerine", rotate: 2 },
];

export function HowToUse() {
  return (
    <section id="how-it-works" className="px-6 py-24 sm:px-12">
      <Reveal className="text-center">
        <SectionTitle color="sky" rotate={1.5}>
          {howTo.title}
        </SectionTitle>
      </Reveal>
      <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {howTo.steps.map((step, i) => {
          const { Icon, bg, rotate } = steps[i];
          return (
            <li key={step.title}>
              <Reveal delay={i * 110} rotate={rotate * 2} className="h-full drop-shadow-[4px_8px_10px_rgba(0,0,0,0.18)]">
                <div
                  className="group relative flex h-full flex-col items-center bg-white px-6 pb-10 pt-8 text-center"
                  style={{ rotate: `${rotate}deg`, clipPath: tornClip(40 + i, { top: true, bottom: true }, 3.5, 18) }}
                >
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-ink font-script text-3xl ${bg}`}>
                    {i + 1}
                  </span>
                  <Icon aria-hidden className="mt-5 h-24 w-24 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                  <h3 className="mt-4 font-script text-3xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
