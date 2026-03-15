"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ParticleField } from "@/components/ui/ParticleField";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personalInfo } from "@/data/portfolio";

export function HeroSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  // GSAP parallax on grid
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const onMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth - 0.5) * 20;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(grid, { x: xPct, y: yPct, duration: 1.2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6 pt-24 pb-12"
    >
      {/* Gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(108,99,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(255,101,132,0.09) 0%, transparent 60%)",
        }}
      />

      {/* Grid lines */}
      <div
        ref={gridRef}
        className="absolute inset-[-10%] grid-bg opacity-25 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/signature.png"
            alt="Raslan Signature"
            width={320}
            height={110}
            className="w-[240px] md:w-[300px] h-auto object-contain"
            style={{
              filter: "brightness(1.15) drop-shadow(0 0 28px rgba(108,99,255,0.55))",
            }}
            priority
          />
        </motion.div>

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-xs tracking-[0.25em] uppercase mb-5"
          style={{ color: "var(--accent)" }}
        >
          {personalInfo.title} · {personalInfo.location}
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-syne font-extrabold tracking-tight leading-[0.93] mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          Mostafa
          <br />
          <span className="text-hollow">Raslan</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="max-w-[540px] text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "var(--muted)" }}
        >
          CS Student passionate about building clean, performant web apps.
          Obsessed with React, TypeScript, and the craft of great UI.
          Currently diving deep into{" "}
          <span style={{ color: "var(--accent3)" }}>Node.js</span> backend.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <MagneticButton
            as="button"
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-mono text-sm tracking-wider text-white font-medium transition-all duration-200"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 30px rgba(108,99,255,0.35)",
            } as React.CSSProperties}
          >
            View Projects →
          </MagneticButton>

          <MagneticButton
            as="button"
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-mono text-sm tracking-wider transition-all duration-200"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text)",
            } as React.CSSProperties}
          >
            Let&apos;s Talk
          </MagneticButton>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-2 mt-12"
        >
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.07, duration: 0.4 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="font-mono text-xs px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(108,99,255,0.08)",
                border: "1px solid rgba(108,99,255,0.2)",
                color: "var(--muted)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
          Scroll
        </span>
        <div
          className="w-px h-14 scroll-line origin-top"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
