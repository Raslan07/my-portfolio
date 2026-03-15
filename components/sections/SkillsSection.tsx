"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skills } from "@/data/portfolio";

function SkillBar({ level, inView }: { level: number; inView: boolean }) {
  return (
    <div className="mt-3">
      <div className="flex justify-between font-mono text-[11px] mb-1.5" style={{ color: "var(--muted)" }}>
        <span>Proficiency</span>
        <span>{level}%</span>
      </div>
      <div className="h-[3px] rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
        <motion.div
          className="h-full rounded-full origin-left"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </div>
    </div>
  );
}

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, borderColor: "var(--accent)" }}
      className="relative rounded-xl p-6 group cursor-default overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.06), transparent)" }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-3xl mb-3"
          whileHover={{ scale: 1.2, rotate: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill.icon}
        </motion.div>

        <p
          className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
          style={{ color: "var(--accent)" }}
        >
          {skill.category}
        </p>
        <h3 className="font-syne font-bold text-base mb-3" style={{ color: "var(--text)" }}>
          {skill.name}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-1">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2 py-1 rounded"
              style={{ background: "var(--surface2)", color: "var(--muted)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <SkillBar level={skill.level} inView={inView} />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse, rgba(108,99,255,0.12), transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-14">
          <SectionLabel
            label="Tech Stack"
            title="Skills & Technologies"
            description="Technologies I've worked with — from frontend polish to algorithmic depth."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
