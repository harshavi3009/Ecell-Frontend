"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

// Exclude drag/animation event handlers that conflict with motion/react
type ButtonPropsBase = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;
type AnchorPropsBase = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

type ButtonOrAnchorProps = ButtonPropsBase & AnchorPropsBase & { href?: string };

interface ButtonProps extends ButtonOrAnchorProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  disabled,
  href,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[var(--accent)] text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]",
    secondary: "bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-accent)]",
    outline: "bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--bg-elevated)] hover:border-[var(--border-accent)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const Content = (
    <>
      {children}
      {withArrow && <ArrowRight size={16} />}
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...(props as AnchorPropsBase)}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      disabled={disabled}
      {...(props as ButtonPropsBase)}
    >
      {Content}
    </motion.button>
  );
};

Button.displayName = "Button";