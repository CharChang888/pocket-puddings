function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

type Edges = { top?: boolean; right?: boolean; bottom?: boolean; left?: boolean };

/** CSS clip-path polygon with jagged, torn edges on the chosen sides. Amplitude is in percent. */
export function tornClip(seed: number, edges: Edges = { top: true, right: true, bottom: true, left: true }, amp = 2.2, steps = 22) {
  const rand = rng(seed);
  const pts: string[] = [];
  const jag = (on: boolean | undefined) => (on ? rand() * amp : 0);

  for (let i = 0; i <= steps; i++) pts.push(`${(i / steps) * 100}% ${jag(edges.top)}%`);
  for (let i = 1; i <= steps; i++) pts.push(`${100 - jag(edges.right)}% ${(i / steps) * 100}%`);
  for (let i = steps - 1; i >= 0; i--) pts.push(`${(i / steps) * 100}% ${100 - jag(edges.bottom)}%`);
  for (let i = steps - 1; i >= 1; i--) pts.push(`${jag(edges.left)}% ${(i / steps) * 100}%`);

  return `polygon(${pts.join(", ")})`;
}

/** SVG path for a horizontal torn strip spanning width 1000 by height h, torn on its top edge. */
export function tornStripPath(seed: number, h = 40, teeth = 48) {
  const rand = rng(seed);
  let d = `M0 ${h} L0 ${h * 0.5}`;
  for (let i = 1; i <= teeth; i++) {
    const x = (i / teeth) * 1000;
    const y = h * (0.15 + rand() * 0.7);
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return `${d} L1000 ${h} Z`;
}
