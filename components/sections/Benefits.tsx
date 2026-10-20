import type { ReactNode } from "react";
import { benefits, nutrition } from "@/lib/content";
import { images } from "@/lib/images";
import { tornClip } from "@/lib/torn";
import { BoltDoodle, NoteDoodle, StarDoodle } from "../Doodles";
import { Reveal } from "../Reveal";
import { Eyebrow, Photo, SectionTitle, Tape, rotateVar } from "../ui";

const [portability, delicious, fuel] = benefits;

function highlight(text: string, terms: string[]): ReactNode[] {
  const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`);
  return text.split(pattern).map((part, i) =>
    terms.includes(part) ? (
      <mark key={i} className="rounded-sm bg-cream px-1 font-bold text-ink">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function Copy({ children }: { children: ReactNode }) {
  return <div className="space-y-5 text-lg leading-relaxed">{children}</div>;
}

export function Benefits() {
  return (
    <div className="page-inner space-y-28 px-6 py-24 sm:px-12 lg:space-y-36">
      <section id={portability.id} className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal rotate={-3} className="relative mx-auto w-full max-w-lg pb-16 lg:pb-24">
          <Photo src={images.officeBag} alt="Woman slipping a Pocket Puddings pouch into her work bag" rotate={-3} tape="cream" />
          <Photo
            src={images.commute}
            alt="Laughing commuter holding a pudding pouch and coffee"
            filter="bw"
            frame="polaroid"
            rotate={7}
            className="absolute -bottom-2 -right-4 w-[46%] sm:-right-10"
            sizes="(min-width: 1024px) 20vw, 45vw"
          />
        </Reveal>
        <Reveal delay={120}>
          <Eyebrow>{portability.eyebrow}</Eyebrow>
          <SectionTitle color="navy" className="mt-4 mb-8">
            {portability.title}
          </SectionTitle>
          <Copy>
            {portability.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Copy>
          <p className="mt-8 text-2xl sm:text-3xl">
            <Tape color="blue" rotate={1.5}>
              {portability.punchline}
            </Tape>
          </p>
        </Reveal>
      </section>

      <section id={delicious.id} className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal delay={120} className="lg:order-2">
          <div className="relative mx-auto w-full max-w-lg pb-10">
            <Photo src={images.desk} alt="Hands holding a pudding cup over a busy desk" filter="sepia" rotate={4} tape="coral" />
            <NoteDoodle className="absolute -bottom-4 -left-4 w-16 text-ink/70 sm:w-20" style={{ rotate: "-12deg" }} />
            <StarDoodle className="absolute -top-8 right-4 w-12 text-blue" style={{ rotate: "12deg" }} />
          </div>
        </Reveal>
        <Reveal rotate={2} className="lg:order-1">
          <div className="bg-white px-7 py-10 sm:px-10" style={{ clipPath: tornClip(21, undefined, 1.4, 30) }}>
            <Eyebrow>{delicious.eyebrow}</Eyebrow>
            <SectionTitle color="coral" rotate={1} className="mt-4 mb-8">
              {delicious.title}
            </SectionTitle>
            <Copy>
              {delicious.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Copy>
          </div>
        </Reveal>
      </section>

      <section id={fuel.id} className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal rotate={-2} className="relative mx-auto w-full max-w-lg">
          <Photo src={images.bike} alt="Pocket Puddings pouch riding in a bike basket" rotate={-4} tape="blue" />
          <div
            className="sticker absolute -right-4 -top-8 flex h-28 w-28 flex-col items-center justify-center rounded-full border-[3px] border-ink bg-coral text-center sm:-right-8 sm:h-32 sm:w-32"
            style={rotateVar(10)}
          >
            <span className="font-script text-4xl leading-none">{nutrition.protein}</span>
            <span className="text-xs font-bold uppercase tracking-widest">protein</span>
          </div>
          <div
            className="sticker absolute -bottom-8 -left-4 flex h-28 w-28 flex-col items-center justify-center rounded-full border-[3px] border-ink bg-navy text-center text-white sm:-left-8 sm:h-32 sm:w-32"
            style={rotateVar(-8)}
          >
            <span className="font-script text-4xl leading-none">{nutrition.caffeine}</span>
            <span className="text-xs font-bold uppercase tracking-widest">caffeine</span>
          </div>
          <BoltDoodle className="absolute -bottom-10 right-10 w-10 text-blue" style={{ rotate: "14deg" }} />
        </Reveal>
        <Reveal delay={120}>
          <Eyebrow>{fuel.eyebrow}</Eyebrow>
          <SectionTitle color="chocolate" className="mt-4 mb-8">
            {fuel.title}
          </SectionTitle>
          <Copy>
            {fuel.paragraphs.map((p) => (
              <p key={p}>{highlight(p, [nutrition.protein, nutrition.caffeine])}</p>
            ))}
          </Copy>
          <ul className="mt-8 space-y-3 border-l-4 border-dashed border-ink/30 pl-5">
            {fuel.list.map(([q, a]) => (
              <li key={q} className="text-lg">
                <span className="font-bold">{q}</span>{" "}
                <span className="font-hand text-3xl text-coral">{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
