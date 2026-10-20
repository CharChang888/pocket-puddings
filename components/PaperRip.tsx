"use client";

import { useEffect, useRef } from "react";
import { tornClip, verticalTearPath } from "@/lib/torn";

export function PaperRip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-ripped");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-ripped");
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="paper-rip" aria-hidden>
      <div className="paper-rip-reveal">
        <div
          className="paper-rip-underside crumpled"
          style={{ clipPath: tornClip(88, { bottom: true }, 28, 56) }}
        />
        <div
          className="paper-rip-sheet crumpled"
          style={{ clipPath: tornClip(88, { bottom: true }, 28, 56) }}
        />
        <svg className="paper-rip-front" viewBox="0 0 36 120" preserveAspectRatio="none">
          <path d={verticalTearPath(19)} fill="#cfcfcd" />
          <path d={verticalTearPath(27)} fill="#f4f4f2" opacity="0.92" />
        </svg>
      </div>
    </div>
  );
}
