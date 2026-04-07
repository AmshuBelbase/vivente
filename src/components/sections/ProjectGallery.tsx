"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/projects/azure-heights.jpg", alt: "Azure Heights project" , caption: "Azure Heights" },
  { src: "/projects/sapphire-infinity.jpg", alt: "Sapphire Infinity project" , caption: "Sapphire Infinity" },
  { src: "/projects/serenity-wellness-retreat.jpg", alt: "Serenity Wellness Retreat project" , caption: "Serenity Wellness Retreat" },
  { src: "/projects/cascade-falls.jpg", alt: "Cascade Falls project" , caption: "Cascade Falls" },
];

export default function ProjectGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => goTo(current + 1, 1), 5000);
    return () => clearInterval(timer);
  }, [current, isPlaying, goTo]);

  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({
        x: dir > 0 ? 90 : -90,
        opacity: 0,
        scale: 0.97,
      }),
      center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
      },
      exit: (dir: number) => ({
        x: dir > 0 ? -90 : 90,
        opacity: 0,
        scale: 0.97,
        transition: { duration: 0.3, ease: "easeIn" as const },
      }),
    }),
    []
  );

  const p = galleryImages[current] ?? galleryImages[0];

  return (
    <section className="relative py-20 bg-cream-100 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4">
            Project Gallery
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-bold text-brand-700 mb-5"
          >
            Visual Stories
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-950/20 min-h-[360px]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={p.src}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <img src={p.src} alt={p.alt} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent" />
                <div className="relative z-10 p-7 md:p-10 h-full flex items-end">
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2 items-center">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-gold-500"
                      : "w-2 h-2 bg-brand-400/30 hover:bg-gold-400/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? "Pause gallery autoplay" : "Play gallery autoplay"}
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

              <button
                onClick={() => goTo(current - 1, -1)}
                aria-label="Previous gallery image"
                className="w-10 h-10 rounded-full border border-brand-600/30 bg-cream-50/50 hover:border-gold-400/60 hover:bg-gold-50 flex items-center justify-center text-brand-600 hover:text-gold-700 transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => goTo(current + 1, 1)}
                aria-label="Next gallery image"
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

