import type { SVGProps } from "react";

const ink = "#0c1a2e";
const line = {
  stroke: ink,
  strokeWidth: 3.5,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

const script = { fontFamily: "var(--font-host-grotesk)", fontWeight: 650 };

type P = SVGProps<SVGSVGElement>;

export function PouchSticker(props: P) {
  return (
    <svg viewBox="0 0 120 150" {...props}>
      <rect x="47" y="4" width="26" height="18" rx="4" fill="#e07060" {...line} />
      <path d="M50 22h20v8H50z" fill="#c45b4e" {...line} />
      <path d="M22 30h76c4 0 6 3 6 7l-4 98c0 5-3 8-8 8H28c-5 0-8-3-8-8l-4-98c0-4 2-7 6-7z" fill="#f6efe4" {...line} />
      <path d="M18 98c14-14 26 2 42-6s26-18 42-8l-2 51c0 5-3 8-8 8H28c-5 0-8-3-8-8z" fill="#6b3d28" {...line} />
      <path d="M26 112c12-8 22 2 34-4s22-10 34-4" fill="none" stroke="#c4a08a" strokeWidth="3" strokeLinecap="round" />
      <text x="60" y="56" textAnchor="middle" style={script} fontSize="19" fill={ink}>
        Pocket
      </text>
      <text x="60" y="76" textAnchor="middle" style={script} fontSize="19" fill={ink}>
        Puddings
      </text>
      <circle cx="38" cy="122" r="13" fill="#e07060" {...line} strokeWidth={2.5} />
      <text x="38" y="126" textAnchor="middle" fontSize="10" fontWeight="700" fill={ink}>
        20g
      </text>
      <circle cx="84" cy="122" r="13" fill="#2a5fa6" {...line} strokeWidth={2.5} />
      <text x="84" y="126" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        80mg
      </text>
    </svg>
  );
}
