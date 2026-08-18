"use client";
 
import { motion, useReducedMotion } from "motion/react";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
 
const pillars = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To cultivate an entrepreneurial mindset among students by providing the resources, mentorship, and platform needed to transform ideas into impactful ventures.",
    color: "#00d4ff",
  },
  {
    icon: Users,
    title: "Vision",
    description:
      "To establish RBU as the premier entrepreneurship hub in Central India, producing founders who build scalable solutions for real-world problems.",
    color: "#00ff88",
  },
  {
    icon: Lightbulb,
    title: "Focus Areas",
    description:
      "Incubation & Acceleration · Founder Education · Industry Partnerships · Research Commercialization · Community Building",
    color: "#ff6b35",
  },
  {
    icon: TrendingUp,
    title: "Impact Goal",
    description:
      "Empower 1000+ student entrepreneurs, incubate 100+ startups, and facilitate ₹10Cr+ in follow-on funding by 2028.",
    color: "#d400ff",
  },
];
 
export default function WhoWeAre() {
  const reduce = useReducedMotion();
 
  return (
    <section className="relative py-[var(--section-py)] px-[var(--container-px)] bg-[var(--bg-surface)]" aria-labelledby="who-we-are-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            id="who-we-are-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-space-grotesk)] font-bold tracking-tighter text-[var(--text-primary)] mb-6"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[65ch] mx-auto text-center"
          >
            E-Cell RBU is the official entrepreneurship cell of Ramdeobaba University,
            Nagpur. Since 2018, we've been the launchpad for student founders — providing
            incubation, funding, mentorship, and a thriving community to turn ideas into
            reality.
          </motion.p>
        </div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 md:p-8 rounded-[var(--radius-xl)] bg-[var(--bg-primary)] border border-[var(--border)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-[var(--radius-lg)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${pillar.color}15` }}
              >
                <pillar.icon size={24} style={{ color: pillar.color }} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-[var(--font-space-grotesk)] font-semibold text-[var(--text-primary)] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {pillar.description}
              </p>
              {/* Accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-b-[var(--radius-xl)]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)`,
                  opacity: 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}