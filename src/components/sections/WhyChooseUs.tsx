"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    num: "01",
    title: "A Complete Lifestyle Partner",
    desc: "At Vivente, we go beyond construction. From luxury villa construction and bespoke interiors to resort-style swimming pool design, landscaping, water features, and wellness spaces, we create complete lifestyle environments designed for elegance, comfort, and functionality.",
  },
  {
    num: "02",
    title: "Bespoke Design Philosophy",
    desc: "Every project we undertake is uniquely crafted. Our team seamlessly blends architecture, interior design, water design, and landscape aesthetics to create spaces that are sophisticated, functional, and timeless.",
  },
  {
    num: "03",
    title: "Uncompromising Quality",
    desc: "We believe true luxury lies in the details. By using premium materials, advanced engineering, and expert craftsmanship, we deliver projects that meet the highest standards of quality, durability, and refinement.",
  },
  {
    num: "04",
    title: "Innovation in Luxury Living",
    desc: "From infinity edge swimming pools and custom water features to luxury wellness spaces featuring saunas, steam rooms, hot tubs, and swim spas, we integrate cutting-edge design and modern technology to redefine contemporary luxury living.",
  },
  {
    num: "05",
    title: "Lifetime Care & Management",
    desc: "Our relationship continues well beyond project completion. Through Annual Maintenance Contracts (AMC) and professional facility management services, we ensure every property we build remains pristine, efficient, and valuable for years to come.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-cream-100 overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,160,48,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Vivente"
          title="Five Reasons to Trust Us With Your Vision"
          subtitle="Beyond building — we become your trusted partner in creating a lifestyle that reflects your aspirations."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-5"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              variants={fadeInUp}
              className="group grid md:grid-cols-[80px_1fr] gap-6 items-start bg-white/60 hover:bg-white/90 border border-gold-200/30 hover:border-gold-400/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-gold-100/50"
            >
              {/* Number */}
              <div
                style={{ fontFamily: "var(--font-cormorant)" }}
                className="text-5xl font-bold text-gold-200 group-hover:text-gold-400 transition-colors duration-300 leading-none pt-1"
              >
                {r.num}
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-xl font-bold text-brand-700 mb-3 group-hover:text-brand-800 transition-colors"
                >
                  {r.title}
                </h3>
                <p className="text-brand-500/75 leading-relaxed text-sm">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
