"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionLabel({ label, title, description, align = "left" }: SectionLabelProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs tracking-[0.25em] uppercase mb-3"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="font-syne font-extrabold tracking-tight mb-4"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          lineHeight: 1.05,
          color: "var(--text)",
        }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
