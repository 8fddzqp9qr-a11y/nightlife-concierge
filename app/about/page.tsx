"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

const values = [
  {
    icon: "🎯",
    title: "Intentional Experiences",
    desc: "We don't do cookie-cutter. Every night is designed around who you are, what you want, and how you want to feel.",
  },
  {
    icon: "🤝",
    title: "Genuine Hospitality",
    desc: "Our people are the heart of what we do. Warm, professional, and genuinely invested in your experience.",
  },
  {
    icon: "🔐",
    title: "Absolute Discretion",
    desc: "What happens on your night out stays between us. Privacy isn't a feature — it's a foundation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pb-8 pt-32">
          <div className="mx-auto max-w-content px-6 text-center lg:px-8">
            <FadeIn>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                About Us
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mx-auto mb-5 max-w-3xl text-[36px] font-bold tracking-[-0.03em] text-[#F5F5F5] md:text-[52px]">
                We believe every night out should feel extraordinary.
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-[680px] px-6 lg:px-8">
            <FadeIn>
              <p className="mb-8 text-[17px] leading-[1.85] text-[#A0A0A0]">
                Nightlife Concierge was born from a simple idea: going out
                should never feel like work. Whether you&apos;re visiting a new
                city, celebrating a milestone, or simply craving a night that
                matches your ambition, we&apos;re here to make it effortless.
              </p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mb-8 text-[17px] leading-[1.85] text-[#A0A0A0]">
                Our team combines deep local knowledge with hospitality
                expertise. We&apos;ve spent years cultivating relationships with
                the best venues, hosts, and professionals in the industry — so
                you get access that&apos;s simply not available elsewhere.
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-[17px] leading-[1.85] text-[#A0A0A0]">
                We operate with one principle above all: your experience comes
                first. Every recommendation, every introduction, every detail is
                designed with your comfort, safety, and satisfaction in mind.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Decorative divider */}
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </div>

        {/* Values */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <FadeIn>
              <p className="mb-4 text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Our Values
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-16 text-center text-[32px] font-semibold tracking-[-0.02em] text-[#F5F5F5] md:text-[40px]">
                What we stand for.
              </h2>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="rounded-xl border border-[rgba(212,175,55,0.1)] bg-[#1A1A1A]/60 p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/[0.07] text-[24px]">
                      {v.icon}
                    </div>
                    <h3 className="mb-3 text-[18px] font-semibold text-[#D4AF37]">
                      {v.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#A0A0A0]">
                      {v.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Ready to experience the difference?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Button href="/request-booking">Get Started</Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
