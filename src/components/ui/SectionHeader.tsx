"use client";

import { motion } from "framer-motion";
import { fadeInUp, lineGrow, viewport } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`${centered ? "text-center mx-auto" : "text-left"} max-w-3xl mb-16`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.35em] uppercase mb-4 ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{ fontFamily: "var(--font-playfair)" }}
        className={`text-4xl md:text-5xl font-bold leading-tight mb-5 ${
          light ? "text-cream-100" : "text-brand-700"
        }`}
      >
        {title}
      </h2>
      <motion.div
        variants={lineGrow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={`h-px bg-gradient-to-r from-gold-500 to-gold-300 mb-6 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`text-lg leading-relaxed font-light ${
            light ? "text-cream-200/80" : "text-brand-600/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
