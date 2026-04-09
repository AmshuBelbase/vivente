"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Enquiry',
  description: 'Get in touch with Vivente Lifestyle for luxury pool, interior, construction or real estate enquiries.',
  alternates: {
    canonical: 'https://viventelifestyle.com/enquiry',
  },
};

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
      { code: "+93", label: "🇦🇫 +93" }, // Afghanistan
      { code: "+355", label: "🇦🇱 +355" }, // Albania
      { code: "+213", label: "🇩🇿 +213" }, // Algeria
      { code: "+1-684", label: "🇦🇸 +1-684" }, // American Samoa
      { code: "+376", label: "🇦🇩 +376" }, // Andorra
      { code: "+244", label: "🇦🇴 +244" }, // Angola
      { code: "+1-264", label: "🇦🇮 +1-264" }, // Anguilla
      { code: "+672", label: "🇦🇶 +672" }, // Antarctica
      { code: "+1-268", label: "🇦🇬 +1-268" }, // Antigua and Barbuda
      { code: "+54", label: "🇦🇷 +54" }, // Argentina
      { code: "+374", label: "🇦🇲 +374" }, // Armenia
      { code: "+297", label: "🇦🇼 +297" }, // Aruba
      { code: "+61", label: "🇦🇺 +61" }, // Australia
      { code: "+43", label: "🇦🇹 +43" }, // Austria
      { code: "+994", label: "🇦🇿 +994" }, // Azerbaijan
      { code: "+1-242", label: "🇧🇸 +1-242" }, // Bahamas
      { code: "+973", label: "🇧🇭 +973" }, // Bahrain
      { code: "+880", label: "🇧🇩 +880" }, // Bangladesh
      { code: "+1-246", label: "🇧🇧 +1-246" }, // Barbados
      { code: "+375", label: "🇧🇾 +375" }, // Belarus
      { code: "+32", label: "🇧🇪 +32" }, // Belgium
      { code: "+501", label: "🇧🇿 +501" }, // Belize
      { code: "+229", label: "🇧🇯 +229" }, // Benin
      { code: "+1-441", label: "🇧🇲 +1-441" }, // Bermuda
      { code: "+975", label: "🇧🇹 +975" }, // Bhutan
      { code: "+591", label: "🇧🇴 +591" }, // Bolivia
      { code: "+387", label: "🇧🇦 +387" }, // Bosnia and Herzegovina
      { code: "+267", label: "🇧🇼 +267" }, // Botswana
      { code: "+55", label: "🇧🇷 +55" }, // Brazil
      { code: "+246", label: "🇮🇴 +246" }, // British Indian Ocean Territory
      { code: "+1-284", label: "🇻🇬 +1-284" }, // British Virgin Islands
      { code: "+673", label: "🇧🇳 +673" }, // Brunei
      { code: "+359", label: "🇧🇬 +359" }, // Bulgaria
      { code: "+226", label: "🇧🇫 +226" }, // Burkina Faso
      { code: "+257", label: "🇧🇮 +257" }, // Burundi
      { code: "+855", label: "🇰🇭 +855" }, // Cambodia
      { code: "+237", label: "🇨🇲 +237" }, // Cameroon 
      { code: "+238", label: "🇨🇻 +238" }, // Cape Verde
      { code: "+1-345", label: "🇰🇾 +1-345" }, // Cayman Islands
      { code: "+236", label: "🇨🇫 +236" }, // Central African Republic
      { code: "+235", label: "🇹🇩 +235" }, // Chad
      { code: "+56", label: "🇨🇱 +56" }, // Chile
      { code: "+86", label: "🇨🇳 +86" }, // China 
      { code: "+57", label: "🇨🇴 +57" }, // Colombia
      { code: "+269", label: "🇰🇲 +269" }, // Comoros
      { code: "+242", label: "🇨🇬 +242" }, // Republic of the Congo
      { code: "+243", label: "🇨🇩 +243" }, // Democratic Republic of the Congo
      { code: "+682", label: "🇨🇰 +682" }, // Cook Islands
      { code: "+506", label: "🇨🇷 +506" }, // Costa Rica
      { code: "+225", label: "🇨🇮 +225" }, // Ivory Coast
      { code: "+385", label: "🇭🇷 +385" }, // Croatia
      { code: "+53", label: "🇨🇺 +53" }, // Cuba
      { code: "+599", label: "🇨🇼 +599" }, // Curacao
      { code: "+357", label: "🇨🇾 +357" }, // Cyprus
      { code: "+420", label: "🇨🇿 +420" }, // Czech Republic
      { code: "+45", label: "🇩🇰 +45" }, // Denmark
      { code: "+253", label: "🇩🇯 +253" }, // Djibouti
      { code: "+1-767", label: "🇩🇲 +1-767" }, // Dominica
      { code: "+1-809", label: "🇩🇴 +1-809" }, // Dominican Republic
      { code: "+1-829", label: "🇩🇴 +1-829" }, // Dominican Republic
      { code: "+1-849", label: "🇩🇴 +1-849" }, // Dominican Republic
      { code: "+670", label: "🇹🇱 +670" }, // East Timor
      { code: "+593", label: "🇪🇨 +593" }, // Ecuador
      { code: "+20", label: "🇪🇬 +20" }, // Egypt
      { code: "+503", label: "🇸🇻 +503" }, // El Salvador
      { code: "+240", label: "🇬🇶 +240" }, // Equatorial Guinea
      { code: "+291", label: "🇪🇷 +291" }, // Eritrea
      { code: "+372", label: "🇪🇪 +372" }, // Estonia
      { code: "+251", label: "🇪🇹 +251" }, // Ethiopia
      { code: "+500", label: "🇫🇰 +500" }, // Falkland Islands
      { code: "+298", label: "🇫🇴 +298" }, // Faroe Islands
      { code: "+679", label: "🇫🇯 +679" }, // Fiji
      { code: "+358", label: "🇫🇮 +358" }, // Finland
      { code: "+33", label: "🇫🇷 +33" }, // France
      { code: "+689", label: "🇵🇫 +689" }, // French Polynesia
      { code: "+241", label: "🇬🇦 +241" }, // Gabon
      { code: "+220", label: "🇬🇲 +220" }, // Gambia
      { code: "+995", label: "🇬🇪 +995" }, // Georgia
      { code: "+49", label: "🇩🇪 +49" }, // Germany
      { code: "+233", label: "🇬🇭 +233" }, // Ghana
      { code: "+350", label: "🇬🇮 +350" }, // Gibraltar
      { code: "+30", label: "🇬🇷 +30" }, // Greece
      { code: "+299", label: "🇬🇱 +299" }, // Greenland
      { code: "+1-473", label: "🇬🇩 +1-473" }, // Grenada
      { code: "+1-671", label: "🇬🇺 +1-671" }, // Guam
      { code: "+502", label: "🇬🇹 +502" }, // Guatemala
      { code: "+44-1481", label: "🇬🇬 +44-1481" }, // Guernsey
      { code: "+224", label: "🇬🇳 +224" }, // Guinea
      { code: "+245", label: "🇬🇼 +245" }, // Guinea-Bissau
      { code: "+592", label: "🇬🇾 +592" }, // Guyana
      { code: "+509", label: "🇭🇹 +509" }, // Haiti
      { code: "+504", label: "🇭🇳 +504" }, // Honduras
      { code: "+852", label: "🇭🇰 +852" }, // Hong Kong
      { code: "+36", label: "🇭🇺 +36" }, // Hungary
      { code: "+354", label: "🇮🇸 +354" }, // Iceland
      { code: "+91", label: "🇮🇳 +91" }, // India
      { code: "+62", label: "🇮🇩 +62" }, // Indonesia
      { code: "+98", label: "🇮🇷 +98" }, // Iran
      { code: "+964", label: "🇮🇶 +964" }, // Iraq
      { code: "+353", label: "🇮🇪 +353" }, // Ireland
      { code: "+44-1624", label: "🇮🇲 +44-1624" }, // Isle of Man
      { code: "+972", label: "🇮🇱 +972" }, // Israel
      { code: "+39", label: "🇮🇹 +39" }, // Italy
      { code: "+1-876", label: "🇯🇲 +1-876" }, // Jamaica
      { code: "+81", label: "🇯🇵 +81" }, // Japan
      { code: "+44-1534", label: "🇯🇪 +44-1534" }, // Jersey
      { code: "+962", label: "🇯🇴 +962" }, // Jordan 
      { code: "+254", label: "🇰🇪 +254" }, // Kenya
      { code: "+686", label: "🇰🇮 +686" }, // Kiribati
      { code: "+383", label: "🇽🇰 +383" }, // Kosovo
      { code: "+965", label: "🇰🇼 +965" }, // Kuwait
      { code: "+996", label: "🇰🇬 +996" }, // Kyrgyzstan
      { code: "+856", label: "🇱🇦 +856" }, // Laos
      { code: "+371", label: "🇱🇻 +371" }, // Latvia
      { code: "+961", label: "🇱🇧 +961" }, // Lebanon
      { code: "+266", label: "🇱🇸 +266" }, // Lesotho
      { code: "+231", label: "🇱🇷 +231" }, // Liberia
      { code: "+218", label: "🇱🇾 +218" }, // Libya
      { code: "+423", label: "🇱🇮 +423" }, // Liechtenstein
      { code: "+370", label: "🇱🇹 +370" }, // Lithuania
      { code: "+352", label: "🇱🇺 +352" }, // Luxembourg
      { code: "+853", label: "🇲🇴 +853" }, // Macau
      { code: "+389", label: "🇲🇰 +389" }, // Macedonia
      { code: "+261", label: "🇲🇬 +261" }, // Madagascar
      { code: "+265", label: "🇲🇼 +265" }, // Malawi
      { code: "+60", label: "🇲🇾 +60" }, // Malaysia
      { code: "+960", label: "🇲🇻 +960" }, // Maldives
      { code: "+223", label: "🇲🇱 +223" }, // Mali
      { code: "+356", label: "🇲🇹 +356" }, // Malta
      { code: "+692", label: "🇲🇭 +692" }, // Marshall Islands
      { code: "+222", label: "🇲🇷 +222" }, // Mauritania
      { code: "+230", label: "🇲🇺 +230" }, // Mauritius
      { code: "+262", label: "🇾🇹 +262" }, // Mayotte
      { code: "+52", label: "🇲🇽 +52" }, // Mexico
      { code: "+691", label: "🇫🇲 +691" }, // Micronesia
      { code: "+373", label: "🇲🇩 +373" }, // Moldova
      { code: "+377", label: "🇲🇨 +377" }, // Monaco
      { code: "+976", label: "🇲🇳 +976" }, // Mongolia
      { code: "+382", label: "🇲🇪 +382" }, // Montenegro
      { code: "+1-664", label: "🇲🇸 +1-664" }, // Montserrat
      { code: "+212", label: "🇲🇦 +212" }, // Morocco
      { code: "+258", label: "🇲🇿 +258" }, // Mozambique
      { code: "+95", label: "🇲🇲 +95" }, // Myanmar
      { code: "+264", label: "🇳🇦 +264" }, // Namibia
      { code: "+674", label: "🇳🇷 +674" }, // Nauru
      { code: "+977", label: "🇳🇵 +977" }, // Nepal
      { code: "+31", label: "🇳🇱 +31" }, // Netherlands 
      { code: "+687", label: "🇳🇨 +687" }, // New Caledonia
      { code: "+64", label: "🇳🇿 +64" }, // New Zealand
      { code: "+505", label: "🇳🇮 +505" }, // Nicaragua
      { code: "+227", label: "🇳🇪 +227" }, // Niger
      { code: "+234", label: "🇳🇬 +234" }, // Nigeria
      { code: "+683", label: "🇳🇺 +683" }, // Niue
      { code: "+850", label: "🇰🇵 +850" }, // North Korea
      { code: "+1-670", label: "🇲🇵 +1-670" }, // Northern Mariana Islands
      { code: "+47", label: "🇳🇴 +47" }, // Norway
      { code: "+968", label: "🇴🇲 +968" }, // Oman
      { code: "+92", label: "🇵🇰 +92" }, // Pakistan
      { code: "+680", label: "🇵🇼 +680" }, // Palau
      { code: "+970", label: "🇵🇸 +970" }, // Palestine
      { code: "+507", label: "🇵🇦 +507" }, // Panama
      { code: "+675", label: "🇵🇬 +675" }, // Papua New Guinea
      { code: "+595", label: "🇵🇾 +595" }, // Paraguay
      { code: "+51", label: "🇵🇪 +51" }, // Peru
      { code: "+63", label: "🇵🇭 +63" }, // Philippines 
      { code: "+48", label: "🇵🇱 +48" }, // Poland
      { code: "+351", label: "🇵🇹 +351" }, // Portugal
      { code: "+1-787", label: "🇵🇷 +1-787" }, // Puerto Rico
      { code: "+1-939", label: "🇵🇷 +1-939" }, // Puerto Rico
      { code: "+974", label: "🇶🇦 +974" }, // Qatar 
      { code: "+40", label: "🇷🇴 +40" }, // Romania
      { code: "+7", label: "🇷🇺 +7" }, // Russia
      { code: "+250", label: "🇷🇼 +250" }, // Rwanda 
      { code: "+290", label: "🇸🇭 +290" }, // Saint Helena
      { code: "+1-869", label: "🇰🇳 +1-869" }, // Saint Kitts and Nevis
      { code: "+1-758", label: "🇱🇨 +1-758" }, // Saint Lucia 
      { code: "+508", label: "🇵🇲 +508" }, // Saint Pierre and Miquelon
      { code: "+1-784", label: "🇻🇨 +1-784" }, // Saint Vincent and the Grenadines
      { code: "+685", label: "🇼🇸 +685" }, // Samoa
      { code: "+378", label: "🇸🇲 +378" }, // San Marino
      { code: "+239", label: "🇸🇹 +239" }, // Sao Tome and Principe
      { code: "+966", label: "🇸🇦 +966" }, // Saudi Arabia
      { code: "+221", label: "🇸🇳 +221" }, // Senegal
      { code: "+381", label: "🇷🇸 +381" }, // Serbia
      { code: "+248", label: "🇸🇨 +248" }, // Seychelles
      { code: "+232", label: "🇸🇱 +232" }, // Sierra Leone
      { code: "+65", label: "🇸🇬 +65" }, // Singapore
      { code: "+1-721", label: "🇸🇽 +1-721" }, // Sint Maarten
      { code: "+421", label: "🇸🇰 +421" }, // Slovakia
      { code: "+386", label: "🇸🇮 +386" }, // Slovenia
      { code: "+677", label: "🇸🇧 +677" }, // Solomon Islands
      { code: "+252", label: "🇸🇴 +252" }, // Somalia
      { code: "+27", label: "🇿🇦 +27" }, // South Africa
      { code: "+82", label: "🇰🇷 +82" }, // South Korea
      { code: "+211", label: "🇸🇸 +211" }, // South Sudan
      { code: "+34", label: "🇪🇸 +34" }, // Spain
      { code: "+94", label: "🇱🇰 +94" }, // Sri Lanka
      { code: "+249", label: "🇸🇩 +249" }, // Sudan
      { code: "+597", label: "🇸🇷 +597" }, // Suriname 
      { code: "+268", label: "🇸🇿 +268" }, // Swaziland
      { code: "+46", label: "🇸🇪 +46" }, // Sweden
      { code: "+41", label: "🇨🇭 +41" }, // Switzerland
      { code: "+963", label: "🇸🇾 +963" }, // Syria
      { code: "+886", label: "🇹🇼 +886" }, // Taiwan
      { code: "+992", label: "🇹🇯 +992" }, // Tajikistan
      { code: "+255", label: "🇹🇿 +255" }, // Tanzania
      { code: "+66", label: "🇹🇭 +66" }, // Thailand
      { code: "+228", label: "🇹🇬 +228" }, // Togo
      { code: "+690", label: "🇹🇰 +690" }, // Tokelau
      { code: "+676", label: "🇹🇴 +676" }, // Tonga
      { code: "+1-868", label: "🇹🇹 +1-868" }, // Trinidad and Tobago
      { code: "+216", label: "🇹🇳 +216" }, // Tunisia
      { code: "+90", label: "🇹🇷 +90" }, // Turkey
      { code: "+993", label: "🇹🇲 +993" }, // Turkmenistan
      { code: "+1-649", label: "🇹🇨 +1-649" }, // Turks and Caicos Islands
      { code: "+688", label: "🇹🇻 +688" }, // Tuvalu
      { code: "+1-340", label: "🇻🇮 +1-340" }, // U.S. Virgin Islands
      { code: "+256", label: "🇺🇬 +256" }, // Uganda
      { code: "+380", label: "🇺🇦 +380" }, // Ukraine
      { code: "+971", label: "🇦🇪 +971" }, // United Arab Emirates
      { code: "+44", label: "🇬🇧 +44" }, // United Kingdom
      { code: "+1", label: "🇺🇸 +1" }, // United States
      { code: "+598", label: "🇺🇾 +598" }, // Uruguay
      { code: "+998", label: "🇺🇿 +998" }, // Uzbekistan
      { code: "+678", label: "🇻🇺 +678" }, // Vanuatu
      { code: "+379", label: "🇻🇦 +379" }, // Vatican
      { code: "+58", label: "🇻🇪 +58" }, // Venezuela
      { code: "+84", label: "🇻🇳 +84" }, // Vietnam
      { code: "+681", label: "🇼🇫 +681" }, // Wallis and Futuna 
      { code: "+967", label: "🇾🇪 +967" }, // Yemen
      { code: "+260", label: "🇿🇲 +260" }, // Zambia
      { code: "+263", label: "🇿🇼 +263" }, // Zimbabwe
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
                    <div className="flex gap-2 min-w-0">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-white/60 border border-gold-200/30 rounded-xl px-2 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60 text-sm flex-shrink-0 max-w-[85px]"
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
                        className="w-0 flex-1 min-w-0 bg-white/60 border border-gold-200/30 rounded-xl px-4 py-3 text-brand-700 focus:outline-none focus:border-gold-500/60"
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

