"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
}

const variants = {
  primary: {
    base: "bg-[#D4AF37] text-[#0A0A0A] border border-transparent",
    hover: "hover:bg-[#E6C45C]",
    shadow: "shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_4px_24px_-4px_rgba(212,175,55,0.3)]",
  },
  secondary: {
    base: "bg-transparent text-[#D4AF37] border border-[#D4AF37]/30",
    hover: "hover:border-[#D4AF37] hover:bg-[#D4AF37]/[0.06]",
    shadow: "shadow-none hover:shadow-[0_4px_24px_-8px_rgba(212,175,55,0.15)]",
  },
};

export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const v = variants[variant];

  const classes = [
    "relative inline-flex items-center justify-center",
    "rounded-full px-7 py-3",
    "text-[14px] font-semibold tracking-[0.02em]",
    "transition-all duration-200 ease-out",
    "select-none whitespace-nowrap",
    v.base,
    v.hover,
    v.shadow,
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    className,
  ].join(" ");

  const motionProps = disabled
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 500, damping: 30 },
      };

  if (href && !disabled) {
    return (
      <Link href={href}>
        <motion.span className={classes} {...motionProps} role="button">
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
