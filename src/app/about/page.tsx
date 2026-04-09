"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewport,
} from "@/lib/animations";

const whatWeDo = [
  {
    title: "Construction",
    desc: "Luxury villas, residential developments, and premium commercial projects built to endure for generations.",
    href: "/services/construction",
    bg: "bg-brand-800",
  },
  {
    title: "Interior Design",
    desc: "Bespoke interiors from concept to turnkey execution — elegant, functional, and uniquely reflective of your lifestyle.",
    href: "/services/interior-design",
    bg: "bg-brand-900",
  },
  {
    title: "Swimming Pools",
    desc: "Infinity-edge pools, private retreats, and resort-scale installations crafted with engineering precision.",
    href: "/services/swimming-pools",
    bg: "bg-brand-800",
  },
  {
    title: "Landscaping",
    desc: "Serene, resort-inspired outdoor environments where nature and architecture meet in perfect harmony.",
    href: "/services/landscaping",
    bg: "bg-brand-900",
  },
  {
    title: "Water Features",
    desc: "Bespoke fountains, waterfalls, and flowing streams that introduce movement and elegance to any space.",
    href: "/services/water-features",
    bg: "bg-brand-800",
  },
  {
    title: "Water Wellness",
    desc: "Saunas, steam rooms, hot tubs, and swim spas — world-class wellness within private and commercial settings.",
    href: "/services/water-wellness",
    bg: "bg-brand-900",
  },
  {
    title: "Real Estate",
    desc: "Strategic advisory and property consultancy connecting clients with exceptional investment opportunities.",
    href: "/services/real-estate",
    bg: "bg-brand-800",
  },
  {
    title: "Facility Management",
    desc: "Professional AMC and facility management ensuring every property remains pristine and valuable.",
    href: "/services/facility-management",
    bg: "bg-brand-900",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar alwaysDark />

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,160,48,0.12),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,160,48,1) 1px, transparent 1px), linear-gradient(to right, rgba(201,160,48,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-4"
          >
            Vivente
          </motion.p>
          <motion.h1
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-6 max-w-4xl leading-tight"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-cream-200/60 text-lg max-w-2xl leading-relaxed"
          >
            Where luxury meets living art — crafting exceptional environments since 2004.
          </motion.p>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* ── 2. Our Story ─────────────────────────────────────────── */}
      <section className="relative py-28 bg-cream-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(201,160,48,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(26,60,40,0.06),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Story"
            title="Where Luxury Meets Living Art"
            subtitle="Founded on a vision of creating spaces that inspire, endure, and elevate everyday life."
            centered
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-brand-600/80 text-lg leading-relaxed font-light"
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
              className="text-brand-600/80 text-base leading-relaxed font-light"
            >
              Vivente is a premium luxury construction and lifestyle company delivering
              luxury villa construction, real estate development, bespoke interior design,
              swimming pool design and installation, landscaping, water features, and
              wellness spaces. Our expertise lies in creating environments where
              architecture, water, landscape, and design come together seamlessly to form
              exceptional living experiences.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brand-600/80 text-base leading-relaxed font-light"
            >
              With a strong construction background and an integrated approach to design
              and development, we provide end-to-end solutions — from concept and design
              to execution, maintenance, and facility management. Every project reflects
              precision, refined aesthetics, and superior craftsmanship, creating spaces
              that combine beauty, functionality, and long-term value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Our Philosophy ────────────────────────────────────── */}
      <section className="relative py-28 bg-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Image */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-brand-950/20 aspect-[4/3]">
                <Image
                  src="/projects/emerald-garden-estate.jpg"
                  alt="Vivente Philosophy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold-400/30 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold-400/30 rounded-bl-3xl" />
            </motion.div>

            {/* Right: Text */}
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
                Our Philosophy
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-4xl md:text-5xl font-bold text-brand-700 leading-tight mb-5"
              >
                Vitality, Sophistication &amp;{" "}
                <span className="text-gold-600">Timeless Living</span>
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mb-8"
              />
              <motion.p
                variants={fadeInUp}
                className="text-brand-600/80 text-lg leading-relaxed mb-6 font-light"
              >
                The name Vivente represents vitality, sophistication, and timeless living.
                It reflects our belief in blending artistry with engineering, nature with
                nurture, and design with discipline.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-brand-600/80 text-base leading-relaxed font-light"
              >
                Every project is guided by integrity, creativity, and an unwavering
                commitment to excellence, ensuring spaces that are both beautiful and
                enduring — crafted for generations to come.
              </motion.p>

              {/* Three pillars */}
              <motion.div variants={staggerContainer} className="space-y-4 mt-10">
                {[
                  { title: "Integrity", desc: "Every project is guided by integrity, creativity, and an unwavering pursuit of excellence." },
                  { title: "Craftsmanship", desc: "Premium materials, advanced engineering, and expert craftsmanship in every detail." },
                  { title: "Timeless Living", desc: "Spaces that inspire, endure, and elevate everyday living for years to come." },
                ].map((p) => (
                  <motion.div key={p.title} variants={fadeInUp} className="flex gap-4 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-700 text-sm mb-0.5">{p.title}</p>
                      <p className="text-brand-500/70 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Founder Message ───────────────────────────────────── */}
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
              <motion.p variants={fadeInUp} className="not-italic text-xs font-semibold tracking-[0.35em] uppercase text-gold-500 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Founder&apos;s Message
              </motion.p>

              <motion.p variants={fadeInUp}>Hello everyone!</motion.p>

              <motion.p variants={fadeInUp}>
                I&apos;m Vivian, founder of Vivente&mdash;a company that builds homes,
                landscapes dreams, and makes swimming pools so beautiful you&apos;ll want
                to live in them (but please don&apos;t, we still recommend a house).
              </motion.p>

              <motion.p variants={fadeInUp}>
                Let me tell you how this all started. One day, I looked at a backyard and
                thought, &ldquo;This could be more than a patch of grass and a lonely
                garden gnome.&rdquo; And just like that, Vivente was born&mdash;with a
                mission to turn ordinary spaces into extraordinary experiences.
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
                between a shovel and a spade (trust me, it matters). We&apos;re here to
                make your space feel like a five-star resort&mdash;even if it&apos;s just
                your backyard.
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

              <motion.div variants={fadeInUp} className="pt-2 space-y-1">
                <p>Warmly,</p>
                <Image
                  src="/founder-signature.png"
                  alt="Vivian's signature"
                  width={180}
                  height={60}
                  className="my-1 opacity-90 [filter:brightness(0)_invert(1)]"
                />
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
                <Image
                  src="/founder.jpg"
                  alt="Vivian — Founder, Vivente"
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold-400/40 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold-400/40 rounded-bl-2xl" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 5. What We Do ────────────────────────────────────────── */}
      <section className="relative py-28 bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(42,80,56,0.3),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,160,48,1) 1px, transparent 1px), linear-gradient(to right, rgba(201,160,48,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="An Integrated Approach to Luxury Living"
            subtitle="From architecture and interiors to water, landscape, and wellness — Vivente delivers complete lifestyle environments."
            light
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {whatWeDo.map((item) => (
              <Link key={item.title} href={item.href}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative bg-brand-900/60 border border-brand-700/30 hover:border-gold-600/40 rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:bg-brand-800/70 hover:shadow-xl hover:shadow-brand-950/50 overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,160,48,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="relative z-10 text-cream-100 font-semibold text-lg mb-3 group-hover:text-gold-200 transition-colors"
                  >
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-cream-200/40 text-sm leading-relaxed group-hover:text-cream-200/60 transition-colors">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold-500 to-transparent group-hover:w-full transition-all duration-500" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. Our Promise ───────────────────────────────────────── */}
      <section className="relative py-28 bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,160,48,0.08),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-500 mb-5"
            >
              Our Promise
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl md:text-5xl font-bold text-cream-50 mb-10"
            >
              Built on Trust. Delivered with Excellence.
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-left max-w-2xl mx-auto mb-12"
            >
              <p
                style={{ fontFamily: "var(--font-cormorant)" }}
                className="text-cream-100 text-xl md:text-2xl font-light leading-relaxed"
              >
                At Vivente, we don&apos;t just build structures — we craft exceptional
                living experiences. We don&apos;t just maintain pools — we preserve beauty
                and performance. We don&apos;t just design landscapes — we create
                environments that inspire and endure.
              </p>
              <p className="text-cream-200/50 text-base leading-relaxed">
                Under the leadership of Mr. Vivian, and inspired by the strong foundation
                laid by Mr. Charles Xavier, Vivente continues to deliver projects that
                embody luxury, precision, innovation, and trust — creating spaces that
                elevate lifestyle and deliver lasting value.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-10"
            />

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/enquiry"
                className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-gold-900/30"
              >
                Begin Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#services"
                className="flex items-center gap-2 border border-gold-500/40 text-gold-400 hover:border-gold-400 hover:text-gold-300 font-medium text-sm px-10 py-4 rounded-full transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
