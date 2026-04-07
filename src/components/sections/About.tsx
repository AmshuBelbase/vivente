"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewport,
} from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    title: "Integrity",
    desc: "Every project is guided by integrity, creativity, and an unwavering pursuit of excellence.",
  },
  {
    title: "Craftsmanship",
    desc: "We blend premium materials, advanced engineering, and expert craftsmanship to deliver refined results.",
  },
  {
    title: "Timeless Living",
    desc: "Spaces that inspire, endure, and elevate everyday living — beautiful and enduring for years to come.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-cream-100 overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(201,160,48,0.06),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(26,60,40,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4"
            >
              Our Story
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl md:text-5xl font-bold text-brand-700 leading-tight mb-5"
            >
              Where Luxury Meets <span className="text-gold-600">Living Art</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mb-8"
            />

            <motion.p
              variants={fadeInUp}
              className="text-brand-600/80 text-lg leading-relaxed mb-5 font-light"
            >
              At Vivente, we believe that living beautifully is an art. Founded by{" "}
              <span className="text-brand-700 font-medium">Mr. Vivian</span>, the company
              builds upon a strong foundation shaped under the guidance of{" "}
              <span className="text-brand-700 font-medium">Mr. Charles Xavier</span> — who
              has been actively involved in the industry since 2004. With years of
              experience, dedication, and craftsmanship at its core, Vivente creates
              spaces that inspire, endure, and elevate everyday living.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brand-600/80 text-base leading-relaxed mb-10 font-light"
            >
              Vivente is a premium luxury construction and lifestyle company delivering
              luxury villa construction, real estate development, bespoke interior design,
              swimming pool design and installation, landscaping, water features, and
              wellness spaces. Our expertise lies in creating environments where
              architecture, water, landscape, and design come together seamlessly to form
              exceptional living experiences.
            </motion.p>

            {/* Three Pillars */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {pillars.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeInUp}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-700 text-sm mb-0.5">{p.title}</p>
                    <p className="text-brand-500/70 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Decorative Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-brand-800 to-brand-950 rounded-3xl p-10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,160,48,0.15),transparent_60%)]" />

              {/* Quote */}
              <div className="relative z-10">
                <div
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  className="text-6xl text-gold-500 leading-none mb-2 opacity-60"
                >
                  "
                </div>
                <p
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  className="text-cream-100 text-2xl md:text-3xl font-light leading-snug mb-8"
                >
                  We don’t just build structures — we craft exceptional living experiences.
                  We don’t just maintain pools — we preserve beauty and performance. We don’t
                  just design landscapes — we create environments that inspire and endure.
                </p>
                <div className="h-px bg-gradient-to-r from-gold-500/60 to-transparent mb-6" />
                <div>
                  <p
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-gold-400 font-medium"
                  >
                    Vivian
                  </p>
                  <p className="text-cream-200/40 text-xs tracking-widest uppercase mt-0.5">
                    Founder, Vivente
                  </p>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border border-gold-500/10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-gold-500/15" />
            </div>

            {/* Floating Accent Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-cream-50 border border-gold-200/40 rounded-2xl p-5 shadow-xl shadow-brand-950/10 w-52"
            >
              <p className="text-xs text-brand-500/60 uppercase tracking-wider mb-1">
                Founded
              </p>
              <p
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-3xl font-bold text-brand-700"
              >
                2004
              </p>
              <p className="text-xs text-gold-600 font-medium mt-1">
                Two Decades of Trust
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
