import { metrics } from "@/lib/content";
import { tornClip } from "@/lib/torn";
import { Reveal } from "../Reveal";
import { SectionTitle, Tape, type TapeColor } from "../ui";

const looks: { color: TapeColor; rotate: number }[] = [
  { color: "coral", rotate: -4 },
  { color: "blue", rotate: 3 },
  { color: "cream", rotate: -2 },
  { color: "chocolate", rotate: 4 },
  { color: "coral", rotate: -3 },
];

export function Metrics() {
  return (
    <section
      id="metrics"
      className="bg-navy px-6 py-28 text-cream sm:px-12"
      style={{ clipPath: tornClip(55, { top: true, bottom: true }, 1.6, 50) }}
    >
      <div className="page-inner">
        <Reveal className="text-center">
          <SectionTitle color="coral" rotate={-1.5}>
            {metrics.title}
          </SectionTitle>
        </Reveal>
        <dl className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-14">
          {metrics.items.map((m, i) => (
            <Reveal key={m.label} delay={i * 90} rotate={looks[i].rotate} className="flex w-36 flex-col items-center text-center sm:w-40 lg:w-44">
              <dt className="order-2 mt-5 text-base font-semibold leading-snug text-cream/90">{m.label}</dt>
              <dd className="order-1 max-w-full text-4xl sm:text-6xl">
                <Tape color={looks[i].color} rotate={looks[i].rotate}>
                  {m.value}
                </Tape>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
