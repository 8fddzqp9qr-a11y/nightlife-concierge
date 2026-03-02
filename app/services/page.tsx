"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

interface ServiceDetail {
  emoji: string;
  title: string;
  description: string;
  included: string[];
  perfectFor: string[];
  cta: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    emoji: "🎉",
    title: "Party Planning & Event Design",
    description:
      "Whether it's a birthday bash at the hottest club, a private rooftop soirée, or an elegant dinner party, our team handles every detail. We work with premier venues, top-tier vendors, and creative talent to bring your vision to life.",
    included: [
      "Venue sourcing and reservations",
      "Custom theme and decor coordination",
      "VIP table and bottle service arrangements",
      "DJ, entertainment, and music curation",
      "Guest list management and invitations",
    ],
    perfectFor: ["Birthdays", "Bachelor/Bachelorette", "Corporate Events", "Private Celebrations"],
    cta: "Plan Your Event",
  },
  {
    emoji: "🧭",
    title: "Bar Tour & Nightlife Hosting",
    description:
      "Skip the tourist traps and experience the city like a local. Our hosts are nightlife insiders who'll guide you through curated bar crawls, exclusive lounges, and the spots you won't find on Google.",
    included: [
      "Personalized bar crawl itinerary",
      "Skip-the-line access at select venues",
      "Local insider knowledge and recommendations",
      "Transportation coordination between venues",
      "Flexible pacing for your group's energy",
    ],
    perfectFor: ["Visitors", "Groups of Friends", "Date Nights", "Corporate Outings"],
    cta: "Book a Tour",
  },
  {
    emoji: "🤝",
    title: "Dinner & Event Companion",
    description:
      "Need a polished, engaging companion for a business dinner, gala, or social event? Our professional companions are articulate, well-dressed, and socially adept — ensuring you feel confident and comfortable in any setting.",
    included: [
      "Professional, vetted companion matched to your preferences",
      "Appropriate attire for any occasion",
      "Engaging conversation and social grace",
      "Flexible scheduling (evenings and weekends)",
      "Complete discretion guaranteed",
    ],
    perfectFor: ["Business Dinners", "Galas & Charity Events", "Social Gatherings", "Solo Travelers"],
    cta: "Request a Companion",
  },
];

function ServiceSection({
  service,
  index,
}: {
  service: ServiceDetail;
  index: number;
}) {
  const isAlt = index % 2 !== 0;

  return (
    <section className={isAlt ? "bg-[#111111]" : ""}>
      <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left: Title & Description */}
          <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
            <FadeIn>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/[0.08] text-[28px]">
                {service.emoji}
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-5 text-[28px] font-semibold tracking-[-0.02em] text-[#F5F5F5] lg:text-[34px]">
                {service.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mb-8 text-[16px] leading-[1.75] text-[#A0A0A0]">
                {service.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Button href="/request-booking">{service.cta}</Button>
            </FadeIn>
          </div>

          {/* Right: Included + Perfect For */}
          <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-[rgba(212,175,55,0.1)] bg-[#1A1A1A]/60 p-8">
                <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                  What&apos;s Included
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {service.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] text-[#A0A0A0]"
                    >
                      <span className="mt-0.5 text-[14px] text-[#D4AF37]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-[rgba(212,175,55,0.08)] pt-6">
                  <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                    Perfect For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.perfectFor.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] px-3.5 py-1.5 text-[13px] text-[#A0A0A0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="pb-8 pt-32">
          <div className="mx-auto max-w-content px-6 text-center lg:px-8">
            <FadeIn>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Our Services
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mb-5 text-[36px] font-bold tracking-[-0.03em] text-[#F5F5F5] md:text-[52px]">
                Experiences designed around you.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto max-w-lg text-[17px] leading-relaxed text-[#A0A0A0]">
                Every service is fully customizable. Tell us your vision, and
                we&apos;ll make it happen.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Service Sections */}
        {serviceDetails.map((service, i) => (
          <ServiceSection key={service.title} service={service} index={i} />
        ))}

        {/* Bottom CTA */}
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
