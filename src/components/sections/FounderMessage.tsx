"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInRight, staggerContainer, viewport } from "@/lib/animations";

export default function FounderMessage() {
  return (
    <section className="relative py-28 bg-brand-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(42,80,56,0.2),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">

          {/* Left: Full letter */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-cream-100/90 text-xl md:text-2xl font-light italic leading-relaxed space-y-5"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 not-italic text-xs font-semibold tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "inherit" }}>
              Founder&apos;s Message
            </motion.p>

            <motion.p variants={fadeInUp}>Hello everyone!</motion.p>

            <motion.p variants={fadeInUp}>
              I&apos;m Vivian, founder of Vivente&mdash;a company that builds homes,
              landscapes dreams, and makes swimming pools so beautiful you&apos;ll want to
              live in them (but please don&apos;t, we still recommend a house).
            </motion.p>

            <motion.p variants={fadeInUp}>
              Let me tell you how this all started. One day, I looked at a backyard and
              thought, &ldquo;This could be more than a patch of grass and a lonely garden
              gnome.&rdquo; And just like that, Vivente was born&mdash;with a mission to
              turn ordinary spaces into extraordinary experiences.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <p className="mb-2">We specialize in:</p>
              <ul className="space-y-1.5 ml-2">
                {[
                  "Swimming pools that make you say \u201cwow\u201d before you even dip a toe in",
                  "Landscaping that makes your neighbors suspiciously friendly",
                  "Home construction that\u2019s built to last and designed to impress",
                  "And maintenance and premium pool products that keep everything looking fabulous (because even pools need a little self-care)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-cream-100/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.p variants={fadeInUp}>
              At Vivente, we don&apos;t just build&mdash;we beautify. We don&apos;t just
              maintain&mdash;we pamper. And we don&apos;t just sell products&mdash;we
              deliver poolside happiness in a box.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Our team is made up of dreamers, doers, and people who know the difference
              between a shovel and a spade (trust me, it matters). We&apos;re here to make
              your space feel like a five-star resort&mdash;even if it&apos;s just your
              backyard.
            </motion.p>

            <motion.p variants={fadeInUp}>
              So whether you want a pool that sparkles, a garden that blooms, or a home
              that hugs you back, Vivente is ready to make it happen&mdash;with style,
              substance, and maybe a few dad jokes along the way.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Thank you for trusting us. Let&apos;s build something
              beautiful&mdash;and maybe throw a pool party while we&apos;re at it.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-2 space-y-0.5">
              <p>Warmly,</p>
              <p>Vivian</p>
              <p>Founder, Vivente</p>
            </motion.div>
          </motion.div>

          {/* Right: Founder photo — top-aligned */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative w-64 lg:w-72 flex-shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl shadow-brand-950/60 aspect-[3/4]">
              <img
                src="/founder.jpg"
                alt="Vivian — Founder, Vivente"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold-400/40 rounded-tr-2xl" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold-400/40 rounded-bl-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
