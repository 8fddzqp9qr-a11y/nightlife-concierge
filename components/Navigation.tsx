"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/85 backdrop-blur-xl shadow-[0_1px_0_rgba(212,175,55,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <span
              className="text-[22px] font-semibold tracking-[-0.02em]"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F5E6A3 50%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nightlife
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0A0A0]/60 mt-[2px]">
              concierge
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className="relative px-4 py-2 group">
                  <motion.span
                    className={`relative z-10 text-[13px] font-medium tracking-[0.01em] transition-colors duration-200 ${
                      isActive ? "text-[#D4AF37]" : "text-[#A0A0A0] group-hover:text-[#F5F5F5]"
                    }`}
                  >
                    {link.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-[#D4AF37]/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/request-booking">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-full bg-[#D4AF37] px-6 py-2.5 text-[13px] font-semibold tracking-[0.01em] text-[#0A0A0A] transition-colors duration-200 hover:bg-[#E6C45C]"
              >
                Request Booking
              </motion.button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] w-5 bg-[#D4AF37] origin-center"
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-[1.5px] w-5 bg-[#D4AF37] origin-center"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] w-5 bg-[#D4AF37] origin-center"
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 z-40 flex h-full w-[280px] flex-col bg-[#0A0A0A] border-l border-[#D4AF37]/10 pt-24 px-8 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-[15px] font-medium transition-colors ${
                          isActive
                            ? "bg-[#D4AF37]/[0.08] text-[#D4AF37]"
                            : "text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-white/[0.03]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-8"
              >
                <Link href="/request-booking" onClick={() => setMobileOpen(false)}>
                  <button className="w-full rounded-full bg-[#D4AF37] py-3 text-[14px] font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E6C45C]">
                    Request Booking
                  </button>
                </Link>
              </motion.div>

              {/* Decorative bottom line */}
              <div className="mt-auto mb-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
                <p className="mt-4 text-[11px] text-[#A0A0A0]/40 tracking-wider uppercase text-center">
                  Premium Nightlife Experiences
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
