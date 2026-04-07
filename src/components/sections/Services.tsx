"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Sofa,
  Waves,
  Leaf,
  Droplets,
  Sparkles,
  MapPin,
  Settings2,
} from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Building2,
    title: "Luxury Construction",
    desc: "We design and build bespoke luxury villas that combine architectural excellence with modern living. Our villas are thoughtfully planned to deliver comfort, aesthetics, and long-term durability.",
    accent: "from-brand-700 to-brand-800",
    href: "/services/construction",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    desc: "Vivente offers complete interior design and execution services tailored for modern homes and luxury spaces. Space planning, custom furniture design, lighting design, modular kitchens, wardrobes and cabinetry, and premium finishes come together into refined interiors.",
    accent: "from-brand-700 to-brand-800",
    href: "/services/interior-design",
  },
  {
    icon: Waves,
    title: "Swimming Pools",
    desc: "We specialize in the design and construction of high-end swimming pools for villas, resorts, and residential developments. Our pools combine engineering precision with luxurious design elements — from infinity pools to temperature-controlled experiences.",
    accent: "from-brand-700 to-brand-800",
    href: "/services/swimming-pools",
  },
  {
    icon: Leaf,
    title: "Landscaping",
    desc: "Our landscaping services transform outdoor spaces into beautiful natural environments that enhance property value and lifestyle. Services include garden design and development, vertical gardens, outdoor seating areas, pergolas and gazebos, pathways and outdoor lighting, and lawn development with irrigation systems.",
    accent: "from-brand-700 to-brand-800",
    href: "/services/landscaping",
  },
  {
    icon: Droplets,
    title: "Water Features",
    desc: "We create unique water experiences that elevate luxury living. Solutions include waterfalls and fountains, reflecting pools, decorative water walls, hydrotherapy pools, and wellness water features.",
    accent: "from-brand-700 to-brand-800",
    href: "/services/water-features",
  },
  {
    icon: Sparkles,
    title: "Water Wellness",
    desc: "We design luxurious water wellness environments that inspire relaxation and rejuvenation. Offerings include saunas, steam rooms, hot tubs, swim spas, and custom wellness retreat concepts that bring a world-class spa experience into private and commercial settings.",
    accent: "from-brand-700 to-brand-800",
    href: "/services/water-wellness",
  },
  {
    icon: MapPin,
    title: "Real Estate & Consultancy",
    desc: "Vivente provides strategic real estate advisory and property consultancy services for premium developments. As trusted channel partners, we guide clients in discovering exceptional investment opportunities while ensuring transparency, value, and confidence.",
    accent: "from-brand-700 to-brand-800",
    href: "/services/real-estate",
  },
  {
    icon: Settings2,
    title: "Facility Management",
    desc: "We provide professional facility management services to maintain properties in perfect condition. Services include swimming pool maintenance, garden maintenance, water feature servicing, property upkeep, and annual maintenance contracts.",
    accent: "from-brand-700 to-brand-800",
    href: "/services/facility-management",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-brand-950 overflow-hidden"
    >
      {/* Background */}
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
          title="Our Complete Luxury Services"
          subtitle="From concept to completion and beyond — Vivente delivers end-to-end solutions across eight core disciplines of luxury living."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.href} className="h-full">
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative h-full flex flex-col bg-brand-900/60 border border-brand-700/30 hover:border-gold-600/40 rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:bg-brand-800/70 hover:shadow-xl hover:shadow-brand-950/50 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,160,48,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-700 to-brand-800 border border-gold-600/20 flex items-center justify-center mb-5 group-hover:border-gold-500/40 transition-colors">
                  <Icon size={22} className="text-gold-400 group-hover:text-gold-300 transition-colors" />
                </div>

                <h3
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="relative z-10 text-cream-100 font-semibold text-lg mb-3 group-hover:text-gold-200 transition-colors"
                >
                  {service.title}
                </h3>
                <p className="relative z-10 text-cream-200/40 text-sm leading-relaxed group-hover:text-cream-200/60 transition-colors">
                  {service.desc}
                </p>

                {/* Bottom gold accent */}
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
