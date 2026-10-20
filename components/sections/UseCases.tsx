import type { ComponentType, SVGProps } from "react";
import type { StaticImageData } from "next/image";
import { useCases } from "@/lib/content";
import { images } from "@/lib/images";
import { tornClip } from "@/lib/torn";
import { CircleDoodle, NoteDoodle, StackedNotesDoodle, StarDoodle } from "../Doodles";
import { Reveal } from "../Reveal";
import { Photo, SectionTitle } from "../ui";

type Tile = {
  rotate: number;
  photo?: { src: StaticImageData; alt: string; filter?: "bw" | "sepia" | "pink" };
  Doodle?: ComponentType<SVGProps<SVGSVGElement>>;
};

const tiles: Tile[] = [
  { rotate: -1.5, photo: { src: images.bike, alt: "Pocket Puddings pouch in a bike basket on the way to work" } },
  { rotate: 1, Doodle: CircleDoodle },
  { rotate: 1.5, photo: { src: images.pilates, alt: "Pocket Puddings pouch tucked in a gym bag during a pilates class" } },
  { rotate: -1, Doodle: NoteDoodle },
  { rotate: -1.8, Doodle: StackedNotesDoodle },
  { rotate: 1.2, Doodle: StarDoodle },
];

export function UseCases() {
  return (
    <section id="use-cases" className="crumpled px-6 py-28 sm:px-12" style={{ clipPath: tornClip(63, { top: true }, 1.4, 50) }}>
      <div className="page-inner">
        <Reveal className="text-center">
          <SectionTitle color="chocolate" rotate={-1}>
            {useCases.title}
          </SectionTitle>
        </Reveal>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.items.map((item, i) => {
            const t = tiles[i];
            return (
              <Reveal key={item.title} delay={(i % 3) * 100} rotate={t.rotate * 2}>
                <article
                  className="group relative flex h-full flex-col border-[3px] border-ink bg-white p-5 shadow-[6px_6px_0_var(--color-ink)] transition-transform duration-300 hover:-translate-y-1"
                  style={{ rotate: `${t.rotate}deg` }}
                >
                  {t.photo ? (
                    <Photo
                      src={t.photo.src}
                      alt={t.photo.alt}
                      filter={t.photo.filter}
                      className="aspect-[4/3]"
                      imgClassName="aspect-[4/3]"
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                    />
                  ) : (
                    t.Doodle && (
                      <div className="relative flex aspect-[4/3] items-center justify-center bg-[#f0f0ee]">
                        <t.Doodle aria-hidden className="h-[58%] w-[58%] text-ink/80" />
                      </div>
                    )
                  )}
                  <h3 className="mt-5 font-script text-3xl">{item.title}</h3>
                  <p className="mt-2 leading-relaxed">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
