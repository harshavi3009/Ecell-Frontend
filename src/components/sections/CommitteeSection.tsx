"use client";
 
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Mail, Image } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { committeeMembers } from "@/data/committee";
import type { CommitteeMember } from "@/data/committee";
 
export default function CommitteeSection() {
  const reduce = useReducedMotion();
 
  return (
    <section className="relative py-[var(--section-py)] px-[var(--container-px)]" id="committee" aria-labelledby="committee-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            id="committee-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-space-grotesk)] font-bold tracking-tighter text-[var(--text-primary)] mb-6"
          >
            E-Cell RBU Committee
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[65ch] mx-auto text-center"
          >
            The student leaders driving entrepreneurship at Ramdeobaba University,
            Nagpur. Meet the team behind our programs, events, and community.
          </motion.p>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {committeeMembers.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
function MemberCard({ member, index }: { member: CommitteeMember; index: number }) {
  const reduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);
 
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
      whileHover={{ y: -8 }}
    >
      <div className="relative aspect-square overflow-hidden rounded-[var(--radius-xl)] bg-[var(--bg-surface)] border border-[var(--border)]">
        {!imgError ? (
          <img
            src={member.image}
            alt={`${member.name} - ${member.position}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[var(--bg-elevated)]">
            <Image size={48} className="text-[var(--text-muted)]" aria-hidden="true" />
          </div>
        )}
 
        {/* Social icons overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--bg-primary)]/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-200"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-200"
                aria-label={`${member.name} on Instagram`}
              >
                <InstagramIcon size={18} />
              </a>
            )}
            <a
              href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@rbu.edu.in`}
              className="w-9 h-9 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-200"
              aria-label={`Email ${member.name}`}
            >
              <Mail size={18}  />
            </a>
          </div>
        </div>
      </div>
 
      <div className="mt-4 text-center">
        <h4 className="font-[var(--font-space-grotesk)] font-semibold text-[var(--text-primary)] text-base">
          {member.name}
        </h4>
        <p className="text-sm text-[var(--accent)] font-medium mt-1">{member.position}</p>
      </div>
    </motion.article>
  );
}