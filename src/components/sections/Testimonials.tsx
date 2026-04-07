"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sathish, Pallikaranai",
    quote:
      "Thank you for the excellent work—our swimming pool has turned out beautifully, and we truly love it. When we first began researching pool construction, choosing the right company was our biggest concern. From your very first visit, you represented your company with professionalism and clarity, patiently answering all our questions without any pressure. After meeting several contractors, we chose your team—and we’re extremely glad we did. Throughout the entire process, you were honest, transparent, and consistently responsive. Your presence and supervision during construction gave us complete peace of mind, allowing us to trust the process without any worry. The entire experience, from start to finish, was seamless and enjoyable. We would be more than happy to recommend your services—please feel free to use us as a reference anytime.",
  },
  {
    name: "Kaizer, ECR",
    quote:
      "We truly love our swimming pool—thank you for delivering such exceptional work. Your professionalism, honesty, and hands-on approach gave us complete confidence throughout the process. The entire experience was seamless, and the final outcome reflects outstanding craftsmanship. We’re happy to recommend your team anytime.",
  },
  {
    name: "Shirley, Hyderabad",
    quote:
      "We were initially worried about timelines, but the project was delivered on schedule without compromising quality. Truly a stress-free experience.",
  },
  {
    name: "Arun Ambrose, George Cathedral, Mount Road",
    quote:
      "We sincerely appreciate the thoughtful landscaping work carried out for our heritage church. The team showed great sensitivity in preserving the traditional character of the space while enhancing its natural beauty. Every element was designed with care, ensuring the surroundings feel serene, welcoming, and in harmony with the church’s legacy. The attention to detail, professionalism, and respect for the heritage structure were truly commendable. The entire process was smooth and well-executed, and the final outcome has elevated the spiritual and visual experience of the church. We are grateful and would gladly recommend their services.",
  },
  {
    name: "Majid, Dubai",
    quote:
      "Vivian is very professional and easy to work with and Good support for our Dubai real estate work. Good quality work and completed on time. Overall a great experience to work with.",
  },
  {
    name: "Sandeep, Downtown Dubai",
    quote:
      "Thank you for your support with our real estate work in Dubai. Vivian guided us properly and made the whole process easy to understand. Communication was smooth, and we were updated at every stage. The team was reliable, and everything was completed as promised. Overall, it was a very good experience, and we’re happy to recommend your services.",
  },
  {
    name: "Alishka, Nungambakkam",
    quote:
      "We had a very good experience with our interior project. The design matched our expectations, and the execution was neat and well-planned. Vivian’s team was supportive throughout and delivered on time.",
  },
  {
    name: "Prescilla, Shollinganallur",
    quote:
      "Very happy with the interior work done for our home. Vivian and his team understood our requirements well and completed the work neatly and on time. The best part was how budget friendly and flexible they were when discussing the interior budget. They guided us properly without pushing anything unnecessary. Everyone in our apartment really liked the work, and I’ve already referred them to many people in our community. Overall, a very good and hassle-free experience.",
  },
  {
    name: "Ashwitha Reddy, Hyderabad",
    quote:
      "Vivente delivered our project with excellent quality and professionalism. Smooth process, great finishing, and a very approachable team and special thanks to Vivian. Vivian and his team have really become like a family members to us. Highly recommended.",
  },
  {
    name: "Senthil, Pondicherry",
    quote:
      "We had a great experience working with Vivente for our villa construction. From the beginning, the team understood our requirements clearly and guided us through every stage of the project. They were very approachable and flexible when it came to budget discussions, which made the entire process comfortable and transparent. The quality of construction, finishing, and attention to detail has come out really well. The project was completed on time, and everything was handled smoothly. We’re very happy with the outcome and would confidently recommend Vivente to others.",
  },
  {
    name: "Guru, Puducherry",
    quote:
      "Vivente transformed our restaurant interiors beautifully. Great design, neat execution, and a very smooth experience from start to finish.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
      center: { x: 0, opacity: 1, transition: { duration: 0.35 } },
      exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.25 } }),
    }),
    []
  );

  const goTo = useCallback((index: number) => {
    const normalized = (index + testimonials.length) % testimonials.length;
    setCurrent(normalized);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(t);
  }, [current, isPlaying]);

  const p = testimonials[current];

  return (
    <section className="relative py-28 bg-brand-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(42,80,56,0.2),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold-500 mb-4">
            Testimonials
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-bold text-cream-50 mb-5"
          >
            What Clients Say
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto" />
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-gold-200/15 bg-brand-900/40 shadow-2xl shadow-brand-950/20 min-h-[320px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={p.name}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={1}
              className="p-8 md:p-12"
            >
              <div
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-gold-400 font-semibold text-base md:text-lg tracking-wide mb-4"
              >
                {p.name}
              </div>
              <p className="text-cream-50/90 text-base md:text-lg leading-relaxed whitespace-pre-line">
                {p.quote}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between px-6 py-4 border-t border-gold-200/10">
            <button
              className="w-10 h-10 rounded-full border border-brand-600/30 bg-cream-50/10 hover:border-gold-400/50 flex items-center justify-center text-cream-200 hover:text-gold-300 transition-all"
              aria-label="Previous testimonial"
              onClick={() => {
                setIsPlaying(false);
                goTo(current - 1);
              }}
              disabled={testimonials.length <= 1}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? "w-8 h-2 bg-gold-500" : "w-2 h-2 bg-brand-400/30 hover:bg-gold-400/50"
                  }`}
                />
              ))}
            </div>

            <button
              className="w-10 h-10 rounded-full bg-gold-500 hover:bg-gold-400 flex items-center justify-center text-brand-950 transition-all shadow-md"
              aria-label="Next testimonial"
              onClick={() => {
                setIsPlaying(false);
                goTo(current + 1);
              }}
              disabled={testimonials.length <= 1}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            className="text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors"
            onClick={() => setIsPlaying((v) => !v)}
            aria-label={isPlaying ? "Pause testimonials autoplay" : "Play testimonials autoplay"}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  );
}

