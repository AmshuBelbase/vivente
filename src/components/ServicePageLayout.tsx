"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

interface ServiceItem {
  label: string;
}

interface ServicePageLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroGradient: string;
  overview: string;
  offerings: ServiceItem[];
  offeringsTitle: string;
  extraSections?: { title: string; items: string[] }[];
  imagePath?: string;
}

export default function ServicePageLayout({
  eyebrow,
  title,
  subtitle,
  heroGradient,
  overview,
  offerings,
  offeringsTitle,
  extraSections,
  imagePath,
}: ServicePageLayoutProps) {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className={`relative min-h-[60vh] flex flex-col justify-end pb-20 overflow-hidden ${heroGradient}`}>
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-cream-200/50 hover:text-gold-400 text-xs tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Services
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-4"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-6 max-w-4xl leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-cream-200/60 text-lg max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex gap-4"
          >
            <Link
              href="/enquiry"
              className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-gold-900/30"
            >
              Enquire Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Overview */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4">
                Overview
              </p>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-3xl md:text-4xl font-bold text-brand-700 mb-6 leading-tight"
              >
                Crafted with Precision & Artistry
              </h2>
              <p className="text-brand-500/75 leading-relaxed text-base mb-8">
                {overview}
              </p>
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold text-sm group"
              >
                Start Your Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {imagePath ? (
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-brand-950/20 aspect-[4/3]">
                  <img src={imagePath} alt={title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-brand-950/20 aspect-[4/3] bg-gradient-to-br from-brand-800 to-brand-950 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-6" />
                    <p
                      style={{ fontFamily: "var(--font-cormorant)" }}
                      className="text-gold-400/60 text-2xl italic"
                    >
                      {title}
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mt-6" />
                  </div>
                </div>
              )}
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold-400/30 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold-400/30 rounded-bl-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-brand-950 overflow-hidden relative">
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
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4">
              What We Offer
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl md:text-5xl font-bold text-cream-50 mb-5"
            >
              {offeringsTitle}
            </h2>
            <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="px-2 pt-4 pb-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle2 size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  <p className="text-cream-100/90 text-base leading-relaxed">
                    {item.label}
                  </p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-gold-500 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Extra sections if any */}
      {extraSections && extraSections.length > 0 && (
        <section className="py-24 bg-cream-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              {extraSections.map((sec, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="bg-white/60 border border-gold-200/30 rounded-3xl p-8 hover:border-gold-400/40 transition-all duration-300"
                >
                  <h3
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-xl font-bold text-brand-700 mb-5"
                  >
                    {sec.title}
                  </h3>
                  <ul className="space-y-3">
                    {sec.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-brand-500/75 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,160,48,0.08),transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4">
              Begin Your Journey
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl md:text-5xl font-bold text-cream-50 mb-6"
            >
              Ready to Transform Your Space?
            </h2>
            <p className="text-cream-200/50 leading-relaxed mb-10">
              Share your vision with us. Our expert team will guide you from concept
              to completion with uncompromising quality and care.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/enquiry"
                className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-gold-900/30"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:enquiry@viventelifestyle.com"
                className="flex items-center gap-2 border border-gold-500/40 text-gold-400 hover:border-gold-400 hover:text-gold-300 font-medium text-sm px-10 py-4 rounded-full transition-all duration-300"
              >
                enquiry@viventelifestyle.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
