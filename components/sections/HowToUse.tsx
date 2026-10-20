import { howTo } from "@/lib/content";
import { tornClip } from "@/lib/torn";
import { AsteriskDoodle, BoltDoodle, CircleDoodle, NoteDoodle } from "../Doodles";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../ui";

const steps = [
  { Icon: NoteDoodle, bg: "bg-navy", rotate: -2 },
  { Icon: BoltDoodle, bg: "bg-blue", rotate: 1.5 },
  { Icon: CircleDoodle, bg: "bg-chocolate", rotate: -1 },
  { Icon: AsteriskDoodle, bg: "bg-coral text-ink", rotate: 2 },
];

export function HowToUse() {
  return (
    <section id="how-it-works" className="page-inner px-6 py-24 sm:px-12">
      <Reveal className="text-center">
        <SectionTitle color="blue" rotate={1.5}>
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
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-ink font-script text-3xl text-cream ${bg}`}>
                    {i + 1}
                  </span>
                  <Icon aria-hidden className="mt-5 h-24 w-24 text-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
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
