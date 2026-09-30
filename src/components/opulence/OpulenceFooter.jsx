import { Phone, Mail, Camera } from "lucide-react";

import OperaLogo from "../../assets/opera/opera-logo.png";

const OpulenceFooter = () => {
  return (
    <footer className="w-full overflow-hidden bg-[#10111c] mt-10">
      {/* ================= MAIN FOOTER ================= */}
      <div className="grid min-h-[400px] grid-cols-1  lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col justify-between border-b border-[#b58a4a] lg:border-b-0 lg:border-r-0">
          {/* LOGO AREA */}
          <div className="flex min-h-[185px] flex-col justify-center border-b border-[#b58a4a] px-7 py-8 sm:px-10 lg:px-12">
            {/* Opera Logo */}
            <img
              src={OperaLogo}
              alt="The Opera by Bhullar Resorts"
              className=" h-auto w-[150px] object-contain sm:w-[170px]"
            />

            {/* Logo ke niche THE • OPERA • BY BHULLAR RESORTS */}
            <div className="mt-3 text-[#f5f0e8]">
              {/* OPERA */}
              <h2 className="mt-1 font-serif text-[30px] leading-none tracking-[8px] sm:text-[36px]">
                OPULENCE
              </h2>

              {/* BY BHULLAR RESORTS */}
              <p className="mt-2 text-[7px] font-medium uppercase tracking-[3px] sm:text-[8px]">
                BY BHULLAR RESORTS
              </p>
            </div>

            {/* Tagline */}
            <p className="mt-5 font-serif text-[12px] italic text-[#f5f0e8] sm:text-[13px]">
              A Luxury Wedding Venue
            </p>
          </div>

          {/* CONTACT AREA */}
          <div className="flex flex-1 flex-col justify-center px-7 py-8 sm:px-10 lg:px-12">
            <div className="space-y-3">
              {/* Phone */}
              <a
                href="tel:+919888779138"
                className="flex items-center gap-2 text-[12px] text-[#f1eef0] transition hover:text-[#c5a064] sm:text-[13px]"
              >
                <Phone size={14} strokeWidth={2} className="shrink-0" />

                <span>+91 9888779138, 98141786440</span>
              </a>

              {/* Email */}
              <a
                href="infooperabybhullarresorts@gmail.com"
                className="flex items-center gap-2 break-all text-[12px] text-[#f1eef0] transition hover:text-[#c5a064] sm:text-[13px]"
              >
                <Mail size={14} strokeWidth={2} className="shrink-0" />

                <span>infooperabybhullarresorts@gmail.com</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/opera_by_Opulence_resorts/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] text-[#f1eef0] transition hover:text-[#c5a064] sm:text-[13px]"
              >
                <Camera size={14} strokeWidth={2} />

                <span>opulence_by_bhullar_resorts</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex min-h-[300px] flex-col justify-between bg-[#9b5b28] px-7 py-10 sm:px-10 sm:py-12 lg:min-h-full lg:px-12 lg:py-11">
          {/* Heading */}
          <h2 className="max-w-[360px] font-serif text-[36px] leading-[1.08] text-[#fffaf3] sm:text-[44px] md:text-[48px]">
            Begin Your
            <br />
            Celebration
            <br />
            Journey.
          </h2>

          {/* Services */}
          <p className="mt-10 max-w-[450px] text-[11px] leading-5 text-[#f5e9dc] sm:text-[12px]">
            Weddings · Social Celebrations · Corporate Gatherings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default OpulenceFooter;
