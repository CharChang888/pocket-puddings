import { finalCta } from "@/lib/content";
import { images } from "@/lib/images";
import { tornClip } from "@/lib/torn";
import { Reveal } from "../Reveal";
import { Button, Photo, Tape } from "../ui";

export function FinalCta() {
  return (
    <section id="shop" className="relative" style={{ clipPath: tornClip(77, { top: true }, 1.8, 50) }}>
      <div className="relative bg-coral px-6 pb-24 pt-28 sm:px-12">
        <div className="crumpled absolute inset-0 opacity-50 mix-blend-multiply" />
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h2 className="font-script text-5xl leading-[1.15] text-ink sm:text-6xl">
              <Tape color="butter" rotate={-2} className="box-decoration-clone">
                {finalCta.title}
              </Tape>
            </h2>
            <p className="mt-8 text-lg font-medium leading-relaxed sm:text-xl">{finalCta.body}</p>
            <p className="mt-5 text-lg font-medium leading-relaxed sm:text-xl">
              {finalCta.offerLead}
              <strong className="rounded bg-white px-1.5">{finalCta.offer}</strong>
              {finalCta.offerTail}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="#shop" variant="butter">
                {finalCta.cta}
              </Button>
              <p className="text-3xl">
                <Tape color="sky" rotate={4}>
                  {finalCta.signoff}
                </Tape>
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} rotate={6} className="mx-auto w-full max-w-sm">
            <div className="animate-float">
              <Photo src={images.product} alt="Pocket Puddings mocha pouch on a desk" frame="polaroid" rotate={-5} tape="lime" sizes="(min-width: 1024px) 30vw, 80vw" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
