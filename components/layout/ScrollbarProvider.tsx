"use client";

import { useEffect, useRef } from "react";
import {
  OverlayScrollbars,
  ClickScrollPlugin,
} from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

// Register the click scroll plugin for better UX
OverlayScrollbars.plugin(ClickScrollPlugin);

export default function ScrollbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Initialize on body element
    bodyRef.current = document.body;

    const osInstance = OverlayScrollbars(bodyRef.current, {
      scrollbars: {
        theme: "os-theme-minecraft",
        visibility: "auto",
        autoHide: "move",
        autoHideDelay: 800,
        autoHideSuspend: false,
        dragScroll: true,
        clickScroll: true,
      },
      overflow: {
        x: "hidden",
        y: "scroll",
      },
    });

    return () => {
      osInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}

