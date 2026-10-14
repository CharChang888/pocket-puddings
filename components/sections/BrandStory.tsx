import { story } from "@/lib/content";
import { Reveal } from "../Reveal";
import { BeanSticker, SparkleSticker } from "../Stickers";
import { TapeStrip, rotateVar } from "../ui";

export function BrandStory() {
  return (
    <section id="story" className="px-6 py-28 sm:px-12">
      <Reveal rotate={-3} className="relative mx-auto max-w-3xl">
        <article className="notebook relative px-8 py-14 pl-[88px] shadow-[8px_14px_30px_rgb(0_0_0/0.18)] sm:pr-14" style={{ rotate: "-1deg" }}>
          <TapeStrip color="bubblegum" rotate={-35} className="-left-8 top-4" />
          <TapeStrip color="periwinkle" rotate={35} className="-right-8 top-4" />
          <h2 className="font-script text-4xl leading-tight text-cocoa sm:text-5xl">{story.title}</h2>
          <div className="mt-8 space-y-[2rem] text-lg leading-[2rem]">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-10 font-hand text-4xl text-coral -rotate-2">xo &hearts;</p>
          <BeanSticker aria-hidden className="sticker absolute -bottom-10 -right-6 w-24" style={rotateVar(12)} />
          <SparkleSticker aria-hidden className="sticker absolute -left-6 bottom-24 w-12" style={rotateVar(-12)} />
        </article>
      </Reveal>
    </section>
  );
}
