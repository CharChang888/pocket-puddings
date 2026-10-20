import Image from "next/image";
import { marquee } from "@/lib/content";
import { images } from "@/lib/images";

const photos = [images.product, images.bike, images.officeBag, images.pilates, images.commute, images.gym];
const colors = [
  "bg-coral text-ink",
  "bg-chocolate text-cream",
  "bg-blue text-cream",
  "bg-navy text-cream",
  "bg-chocolate text-cream",
  "bg-coral text-ink",
];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      {photos.map((src, i) => (
        <div key={i} className="flex shrink-0">
          <div className="relative h-40 w-56 shrink-0 sm:h-48 sm:w-64">
            <Image src={src} alt="" fill sizes="256px" className="object-cover" />
          </div>
          <div className={`flex h-40 w-44 shrink-0 items-center justify-center px-4 text-center sm:h-48 sm:w-52 ${colors[i]}`}>
            <span className="font-script text-3xl leading-tight -rotate-3 sm:text-4xl">{marquee[i % marquee.length]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Pocket Puddings in the wild" className="overflow-hidden border-y-[6px] border-ink bg-ink">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
