"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ServiceInterestedIn =
  | "Construction"
  | "Interior Designing & Execution"
  | "Swimming Pools"
  | "Landscaping"
  | "Water Features"
  | "Water Wellness"
  | "Real Estate & Property Consultancy"
  | "AMC & Facility Management";

type ProjectType =
  | "Luxury Villa"
  | "Residential Development"
  | "Commercial Project"
  | "Renovation / Upgrade"
  | "Wellness Space"
  | "Outdoor / Landscape Project"
  | "Property Investment"
  | "Other";

type ProjectTimeline =
  | "Immediate"
  | "Within 1 Month"
  | "Within 3 Months"
  | "Within 6 Months"
  | "Flexible";

export default function EnquiryPage() {
  const services = useMemo(
    () =>
      [
        "Construction",
        "Interior Designing & Execution",
        "Swimming Pools",
        "Landscaping",
        "Water Features",
        "Water Wellness",
        "Real Estate & Property Consultancy",
        "AMC & Facility Management",
      ] satisfies ServiceInterestedIn[],
    []
  );

  const projectTypes = useMemo(
    () =>
      [
        "Luxury Villa",
        "Residential Development",
        "Commercial Project",
        "Renovation / Upgrade",
        "Wellness Space",
        "Outdoor / Landscape Project",
        "Property Investment",
        "Other",
      ] satisfies ProjectType[],
    []
  );

  const timelines = useMemo(
    () =>
      ["Immediate", "Within 1 Month", "Within 3 Months", "Within 6 Months", "Flexible"] satisfies ProjectTimeline[],
    []
  );

  const countryCodes = useMemo(
    () => [
      { code: "+91", label: "🇮🇳 +91" },
      { code: "+1", label: "🇺🇸 +1" },
      { code: "+44", label: "🇬🇧 +44" },
      { code: "+971", label: "🇦🇪 +971" },
      { code: "+966", label: "🇸🇦 +966" },
      { code: "+65", label: "🇸🇬 +65" },
      { code: "+61", label: "🇦🇺 +61" },
      { code: "+49", label: "🇩🇪 +49" },
      { code: "+33", label: "🇫🇷 +33" },
      { code: "+81", label: "🇯🇵 +81" },
    ],
    []
  );

  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [serviceInterestedIn, setServiceInterestedIn] = useState<ServiceInterestedIn>(
    "Construction"
  );
  const [projectType, setProjectType] = useState<ProjectType>("Luxury Villa");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectTimeline, setProjectTimeline] = useState<ProjectTimeline>("Immediate");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <main className="relative">
      <Navbar alwaysDark />

      <section className="relative py-28 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(42,80,56,0.08),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-600 mb-4">
              Enquiry
            </p>
            <h1
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl md:text-5xl font-bold text-brand-700 mb-4"
            >
              Begin Your Luxury Living Journey
            </h1>
            <p className="text-brand-600/80 text-lg leading-relaxed max-w-3xl mx-auto">
              Share your requirements with us, and our team will get in touch to
              discuss your vision, preferences, and project needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Form */}
            <div className="bg-white/70 backdrop-blur-sm border border-gold-200/30 rounded-3xl p-7 md:p-10 shadow-xl shadow-brand-950/5">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus("idle");

                  try {
                    const res = await fetch("/api/enquiry", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        fullName,
                        countryCode,
                        phoneNumber,
                        emailAddress,
                        serviceInterestedIn,
                        projectType,
                        projectLocation,
                        projectTimeline,
                        message,
                      }),
                    });

                    const data = await res.json();

                    if (data.success) {
                      setSubmitStatus("success");
                      // Reset form
                      setFullName("");
                      setCountryCode("+91");
                      setPhoneNumber("");
                      setEmailAddress("");
                      setServiceInterestedIn("Construction");
                      setProjectType("Luxury Villa");
                      setProjectLocation("");
                      setProjectTimeline("Immediate");
                      setMessage("");
                    } else {
                      setSubmitStatus("error");
                    }
                  } catch {
                    setSubmitStatus("error");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-600/70 mb-2 font-semibold">
                      Full Name
                    </label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-600/70 mb-2 font-semibold">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-white/60 border border-gold-200/30 rounded-xl px-3 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60 text-sm"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone number"
                        type="tel"
                        className="flex-1 bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-600/70 mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="Enter your email address"
                    type="email"
                    className="w-full bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-600/70 mb-2 font-semibold">
                      Service Interested In
                    </label>
                    <select
                      value={serviceInterestedIn}
                      onChange={(e) => setServiceInterestedIn(e.target.value as ServiceInterestedIn)}
                      className="w-full bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-600/70 mb-2 font-semibold">
                      Project Type
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value as ProjectType)}
                      className="w-full bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-600/70 mb-2 font-semibold">
                      Project Location
                    </label>
                    <input
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      placeholder="Enter project location"
                      className="w-full bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-600/70 mb-2 font-semibold">
                      Project Timeline
                    </label>
                    <select
                      value={projectTimeline}
                      onChange={(e) => setProjectTimeline(e.target.value as ProjectTimeline)}
                      className="w-full bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
                    >
                      {timelines.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-600/70 mb-2 font-semibold">
                    Message / Requirements
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project, vision, and requirements"
                    className="w-full min-h-[130px] bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="text-center py-2 px-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
                    ✅ Enquiry submitted! We'll get back to you shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-center py-2 px-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}

                <div className="flex items-center justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-brand-950 font-semibold text-sm px-8 py-3 rounded-full tracking-widest uppercase transition-all duration-300 shadow-lg shadow-gold-900/20 hover:shadow-gold-500/30"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </div>
              </form>
            </div>

            {/* Side image */}
            <div className="relative rounded-3xl overflow-hidden border border-gold-200/30 bg-brand-950/10 min-h-[320px]">
              <img
                src="/enquiry/enquiry-bg.jpg"
                alt="Enquiry background"
                className="absolute inset-0 w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-950/70 via-brand-950/30 to-brand-950/70" />

              <div className="relative z-10 p-7 md:p-10 flex flex-col justify-end h-full">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-300 mb-3">
                  Vivente
                </p>
                <p className="text-cream-50 text-2xl font-light leading-relaxed">
                  Precision-driven luxury—ready when you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

