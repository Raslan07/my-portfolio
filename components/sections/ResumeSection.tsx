"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { education, experience, personalInfo } from "@/data/portfolio";
import { skills } from "@/data/portfolio";
import type { TimelineItem } from "@/types";

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-6"
      style={{ borderLeft: "1px solid var(--border)" }}
    >
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
        className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full"
        style={{
          background: "var(--accent)",
          boxShadow: "0 0 12px rgba(108,99,255,0.6)",
        }}
      />

      <p className="font-mono text-[11px] tracking-wider mb-1" style={{ color: "var(--accent)" }}>
        {item.date}
      </p>
      <h4 className="font-semibold text-sm mb-0.5" style={{ color: "var(--text)" }}>
        {item.title}
      </h4>
      <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
        {item.subtitle}
      </p>
    </motion.div>
  );
}

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: "var(--accent2)" }}
      />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-14">
          <SectionLabel
            label="CV / Resume"
            title="My Journey"
            description="Education, experience, and the path that brought me here."
          />
        </ScrollReveal>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <ScrollReveal direction="left">
            <h3
              className="font-syne font-bold text-lg mb-6 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              🎓 Education
            </h3>
            <div className="flex flex-col gap-6">
              {education.map((item, i) => (
                <TimelineEntry key={item.title} item={item} index={i} />
              ))}
            </div>

            <h3
              className="font-syne font-bold text-lg mt-10 mb-6 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              🌍 Languages
            </h3>
            <div className="flex flex-col gap-6">
              {personalInfo.languages.map((lang, i) => (
                <TimelineEntry
                  key={lang.name}
                  item={{ date: lang.level, title: lang.name, subtitle: lang.type === "primary" ? "Full professional proficiency" : "Reading, writing, conversational" }}
                  index={i}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Experience */}
          <ScrollReveal direction="right">
            <h3
              className="font-syne font-bold text-lg mb-6 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              💡 Experience & Learning
            </h3>
            <div className="flex flex-col gap-6">
              {experience.map((item, i) => (
                <TimelineEntry key={item.title} item={item} index={i} />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Mini Resume Card */}
        <ScrollReveal direction="scale">
          <div
            className="relative rounded-2xl p-8 md:p-10 overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3))",
              }}
            />

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="w-20 h-20 rounded-full flex items-center justify-center font-syne font-extrabold text-2xl text-white shrink-0 mx-auto md:mx-0"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                  boxShadow: "0 0 30px rgba(108,99,255,0.35)",
                }}
              >
                MR
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <h3
                  className="font-syne font-extrabold text-2xl mb-1 tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  {personalInfo.name}
                </h3>
                <p className="font-mono text-xs mb-4" style={{ color: "var(--accent)" }}>
                  Full-Stack Developer · Egypt
                </p>
                <p
                  className="text-sm leading-relaxed mb-5 max-w-xl"
                  style={{ color: "var(--muted)" }}
                >
                  CS student with strong front-end skills in React/TypeScript. Experienced in SOLID
                  principles & clean architecture. Problem solver with competitive programming
                  background. Currently learning Node.js backend development.
                </p>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-5">
                  {skills.flatMap((s) =>
                    [s.name.split(" · ")[0]].map((t) => (
                      <span
                        key={t + s.category}
                        className="font-mono text-[11px] px-2.5 py-1 rounded"
                        style={{
                          background: "var(--surface2)",
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                        }}
                      >
                        {t}
                      </span>
                    ))
                  )}
                </div>

                {/* Contact strip */}
                <div
                  className="flex flex-wrap gap-x-6 gap-y-1 text-xs font-mono justify-center md:justify-start"
                  style={{ color: "var(--muted)" }}
                >
                  <span>📧 {personalInfo.email}</span>
                  <span>🐙 github.com/Raslan07</span>
                  <span>📍 Egypt</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
