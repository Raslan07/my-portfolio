"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  element?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  element = "span",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 24, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Tag = element as any;

  return (
    <Tag className={className} style={{ perspective: "600px" }}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.3em]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block"
            style={{ transformOrigin: "bottom center" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
