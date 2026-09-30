import { ArrowUpRight } from "lucide-react";

const OpulenceLocation = () => {
  return (
    <section
      id="location"
      className="border border-[#242532] bg-[#10111c] px-5 py-10 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADING ================= */}
        <h2 className="text-center font-serif text-[40px] leading-tight text-[#f8f5ef] sm:text-[48px] md:text-[54px]">
          Location
        </h2>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2 lg:mt-10 lg:gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center">

            <p className="max-w-[430px] text-[12px] uppercase leading-[1.8] text-[#f1eef0] sm:text-[13px]">
              <strong className="font-bold">
                FOUR PRIME LOCATIONS
              </strong>{" "}
              FROM WHERE{" "}
              <strong className="italic">
                OPULENCE BY Bhuller RESORTS
              </strong>{" "}
              IS EASILY ACCESSIBLE.
            </p>

            {/* Location Details */}
            <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">

              {/* 1 */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 font-serif text-[26px] leading-none text-[#f5f2ed]">
                  ❯
                </span>

                <p className="max-w-[440px] text-[12px] uppercase leading-[1.7] text-[#f1eef0] sm:text-[13px]">
                  CHANDIGARH RAILWAY STATION TO{" "}
                  <strong className="italic">
                    OPULENCE
                  </strong>{" "}
                  — 9 KM
                </p>
              </div>

              {/* 2 */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 font-serif text-[26px] leading-none text-[#f5f2ed]">
                  ❯
                </span>

                <p className="max-w-[440px] text-[12px] uppercase leading-[1.7] text-[#f1eef0] sm:text-[13px]">
                  BUS STAND TO{" "}
                  <strong className="italic">
                    OPULENCE
                  </strong>{" "}
                  — 8.9 KM
                </p>
              </div>

              {/* 3 */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 font-serif text-[26px] leading-none text-[#f5f2ed]">
                  ❯
                </span>

                <p className="max-w-[440px] text-[12px] uppercase leading-[1.7] text-[#f1eef0] sm:text-[13px]">
                  CHANDIGARH AIRPORT TO{" "}
                  <strong className="italic">
                    OPULENCE
                  </strong>{" "}
                  — 12 KM
                </p>
              </div>

              {/* 4 */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 font-serif text-[26px] leading-none text-[#f5f2ed]">
                  ❯
                </span>

                <p className="max-w-[440px] text-[12px] uppercase leading-[1.7] text-[#f1eef0] sm:text-[13px]">
                  20 MINUTES AWAY FROM SAHIBZADA AJIT
                  SINGH NAGAR RAILWAY STATION
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT GOOGLE MAP ================= */}
          <div className="relative min-h-[300px] w-full overflow-hidden border border-[#b58a4a] sm:min-h-[360px] lg:min-h-[430px]">

            {/* Google Maps Embed */}
            <iframe
              title="Opulence by Bhuller Resorts Location"
              src="https://www.google.com/maps?q=Opera+By+Opulence+Resorts,+Zirakpur,+Nabha,+Punjab+140603&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Open in Google Maps Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Opera+By+Opulence+Resorts,+Zirakpur,+Nabha,+Punjab+140603"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-[#b58a4a] px-4 py-3 text-[10px] font-semibold uppercase tracking-[1px] text-white shadow-lg transition hover:bg-[#9b753c]"
            >
              Open Maps
              <ArrowUpRight size={14} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OpulenceLocation;