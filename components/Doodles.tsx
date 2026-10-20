import type { CSSProperties, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const graphite = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function doodle(props: P, viewBox: string, strokeWidth = 1.8): P {
  return {
    viewBox,
    ...graphite,
    strokeWidth,
    vectorEffect: "non-scaling-stroke",
    ...props,
  };
}

/** 5-point star drawn as radiating pencil strokes, like the sketch. */
export function StarDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 80 80", 1.7)}>
      <path d="M40 6 L43 32" />
      <path d="M40 6 L36 33" />
      <path d="M72 32 L46 38" />
      <path d="M72 32 L48 32" />
      <path d="M61 72 L44 46" />
      <path d="M61 72 L40 48" />
      <path d="M18 72 L36 48" />
      <path d="M18 72 L40 46" />
      <path d="M8 32 L32 36" />
      <path d="M8 32 L34 32" />
    </svg>
  );
}

/** Asterisk-style star from the clustered doodles. */
export function AsteriskDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 70 70", 1.7)}>
      <path d="M35 8 L36 62" />
      <path d="M10 22 L58 50" />
      <path d="M58 20 L12 52" />
    </svg>
  );
}

/** Tiny diamond sparkle. */
export function SparkleDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 40 50", 1.6)}>
      <path d="M20 3 L24 22 L20 46 L16 22 Z" />
    </svg>
  );
}

export function SparklePairDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 50 70", 1.55)}>
      <path d="M22 4 L26 24 L22 46 L18 24 Z" />
      <path d="M38 28 L41 40 L38 54 L35 40 Z" />
    </svg>
  );
}

/** Open zigzag lightning bolt. */
export function BoltDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 70 120", 2)}>
      <path d="M38 6 L16 48 L34 46 L20 112" />
    </svg>
  );
}

export function BoltChunkyDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 80 130", 2.2)}>
      <path d="M48 5 L18 58 L42 56 L28 124" />
    </svg>
  );
}

export function WaveDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 140 28", 1.7)}>
      <path d="M4 16 C 16 6, 24 24, 36 14 S 56 8, 68 16 S 92 26, 104 14 S 124 6, 136 16" />
    </svg>
  );
}

export function HatchDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 160 36", 1.35)}>
      {Array.from({ length: 11 }, (_, i) => (
        <path key={i} d={`M4 ${4 + i * 2.7} H156`} />
      ))}
    </svg>
  );
}

export function SlashHatchDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 160 40", 1.3)}>
      {Array.from({ length: 18 }, (_, i) => (
        <path key={i} d={`M${-10 + i * 10} 38 L${20 + i * 10} 2`} />
      ))}
    </svg>
  );
}

export function CrossHatchDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 120 44", 1.2)}>
      {Array.from({ length: 14 }, (_, i) => (
        <path key={`a${i}`} d={`M${-8 + i * 10} 42 L${16 + i * 10} 2`} />
      ))}
      {Array.from({ length: 14 }, (_, i) => (
        <path key={`b${i}`} d={`M${-8 + i * 10} 2 L${16 + i * 10} 42`} />
      ))}
    </svg>
  );
}

export function TapeScrapDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 170 40", 1.7)}>
      <path d="M8 18 L22 8 L148 10 L164 16 L150 30 L20 32 Z" />
    </svg>
  );
}

export function NoteDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 80 100", 1.7)}>
      <path d="M22 18 L58 14 L62 82 L18 78 Z" />
      <path d="M38 10 V22" />
      <circle cx="38" cy="10" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StackedNotesDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 90 90", 1.7)}>
      <path d="M24 18 H68 V62 H24 Z" />
      <path d="M30 26 H74 V70 H30 Z" />
    </svg>
  );
}

export function CircleDoodle(props: P) {
  return (
    <svg {...doodle(props, "0 0 80 90", 1.8)}>
      <path d="M16 48 C16 22, 64 18, 64 46 C66 74, 18 76, 16 48 Z" />
    </svg>
  );
}

const scatter: { C: typeof StarDoodle; className: string; style?: CSSProperties }[] = [
  { C: WaveDoodle, className: "absolute left-[4%] top-[12%] w-28 text-ink/45 sm:w-36" },
  { C: HatchDoodle, className: "absolute right-[6%] top-[10%] w-32 text-ink/40 sm:w-40" },
  { C: SlashHatchDoodle, className: "absolute left-[8%] top-[38%] w-28 text-ink/35 hidden sm:block" },
  { C: SparklePairDoodle, className: "absolute left-[3%] bottom-[22%] w-10 text-blue" },
  { C: AsteriskDoodle, className: "absolute left-[14%] bottom-[28%] w-9 text-ink/70" },
  { C: StarDoodle, className: "absolute right-[8%] top-[32%] w-12 text-ink/75" },
  { C: StarDoodle, className: "absolute right-[16%] top-[42%] w-8 text-navy" },
  { C: BoltDoodle, className: "absolute left-[5%] bottom-[8%] w-8 text-coral" },
  { C: BoltChunkyDoodle, className: "absolute left-[12%] bottom-[4%] w-10 text-ink/70" },
  { C: NoteDoodle, className: "absolute right-[10%] bottom-[16%] w-12 text-ink/65" },
  { C: StackedNotesDoodle, className: "absolute right-[4%] bottom-[28%] w-14 text-blue" },
  { C: CircleDoodle, className: "absolute right-[22%] bottom-[8%] w-12 text-ink/50 hidden md:block" },
  { C: TapeScrapDoodle, className: "absolute left-[28%] top-[8%] w-28 text-ink/40 hidden lg:block" },
  { C: CrossHatchDoodle, className: "absolute right-[30%] top-[14%] w-24 text-ink/30 hidden lg:block" },
];

/** Loose pencil doodles scattered behind scrapbook content. */
export function ScatteredDoodles({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {scatter.map(({ C, className: itemClass, style }, i) => (
        <C key={i} className={itemClass} style={style} />
      ))}
    </div>
  );
}
