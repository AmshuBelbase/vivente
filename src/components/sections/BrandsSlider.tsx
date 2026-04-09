"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewport } from "@/lib/animations";

const clients = [
  { name: "L&T", logo: "/clients/L&T.png" },
  { name: "Apollo Hospitals", logo: "clients/apollo.png" },
  { name: "TVS", logo: "clients/TVS.png" },
  { name: "Prestige Group", logo: "/clients/prestige.png" },
  { name: "Navins Builders", logo: "/clients/navin's.png" },
  { name: "Tafe", logo: "/clients/tafe.png" },
  { name: "Chennai Metro Rail", logo: "/clients/Metro.png" },
  { name: "Tamilnadu Tourism", logo: "/clients/TamilNadu.png" },
  { name: "Paramount Textiles", logo: "/clients/paramount.png" },
  { name: "Madha Medical College", logo: "/clients/madha.png" },
  { name: "Medimix", logo: "/clients/medimix.png" },
  { name: "Sol Fitness Resort", logo: "/clients/Sol Fitness.png" },

];

export default function BrandsSlider() {
  return (
    <section className="relative py-20 bg-cream-100 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 35s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4">
            Trusted By
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-bold text-brand-700 mb-5"
          >
            Our Esteemed Clients
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto" />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream-100 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream-100 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track py-6">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-5 flex items-center justify-center bg-white/80 border border-gold-200/40 hover:border-gold-400/60 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-100/50"
              style={{ width: client.logo ? "220px" : "220px", height: "150px", padding: "16px 28px" }}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain "
                />
              ) : (
                <p
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-brand-700/80 hover:text-brand-800 font-bold text-base text-center leading-snug transition-colors duration-300"
                >
                  {client.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
