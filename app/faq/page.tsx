"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    q: "What exactly do you offer?",
    a: "We provide three core services: party planning and event design, guided nightlife tours with local hosts, and professional social companions for dinners, events, and nights out. Each service is fully customizable to your needs.",
  },
  {
    q: "Who are your hosts and companions?",
    a: "Every host and companion on our roster is carefully vetted for professionalism, social skills, and reliability. They're experienced in hospitality, well-spoken, and dedicated to making your experience exceptional.",
  },
  {
    q: "What cities do you serve?",
    a: "We currently operate in Miami, with plans to expand to additional cities soon. If you're interested in a city we don't yet cover, reach out — we may be able to accommodate special requests.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 48 hours in advance for standard requests. For large events or peak weekends, a week or more is ideal. That said, we do our best to accommodate last-minute requests when possible.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We understand plans change. Cancellations made 48 hours or more before your scheduled experience receive a full refund. Cancellations within 48 hours are non-refundable. We'll always work with you to reschedule when we can. For full details, visit our Policies page.",
  },
  {
    q: "Is this safe and professional?",
    a: "Absolutely. Safety and professionalism are non-negotiable. All our team members are vetted, and we maintain strict standards of conduct. Your comfort and well-being are our top priority at all times.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing varies based on the service, duration, group size, and specific requests. We offer packages starting at $500 and provide transparent quotes during your consultation — no hidden fees, no surprises.",
  },
  {
    q: "What if I have special requests or preferences?",
    a: "We love special requests — they help us make your experience truly unique. Whether it's dietary needs, accessibility requirements, specific themes, or anything else, share it in your booking form and we'll make it work.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.04}>
      <div
        className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
          isOpen
            ? "border-[rgba(212,175,55,0.25)] bg-[#1A1A1A]"
            : "border-[rgba(212,175,55,0.08)] bg-[#1A1A1A]/70 hover:bg-[#1A1A1A]"
        }`}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between px-6 py-5 text-left"
        >
          <span className="pr-4 text-[16px] font-medium text-[#F5F5F5]">
            {faq.q}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-[18px] font-light text-[#D4AF37]"
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 pb-6">
                <div className="mb-4 h-px w-full bg-[#D4AF37]/10" />
                <p className="text-[15px] leading-[1.75] text-[#A0A0A0]">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pb-8 pt-32">
          <div className="mx-auto max-w-content px-6 text-center lg:px-8">
            <FadeIn>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                FAQ
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mb-5 text-[36px] font-bold tracking-[-0.03em] text-[#F5F5F5] md:text-[52px]">
                Frequently Asked Questions
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto max-w-lg text-[17px] leading-relaxed text-[#A0A0A0]">
                Everything you need to know before booking.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Accordion */}
        <section className="py-12 md:py-20">
          <div className="mx-auto flex max-w-[720px] flex-col gap-3 px-6 lg:px-8">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
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
              <h2 className="mb-3 text-[32px] font-semibold tracking-[-0.02em] text-[#F5F5F5] md:text-[44px]">
                Still have questions?
              </h2>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mb-10 text-[17px] text-[#A0A0A0]">
                We&apos;re happy to chat.
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Button href="/request-booking">Contact Us</Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
