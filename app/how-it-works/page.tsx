"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    num: "01",
    title: "Submit Your Request",
    desc: "Start by filling out our booking form. Share your dates, preferences, group size, and any special requests. The more detail, the better we can tailor your experience.",
  },
  {
    num: "02",
    title: "Personal Consultation",
    desc: "Within 24 hours, a dedicated concierge reaches out to discuss your vision. We'll refine the details, suggest options, and answer every question.",
  },
  {
    num: "03",
    title: "Custom Planning",
    desc: "Our team goes to work — securing venues, coordinating logistics, arranging companions or guides, and building an itinerary that exceeds your expectations.",
  },
  {
    num: "04",
    title: "The Experience",
    desc: "All that's left is showing up. Everything is arranged, confirmed, and ready. Enjoy your night knowing every detail has been handled with care.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pb-8 pt-32">
          <div className="mx-auto max-w-content px-6 text-center lg:px-8">
            <FadeIn>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                The Process
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mb-5 text-[36px] font-bold tracking-[-0.03em] text-[#F5F5F5] md:text-[52px]">
                How It Works
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto max-w-lg text-[17px] leading-relaxed text-[#A0A0A0]">
                From first contact to an unforgettable night &mdash; here&apos;s
                exactly what to expect.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[720px] px-6 lg:px-8">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent md:left-[31px]" />

              <div className="flex flex-col gap-16">
                {steps.map((step, i) => (
                  <FadeIn key={step.num} delay={i * 0.1}>
                    <div className="relative flex gap-8 md:gap-12">
                      {/* Number node */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#0A0A0A] md:h-16 md:w-16">
                          <span className="text-[18px] font-bold text-[#D4AF37]/40 md:text-[22px]">
                            {step.num}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-1 md:pt-3">
                        <h3 className="mb-3 text-[20px] font-semibold tracking-[-0.01em] text-[#F5F5F5] md:text-[24px]">
                          {step.title}
                        </h3>
                        <p className="text-[15px] leading-[1.75] text-[#A0A0A0] md:text-[16px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
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
                Let&apos;s get started.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Button href="/request-booking">Request Booking</Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
