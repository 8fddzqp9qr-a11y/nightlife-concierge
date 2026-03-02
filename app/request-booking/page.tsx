"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FormInput from "@/components/FormInput";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

const serviceOptions = [
  { value: "party-planning", label: "Party Planning" },
  { value: "bar-tour", label: "Bar Tour Guide" },
  { value: "dinner-companion", label: "Dinner & Event Companion" },
];

const budgetOptions = [
  { value: "500-1000", label: "$500 – $1,000" },
  { value: "1000-2500", label: "$1,000 – $2,500" },
  { value: "2500-5000", label: "$2,500 – $5,000" },
  { value: "5000+", label: "$5,000+" },
];

const initialData = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  dateCity: "",
  groupSize: "",
  budget: "",
  details: "",
  referral: "",
};

export default function RequestBookingPage() {
  const [formData, setFormData] = useState(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulated submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pb-8 pt-32">
          <div className="mx-auto max-w-content px-6 text-center lg:px-8">
            <FadeIn>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Book Now
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mb-5 text-[36px] font-bold tracking-[-0.03em] text-[#F5F5F5] md:text-[52px]">
                Request a Booking
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto max-w-lg text-[17px] leading-relaxed text-[#A0A0A0]">
                Tell us about your ideal night. We&apos;ll handle the rest.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Form / Success */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-[680px] px-6 lg:px-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center rounded-xl border border-[rgba(212,175,55,0.15)] bg-[#1A1A1A]/40 px-8 py-16 text-center"
              >
                {/* Gold checkmark circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.15,
                  }}
                  className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <motion.path
                      d="M10 18L16 24L26 12"
                      stroke="#D4AF37"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    />
                  </svg>
                </motion.div>

                <h2 className="mb-4 text-[28px] font-semibold text-[#F5F5F5]">
                  Thank you!
                </h2>
                <p className="mb-10 max-w-md text-[16px] leading-relaxed text-[#A0A0A0]">
                  Thanks for reaching out! We&apos;ll be in touch within 24
                  hours to confirm details and answer any questions.
                </p>
                <Button variant="secondary" href="/">
                  Back to Home
                </Button>
              </motion.div>
            ) : (
              <FadeIn>
                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl border border-[rgba(212,175,55,0.1)] bg-[#1A1A1A]/40 p-8 md:p-10"
                >
                  <div className="flex flex-col gap-6">
                    {/* Row: Name / Email */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormInput
                        label="Name"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Row: Phone / Service */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormInput
                        label="Phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Service Type"
                        name="serviceType"
                        type="select"
                        required
                        placeholder="Select a service"
                        value={formData.serviceType}
                        onChange={handleChange}
                        options={serviceOptions}
                      />
                    </div>

                    {/* Row: Date & City / Group Size */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormInput
                        label="Date & City"
                        name="dateCity"
                        required
                        placeholder="e.g. March 15, Miami"
                        value={formData.dateCity}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Group Size"
                        name="groupSize"
                        type="number"
                        placeholder="Number of guests"
                        value={formData.groupSize}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Budget */}
                    <FormInput
                      label="Budget Range"
                      name="budget"
                      type="select"
                      placeholder="Select your budget"
                      value={formData.budget}
                      onChange={handleChange}
                      options={budgetOptions}
                    />

                    {/* Details */}
                    <FormInput
                      label="Event Details / Special Requests"
                      name="details"
                      type="textarea"
                      placeholder="Tell us about your vision, preferences, or any special requirements..."
                      value={formData.details}
                      onChange={handleChange}
                    />

                    {/* Referral */}
                    <FormInput
                      label="How did you hear about us?"
                      name="referral"
                      placeholder="Instagram, friend referral, Google..."
                      value={formData.referral}
                      onChange={handleChange}
                    />

                    {/* Submit */}
                    <div className="mt-2">
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full md:w-auto"
                      >
                        {submitting ? "Sending..." : "Send"}
                      </Button>
                    </div>
                  </div>
                </form>
              </FadeIn>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
