import { story } from "@/lib/content";
import { images } from "@/lib/images";
import { SparkleDoodle } from "../Doodles";
import { Reveal } from "../Reveal";
import { Photo, TapeStrip } from "../ui";

export function BrandStory() {
  return (
    <section id="story" className="page-inner px-6 pb-72 pt-28 sm:px-12">
      <div className="relative mx-auto max-w-5xl">
        <Reveal rotate={-2}>
          <article
            className="notebook relative px-8 py-14 pl-[88px] shadow-[8px_14px_30px_rgb(0_0_0/0.18)] sm:pr-14"
            style={{ rotate: "-1deg" }}
          >
            <TapeStrip color="coral" rotate={-35} className="-left-8 top-4" />
            <TapeStrip color="navy" rotate={35} className="-right-8 top-4" />
            <h2 className="font-script text-4xl leading-tight text-navy sm:text-5xl">{story.title}</h2>
            <div className="mt-8 space-y-[2rem] text-lg leading-[2rem]">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mr-40 mt-10 font-hand -rotate-2 text-4xl text-coral sm:mr-52 lg:mr-64">- charlotte :)</p>
            <SparkleDoodle aria-hidden className="absolute -left-5 bottom-24 w-8 text-navy" style={{ rotate: "-12deg" }} />
          </article>
        </Reveal>
        <Reveal className="absolute bottom-0 right-2 z-10 w-48 translate-y-[70%] sm:right-8 sm:w-56 lg:right-0 lg:w-72">
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
