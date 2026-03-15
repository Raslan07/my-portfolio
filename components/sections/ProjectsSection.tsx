"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/portfolio";
import { personalInfo } from "@/data/portfolio";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <ScrollReveal delay={index * 0.09} direction="up">
      <motion.div
        whileHover={{ y: -7 }}
        className="group relative h-full flex flex-col rounded-2xl p-6 overflow-hidden"
        style={{
          background: "var(--surface2)",
          border: "1px solid var(--border)",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(108,99,255,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        {/* Hover gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.05), transparent 60%)" }}
        />

        {/* Top row */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            {project.icon}
          </motion.div>

          <div className="flex gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm transition-all duration-200"
              style={{
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              }}
              title="GitHub"
            >
              ↗
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1">
          <h3 className="font-syne font-bold text-lg mb-2" style={{ color: "var(--text)" }}>
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--muted)" }}>
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-1 rounded"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <ScrollReveal>
            <SectionLabel label="Portfolio" title="Featured Projects" />
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              className="font-mono text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
            >
              All Repos →
            </motion.a>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
