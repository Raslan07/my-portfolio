"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  { icon: "📧", label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: "🐙", label: "github.com/Raslan07", href: personalInfo.github },
  { icon: "💼", label: "linkedin · mostafa-hussin", href: personalInfo.linkedin },
  { icon: "👤", label: "facebook · raslanr7", href: personalInfo.facebook },
];

const subjectOptions = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Just Saying Hi",
  "Other",
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const inputClass =
    "w-full rounded-lg px-4 py-3 text-sm font-sans outline-none transition-all duration-200";
  const inputStyle = (name: string) => ({
    background: "var(--surface)",
    border: `1px solid ${focused === name ? "var(--accent)" : "var(--border)"}`,
    color: "var(--text)",
    boxShadow: focused === name ? "0 0 0 3px rgba(108,99,255,0.12)" : "none",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-14">
          <SectionLabel
            label="Get In Touch"
            title="Let's Build Something"
            description="Whether you have a project, want to collaborate, or just want to say hi — I'm always open."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — info */}
          <ScrollReveal direction="left">
            <h3 className="font-syne font-bold text-2xl mb-4" style={{ color: "var(--text)" }}>
              Open for opportunities
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              I&apos;m a 21-year-old CS student from Egypt actively looking for internships,
              freelance projects, and collaborations. I usually respond within 24 hours.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link, i) => (
                <ScrollReveal key={link.label} delay={i * 0.08} direction="left">
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200"
                    style={{
                      background: "var(--surface2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                      style={{ background: "var(--surface)" }}
                    >
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                    <span className="ml-auto text-xs" style={{ color: "var(--muted)" }}>
                      ↗
                    </span>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT — form */}
          <ScrollReveal direction="right">
            <div
              ref={formRef}
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
              />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="font-syne font-bold text-lg mb-2" style={{ color: "var(--text)" }}>
                      Send a Message
                    </h3>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] tracking-wider uppercase mb-1.5" style={{ color: "var(--muted)" }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          className={inputClass}
                          style={inputStyle("name")}
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] tracking-wider uppercase mb-1.5" style={{ color: "var(--muted)" }}>
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          className={inputClass}
                          style={inputStyle("email")}
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block font-mono text-[11px] tracking-wider uppercase mb-1.5" style={{ color: "var(--muted)" }}>
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        className={inputClass}
                        style={{ ...inputStyle("subject"), appearance: "none" }}
                      >
                        <option value="">Select a topic...</option>
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt} style={{ background: "var(--surface2)" }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-mono text-[11px] tracking-wider uppercase mb-1.5" style={{ color: "var(--muted)" }}>
                        Message
                      </label>
                      <textarea
                        placeholder="Tell me about your project or idea..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        rows={4}
                        className={inputClass}
                        style={{ ...inputStyle("message"), resize: "vertical" }}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3.5 rounded-xl font-mono text-sm tracking-wider font-medium text-white transition-all duration-200"
                      style={{
                        background: "var(--accent)",
                        boxShadow: "0 0 24px rgba(108,99,255,0.3)",
                      }}
                    >
                      Send Message →
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center py-14 text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="text-5xl mb-2"
                    >
                      ✅
                    </motion.div>
                    <h4 className="font-syne font-bold text-xl" style={{ color: "var(--text)" }}>
                      Message sent!
                    </h4>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      I'll get back to you as soon as possible.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="mt-4 font-mono text-xs px-4 py-2 rounded-lg border"
                      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                    >
                      Send another
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
