import type { SVGProps } from "react";

const ink = "#2a1d17";
const line = {
  stroke: ink,
  strokeWidth: 3.5,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

const script = { fontFamily: "var(--font-lobster)" };
const hand = { fontFamily: "var(--font-caveat)" };

type P = SVGProps<SVGSVGElement>;

export function PouchSticker(props: P) {
  return (
    <svg viewBox="0 0 120 150" {...props}>
      <rect x="47" y="4" width="26" height="18" rx="4" fill="#f26d5b" {...line} />
      <path d="M50 22h20v8H50z" fill="#e65a49" {...line} />
      <path d="M22 30h76c4 0 6 3 6 7l-4 98c0 5-3 8-8 8H28c-5 0-8-3-8-8l-4-98c0-4 2-7 6-7z" fill="#f7eddc" {...line} />
      <path d="M18 98c14-14 26 2 42-6s26-18 42-8l-2 51c0 5-3 8-8 8H28c-5 0-8-3-8-8z" fill="#7a4a35" {...line} />
      <path d="M26 112c12-8 22 2 34-4s22-10 34-4" fill="none" stroke="#c98e6a" strokeWidth="3" strokeLinecap="round" />
      <text x="60" y="56" textAnchor="middle" style={script} fontSize="19" fill="#4a2a1f">Pocket</text>
      <text x="60" y="76" textAnchor="middle" style={script} fontSize="19" fill="#4a2a1f">Puddings</text>
      <circle cx="38" cy="122" r="13" fill="#f26d5b" {...line} strokeWidth={2.5} />
      <text x="38" y="126" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2a1d17">20g</text>
      <circle cx="84" cy="122" r="13" fill="#2d4bb3" {...line} strokeWidth={2.5} />
      <text x="84" y="126" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">80mg</text>
    </svg>
  );
}

export function PuddingCupSticker(props: P) {
  return (
    <svg viewBox="0 0 120 130" {...props}>
      <path d="M16 58h88l-10 62c-1 4-4 6-8 6H34c-4 0-7-2-8-6z" fill="#c9b6ff" {...line} />
      <path d="M22 84h76" stroke={ink} strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
      <path d="M14 58c0-14 20-24 46-24s46 10 46 24z" fill="#8a5a42" {...line} />
      <path d="M32 40c0-12 12-18 18-14 4-10 18-10 22 0 8-4 18 4 16 14" fill="#fffaf0" {...line} />
      <path d="M40 30c6-6 14-6 20 0" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="62" cy="16" r="9" fill="#ef3b4a" {...line} />
      <path d="M64 8c2-6 8-8 12-6" fill="none" {...line} />
      <circle cx="59" cy="13" r="2.5" fill="#fff" />
    </svg>
  );
}

export function CoffeeSticker(props: P) {
  return (
    <svg viewBox="0 0 110 150" {...props}>
      <path d="M38 22c-6-6 6-10 0-18M56 22c-6-6 6-10 0-18M74 22c-6-6 6-10 0-18" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <path d="M18 36h74l-2 12H20z" fill="#fff" {...line} />
      <path d="M24 30h62c3 0 5 3 4 6H20c-1-3 1-6 4-6z" fill="#3b2a24" {...line} />
      <path d="M21 48h68l-10 92c0 3-3 5-6 5H37c-3 0-6-2-6-5z" fill="#fffaf2" {...line} />
      <path d="M25 74h60l-4 36H29z" fill="#ffe16b" {...line} />
      <text x="55" y="98" textAnchor="middle" style={script} fontSize="18" fill="#2a1d17">joe</text>
    </svg>
  );
}

export function BeanSticker(props: P) {
  return (
    <svg viewBox="0 0 120 140" {...props}>
      <path d="M44 100l-10 26h-10M76 100l10 26h10" fill="none" {...line} />
      <path d="M26 66l-18-14M94 62l16-18" fill="none" {...line} />
      <ellipse cx="60" cy="62" rx="34" ry="44" fill="#6b3f2a" {...line} transform="rotate(14 60 62)" />
      <path d="M58 20c-14 18 14 30 0 48s12 30 4 38" fill="none" stroke="#3a2016" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 54c3-4 7-4 9 0M70 54c3-4 7-4 9 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 70c6 7 18 7 24 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M44 6l4 8M60 2v10M76 6l-4 8" stroke={ink} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function ChocolateSticker(props: P) {
  return (
    <svg viewBox="0 0 120 150" {...props}>
      <g transform="rotate(-12 60 75)">
        <path d="M24 22h72v40H24z" fill="#5a3324" {...line} />
        <path d="M24 42h72M48 22v40M72 22v40" stroke="#3a2016" strokeWidth="3" />
        <path d="M24 50l14-10 12 12 14-10 14 10 18-6v94H24z" fill="#ef3b4a" {...line} />
        <path d="M24 50l14-10 12 12 14-10 14 10 18-6" fill="none" stroke="#c9ccd6" strokeWidth="6" strokeLinejoin="round" />
        <rect x="30" y="80" width="60" height="26" rx="13" fill="#ffe16b" {...line} strokeWidth={2.5} />
        <text x="60" y="98" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing="1" fill="#2a1d17">COCOA</text>
      </g>
    </svg>
  );
}

export function CanSticker(props: P) {
  return (
    <svg viewBox="0 0 90 150" {...props}>
      <path d="M18 14h54l6 12v100l-6 12H18l-6-12V26z" fill="#9b9bff" {...line} />
      <path d="M18 14h54l6 12H12z" fill="#d9dbe6" {...line} />
      <path d="M12 126h66l-6 12H18z" fill="#d9dbe6" {...line} />
      <text x="45" y="62" textAnchor="middle" style={script} fontSize="20" fill="#fff" stroke={ink} strokeWidth="0.8">Cold</text>
      <text x="45" y="86" textAnchor="middle" style={script} fontSize="20" fill="#fff" stroke={ink} strokeWidth="0.8">Brew</text>
      <circle cx="26" cy="104" r="4" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="62" cy="110" r="3" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="46" cy="114" r="5" fill="none" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

export function JellySticker(props: P) {
  return (
    <svg viewBox="0 0 130 120" {...props}>
      <path d="M22 50h86l-10 56c-1 4-4 6-8 6H40c-4 0-7-2-8-6z" fill="#fffaf2" {...line} />
      <path d="M26 64h78M30 82h70" stroke={ink} strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
      <ellipse cx="65" cy="42" rx="52" ry="20" fill="#9be15d" {...line} transform="rotate(-8 65 42)" />
      <ellipse cx="65" cy="42" rx="38" ry="12" fill="none" stroke="#5aa02c" strokeWidth="2.5" transform="rotate(-8 65 42)" />
      <text x="65" y="49" textAnchor="middle" style={script} fontSize="20" fill="#fff" stroke={ink} strokeWidth="0.8" transform="rotate(-8 65 42)">Puddin&apos;</text>
    </svg>
  );
}

export function SnackSticker(props: P) {
  return (
    <svg viewBox="0 0 130 120" {...props}>
      <path d="M12 18l8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 4 84-8 6-8-6-8 6-8-6-8 6-8-6-8 6-8-6-8 6-8-6-8 6-8-6-8 6z" fill="#ff8a3d" {...line} />
      <path d="M20 40c30-8 60-8 92 0l-2 36c-30 8-60 8-88 0z" fill="#fff" {...line} />
      <text x="66" y="68" textAnchor="middle" fontSize="24" fontWeight="800" fill="#ef3b4a" stroke={ink} strokeWidth="1" letterSpacing="1">SNACK</text>
    </svg>
  );
}

export function CalendarSticker(props: P) {
  return (
    <svg viewBox="0 0 120 130" {...props}>
      <rect x="12" y="20" width="96" height="100" rx="10" fill="#fffaf2" {...line} />
      <path d="M12 30c0-6 4-10 10-10h76c6 0 10 4 10 10v14H12z" fill="#ff7aa8" {...line} />
      <path d="M36 10v20M84 10v20" {...line} strokeWidth={5} />
      <text x="60" y="42" textAnchor="middle" fontSize="14" fontWeight="800" fill="#2a1d17" letterSpacing="2">MON</text>
      <text x="60" y="80" textAnchor="middle" style={hand} fontSize="28" fontWeight="700" fill="#2a1d17">lunch?</text>
      <path d="M24 74l72 4" stroke="#ef3b4a" strokeWidth="4" strokeLinecap="round" />
      <path d="M26 98h28M26 108h44" stroke="#9b9bff" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleSticker(props: P) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path d="M50 6c4 26 18 40 44 44-26 4-40 18-44 44-4-26-18-40-44-44 26-4 40-18 44-44z" fill="#ffe16b" {...line} />
    </svg>
  );
}

export function BoltSticker(props: P) {
  return (
    <svg viewBox="0 0 90 120" {...props}>
      <path d="M54 4L14 66h26l-8 50 46-66H50z" fill="#6fd6f2" {...line} />
    </svg>
  );
}
