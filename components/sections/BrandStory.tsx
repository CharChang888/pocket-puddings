import { story } from "@/lib/content";
import { images } from "@/lib/images";
import { SparkleDoodle } from "../Doodles";
import { Reveal } from "../Reveal";
import { Photo, TapeStrip } from "../ui";

export function BrandStory() {
  return (
    <section id="story" className="page-inner px-4 pb-16 pt-24 sm:px-12 sm:pb-72 sm:pt-28">
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <article className="notebook relative px-5 py-10 pl-[4.75rem] shadow-[8px_14px_30px_rgb(0_0_0/0.18)] sm:-rotate-1 sm:px-8 sm:py-14 sm:pl-[88px] sm:pr-14">
            <TapeStrip color="coral" rotate={-35} className="left-2 top-3 sm:-left-8 sm:top-4" />
            <TapeStrip color="navy" rotate={35} className="right-2 top-3 sm:-right-8 sm:top-4" />
            <h2 className="font-script text-3xl leading-tight text-navy sm:text-5xl">{story.title}</h2>
            <div className="mt-8 space-y-[2rem] text-base leading-[2rem] sm:text-lg">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-10 font-hand -rotate-2 text-3xl text-coral sm:mr-52 sm:text-4xl lg:mr-64">- charlotte :)</p>
            <SparkleDoodle aria-hidden className="absolute -left-2 bottom-16 hidden w-8 text-navy sm:block" style={{ rotate: "-12deg" }} />
          </article>
        </Reveal>
        <Reveal className="relative z-10 mx-auto -mt-14 w-40 sm:absolute sm:bottom-0 sm:right-0 sm:mx-0 sm:mt-0 sm:w-56 sm:translate-y-[70%] lg:w-72">
          <Photo
            src={images.founder}
            alt="Founder of Pocket Puddings"
            frame="polaroid"
            rotate={4}
            tape="coral"
            sizes="(min-width: 1024px) 288px, 60vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
