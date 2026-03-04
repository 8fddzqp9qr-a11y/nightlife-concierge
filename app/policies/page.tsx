"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    content: [
      {
        heading: "Information We Collect",
        text: "When you use our services or submit a booking request, we may collect personal information including your name, email address, phone number, and event details. We also collect basic usage data through cookies to improve your experience on our website.",
      },
      {
        heading: "How We Use Your Information",
        text: "Your information is used solely to provide and improve our services — coordinating your bookings, communicating with you about your experience, and sending relevant updates. We never sell, rent, or share your personal information with third parties for marketing purposes.",
      },
      {
        heading: "Data Protection",
        text: "We implement industry-standard security measures to protect your personal data. Your information is stored securely and only accessible to authorized team members who need it to fulfill your booking.",
      },
      {
        heading: "Cookies",
        text: "Our website uses cookies to enhance functionality and analyze site traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the site.",
      },
      {
        heading: "Your Rights",
        text: "You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, contact us at apdmpartys@gmail.com.",
      },
    ],
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    content: [
      {
        heading: "Service Agreement",
        text: "By booking through APDM, you agree to these terms. Our services include party planning and event design, guided nightlife experiences, and professional social companionship. All services are subject to availability and confirmation by our team.",
      },
      {
        heading: "Eligibility",
        text: "All clients must be at least 21 years of age to book nightlife and bar-related services. Valid government-issued identification may be required at the time of service. We reserve the right to decline service if age requirements are not met.",
      },
      {
        heading: "Booking & Payment",
        text: "A booking is confirmed only after you receive written confirmation from our team. Payment terms, including deposits and final balances, will be communicated during your consultation. All prices quoted are in USD unless otherwise stated.",
      },
      {
        heading: "Client Conduct",
        text: "Clients are expected to treat all APDM staff, hosts, and companions with respect and professionalism. We reserve the right to immediately end any engagement where our team members are subjected to inappropriate, abusive, or disrespectful behavior — without refund.",
      },
      {
        heading: "Limitation of Liability",
        text: "APDM acts as a coordinator and facilitator of experiences. While we take every precaution to ensure safety and quality, we are not liable for the actions of third-party venues, establishments, or service providers. Clients participate in all activities at their own risk.",
      },
      {
        heading: "Modifications",
        text: "We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms. Material changes will be communicated via email to active clients.",
      },
    ],
  },
  {
    id: "refund",
    title: "Refund & Cancellation Policy",
    content: [
      {
        heading: "Cancellations (48+ Hours in Advance)",
        text: "Cancellations made 48 hours or more before your scheduled experience will receive a full refund. Refunds are processed within 5–10 business days to the original payment method.",
      },
      {
        heading: "Cancellations (Within 48 Hours)",
        text: "Cancellations made less than 48 hours before the scheduled experience are non-refundable. This policy exists because our team commits time, resources, and venue reservations in advance of your event.",
      },
      {
        heading: "Rescheduling",
        text: "We understand plans change. If you need to reschedule, contact us as early as possible and we will do our best to accommodate a new date at no additional charge, subject to availability.",
      },
      {
        heading: "No-Shows",
        text: "Clients who do not show up for their scheduled experience without prior notice will not be eligible for a refund or rescheduling.",
      },
      {
        heading: "Service Issues",
        text: "If you are unsatisfied with your experience due to a failure on our part, please contact us within 24 hours. We will review the situation and, where appropriate, offer a partial refund or complimentary future service.",
      },
      {
        heading: "How to Request a Refund",
        text: "To request a cancellation or refund, email us at apdmpartys@gmail.com with your booking details. We will respond within one business day to confirm your request.",
      },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pb-8 pt-32">
          <div className="mx-auto max-w-content px-6 text-center lg:px-8">
            <FadeIn>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Legal
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mb-5 text-[36px] font-bold tracking-[-0.03em] text-[#F5F5F5] md:text-[52px]">
                Policies
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto max-w-lg text-[17px] leading-relaxed text-[#A0A0A0]">
                Transparency is important to us. Here&apos;s everything you need
                to know about how we operate.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Quick Nav */}
        <section className="pb-12">
          <div className="mx-auto max-w-[720px] px-6 lg:px-8">
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap justify-center gap-3">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-lg border border-[rgba(212,175,55,0.15)] bg-[#1A1A1A]/60 px-5 py-2.5 text-[14px] text-[#A0A0A0] transition-colors duration-200 hover:border-[rgba(212,175,55,0.3)] hover:text-[#D4AF37]"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Sections */}
        {sections.map((section, si) => (
          <section key={section.id} id={section.id} className="py-12 md:py-16">
            <div className="mx-auto max-w-[720px] px-6 lg:px-8">
              {/* Section divider (not before first) */}
              {si > 0 && (
                <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent md:mb-16" />
              )}

              <FadeIn>
                <h2 className="mb-10 text-[28px] font-semibold tracking-[-0.02em] text-[#D4AF37] md:text-[34px]">
                  {section.title}
                </h2>
              </FadeIn>

              <div className="flex flex-col gap-8">
                {section.content.map((item, i) => (
                  <FadeIn key={item.heading} delay={i * 0.04}>
                    <div>
                      <h3 className="mb-2 text-[17px] font-medium text-[#F5F5F5]">
                        {item.heading}
                      </h3>
                      <p className="text-[15px] leading-[1.85] text-[#A0A0A0]">
                        {item.text}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Last updated */}
        <section className="pb-20">
          <div className="mx-auto max-w-[720px] px-6 lg:px-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
            <p className="mt-8 text-center text-[13px] text-[#A0A0A0]/40">
              Last updated: March 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
