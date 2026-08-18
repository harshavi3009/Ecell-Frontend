"use client";
 
import { motion, useReducedMotion, useScroll, useMotionValue, useSpring } from "motion/react";
import { Lightbulb, Users, Network, Rocket } from "lucide-react";
import { useRef, useEffect, useState, useMemo, useCallback } from "react";
 
interface CascadeCardData {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  accentColor: string;
}
 
const cascadeCards: CascadeCardData[] = [
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Fostering a culture of creative problem-solving and breakthrough thinking across disciplines.",
    icon: Lightbulb,
    accentColor: "#00d4ff",
  },
  {
    id: "leadership",
    title: "Leadership",
    description:
      "Developing entrepreneurial leaders who inspire teams and drive meaningful change.",
    icon: Users,
    accentColor: "#00ff88",
  },
  {
    id: "networking",
    title: "Networking",
    description:
      "Building bridges between students, alumni, investors, and industry pioneers.",
    icon: Network,
    accentColor: "#ff6b35",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    description:
      "Transforming ideas into viable ventures through incubation, funding, and mentorship.",
    icon: Rocket,
    accentColor: "#d400ff",
  },
];
 
// Slot layout: clockwise from top-left
// Slot 0: top-left (-1,-1) | Slot 1: top-right (1,-1) | Slot 2: bottom-right (1,1) | Slot 3: bottom-left (-1,1)
const SLOT_GRID = [
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 },
] as const;
 
// Matches Navigation.tsx's nav row height (h-16 md:h-20 → 64px / 80px).
// Adjust if you change the navbar's height classes.
const NAVBAR_HEIGHT = 80;
 
// Extra breathing room below the navbar so cards never sit flush against
// it — purely visual spacing, not a clipping fix.
const TOP_GAP = 32;
 
const STAGE_TOP = NAVBAR_HEIGHT + TOP_GAP;
 
// Fraction of the raw scroll range reserved as a "hold" at the end, so the
// finished diamond sits still for a while and small scroll-up wobble near
// the bottom doesn't immediately restart the cascade.
const HOLD_FRACTION = 0.15;
 
// The finished 2x2 diamond (2 * card + gap, in both axes) is scaled down
// to fit inside this fraction of the visible sticky area, guaranteeing
// nothing is ever clipped top/bottom or left/right regardless of screen size.
const FIT_MARGIN = 0.86;
 
function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
 
// Measures an element's rendered box via ResizeObserver (not window),
// so sizing/entry math is always correct relative to what's actually
// on screen, independent of any surrounding padding/containers.
function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 1280, height: 800 });
 
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setSize({ width: el.offsetWidth, height: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
 
  return { ref, size };
}
 
// Custom hook to properly call motion hooks at top level
function useCardMotion() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(0.85);
  const opacity = useMotionValue(0);
 
  const springX = useSpring(x, { stiffness: 220, damping: 28, mass: 1 });
  const springY = useSpring(y, { stiffness: 220, damping: 28, mass: 1 });
  const springScale = useSpring(scale, { stiffness: 260, damping: 28 });
  const springOpacity = useSpring(opacity, { stiffness: 260, damping: 28 });
 
  return { x, y, scale, opacity, springX, springY, springScale, springOpacity };
}
 
