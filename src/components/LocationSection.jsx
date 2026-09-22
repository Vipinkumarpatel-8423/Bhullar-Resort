import { ArrowUpRight, MapPin } from "lucide-react";

const LocationSection = () => {
  const address = "Zirakpur, Nabha, Punjab 140603";

  const mapUrl =
    "https://www.google.com/maps?q=Zirakpur,+Nabha,+Punjab+140603&output=embed";

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Zirakpur%2C%20Nabha%2C%20Punjab%20140603";

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5f0]">
      {/* Map */}
      <div className="relative h-[420px] w-full md:h-[500px] lg:h-[560px]">
        <iframe
          src={mapUrl}
          title="Opulence Resorts Location - Zirakpur, Nabha, Punjab 140603"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Soft overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1c1a17]/10 via-transparent to-transparent" />

        {/* Location Card */}
        <div className="absolute bottom-6 left-5 w-[calc(100%-40px)] max-w-[390px] md:bottom-8 md:left-8">
          <div className="border border-white/50 bg-[#faf9f6]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-md md:p-7">
            {/* Small label */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-[#b18a4a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8b7350]">
                Find Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-2xl tracking-[-0.5px] text-[#24211d] md:text-3xl">
              Visit Opulence Resorts
            </h2>

            {/* Address */}
            <div className="mt-4 flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-[#b18a4a]/40 bg-[#b18a4a]/10">
                <MapPin size={17} className="text-[#b18a4a]" />
              </div>

              <div>
                <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-[#8b7350]">
                  Location
                </p>

                <p className="mt-1 text-sm leading-6 text-[#4a4640]">
                  {address}
                </p>
              </div>
            </div>

            {/* Button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 bg-[#b18a4a] px-5 py-3 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#9b753c]"
            >
              Open in Maps

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;