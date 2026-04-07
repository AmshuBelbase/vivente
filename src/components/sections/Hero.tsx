"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "2000+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "8", label: "Core Services" },
];

const heroWords = ["Crafting", "Complete", "Luxury", "Lifestyles", "—" ,"From", "Architecture", "To", "Wellness"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-950"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,160,48,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_100%,rgba(42,84,56,0.4),transparent)]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08], x: [-30, 30, -30] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-gold-500 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05], y: [-20, 20, -20] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] rounded-full bg-brand-400 blur-[100px] pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,160,48,1) 1px, transparent 1px), linear-gradient(to right, rgba(201,160,48,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gold-500" />
          <span className="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase">
            Crafting Luxury
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-5xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-cream-50 leading-[1.05] max-w-4xl"
          >
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word === "Inspire." ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-200">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          className="text-cream-200/60 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10"
        >
          At Vivente, we bring together design, engineering, and innovation to
          create timeless spaces. Every project is crafted to elevate lifestyle,
          comfort, and value.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <Link
            href="#services"
            className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-gold-900/30 hover:shadow-gold-500/30"
          >
            Explore Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/enquiry"
            className="flex items-center gap-2 border border-cream-200/20 text-cream-200/80 hover:border-gold-500/60 hover:text-gold-300 font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            Start Your Project
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cream-200/5 border border-cream-200/5 rounded-2xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.08 }}
              className="px-6 py-5 bg-brand-950/40 backdrop-blur-sm hover:bg-brand-900/60 transition-colors duration-300 text-center"
            >
              <p
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-3xl font-bold text-gold-400 mb-1"
              >
                {stat.value}
              </p>
              <p className="text-cream-200/50 text-xs tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-200/30"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
