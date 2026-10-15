import Image from "next/image";
import { hero } from "@/lib/content";
import { images } from "@/lib/images";
import { tornClip } from "@/lib/torn";
import { Reveal } from "../Reveal";
import { SparkleSticker } from "../Stickers";
import { PreorderButton } from "../Preorder";
import { Photo, Tape, rotateVar } from "../ui";

export function Hero() {
  return (
    <section id="top">
      <div
        className="crumpled relative overflow-hidden px-5 pb-16 pt-24 sm:px-10 md:min-h-[640px] md:pb-10 md:pt-20"
        style={{ clipPath: tornClip(11, { bottom: true }, 2, 46) }}
      >
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px] md:absolute md:left-[6%] md:top-[9%] md:w-[56%]">
          <div className="absolute -inset-3 bg-white/95 shadow-xl" style={{ clipPath: tornClip(4, undefined, 3.2, 26) }} />
          <div className="grain absolute inset-0 overflow-hidden" style={{ clipPath: tornClip(9, undefined, 3.6, 26) }}>
            <Image
              src={images.heroSqueeze}
              alt="Woman in a leopard-print blouse squeezing a pudding pouch"
              fill
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
              sizes="(min-width: 768px) 56vw, 92vw"
              className="object-cover saturate-125"
            />
          </div>
        </div>

        <h1 className="relative z-10 mt-8 flex flex-col items-start gap-3 text-5xl sm:text-6xl md:static md:mt-0 lg:text-7xl">
          <span className="sr-only">{hero.titleWords.join(" ")}</span>
          <Tape color="periwinkle" rotate={-4} className="md:absolute md:left-[44%] md:top-[11%]" as="span">
            <span aria-hidden>{hero.titleWords[0]}</span>
          </Tape>
          <Tape color="tangerine" rotate={2} className="md:absolute md:left-[3%] md:top-[58%]" as="span">
            <span aria-hidden>{hero.titleWords[1]}</span>
          </Tape>
          <Tape color="bubblegum" rotate={-3} className="md:absolute md:left-[24%] md:top-[74%]" as="span">
            <span aria-hidden>{hero.titleWords[2]}</span>
          </Tape>
        </h1>

        <div className="relative mx-auto mt-10 w-60 md:absolute md:right-[5%] md:top-[12%] md:mt-0 md:w-[30%] md:max-w-[340px]">
          <div className="animate-float">
            <Photo
              src={images.product}
              alt="Pocket Puddings mocha protein coffee pudding pouch"
              frame="polaroid"
              rotate={6}
              tape="lime"
              sizes="(min-width: 768px) 30vw, 60vw"
              eager
            />
          </div>
          <SparkleSticker className="sticker absolute -bottom-6 -left-8 w-16" style={rotateVar(-10)} />
        </div>
      </div>

      <div className="px-6 pb-16 pt-12 text-center sm:px-12">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-script text-3xl text-cocoa sm:text-4xl">{hero.subhead}</p>
          <p className="mt-6 text-lg leading-relaxed sm:text-xl">{hero.body}</p>
          <p className="mt-6 text-lg font-bold sm:text-xl">{hero.kicker}</p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <PreorderButton>{hero.cta}</PreorderButton>
            <p className="font-hand text-2xl text-coral -rotate-2">
              <span aria-hidden>&#8618; </span>
              {hero.ctaNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
