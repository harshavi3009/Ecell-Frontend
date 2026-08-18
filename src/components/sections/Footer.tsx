"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";

const footerLinks = {
  Programs: [
    { label: "Incubation Program", href: "#" },
    { label: "Founder Fellowship", href: "#" },
    { label: "Startup School", href: "#" },
    { label: "Hack & Build", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Committee", href: "/committee" },
    { label: "Events", href: "/" },
    { label: "Partners", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Events", href: "/" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "mailto:ecell@rbu.edu.in" },
  ],
};

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-[var(--container-px)] py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--accent-soft)] flex items-center justify-center">
                <span className="text-[var(--accent)] font-[var(--font-space-grotesk)] font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-[var(--font-space-grotesk)] font-bold text-[var(--text-primary)]">
                E-Cell RBU
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs mb-6">
              The entrepreneurship cell of Ramdeobaba University, Nagpur. Building
              founders, funding startups, and driving innovation since 2018.
            </p>
            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
              <a href="mailto:ecell@rbu.edu.in" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                <Mail size={16}  />
                ecell@rbu.edu.in
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16}  />
                RBU Campus, Nagpur
              </span>
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], ci) => (
            <motion.div
              key={category}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="text-sm font-[var(--font-space-grotesk)] font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover-underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social column */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-sm font-[var(--font-space-grotesk)] font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <a
              href="https://www.instagram.com/ecell_rbu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} E-Cell RBU. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
            <span>Ramdeobaba University, Nagpur</span>
            <a href="#" className="hover:text-[var(--accent)] hover-underline transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--accent)] hover-underline transition-colors">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}