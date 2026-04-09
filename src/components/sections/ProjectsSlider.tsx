"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInUp, viewport } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const projects = [ 
  {
    "id": 1,
    "title": "St. George’s Cathedral Rises in Grace Once More",
    "category": "Heritage Landscape Restoration",
    "description": "In the heart of Chennai, the historic grounds of St. George’s Cathedral have been gracefully revitalized through a bespoke landscaping intervention by Vivente. With deep respect for heritage, the design blends timeless aesthetics with refined luxury—curated greenery, natural stone pathways, and tranquil spaces enhance the church’s grandeur. The project embodies Vivente’s philosophy of elegance and balance, preserving sacred beauty while enriching its surroundings.",
    "accentGradient": "from-green-900/50 via-brand-900 to-brand-950",
    "tags": ["Heritage", "Landscaping", "Restoration", "Historic Architecture"],
    "stat1Label": "Location",
    "stat1Value": "Chennai, India",
    "stat2Label": "Completion Date",
    "stat2Value": "October 30, 2025"
  },
  {
    "id": 2,
    "title": "SOL Fitness Resort",
    "category": "Wellness Resort Development",
    "description": "On the outskirts of Chennai, SOL Fitness Resort redefines holistic luxury through an immersive retreat devoted to wellness and serenity. Executed by Vivente, the resort seamlessly integrates architecture, landscape, and water wellness features to create tranquil, sensory spaces. Sustainability, refined materials, and thoughtful spatial planning together shape an environment where relaxation, nature, and design coexist in harmony—offering a timeless destination for rejuvenation and mindful living.",
    "accentGradient": "from-purple-900/40 via-brand-950 to-slate-950",
    "tags": ["Wellness", "Resort", "Landscaping", "Water Features", "Holistic Design"],
    "stat1Label": "Location",
    "stat1Value": "Chennai, India",
    "stat2Label": "Completion",
    "stat2Value": "2025"
  },
  {
    "id": 3,
    "title": "Azure Bay Redefines Premium Gated Community Living",
    "category": "Residential Community Development",
    "description": "Located along Chennai’s coastal stretch, Azure Bay is a premium gated community blending comfort, security, and contemporary living. Developed by Vivente, it features well-planned villas, landscaped zones, and modern amenities for refined everyday life. Thoughtful design ensures openness, privacy, and connectivity. With advanced surveillance and quality infrastructure, Azure Bay offers residents an exclusive community experience—where modern living meets the serenity of belonging.",
    "accentGradient": "from-sky-900/70 via-brand-950 to-emerald-900",
    "tags": ["Community", "Villas", "Amenities", "Security", "Residential"],
    "stat1Label": "Location",
    "stat1Value": "Chennai, India",
    "stat2Label": "Type",
    "stat2Value": "Premium Gated Community"
  },
  // {
  //   id: 4,
  //   title: "Cascade Falls",
  //   category: "Bespoke Water Feature",
  //   description:
  //     "A dramatic 3-tier natural rock waterfall with illuminated koi pond, bubbling garden springs, and custom fountain — transforming an estate entrance completely.",
  //   accentGradient: "from-teal-900/40 via-brand-950 to-brand-900",
  //   tags: ["Waterfall", "Koi Pond", "Fountain", "Garden Springs"],
  //   stat1Label: "Feature Height",
  //   stat1Value: "4.5 Meters",
  //   stat2Label: "Duration",
  //   stat2Value: "6 Weeks",
  // },
];

