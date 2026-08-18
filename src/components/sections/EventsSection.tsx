"use client";

import { motion, useReducedMotion } from "motion/react";
import { Calendar, MapPin, Clock, ChevronRight, Award } from "lucide-react";
import { events, getEventStatus, type EcellEvent } from "@/data/events";
import { Button } from "@/components/ui/Button";

interface EventsSectionProps {
  variant?: "home" | "about";
  limit?: number;
}

export default function EventsSection({ variant = "home", limit }: EventsSectionProps) {
  const reduce = useReducedMotion();
  const displayEvents = limit ? events.slice(0, limit) : events;

  return (
    <section
      className="relative py-[var(--section-py)] px-[var(--container-px)]"
      id="events"
      aria-labelledby="events-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              id="events-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-space-grotesk)] font-bold tracking-tighter text-[var(--text-primary)] mb-3"
            >
              Events & Initiatives
            </motion.h2>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[65ch]"
            >
              From ideas to action. A historical archive of our flagship programs.
            </motion.p>
          </div>

          {variant === "home" && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button variant="outline" withArrow href="/#events">
                View All Events
              </Button>
            </motion.div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayEvents.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: EcellEvent; index: number }) {
  const reduce = useReducedMotion();
  const status = getEventStatus(event.endDate);

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={`${event.title} poster`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />
        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-[var(--font-space-grotesk)] font-medium ${
              status === "Past"
                ? "bg-[var(--bg-elevated)]/90 backdrop-blur text-[var(--text-secondary)] border border-[var(--border)]"
                : "bg-[var(--accent)] text-white"
            }`}
          >
            {status === "Past" ? "Past Event" : "Upcoming"}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Subtitle */}
        <p className="text-xs text-[var(--accent)] font-[var(--font-space-grotesk)] font-medium uppercase tracking-wider mb-2">
          {event.subtitle}
        </p>

        {/* Title */}
        <h3 className="text-lg font-[var(--font-space-grotesk)] font-semibold text-[var(--text-primary)] mb-3 line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
          {event.title}
        </h3>

        {/* Meta info */}
        <div className="space-y-2 mb-4 text-sm text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <Calendar size={14} aria-hidden="true" />
            <span>{event.displayDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} aria-hidden="true" />
            <span>{event.time}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2" role="list">
          {event.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
              <Award size={14} className="text-[var(--accent)] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
          {event.highlights.length > 3 && (
            <li className="flex items-center gap-2 text-sm text-[var(--accent)] font-medium">
              <ChevronRight size={14} aria-hidden="true" />
              +{event.highlights.length - 3} more highlights
            </li>
          )}
        </ul>
      </div>
    </motion.article>
  );
}