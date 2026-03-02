import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/request-booking", label: "Request Booking" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#111111]">
      {/* Top gold gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="mx-auto max-w-content px-6 pb-10 pt-16 lg:px-8">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2">
            <span
              className="text-[22px] font-semibold tracking-[-0.02em]"
              style={{
                background:
                  "linear-gradient(135deg, #D4AF37 0%, #F5E6A3 50%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nightlife
            </span>
            <span className="mt-[2px] text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0A0A0]/60">
              concierge
            </span>
          </Link>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Navigate */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#A0A0A0] transition-colors duration-200 hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@nightlifeconcierge.com"
                  className="text-[14px] text-[#A0A0A0] transition-colors duration-200 hover:text-[#D4AF37]"
                >
                  hello@nightlifeconcierge.com
                </a>
              </li>
              <li className="text-[14px] text-[#A0A0A0]/60">Miami, FL</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#A0A0A0] transition-colors duration-200 hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

        {/* Disclaimer & Copyright */}
        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-[12px] leading-relaxed text-[#A0A0A0]/40">
            Nightlife Concierge provides professional hospitality, event
            planning, and social companionship services only. All engagements
            are conducted with the highest standards of professionalism and
            discretion.
          </p>
          <p className="text-[12px] text-[#A0A0A0]/30">
            &copy; {new Date().getFullYear()} Nightlife Concierge. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
