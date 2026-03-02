"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: "🎉",
    title: "Party Planning",
    description:
      "From intimate gatherings to lavish celebrations, we design and execute unforgettable events tailored to your vision and style.",
    href: "/services",
  },
  {
    icon: "🧭",
    title: "Bar Tour Guide",
    description:
      "Discover the city's best-kept secrets with a knowledgeable local host who knows every hidden speakeasy and rooftop lounge.",
    href: "/services",
  },
  {
    icon: "🤝",
    title: "Social Companion",
    description:
      "Arrive with confidence. Our professional companions ensure you're never alone at dinners, events, or nights on the town.",
    href: "/services",
  },
];

const steps = [
  { num: "01", title: "Request", desc: "Fill out our quick form with your preferences, dates, and vision." },
  { num: "02", title: "Consult", desc: "We reach out within 24 hours to refine every detail." },
  { num: "03", title: "Plan", desc: "Our team curates a bespoke experience just for you." },
  { num: "04", title: "Experience", desc: "Show up, enjoy, and let us handle everything else." },
];

const trustFeatures = [
  {
    icon: "🔒",
    title: "Complete Discretion",
    desc: "Your privacy is paramount. Every interaction is handled with absolute confidentiality.",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    desc: "Vetted professionals, secure processes, and your comfort always comes first.",
  },
  {
    icon: "✨",
    title: "Premium Experience",
    desc: "Every detail is considered. From first contact to final farewell, excellence is the standard.",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* ─── HERO ─── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(212,175,55,0.045) 0%, transparent 70%)",
            }}
          />

          {/* Decorative grid dots */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
            {/* APDM Brand */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2 flex flex-col items-center"
            >
              <span
                className="text-[52px] font-bold tracking-[0.15em] md:text-[72px]"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #F5E6A3 50%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                APDM
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#A0A0A0]/50">
                presents
              </span>
            </motion.div>

            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] px-4 py-1.5"
            >
              <span className="text-[12px] font-medium tracking-[0.08em] text-[#D4AF37]">
                Premium Nightlife Experiences
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 font-bold tracking-[-0.03em] text-[#F5F5F5]"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              Your night, upgraded.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 max-w-xl text-[17px] leading-relaxed text-[#A0A0A0] md:text-[18px]"
            >
              Private events. Curated nightlife. Sophisticated companionship.
              We handle the details so you show up and shine.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/request-booking">Plan My Night</Button>
              <Button variant="secondary" href="/services">
                See Services
              </Button>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex h-8 w-5 items-start justify-center rounded-full border border-[#D4AF37]/20 pt-1.5"
            >
              <div className="h-1.5 w-0.5 rounded-full bg-[#D4AF37]/40" />
            </motion.div>
          </motion.div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <FadeIn>
              <p className="mb-4 text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                What We Do
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-16 text-center text-[32px] font-semibold tracking-[-0.02em] text-[#F5F5F5] md:text-[40px]">
                Curated experiences, tailored to you.
              </h2>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.1}>
                  <ServiceCard
                    icon={s.icon}
                    title={s.title}
                    description={s.description}
                    href={s.href}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="bg-[#111111] py-20 md:py-28">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <FadeIn>
              <p className="mb-4 text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                The Process
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-16 text-center text-[32px] font-semibold tracking-[-0.02em] text-[#F5F5F5] md:text-[40px]">
                Four simple steps to your perfect night.
              </h2>
            </FadeIn>

            <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
              {/* Connecting line (desktop) */}
              <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent md:block" />

              {steps.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.1}>
                  <div className="relative text-center md:text-left">
                    <span className="mb-3 block text-[48px] font-bold leading-none text-[#D4AF37]/[0.12]">
                      {step.num}
                    </span>
                    <h3 className="mb-2 text-[18px] font-semibold text-[#F5F5F5]">
                      {step.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#A0A0A0]">
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TRUST ─── */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <FadeIn>
              <p className="mb-4 text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Why Us
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-16 text-center text-[32px] font-semibold tracking-[-0.02em] text-[#F5F5F5] md:text-[40px]">
                Built on trust.
              </h2>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
              {trustFeatures.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/[0.07] text-[24px]">
                      {f.icon}
                    </div>
                    <h3 className="mb-2 text-[17px] font-semibold text-[#D4AF37]">
                      {f.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#A0A0A0]">
                      {f.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="relative py-28">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto flex max-w-content flex-col items-center px-6 text-center lg:px-8">
            <FadeIn>
              <h2 className="mb-5 text-[32px] font-semibold tracking-[-0.02em] text-[#F5F5F5] md:text-[44px]">
                Ready to plan your night?
              </h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="mb-10 text-[17px] text-[#A0A0A0]">
                Let us create an experience you&apos;ll never forget.
              </p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <Button href="/request-booking">Get Started</Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
