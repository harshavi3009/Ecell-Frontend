"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" aria-labelledby="hero-heading">
      {/* Mesh gradient background */}
      <div className="mesh-gradient" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-[var(--container-px)] py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={reduce ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-sm font-[var(--font-space-grotesk)] font-medium mb-6"
            >
              <span className="relative">
                <span className="absolute inset-0 bg-[var(--accent)] rounded-full opacity-20 animate-pulse" />
              </span>
              E-Cell RBU
            </motion.span>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-[var(--font-space-grotesk)] font-bold tracking-tighter text-[var(--text-primary)] leading-[1.1] mb-6"
            >
              Ideas. Innovation. Entrepreneurship.
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-10 text-center"
            >
              The entrepreneurship cell of Ramdeobaba University, Nagpur. Building
              founders, funding startups, and driving innovation since 2018.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/about">
                <Button size="lg" withArrow>
                  Explore E-Cell
                </Button>
              </Link>
              <Link href="/committee">
                <Button variant="secondary" size="lg">
                  Meet the Committee
                </Button>
              </Link>
            </motion.div>

            {/* Stats badges */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 flex flex-wrap gap-4 sm:gap-6"
            >
              {[
                { value: "500+", label: "Founders Empowered" },
                { value: "50+", label: "Startups Incubated" },
                { value: "₹2Cr+", label: "Funding Raised" },
                { value: "20+", label: "Mentors & Partners" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center sm:items-start p-4 sm:px-5 sm:py-3 bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-lg)] hover:border-[var(--border-accent)] transition-colors min-w-[140px]"
                >
                  <span className="text-2xl sm:text-3xl font-[var(--font-space-grotesk)] font-bold text-[var(--accent)] line-clamp-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual - placeholder for logo/illustration */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-transparent rounded-[var(--radius-2xl)] blur-3xl opacity-50" />
              <div className="relative w-full h-full rounded-[var(--radius-2xl)] bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-[var(--radius-xl)] bg-[var(--accent-soft)] flex items-center justify-center">
                    <span className="text-[var(--accent)] font-[var(--font-space-grotesk)] font-bold text-5xl">E</span>
                  </div>
                  <h3 className="text-2xl font-[var(--font-space-grotesk)] font-bold text-[var(--text-primary)] mb-2">
                    E-Cell RBU
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Ramdeobaba University, Nagpur
                  </p>
                </div>
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[var(--accent)]/20 blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-[var(--accent)]/15 blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
        aria-hidden="true"
      >
        <span className="text-xs font-[var(--font-space-grotesk)] uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-5 border-2 border-[var(--border)] rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-[var(--accent)] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}