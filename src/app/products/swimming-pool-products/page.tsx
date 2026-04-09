"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeInUp, viewport } from "@/lib/animations";

const productCategories = [
  {
    title: "Filters",
    items: [
      "Swimming Pool Sand Filters",
      "Wall Mount Filters",
      "Inground Filters",
      "Cartridge Filters",
      "Swimming Pool Suction Trolley Systems",
    ],
  },
  {
    title: "Pumps",
    items: [
      "Pool Pumps",
      "Spa Pumps",
      "Heat and Chill Pumps",
    ],
  },
  {
    title: "Disinfection",
    items: [
      "UV Systems",
      "Ozonators",
      "Chemical Feeders",
      "Salt Chlorinators",
    ],
  },
  {
    title: "Pool White Goods",
    items: [
      "Skimmer Box (Wide/Small Mouth)",
      "Deckbox",
      "Gutter Drain",
      "Overflow Grating",
      "Nozzles",
      "Floor/Wall Inlet",
      "SS/ABS Square & Round Drain",
      "Vacuum Point",
      "Spa Nozzles & Controllers",
    ],
  },
  {
    title: "Pool Chemicals",
    items: [
      "Chlorine",
      "Soda Ash",
      "Sodium Bisulfate",
      "Algaecide",
      "Hypochlorite",
    ],
  },
  {
    title: "Pool Furniture",
    items: [
      "Loungers",
      "Poolside Umbrellas",
      "Sofa & Lounge Sets",
      "Pool Benches",
    ],
  },
  {
    title: "Aqua Gym Equipment",
    items: [
      "Aqua Bike",
      "Aqua Treadmill",
      "Aqua Stepper",
      "Water Weights",
    ],
  },
  {
    title: "Pool Safety Equipment",
    items: [
      "Lifebuoy",
      "Rescue Tube",
      "Backboard",
      "Lifeguard Chair",
      "Safety Flags",
      "Life Jackets",
    ],
  },
  {
    title: "Pool Competition Equipment",
    items: [
      "Starting Blocks",
      "Lane Dividers",
      "Backstroke Flags",
    ],
  },
  {
    title: "Pool Maintenance Equipment",
    items: [
      "Flat Net",
      "Deep Net",
      "Aluminium Brush",
      "Nylon Brush",
      "Vacuum Head",
      "Vacuum Hose",
      "Telescopic Pole",
      "Test Kits",
      "Robotic Pool Cleaners",
    ],
  },
  {
    title: "Lighting",
    items: [
      "Underwater Multicolour / NW / WW Lights",
      "Fiber Optic Starry Lights (Multicolour / NW / WW)",
      "Underwater Wall Washers (Multicolour / NW / WW)",
    ],
  },
  {
    title: "Ladders",
    items: [
      "Overflow Ladders",
      "Standard Ladders",
    ],
  },
  {
    title: "Additional Equipment",
    items: [
      "Counter Current Systems",
      "Fastlane",
      "Pool Automation",
    ],
  },
  {
    title: "Water Features",
    items: [
      "MagicStream Laminar",
      "MagicFlame Foam Jet",
      "Umbrella Jet",
      "Musical Fountain",
      "Dancing Fountains",
      "Wall Cascade",
      "Wall Truffles",
      "Splash Fountains",
      "Glass Fountains",
      "Water Curtains",
      "Natural Waterfalls",
      "Rock Waterfalls",
      "Customized Fountains",
    ],
  },
  {
    title: "Water Wellness Equipment",
    items: [
      "Hot Tubs & Spas",
      "Swim Spas",
      "Readymade Jacuzzis",
      "Traditional Sauna",
      "Infrared Readymade Sauna",
      "Steam Rooms",
      "Ice Bath",
    ],
  },
  {
    title: "Landscape Products",
    items: [
      "Readymade Grass / Turf",
      "Decking Wood / WPC",
      "Pebbles / Gravel",
      "Outdoor Lighting",
      "Pergolas",
      "Gazebos",
      "Planters & Pots (Ceramic, FRP, Concrete)",
      "Wall Planters",
      "Drip Irrigation Systems",
      "Sprinkler Systems",
      "Automatic Controllers",
      "Geotextiles",
      "Drain Cells",
    ],
  },
  {
    title: "Tiling",
    items: [
      "Glass Mosaic Tiles",
      "Porcelain Tiles",
      "Natural Stones",
      "Designer Tiles",
      "Stamped Concrete",
      "Quartz Finish",
    ],
  },
];

export default function SwimmingPoolProductsPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-20 overflow-hidden">
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
              href="/#products"
              className="inline-flex items-center gap-2 text-cream-200/50 hover:text-gold-400 text-xs tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Products
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-4"
          >
            Products
          </motion.p>

          <motion.h1
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-6 max-w-4xl leading-tight"
          >
            Swimming Pool Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-cream-200/60 text-lg max-w-2xl leading-relaxed"
          >
            A comprehensive range of premium pool equipment, accessories, and lifestyle
            products — curated for efficiency, elegance, and long-term performance.
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
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-brand-600/80 text-lg leading-relaxed font-light max-w-3xl"
          >
            Vivente offers a curated range of premium swimming pool equipment and
            accessories designed to enhance efficiency, safety, and long-term performance
            for both residential and commercial pools. Every product we source reflects
            our commitment to quality, elegance, and lasting value.
          </motion.p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-cream-100 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Range"
            title="Complete Product Catalogue"
            subtitle="Everything you need — from filtration and pumps to lighting, furniture, and water wellness equipment."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="bg-white/60 border border-gold-200/30 hover:border-gold-400/40 rounded-3xl p-8 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-brand-950/5"
              >
                <h3
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-xl font-bold text-brand-700 mb-5"
                >
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-brand-500/75 text-sm">
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

      {/* CTA */}
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
              Get a Quote
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl md:text-5xl font-bold text-cream-50 mb-6"
            >
              Ready to Equip Your Pool?
            </h2>
            <p className="text-cream-200/50 leading-relaxed mb-10">
              Contact us to discuss your requirements. Our team will recommend the right
              products and solutions for your pool and lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/enquiry"
                className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-gold-900/30"
              >
                Enquire Now
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
