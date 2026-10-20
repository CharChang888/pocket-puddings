import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { tornStripPath } from "@/lib/torn";

const tapeColors = {
  navy: "bg-navy text-cream",
  blue: "bg-blue text-cream",
  coral: "bg-coral text-ink",
  chocolate: "bg-chocolate text-cream",
  cream: "bg-cream text-ink",
} as const;

export type TapeColor = keyof typeof tapeColors;

export function Tape({
  children,
  color = "navy",
  rotate = -2,
  as: Tag = "span",
  className = "",
}: {
  children: ReactNode;
  color?: TapeColor;
  rotate?: number;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag
      className={`tape font-script font-semibold leading-tight ${tapeColors[color]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </Tag>
  );
}

/** Plain strip of tape for pinning photos and notes. */
export function TapeStrip({
  color = "cream",
  rotate = -4,
  className = "",
}: {
  color?: TapeColor;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`tape absolute z-10 block h-7 w-28 opacity-85 ${tapeColors[color]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}

export function SectionTitle({
  children,
  color,
  rotate = -1.5,
  className = "",
}: {
  children: ReactNode;
  color: TapeColor;
  rotate?: number;
  className?: string;
}) {
  return (
    <h2 className={`text-4xl sm:text-5xl lg:text-6xl ${className}`}>
      <Tape color={color} rotate={rotate} className="box-decoration-clone">
        {children}
      </Tape>
    </h2>
  );
}

export function TornEdge({
  fill,
  seed = 1,
  flip = false,
  className = "",
}: {
  fill: string;
  seed?: number;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1000 40"
      preserveAspectRatio="none"
      className={`block h-6 w-full sm:h-9 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d={tornStripPath(seed)} fill={fill} />
    </svg>
  );
}

const photoFilters = {
  none: "",
  bw: "grayscale contrast-125",
  sepia: "sepia-[.55] saturate-[.8] contrast-110",
  pink: "saturate-125 hue-rotate-[-8deg]",
} as const;

export function Photo({
  src,
  alt,
  rotate = 0,
  filter = "none",
  frame = "border",
  tape,
  caption,
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 40vw, 90vw",
  eager = false,
}: {
  src: StaticImageData;
  alt: string;
  rotate?: number;
  filter?: keyof typeof photoFilters;
  frame?: "border" | "polaroid" | "none";
  tape?: TapeColor;
  caption?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  eager?: boolean;
}) {
  const frameClass =
    frame === "polaroid"
      ? "bg-white p-3 pb-12 shadow-[6px_10px_24px_rgb(0_0_0/0.22)]"
      : frame === "border"
        ? "bg-white p-2 shadow-[6px_10px_24px_rgb(0_0_0/0.2)]"
        : "";
  return (
    <figure
      className={`${className.includes("absolute") ? "" : "relative"} ${frameClass} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {tape && <TapeStrip color={tape} rotate={-6} className="-top-3 left-1/2 -translate-x-1/2" />}
      <div className="grain relative overflow-hidden">
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          loading={eager ? "eager" : undefined}
          placeholder="blur"
          className={`h-full w-full object-cover ${photoFilters[filter]} ${imgClassName}`}
        />
      </div>
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-2 text-center font-hand text-2xl text-ink/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function buttonClass(variant: "navy" | "coral" = "navy") {
  const look = variant === "navy" ? "bg-navy text-cream" : "bg-coral text-ink";
  return `squish inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-ink px-7 py-3.5 text-lg font-bold tracking-wide ${look}`;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.25em] text-ink/60 ${className}`}>
      {children}
    </p>
  );
}

export function rotateVar(deg: number): CSSProperties {
  return { "--r": `${deg}deg` } as CSSProperties;
}