export default function ProjectsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => goTo(current + 1, 1), 5000);
    return () => clearInterval(timer);
  }, [current, isPlaying, goTo]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.4, ease: "easeIn" as const },
    }),
  };

  const p = projects[current];

  return (
    <section className="relative py-28 bg-cream-100 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4">
            Our Portfolio
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-bold text-brand-700 mb-5"
          >
            Signature Projects
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto" />
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Main Slide */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-950/20 min-h-[480px] md:min-h-[520px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={p.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`absolute inset-0 bg-gradient-to-br ${p.accentGradient}`}
              >
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_50%,rgba(201,160,48,0.12),transparent)]" />

                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(201,160,48,1) 1px, transparent 1px), linear-gradient(to right, rgba(201,160,48,1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />

                <div className="relative z-10 h-full flex flex-col md:grid md:grid-cols-2 gap-8 p-10 md:p-16 items-center">
                  {/* Left: Content */}
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-gold-400 text-xs font-semibold tracking-[0.35em] uppercase mb-4"
                    >
                      {p.category}
                    </motion.p>

                    <motion.h3
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 }}
                      style={{ fontFamily: "var(--font-playfair)" }}
                      className="text-cream-50 text-3xl md:text-4xl font-bold mb-5 leading-tight"
                    >
                      {p.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-cream-200/60 leading-relaxed text-sm md:text-base mb-8 max-w-md"
                    >
                      {p.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.32 }}
                      className="flex flex-wrap gap-2"
                    >
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-cream-50/5 border border-gold-500/20 text-gold-300 text-xs font-medium tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Right: Stats */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col gap-5 md:pl-8 md:border-l border-gold-500/20 w-full"
                  >
                    {/* Large project number */}
                    <div
                      style={{ fontFamily: "var(--font-cormorant)" }}
                      className="text-[120px] font-bold text-cream-50/5 leading-none select-none hidden md:block"
                    >
                      {String(p.id).padStart(2, "0")}
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-2 gap-4 md:-mt-8">
                      <div className="bg-cream-50/5 border border-gold-500/15 rounded-xl p-4">
                        <p className="text-gold-400/60 text-xs uppercase tracking-wider mb-1">
                          {p.stat1Label}
                        </p>
                        <p
                          style={{ fontFamily: "var(--font-playfair)" }}
                          className="text-cream-100 font-bold text-xl"
                        >
                          {p.stat1Value}
                        </p>
                      </div>
                      <div className="bg-cream-50/5 border border-gold-500/15 rounded-xl p-4">
                        <p className="text-gold-400/60 text-xs uppercase tracking-wider mb-1">
                          {p.stat2Label}
                        </p>
                        <p
                          style={{ fontFamily: "var(--font-playfair)" }}
                          className="text-cream-100 font-bold text-xl"
                        >
                          {p.stat2Value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          {isPlaying && (
            <motion.div
              key={`progress-${current}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mt-1"
            />
          )}

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2 items-center">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-gold-500"
                      : "w-2 h-2 bg-brand-400/30 hover:bg-gold-400/50"
                  }`}
                />
              ))}
            </div>

            {/* Arrows + Play/Pause */}
            <div className="flex items-center gap-2">
              {/* Play/Pause */}
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="w-9 h-9 rounded-full border border-brand-600/30 bg-cream-50/50 hover:border-gold-400/50 flex items-center justify-center text-brand-600 hover:text-gold-600 transition-all"
              >
                {isPlaying ? (
                  <span className="flex gap-0.5">
                    <span className="w-0.5 h-3 bg-current rounded-full" />
                    <span className="w-0.5 h-3 bg-current rounded-full" />
                  </span>
                ) : (
                  <span
                    className="w-0 h-0 ml-0.5"
                    style={{
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "8px solid currentColor",
                    }}
                  />
                )}
              </button>

              {/* Prev */}
              <button
                onClick={() => goTo(current - 1, -1)}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full border border-brand-600/30 bg-cream-50/50 hover:border-gold-400/60 hover:bg-gold-50 flex items-center justify-center text-brand-600 hover:text-gold-700 transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Next */}
              <button
                onClick={() => goTo(current + 1, 1)}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full bg-gold-500 hover:bg-gold-400 flex items-center justify-center text-brand-950 transition-all shadow-md"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
