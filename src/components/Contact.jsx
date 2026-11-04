import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#faf9f6] px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden border border-[#ddd6ca] bg-[#24211d]">
          {/* Decorative Elements */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#b18a4a]/20" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#b18a4a]/10" />

          <div className="relative grid items-center gap-10 px-7 py-10 sm:px-10 md:grid-cols-[1fr_auto] md:px-14 md:py-12 lg:px-16">
            {/* Left Content */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#b18a4a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#c9a96b]">
                  Get In Touch
                </span>
              </div>

              <h2 className="max-w-[650px] font-serif text-3xl leading-tight tracking-[-0.5px] text-white sm:text-4xl lg:text-[44px]">
                Let’s make your celebration
                <span className="text-[#b18a4a]"> unforgettable.</span>
              </h2>

              <p className="mt-4 max-w-[600px] text-sm leading-7 text-white/65">
                Planning a wedding, celebration or special event? Connect with
                Opulence Resorts and discover the perfect setting for your
                occasion.
              </p>

              {/* Contact Info */}
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
                <a
                  href="tel:+916284315908"
                  className="group flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-[#c9a96b]"
                >
                  <Phone size={15} className="text-[#b18a4a]" />
                  +91 6284315908
                </a>

                <a
                  href="tel:+919888779138"
                  className="group flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-[#c9a96b]"
                >
                  <Phone size={15} className="text-[#b18a4a]" />
                   +91 9888779138
                </a>


                <a
                  href="mailto:info@opulenceresorts.com"
                  className="group flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-[#c9a96b]"
                >
                  <Mail size={15} className="text-[#b18a4a]" />
                  info@opulenceresorts.com
                </a>

                <div className="flex items-start gap-2 text-sm text-white/75">
                  <MapPin
                    size={15}
                    className="mt-0.5 shrink-0 text-[#b18a4a]"
                  />
                  <span>Zirakpur Patiala Road Nabha Punjab 140603</span>
                </div>
              </div>
            </div>

            {/* Right CTA */}
            <div className="md:pl-6">
              <a
                href="https://wa.me/916284315908?text=Hello%20Opulence%20Resorts%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 border border-[#b18a4a] bg-[#b18a4a] px-6 py-4 text-[11px] font-semibold uppercase tracking-[1.8px] text-white transition-all duration-300 hover:bg-[#9b753c] sm:w-auto"
              >
                Enquire Now

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;