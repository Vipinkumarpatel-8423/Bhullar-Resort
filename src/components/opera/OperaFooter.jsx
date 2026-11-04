
import { Phone, Mail, Camera } from "lucide-react";

import OperaLogo from "../../assets/opera/opera-logo.png";

const OperaFooter = () => {
  return (
    <footer className="mt-10 w-full overflow-hidden bg-[#10111c]">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex min-w-0 flex-col border-b border-[#b58a4a] lg:border-b-0">

          {/* LOGO AREA */}
          <div className="flex min-h-[220px] flex-col items-start justify-start border-b border-[#b58a4a] px-6 py-8 sm:px-10 sm:py-9 lg:min-h-[240px] lg:px-12">

            {/* Opera Logo */}
            <img
              src={OperaLogo}
              alt="The Opera by Bhullar Resorts"
              loading="lazy"
              className="h-auto w-[140px] object-contain sm:w-[160px] lg:w-[170px]"
            />

            {/* Brand Name */}
            <div className="mt-3 text-[#f5f0e8]">

              {/* THE */}
              <div className="flex justify-center gap-2">
                <span className="text-[6px]">•</span>

                <span className="text-[8px] font-medium uppercase tracking-[4px]">
                  THE
                </span>

                <span className="text-[6px]">•</span>
              </div>

              {/* OPERA */}
              <h2 className="mt-1 font-serif text-[30px] leading-none tracking-[8px] sm:text-[36px]">
                OPERA
              </h2>

              {/* BY BHULLAR RESORTS */}
              <p className="mt-2 text-[7px] font-medium uppercase tracking-[3px] sm:text-[8px]">
                BY BHULLAR RESORTS
              </p>

            </div>

            {/* Tagline */}
            <p className="mt-5 font-serif text-[12px] italic text-[#f5f0e8] sm:text-[13px]">
              A Space for Life's Finest
            </p>

          </div>

          {/* CONTACT AREA */}
          <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12">

            <div className="space-y-4">

              {/* Phone */}
              <a
                href="tel:+919888779138"
                className="group flex w-fit max-w-full items-start gap-3 text-[12px] text-[#f1eef0] transition-colors duration-300 hover:text-[#c5a064] sm:text-[13px]"
              >
                <Phone
                  size={15}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#c5a064]"
                />

                <span className="break-words">
                  +91 9888779138
                </span>
              </a>
               <a
                href="tel:+9198141786440"
                className="group flex w-fit max-w-full items-start gap-3 text-[12px] text-[#f1eef0] transition-colors duration-300 hover:text-[#c5a064] sm:text-[13px]"
              >
                <Phone
                  size={15}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#c5a064]"
                />

                <span className="break-words">
                  +91 9814178644
                </span>
              </a>


              {/* Email */}
              <a
                href="mailto:infooperabybhullarresorts@gmail.com"
                className="group flex w-fit max-w-full items-start gap-3 break-all text-[12px] text-[#f1eef0] transition-colors duration-300 hover:text-[#c5a064] sm:text-[13px]"
              >
                <Mail
                  size={15}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#c5a064]"
                />

                <span>
                  infooperabybhullarresorts@gmail.com
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/opera_by_Opulence_resorts/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit max-w-full items-center gap-3 text-[12px] text-[#f1eef0] transition-colors duration-300 hover:text-[#c5a064] sm:text-[13px]"
              >
                <Camera
                  size={15}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#c5a064]"
                />

                <span className="break-words">
                  opera_by_bhullar_resorts
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#9b5b28] px-6 py-10 sm:min-h-[340px] sm:px-10 sm:py-12 lg:min-h-full lg:px-12 lg:py-14">

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

          {/* Heading */}
          <h2 className="relative z-10 max-w-[360px] font-serif text-[36px] leading-[1.08] text-[#fffaf3] sm:text-[44px] md:text-[48px] lg:text-[52px]">
            Begin Your
            <br />
            Celebration
            <br />
            Journey.
          </h2>

          {/* Services */}
          <p className="relative z-10 mt-12 max-w-[450px] text-[11px] leading-6 text-[#f5e9dc] sm:text-[12px]">
            Weddings · Social Celebrations · Corporate Gatherings
          </p>

        </div>

      </div>
    </footer>
  );
};

export default OperaFooter;
