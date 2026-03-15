"use client";

import { useEffect, ReactNode } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: any;

    const init = async () => {
      try {
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default;

        lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
      } catch {
        // Lenis not available, fallback to native scroll
      }
    };

    init();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
