
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
 
} from "lucide-react";

import { FaInstagramSquare, FaFacebook } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  const venues = [
    {
      name: "OPERA",
      subtitle: "Elegant Celebrations",
      href: "/resorts/opera",
      brochure: "/brochures/opera-brochure.pdf",
    },
    {
      name: "OPULENCE",
      subtitle: "Grand Celebrations",
      href: "/resorts/opulence",
      brochure: "/brochures/opulence-brochure.pdf",
    },
  ];

  return (
    <footer className="bg-[#151719] text-white">

      {/* MAIN FOOTER */}

      <div className="relative overflow-hidden">

        {/* Decorative Circles */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#c6a36a]/10" />

        <div className="pointer-events-none absolute -left-40 bottom-[-220px] h-[420px] w-[420px] rounded-full border border-[#c6a36a]/10" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          {/* TOP CTA */}

          <div className="mb-16 flex flex-col justify-between gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end">

            <div className="max-w-[650px]">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#c6a36a]" />

                <span className="text-[10px] font-medium uppercase tracking-[3px] text-[#c6a36a]">
                  Let's Create Memories
                </span>
              </div>

              <h2 className="font-serif text-[36px] leading-tight text-white sm:text-[44px] lg:text-[50px]">
                Your special moments

                <span className="block italic text-[#c6a36a]">
                  deserve a beautiful setting.
                </span>
              </h2>

            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 border border-[#c6a36a] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#c6a36a] transition-all duration-300 hover:bg-[#c6a36a] hover:text-[#151719]"
            >
              Plan Your Celebration

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

          {/* FOOTER COLUMNS */}

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_1fr_1.15fr] lg:gap-10">

            {/* BRAND */}

            <div>

              <Link to="/" className="inline-block">

                <div className="font-serif text-[36px] tracking-[-1px] text-[#d0ad70]">
                  Opulence
                  <span className="text-white">.</span>
                </div>

                <div className="mt-1 text-[9px] uppercase tracking-[4px] text-[#a99b85]">
                  Resort & Banquets
                </div>

              </Link>

              <p className="mt-6 max-w-[300px] text-[13px] leading-6 text-white/55">
                A beautiful destination for weddings, celebrations
                and unforgettable moments in Punjab.
              </p>

              {/* SOCIAL */}

              <div className="mt-7">

                <p className="mb-3 text-[10px] font-medium uppercase tracking-[2px] text-white/45">
                  Follow Us
                </p>

                <div className="flex gap-2.5">

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#c6a36a] hover:bg-[#c6a36a] hover:text-[#151719]"
                  >
                    <FaInstagramSquare size={17} />
                  </a>

                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#c6a36a] hover:bg-[#c6a36a] hover:text-[#151719]"
                  >
                    <FaFacebook size={17} />
                  </a>

                </div>

              </div>

            </div>

            {/* QUICK LINKS */}

            <div>

              <h3 className="font-serif text-[20px] text-white">
                Explore
              </h3>

              <div className="mt-6 space-y-1">

                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center justify-between border-b border-white/[0.08] py-2.5 text-[13px] text-white/60 transition-colors hover:text-[#d0ad70]"
                  >
                    {link.name}

                    <ChevronRight
                      size={14}
                      className="text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#c6a36a]"
                    />

                  </a>
                ))}

              </div>

            </div>

            {/* OUR VENUES / BROCHURES */}

            <div>

              <h3 className="font-serif text-[20px] text-white">
                Our Venues
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-white/45">
                Discover our exclusive destinations and explore
                their brochures.
              </p>

              <div className="mt-5 space-y-3">

                {venues.map((venue) => (

                  <div
                    key={venue.name}
                    className="group border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#c6a36a]/50 hover:bg-[#c6a36a]/[0.06]"
                  >

                    {/* Venue Name */}

                    <Link
                      to={venue.href}
                      className="flex items-center justify-between"
                    >

                      <div>

                        <h4 className="font-serif text-[19px] tracking-wide text-[#d0ad70]">
                          {venue.name}
                        </h4>

                        <p className="mt-1 text-[9px] uppercase tracking-[1.5px] text-white/40">
                          {venue.subtitle}
                        </p>

                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-[#c6a36a] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />

                    </Link>

                    {/* Brochure Link */}

                    {/* <a
                      href={venue.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[10px] font-semibold uppercase tracking-[1.3px] text-white/65 transition-colors hover:text-[#d0ad70]"
                    >

                      <FileText size={14} />

                      View Brochure

                      <Download
                        size={13}
                        className="ml-auto"
                      />

                    </a> */}

                  </div>

                ))}

              </div>

            </div>

            {/* CONTACT */}

            <div>

              <h3 className="font-serif text-[20px] text-white">
                Contact
              </h3>

              <div className="mt-6 space-y-6">

                {/* ADDRESS */}

                <div className="flex items-start gap-3.5">

                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#c6a36a]"
                  />

                  <div>

                    <p className="mb-1 text-[9px] uppercase tracking-[2px] text-white/35">
                      Visit Us
                    </p>

                    <p className="text-[13px] leading-5 text-white/65">
                      Zirakpur Patiala Road Nabha
                      <br />
                      Punjab 140603
                    </p>

                  </div>

                </div>

                {/* PHONE NUMBERS */}

                <div className="flex items-start gap-3.5">

                  <Phone
                    size={17}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#c6a36a]"
                  />

                  <div>

                    <p className="mb-2 text-[9px] uppercase tracking-[2px] text-white/35">
                      Call Us
                    </p>

                    <div className="space-y-2">

                      <a
                        href="tel:+916284315908"
                        className="block text-[13px] text-white/65 transition hover:text-[#c6a36a]"
                      >
                        +91 62843 15908
                      </a>

                      <a
                        href="tel:+919888779138"
                        className="block text-[13px] text-white/65 transition hover:text-[#c6a36a]"
                      >
                        +91 98887 79138
                      </a>

                    </div>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="flex items-start gap-3.5">

                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#c6a36a]"
                  />

                  <div>

                    <p className="mb-1 text-[9px] uppercase tracking-[2px] text-white/35">
                      Email
                    </p>

                    <a
                      href="mailto:info@Opulenceresort.com"
                      className="break-all text-[13px] text-white/65 transition hover:text-[#c6a36a]"
                    >
                      info@Opulenceresort.com
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="border-t border-white/10 bg-[#c9a56a]">

        <div className="mx-auto flex min-h-[64px] max-w-[1400px] flex-col items-center justify-center gap-3 px-5 py-4 text-center sm:flex-row sm:justify-between sm:px-8 lg:px-12">

          <p className="text-[11px] font-medium text-[#191817] sm:text-[12px]">
            © {new Date().getFullYear()} Opulence Resort. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[9px] font-medium uppercase tracking-[1px] text-[#191817]/70 sm:text-[10px] sm:gap-4">

            <a href="#" className="transition hover:text-[#191817]">
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-[#191817]/30" />

            <a href="#" className="transition hover:text-[#191817]">
              Terms & Conditions
            </a>

            <span className="h-3 w-px bg-[#191817]/30" />

            <a
              href="https://ymorinnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#191817]"
            >
              YMOR INNOVATION
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
