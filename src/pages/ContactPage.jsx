
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import LocationSection from "../components/LocationSection";

const ContactPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 6284315908",
      second: "+91 9888779138",
      link: "tel:+916284315908",
      action: "Call Our Team",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@opulenceresorts.com",
      link: "mailto:info@opulenceresorts.com",
      action: "Send An Email",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Zirakpur Patiala Road",
      second: "Nabha Punjab 140603",
      link: "https://www.google.com/maps/search/?api=1&query=Zirakpur+Patiala+Road+Nabha+Punjab+140603",
      action: "Get Directions",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#faf9f6]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-[#24211d] px-5 py-24 text-center sm:min-h-[460px] sm:py-28">

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#b18a4a]/20" />

        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[450px] w-[450px] rounded-full border border-[#b18a4a]/10" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

        {/* Hero Content */}
        <div
          className={`relative z-10 mx-auto max-w-3xl transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#b18a4a]" />

            <span className="text-[10px] font-semibold uppercase tracking-[4px] text-[#c9a96b]">
              We'd Love To Hear From You
            </span>

            <span className="h-px w-9 bg-[#b18a4a]" />
          </div>

          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Let's Create

            <span className="block text-[#c9a96b]">
              Beautiful Memories
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Every memorable celebration begins with a conversation.
            Connect with Opulence Resorts and let us help you create
            an extraordinary experience.
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/50">
            <a href="/" className="hover:text-[#c9a96b]">
              Home
            </a>
            <ArrowRight size={13} />
            <span className="text-[#c9a96b]">Contact</span>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="mx-auto max-w-[1200px]">

          {/* Section Heading */}
          <div className="mb-10 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#b18a4a]">
              Get In Touch
            </span>

            <h2 className="mt-3 font-serif text-3xl text-[#24211d] sm:text-4xl">
              We're Here For You
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#77716a]">
              Have questions or planning an event? Reach out to our
              team through any of the following channels.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.link}
                  target={
                    card.title === "Visit Us" ? "_blank" : undefined
                  }
                  rel={
                    card.title === "Visit Us"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group border border-[#e7e0d5] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b18a4a]/50 hover:shadow-xl hover:shadow-[#24211d]/5 sm:p-8"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center bg-[#f7f1e6] text-[#b18a4a] transition-all duration-300 group-hover:bg-[#b18a4a] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  {/* Card Content */}
                  <h3 className="mt-6 font-serif text-xl text-[#24211d]">
                    {card.title}
                  </h3>

                  <p className="mt-3 break-words text-sm text-[#716b63]">
                    {card.detail}
                  </p>

                  {card.second && (
                    <p className="mt-1 text-sm text-[#716b63]">
                      {card.second}
                    </p>
                  )}

                  {/* Card Action */}
                  <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#b18a4a]">
                    {card.action}

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </a>
              );
            })}

          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">

        <div className="relative mx-auto max-w-[1200px] overflow-hidden border border-[#ddd6ca] bg-[#24211d] px-7 py-10 sm:px-12 sm:py-12 lg:px-16">

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full border border-[#b18a4a]/20" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#c9a96b]">
                Let's Talk
              </span>

              <h2 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                Planning Something Special?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                Get in touch with our team and start planning
                your next memorable celebration with us.
              </p>
            </div>

            <a
              href="https://wa.me/916284315908?text=Hello%20Opulence%20Resorts%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 border border-[#b18a4a] bg-[#b18a4a] px-6 py-4 text-[11px] font-semibold uppercase tracking-[1.8px] text-white transition-all duration-300 hover:bg-[#96713b] sm:w-auto"
            >
              Enquire Now

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>
      </section>

      {/* EXISTING LOCATION COMPONENT */}
      <LocationSection />

    </main>
  );
};

export default ContactPage;
