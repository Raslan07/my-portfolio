"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-8 md:px-12 py-4"
        style={{
          background: scrolled ? "rgba(5,5,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo — signature image */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center"
        >
          <Image
            src="/signature.png"
            alt="Mostafa Raslan"
            width={140}
            height={48}
            className="h-9 w-auto object-contain"
            style={{ filter: "brightness(1.1) drop-shadow(0 0 8px rgba(108,99,255,0.5))" }}
            priority
          />
        </motion.a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: activeSection === link.href.replace("#", "") ? "var(--text)" : "var(--muted)" }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === link.href.replace("#", "") ? "100%" : 0 }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="mailto:raslanspeed007@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-wider px-5 py-2.5 rounded border transition-all duration-200"
          style={{
            borderColor: "var(--accent)",
            color: "var(--accent)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--accent)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--accent)";
          }}
        >
          Hire Me
        </motion.a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-text origin-center transition-colors"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-text"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-text origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 z-[499] flex flex-col gap-4 px-8 py-6"
            style={{
              background: "rgba(5,5,8,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-sm tracking-widest uppercase text-left py-1"
                style={{ color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--muted)" }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              href="mailto:raslanspeed007@gmail.com"
              className="font-mono text-sm tracking-wider px-4 py-2.5 rounded border text-center mt-2"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
