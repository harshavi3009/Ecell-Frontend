"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Committee", href: "/committee" },
];

export default function Navigation() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const navBgOpacity = useTransform(scrollY, [0, 50], [0, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      role="banner"
      style={{ backgroundColor: `rgba(10, 15, 26, ${scrolled ? 0.9 : 0})` }}
    >
      <nav
        className="max-w-7xl mx-auto px-[var(--container-px)] h-16 md:h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 z-10"
          aria-label="E-Cell RBU Home"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="E-Cell RBU logo"
              width={36}
              height={36}
              priority
              className="w-full h-full object-contain"
            />
          </motion.div>
          <span className="text-lg font-[var(--font-space-grotesk)] font-bold text-[var(--text-primary)] hidden sm:block">
            E-Cell RBU
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={reduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover-underline transition-colors"
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="https://www.instagram.com/ecell_rbu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={reduce ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-200"
            aria-label="Instagram"
          >
            <InstagramIcon size={28} />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          height: mobileOpen ? "auto" : 0,
        }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border)]"
      >
        <div className="px-[var(--container-px)] py-6 space-y-4">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              initial={false}
              animate={{ opacity: mobileOpen ? 1 : 0, x: mobileOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="block text-base font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover-underline transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="https://www.instagram.com/ecell_rbu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={false}
            animate={{ opacity: mobileOpen ? 1 : 0, x: mobileOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mt-2"
            onClick={() => setMobileOpen(false)}
          >
            <InstagramIcon size={18} />
            Follow on Instagram
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}