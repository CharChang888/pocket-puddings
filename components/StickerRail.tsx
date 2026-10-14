import {
  BeanSticker,
  CalendarSticker,
  CanSticker,
  ChocolateSticker,
  CoffeeSticker,
  JellySticker,
  PouchSticker,
  SnackSticker,
} from "./Stickers";
import { rotateVar } from "./ui";

const left = [
  { C: SnackSticker, top: "3%", r: -10, w: "w-24 lg:w-28" },
  { C: CoffeeSticker, top: "27%", r: 8, w: "w-16 lg:w-20" },
  { C: BeanSticker, top: "52%", r: -12, w: "w-20 lg:w-24" },
  { C: CanSticker, top: "76%", r: -14, w: "w-14 lg:w-[4.5rem]" },
];

const right = [
  { C: PouchSticker, top: "4%", r: 10, w: "w-20 lg:w-24" },
  { C: ChocolateSticker, top: "29%", r: 6, w: "w-20 lg:w-24" },
  { C: CalendarSticker, top: "53%", r: -8, w: "w-20 lg:w-24" },
  { C: JellySticker, top: "77%", r: 12, w: "w-24 lg:w-28" },
];

export function StickerRail() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 hidden lg:block">
      {left.map(({ C, top, r, w }, i) => (
        <div key={`l${i}`} className="absolute left-[0.6vw]" style={{ top }}>
          <C className={`sticker pointer-events-auto ${w}`} style={rotateVar(r)} />
        </div>
      ))}
      {right.map(({ C, top, r, w }, i) => (
        <div key={`r${i}`} className="absolute right-[0.6vw]" style={{ top }}>
          <C className={`sticker pointer-events-auto ${w}`} style={rotateVar(r)} />
        </div>
      ))}
    </div>
  );
}