export default function AboutCardCascade() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: stageRef, size: stage } = useElementSize<HTMLDivElement>();
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
 
  // Card size is derived from the ACTUAL measured sticky stage (width and
  // height both), so the finished 2x2 diamond is guaranteed to fit inside
  // the visible area on any screen — this is what previously caused the
  // top row to get clipped under the navbar on shorter viewports.
  const { CARD_W, CARD_H, GAP } = useMemo(() => {
    const availW = Math.max(stage.width, 320);
    const availH = Math.max(stage.height, 480);
 
    const gap = clamp(availW * 0.02, 16, 32);
 
    // Preferred size before fitting constraints.
    const preferredW = clamp(availW * 0.22, 260, 360);
    const preferredH = preferredW * 0.92;
 
    // Max size (per card) so a 2x2 grid + gap fits within FIT_MARGIN of
    // both the available width and the available height.
    const maxWFromWidth = (availW * FIT_MARGIN - gap) / 2;
    const maxHFromHeight = (availH * FIT_MARGIN - gap) / 2;
 
    const scaleDown = Math.min(
      1,
      maxWFromWidth / preferredW,
      maxHFromHeight / preferredH
    );
 
    return {
      CARD_W: preferredW * scaleDown,
      CARD_H: preferredH * scaleDown,
      GAP: gap * scaleDown,
    };
  }, [stage.width, stage.height]);
 
  const slotOffset = useCallback(
    (slot: { x: number; y: number }) => ({
      x: slot.x * (CARD_W / 2 + GAP / 2),
      y: slot.y * (CARD_H / 2 + GAP / 2),
    }),
    [CARD_W, CARD_H, GAP]
  );
 
  // Off-screen entry point, measured against the actual sticky stage box
  // (not window), so cards always start just outside its real top-left
  // corner no matter what padding or layout surrounds it.
  const entryStart = useMemo(
    () => ({
      x: -(stage.width / 2) - CARD_W,
      y: -(stage.height / 2) - CARD_H,
    }),
    [stage.width, stage.height, CARD_W, CARD_H]
  );
 
  // Four independent card motion states (hooks at top level, not in a loop)
  const card0 = useCardMotion();
  const card1 = useCardMotion();
  const card2 = useCardMotion();
  const card3 = useCardMotion();
  const cardState = [card0, card1, card2, card3];
 
  // Scroll progress from the pinned container, not the section.
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });
 
  useEffect(() => {
    const update = (latest: number) => {
      const rawProgress = clamp(latest, 0, 1);
      // Squeeze the last HOLD_FRACTION into a held/finished plateau.
      const progress = clamp(rawProgress / (1 - HOLD_FRACTION), 0, 1);
      const segmentFloat = progress * 4;
      const globalSegment = clamp(Math.floor(segmentFloat), 0, 3);
      const t = clamp(segmentFloat - globalSegment, 0, 1);
 
      cascadeCards.forEach((_, i) => {
        const s = cardState[i];
 
        if (globalSegment < i) {
          // Hasn't entered yet.
          s.x.set(entryStart.x);
          s.y.set(entryStart.y);
          s.scale.set(0.85);
          s.opacity.set(0);
        } else if (globalSegment === i) {
          // Entering now: slide from off-screen into Slot 0.
          const entryDest = slotOffset(SLOT_GRID[0]);
          s.x.set(entryStart.x + (entryDest.x - entryStart.x) * t);
          s.y.set(entryStart.y + (entryDest.y - entryStart.y) * t);
          s.scale.set(0.85 + 0.15 * t);
          s.opacity.set(t);
        } else {
          // Already placed; being pushed one clockwise step by a later
          // card's entry (or holding at its final slot).
          const pushIndex = globalSegment - i - 1;
          const fromSlot = pushIndex;
          const toSlot = pushIndex + 1;
          const from = slotOffset(SLOT_GRID[fromSlot]);
          const to = slotOffset(SLOT_GRID[toSlot]);
          s.x.set(from.x + (to.x - from.x) * t);
          s.y.set(from.y + (to.y - from.y) * t);
          s.scale.set(1);
          s.opacity.set(1);
        }
      });
    };
 
    update(scrollYProgress.get());
    const unsub = scrollYProgress.on("change", update);
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress, entryStart, slotOffset]);
 
  // Reduced motion / mobile: static grid
  if (reduce || isMobile) {
    return (
      <section
        ref={sectionRef}
        className="relative py-[var(--section-py)] px-[var(--container-px)]"
        id="core-areas"
        aria-labelledby="cascade-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2
              id="cascade-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-space-grotesk)] font-bold tracking-tighter text-[var(--text-primary)] mb-6"
            >
              What Drives Us
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[65ch] mx-auto text-center">
              Four pillars that define our approach to building the
              entrepreneurship ecosystem at RBU.
            </p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cascadeCards.map((card, i) => (
              <CascadeCard key={card.id} card={card} index={i} isStatic={true} />
            ))}
          </div>
        </div>
      </section>
    );
  }
 
  return (
    <section
      ref={sectionRef}
      className="relative py-[var(--section-py)] px-[var(--container-px)]"
      id="core-areas"
      aria-labelledby="cascade-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            id="cascade-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-space-grotesk)] font-bold tracking-tighter text-[var(--text-primary)] mb-6"
          >
            What Drives Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[65ch] mx-auto"
          >
            Four pillars that define our approach to building the entrepreneurship
            ecosystem at RBU.
          </motion.p>
        </div>
      </div>
 
      {/*
        Full-viewport-width scroll stage, deliberately OUTSIDE max-w-7xl so
        the entry/slot math (which measures THIS element directly via
        ResizeObserver) reflects the real on-screen box, not a narrower
        content column.
      */}
      <div
        ref={scrollContainerRef}
        className="relative h-[300vh] min-h-[2000px]"
      >
        <div
          ref={stageRef}
          className="sticky flex items-center justify-center overflow-hidden pointer-events-none"
          style={{
            top: STAGE_TOP,
            height: `calc(100vh - ${STAGE_TOP}px)`,
          }}
        >
          {cascadeCards.map((card, i) => {
            const s = cardState[i];
            return (
              <motion.div
                key={card.id}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  x: s.springX,
                  y: s.springY,
                  scale: s.springScale,
                  opacity: s.springOpacity,
                  marginTop: -CARD_H / 2,
                  marginLeft: -CARD_W / 2,
                  width: CARD_W,
                  height: CARD_H,
                  zIndex: i + 1,
                  willChange: "transform, opacity",
                }}
                className="pointer-events-auto"
              >
                <CascadeCard card={card} index={i} isStatic={false} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
 
function CascadeCard({
  card,
  index,
  isStatic,
}: {
  card: CascadeCardData;
  index: number;
  isStatic: boolean;
}) {
  const Icon = card.icon;
 
  return (
    <motion.div
      initial={isStatic ? { opacity: 0, y: 20 } : false}
      whileInView={isStatic ? { opacity: 1, y: 0 } : undefined}
      viewport={isStatic ? { once: true, amount: 0.3 } : undefined}
      transition={
        isStatic
          ? { duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }
          : undefined
      }
      className="relative h-full w-full rounded-[var(--radius-xl)] bg-[var(--bg-surface)] border border-[var(--border)] p-6 md:p-8 flex flex-col hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
      style={{
        boxShadow: `0 0 0 1px ${card.accentColor}20, 0 20px 40px -20px ${card.accentColor}30`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-[var(--radius-xl)]"
        style={{ background: `linear-gradient(90deg, ${card.accentColor}, ${card.accentColor}40)` }}
      />
 
      <div className="flex-1 flex flex-col">
        <div
          className="w-14 h-14 rounded-[var(--radius-lg)] flex items-center justify-center mb-6"
          style={{ backgroundColor: `${card.accentColor}15` }}
        >
          <Icon size={28} color={card.accentColor} aria-hidden="true" />
        </div>
 
        <h3 className="text-xl font-[var(--font-space-grotesk)] font-semibold text-[var(--text-primary)] mb-3">
          {card.title}
        </h3>
 
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1">
          {card.description}
        </p>
      </div>
 
      <div
        className="absolute bottom-0 left-1/4 right-1/4 h-0.5 rounded-b-[var(--radius-xl)]"
        style={{
          background: `linear-gradient(90deg, transparent, ${card.accentColor}, transparent)`,
          opacity: 0.4,
        }}
      />
    </motion.div>
  );
}