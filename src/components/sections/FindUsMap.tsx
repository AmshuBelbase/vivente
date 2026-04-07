"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "@/lib/animations";
import { COMPANY } from "@/lib/company";

const contactDetails = [
  { icon: MapPin, label: "Address", value: COMPANY.address.full },
  { icon: Phone, label: "Phone", value: COMPANY.phone },
  { icon: Mail, label: "Email", value: COMPANY.email },
  { icon: Clock, label: "Working Hours", value: COMPANY.workingHours },
];

export default function FindUsMap() {
  return (
    <section className="relative py-28 bg-cream-100 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4">
            Come Visit Us
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-bold text-brand-700 mb-5"
          >
            Find Us
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-5"
          >
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeInLeft}
                  className="flex gap-4 items-start bg-white/70 border border-gold-200/30 rounded-2xl p-5 hover:border-gold-400/40 hover:bg-white/90 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-500/60 uppercase tracking-wider font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="text-brand-700 font-medium text-sm leading-relaxed whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div variants={fadeInLeft}>
              <a
                href="/enquiry"
                className="block w-full text-center bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-600 hover:to-brand-700 text-cream-100 font-semibold text-sm px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-brand-900/20 hover:shadow-brand-900/40"
              >
                Schedule a Consultation
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-950/10 border border-gold-200/20"
            style={{ height: "450px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d79.72908093414814!3d13.047630371246956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.8) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vivente Location"
            />
            <div className="absolute top-4 left-4 bg-brand-950/90 backdrop-blur-sm border border-gold-500/30 rounded-xl px-4 py-2.5 flex items-center gap-2">
              <MapPin size={14} className="text-gold-400" />
              <span
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-cream-100 text-sm font-semibold"
              >
                Vivente
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
