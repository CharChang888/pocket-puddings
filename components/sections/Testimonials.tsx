import { testimonials } from "@/lib/content";
import { tornClip } from "@/lib/torn";
import { Reveal } from "../Reveal";
import { SectionTitle, TapeStrip, type TapeColor } from "../ui";

const cards: { bg: string; tape: TapeColor; rotate: number }[] = [
  { bg: "bg-white", tape: "navy", rotate: -2.5 },
  { bg: "bg-cream", tape: "coral", rotate: 1.8 },
  { bg: "bg-white", tape: "chocolate", rotate: 1.2 },
  { bg: "bg-cream", tape: "blue", rotate: -1.6 },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative">
      <div className="relative bg-[#e8e8e6] px-6 py-28 sm:px-12" style={{ clipPath: tornClip(31, { top: true, bottom: true }, 1.2, 50) }}>
        <div className="crumpled absolute inset-0 opacity-50 mix-blend-multiply" />
        <div className="page-inner relative">
          <Reveal className="text-center">
            <SectionTitle color="blue" rotate={-2}>
              {testimonials.title}
            </SectionTitle>
          </Reveal>
          <div className="mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2">
            {testimonials.items.map((t, i) => {
              const c = cards[i];
              return (
                <Reveal key={t.role} delay={i * 90} rotate={c.rotate * 2}>
                  <figure
                    className={`relative flex h-full flex-col p-8 pt-10 shadow-[6px_10px_22px_rgb(0_0_0/0.22)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] ${c.bg}`}
                    style={{ rotate: `${c.rotate}deg` }}
                  >
                    <TapeStrip color={c.tape} rotate={i % 2 ? 5 : -5} className="-top-3 left-1/2 -translate-x-1/2" />
                    <span aria-hidden className="font-script text-7xl leading-[0.5] text-ink/25">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 flex-1 text-lg font-medium leading-relaxed">{t.quote}</blockquote>
                    <figcaption className="mt-6 border-t-2 border-dashed border-ink/25 pt-4">
                      <p className="font-bold">{t.name}</p>
                      <p className="font-hand text-2xl text-ink/70">{t.role}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
