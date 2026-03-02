"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative"
    >
      <Link href={href} className="block h-full">
        <div
          className="relative h-full overflow-hidden rounded-[8px] border border-[rgba(212,175,55,0.12)] bg-[#1A1A1A] p-8 transition-all duration-[250ms] ease-out group-hover:border-[rgba(212,175,55,0.4)] group-hover:shadow-[0_8px_40px_-12px_rgba(212,175,55,0.12)]"
        >
          {/* Subtle top-edge glow on hover */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent transition-all duration-[250ms] group-hover:via-[#D4AF37]/30" />

          {/* Icon */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/[0.07] text-[32px] leading-none">
            {icon}
          </div>

          {/* Title */}
          <h3 className="mb-3 text-[18px] font-semibold tracking-[-0.01em] text-[#F5F5F5]">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-6 text-[15px] leading-relaxed text-[#A0A0A0]">
            {description}
          </p>

          {/* Link indicator */}
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#D4AF37] transition-all duration-200 group-hover:gap-2.5">
            Learn More
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path
                d="M5.25 3.5L8.75 7L5.25 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
