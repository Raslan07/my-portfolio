"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer
      className="relative border-t py-10 px-6 text-center overflow-hidden"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(108,99,255,0.06)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        {/* Signature logo */}
        <Image
          src="/signature.png"
          alt="Mostafa Raslan"
          width={160}
          height={56}
          className="h-10 w-auto object-contain opacity-70"
          style={{ filter: "brightness(1.05) drop-shadow(0 0 6px rgba(108,99,255,0.4))" }}
        />

        {/* Links */}
        <div className="flex items-center gap-6 font-mono text-xs tracking-widest">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-accent"
            style={{ color: "var(--muted)" }}
          >
            GitHub
          </a>
          <span style={{ color: "var(--border)" }}>·</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="transition-colors duration-200 hover:text-accent"
            style={{ color: "var(--muted)" }}
          >
            Email
          </a>
          <span style={{ color: "var(--border)" }}>·</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-accent"
            style={{ color: "var(--muted)" }}
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Mostafa Raslan · Egypt 🇪🇬
        </p>
        <p className="font-mono text-xs" style={{ color: "var(--border)" }}>
          Built with Next.js · Framer Motion · GSAP
        </p>
      </motion.div>
    </footer>
  );
}
