import type { ComponentType, SVGProps } from "react";
import type { StaticImageData } from "next/image";
import { useCases } from "@/lib/content";
import { images } from "@/lib/images";
import { tornClip } from "@/lib/torn";
import { Reveal } from "../Reveal";
import { CalendarSticker, CoffeeSticker, PouchSticker, PuddingCupSticker } from "../Stickers";
import { Photo, SectionTitle, rotateVar } from "../ui";

type Tile = {
  bg: string;
  rotate: number;
  photo?: { src: StaticImageData; alt: string; filter?: "bw" | "sepia" | "pink" };
  Sticker?: ComponentType<SVGProps<SVGSVGElement>>;
};

const tiles: Tile[] = [
  { bg: "bg-sky", rotate: -1.5, photo: { src: images.bike, alt: "Pocket Puddings pouch in a bike basket on the way to work" } },
  { bg: "bg-butter", rotate: 1, Sticker: CoffeeSticker },
  { bg: "bg-lime", rotate: 1.5, photo: { src: images.pilates, alt: "Pocket Puddings pouch tucked in a gym bag during a pilates class" } },
  { bg: "bg-periwinkle", rotate: -1, Sticker: CalendarSticker },
  { bg: "bg-bubblegum", rotate: -1.8, Sticker: PuddingCupSticker },
  { bg: "bg-tangerine", rotate: 1.2, Sticker: PouchSticker },
];

export function UseCases() {
  return (
    <section id="use-cases" className="crumpled px-6 py-28 sm:px-12" style={{ clipPath: tornClip(63, { top: true }, 1.4, 50) }}>
      <Reveal className="text-center">
        <SectionTitle color="lime" rotate={-1}>
          {useCases.title}
        </SectionTitle>
      </Reveal>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.items.map((item, i) => {
          const t = tiles[i];
          return (
            <Reveal key={item.title} delay={(i % 3) * 100} rotate={t.rotate * 2}>
              <article
                className={`group relative flex h-full flex-col border-[3px] border-ink p-5 shadow-[6px_6px_0_var(--color-ink)] transition-transform duration-300 hover:-translate-y-1 ${t.bg}`}
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
                  t.Sticker && (
                    <div className="relative aspect-[4/3] bg-white/40">
                      <t.Sticker aria-hidden className="sticker absolute inset-[12%] h-[76%] w-[76%]" style={rotateVar(i % 2 ? 8 : -8)} />
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
    </section>
  );
}
