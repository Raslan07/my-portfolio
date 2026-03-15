"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mx = 0, my = 0, fx = 0, fy = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) setVisible(true);
      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const onInteract = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [data-cursor]");
      if (isClickable) {
        cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px) scale(2.5)`;
        follower.style.opacity = "0.8";
        follower.style.borderColor = "var(--accent2)";
      } else {
        follower.style.opacity = "0.5";
        follower.style.borderColor = "var(--accent)";
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onInteract);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    const animate = () => {
      fx += (mx - fx - 18) * 0.1;
      fy += (my - fy - 18) * 0.1;
      follower.style.transform = `translate(${fx}px, ${fy}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onInteract);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{ opacity: visible ? 0.5 : 0 }}
      />
    </>
  );
}
