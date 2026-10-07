"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        anchors: true,
        lerp: 0.1,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
