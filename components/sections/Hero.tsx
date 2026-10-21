import { hero } from "@/lib/content";
import { images } from "@/lib/images";
import { ScatteredDoodles, StarDoodle } from "../Doodles";
import { PaperRip } from "../PaperRip";
import { PreorderButton } from "../Preorder";
import { Reveal } from "../Reveal";
import { Photo, Tape } from "../ui";

export function Hero() {
  return (
    <section id="top">
      <div className="crumpled relative overflow-hidden px-5 pb-32 pt-28 sm:px-10 md:pb-28 md:pt-28">
        <ScatteredDoodles />
        <div className="page-inner relative z-10 grid min-w-0 items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
          <div className="relative mx-auto w-56 sm:w-64 md:mx-0 md:w-full md:max-w-[360px]">
            <div className="animate-float">
              <Photo
                src={images.product}
                alt="Pocket Puddings mocha protein coffee pudding pouch"
                frame="polaroid"
                rotate={6}
                tape="cream"
                sizes="(min-width: 768px) 30vw, 60vw"
                eager
              />
            </div>
            <StarDoodle className="absolute -bottom-4 -left-7 w-12 text-blue" style={{ rotate: "-10deg" }} />
          </div>

          <div className="flex w-full min-w-0 flex-col items-center px-1 text-center md:items-start md:px-0 md:text-left">
            <h1 className="relative flex w-full max-w-full flex-col items-center gap-3 text-4xl sm:text-6xl md:items-start lg:text-7xl">
              <span className="sr-only">{hero.titleWords.join(" ")}</span>
              <Tape color="navy" rotate={-4} as="span">
                <span aria-hidden>{hero.titleWords[0]}</span>
              </Tape>
              <Tape color="blue" rotate={2} className="md:ml-8" as="span">
                <span aria-hidden>{hero.titleWords[1]}</span>
              </Tape>
              <Tape color="coral" rotate={-3} className="md:ml-3" as="span">
                <span aria-hidden>{hero.titleWords[2]}</span>
              </Tape>
            </h1>
            <p className="mt-8 w-full max-w-md text-balance font-script text-3xl leading-tight text-navy sm:text-4xl">{hero.subhead}</p>
          </div>
        </div>
      </div>

      <PaperRip />

      <div className="px-6 pb-16 pt-12 text-center sm:px-12">
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-lg leading-relaxed sm:text-xl">{hero.body}</p>
          <p className="mt-6 text-lg font-bold sm:text-xl">{hero.kicker}</p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <PreorderButton>{hero.cta}</PreorderButton>
            <p className="font-hand -rotate-2 text-2xl text-coral">
              <span aria-hidden>&#8618; </span>
              {hero.ctaNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
