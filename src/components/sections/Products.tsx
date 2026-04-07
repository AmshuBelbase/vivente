"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const products = [
  {
    icon: Package,
    title: "Swimming Pool Products",
    desc: "A curated range of premium pool equipment, filtration systems, lighting, chemicals, furniture, safety gear, and wellness products — everything your pool needs to perform and look exceptional.",
    href: "/products/swimming-pool-products",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-28 bg-cream-100 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(201,160,48,0.06),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(26,60,40,0.06),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products"
          title="Premium Pool & Lifestyle Products"
          subtitle="Vivente offers a curated range of premium swimming pool equipment and accessories — designed for efficiency, elegance, and long-term performance."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link key={product.title} href={product.href}>
                <motion.div
                  variants={scaleIn}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative bg-white/70 border border-gold-200/40 hover:border-gold-500/50 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-brand-950/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,160,48,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-700 to-brand-800 border border-gold-600/20 flex items-center justify-center mb-5 group-hover:border-gold-500/40 transition-colors">
                    <Icon size={22} className="text-gold-400 group-hover:text-gold-300 transition-colors" />
                  </div>

                  <h3
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="relative z-10 text-brand-700 font-semibold text-xl mb-3 group-hover:text-brand-800 transition-colors"
                  >
                    {product.title}
                  </h3>
                  <p className="relative z-10 text-brand-500/65 text-sm leading-relaxed group-hover:text-brand-600/80 transition-colors">
                    {product.desc}
                  </p>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold-500 to-transparent group-hover:w-full transition-all duration-500" />
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
