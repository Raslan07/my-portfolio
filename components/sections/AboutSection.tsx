"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personalInfo } from "@/data/portfolio";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background glow */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        aria-hidden
        {...({ style: { y, background: "rgba(108,99,255,0.06)", borderRadius: "50%", filter: "blur(120px)" } } as any)}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Card */}
          <ScrollReveal direction="left">
            <div
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
              />

              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 rounded-full flex items-center justify-center font-syne font-extrabold text-2xl text-white mb-6"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
              >
                MR
              </motion.div>

              <h3 className="font-syne font-bold text-xl mb-1" style={{ color: "var(--text)" }}>
                {personalInfo.name}
              </h3>
              <p className="font-mono text-xs mb-6" style={{ color: "var(--muted)" }}>
                {personalInfo.handle}
              </p>

              {/* Info rows */}
              <div className="flex flex-col gap-3">
                {[
                  { key: "Age", val: `${personalInfo.age} years old` },
                  { key: "Education", val: personalInfo.education },
                  { key: "Location", val: personalInfo.location },
                  {
                    key: "Email",
                    val: personalInfo.email,
                    href: `mailto:${personalInfo.email}`,
                  },
                  {
                    key: "GitHub",
                    val: "github.com/Raslan07",
                    href: personalInfo.github,
                  },
                  {
                    key: "LinkedIn",
                    val: "mostafa-hussin",
                    href: personalInfo.linkedin,
                  },
                ].map(({ key, val, href }) => (
                  <div key={key} className="flex gap-3 text-sm">
                    <span className="font-mono text-xs w-24 shrink-0 mt-0.5" style={{ color: "var(--muted)" }}>
                      {key}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:underline"
                        style={{ color: "var(--accent)" }}
                      >
                        {val}
                      </a>
                    ) : (
                      <span style={{ color: "var(--text)" }}>{val}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Language badges */}
              <div className="flex gap-2 flex-wrap mt-6">
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: lang.type === "primary" ? "var(--accent3)" : "var(--accent)",
                      color: lang.type === "primary" ? "var(--accent3)" : "var(--accent)",
                      background: "transparent",
                    }}
                  >
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Text */}
          <div>
            <SectionLabel
              label="About Me"
              title={"Crafting Digital\nExperiences"}
            />

            <div className="flex flex-col gap-4 mt-6">
              {personalInfo.bio.map((para, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <p className="text-[0.95rem] leading-[1.85]" style={{ color: "var(--muted)" }}>
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap mt-10">
              {personalInfo.stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.3 + i * 0.1} direction="up">
                  <motion.div whileHover={{ y: -4 }}>
                    <div
                      className="font-syne font-extrabold text-4xl mb-1"
                      style={{
                        color:
                          stat.color === "accent"
                            ? "var(--accent)"
                            : stat.color === "accent2"
                            ? "var(--accent2)"
                            : "var(--accent3)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                      {stat.label}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
