"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import { Instagram, ArrowRight, XIcon } from "lucide-react";
import { COMPANY } from "@/lib/company";

const serviceLinks = [
  { label: "Luxury Construction", href: "/services/construction" },
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Swimming Pools", href: "/services/swimming-pools" },
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Water Features", href: "/services/water-features" },
  { label: "Water Wellness", href: "/services/water-wellness" },
  { label: "Real Estate", href: "/services/real-estate" },
  { label: "Facility Management", href: "/services/facility-management" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/viventelifestyle/", label: "Instagram" },
  { icon: XIcon, href: "https://x.com/viventelifestyl", label: "X" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(42,80,56,0.15),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="mb-5">
              <Link href="/" aria-label="Vivente Home">
                <img
                  src="/white_logo.png"
                  alt="Vivente – Crafting Luxury"
                  className="navbar-logo"
                />
              </Link>
            </div>
            <p className="text-cream-200/40 text-sm leading-relaxed mb-6">
              Premium luxury construction, swimming pools, landscaping, and lifestyle
              environments — crafted with artistry, precision, and an unwavering
              commitment to excellence.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-brand-700/50 hover:border-gold-500/60 flex items-center justify-center text-cream-200/30 hover:text-gold-400 transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-cream-100 font-semibold text-sm tracking-widest uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(0, 5).map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-cream-200/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-300" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-cream-100 font-semibold text-sm tracking-widest uppercase mb-6">
              More
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(5).map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-cream-200/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-300" />
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-cream-200/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products/swimming-pool-products"
                  className="text-cream-200/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-300" />
                  Pool Products
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-cream-100 font-semibold text-sm tracking-widest uppercase mb-6">
              Start a Project
            </h4>
            <p className="text-cream-200/40 text-sm leading-relaxed mb-4">
              Ready to craft your dream space? Let&apos;s talk about your vision.
            </p>
            <p className="text-cream-200/30 text-xs leading-relaxed mb-6 whitespace-pre-line">
              {COMPANY.address.full}
            </p>
            <Link
              href="/enquiry"
              className="group flex items-center gap-2 bg-transparent border border-gold-500/50 hover:bg-gold-500 text-gold-400 hover:text-brand-950 font-semibold text-xs px-6 py-3 rounded-full transition-all duration-300 w-fit"
            >
              Enquire Now
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-700/60 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-cream-200/25 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-gold-600/50 italic text-sm"
          >
            {COMPANY.tagline}
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
