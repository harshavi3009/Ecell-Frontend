"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface StatData {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function StatNumber({ value, prefix = "", suffix = "" }: Omit<StatData, "label">) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!isInView || reduce) return;
    let start: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reduce, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

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
              className="mt-16 grid grid-cols-3 gap-3 sm:gap-6"
            >
              {[
                { value: 85, suffix: "+", label: "Startups Incubated", color: "#00d4ff", soft: "rgba(0, 212, 255, 0.10)" },
                { value: 3, prefix: "₹", suffix: "Cr+", label: "Funding Raised", color: "#34d399", soft: "rgba(52, 211, 153, 0.10)" },
                { value: 20, suffix: "+", label: "Mentors & Partners", color: "#a78bfa", soft: "rgba(167, 139, 250, 0.10)" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center sm:items-start p-3 sm:px-5 sm:py-3 rounded-[var(--radius-lg)] transition-colors min-w-0"
                  style={{ backgroundColor: stat.soft, border: `1px solid ${stat.color}40` }}
                >
                  <span
                    className="text-xl sm:text-3xl font-[var(--font-space-grotesk)] font-bold line-clamp-1"
                    style={{ color: stat.color }}
                  >
                    <StatNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] sm:text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider mt-1 text-center sm:text-left">
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
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="E-Cell RBU logo"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
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