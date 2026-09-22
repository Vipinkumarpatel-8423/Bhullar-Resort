import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import WeddingImage from "../assets/opera/Amenities.png";

const Weddings = () => {
  return (
    <section
      id="weddings"
      className="relative overflow-hidden bg-[#faf7f1] py-14 sm:py-18 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[760px] text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b58a4a]" />

            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#a17b45]">
              Weddings at Opulence
            </span>

            <span className="h-px w-10 bg-[#b58a4a]" />
          </div>

          <h2 className="font-serif text-[40px] leading-[1.08] tracking-[-1px] text-[#29251f] sm:text-[48px] md:text-[56px]">
            Where Every Love Story
            <span className="block italic text-[#b58a4a]">
              Deserves a Grand Beginning.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-6 text-[#716b62] sm:text-[15px]">
            From intimate ceremonies to grand wedding celebrations,
            Opulence Resorts creates beautiful spaces, seamless
            experiences, and unforgettable moments for your special day.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ================= IMAGE ================= */}
          <div className="relative">

            {/* Decorative Border */}
            <div className="absolute -bottom-5 -left-5 hidden h-36 w-36 border border-[#c8a66d] sm:block lg:-bottom-7 lg:-left-7" />

            <div className="relative overflow-hidden bg-[#e8e0d3]">
              <img
                src={WeddingImage}
                alt="Wedding celebration at Opulence Resorts"
                loading="lazy"
                className="h-[360px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[460px] lg:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              {/* Image Badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-[#fffdf9]/95 px-5 py-4 shadow-lg sm:bottom-7 sm:left-7">
                <div className="flex h-9 w-9 items-center justify-center border border-[#c7a66d]">
                  <Heart
                    size={17}
                    strokeWidth={1.4}
                    className="text-[#b58a4a]"
                  />
                </div>

                <div>
                  <p className="font-serif text-[17px] text-[#302b25]">
                    Your Day
                  </p>

                  <p className="text-[9px] uppercase tracking-[2px] text-[#8c7657]">
                    Your Celebration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="lg:pl-2">

            <div className="mb-5 flex items-center gap-3">
              <Sparkles
                size={18}
                strokeWidth={1.4}
                className="text-[#b58a4a]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#a17b45]">
                Celebrate Your Way
              </span>
            </div>

            <h3 className="max-w-[580px] font-serif text-[32px] leading-[1.12] text-[#302b25] sm:text-[40px]">
              A wedding designed
              <span className="block italic text-[#b58a4a]">
                around you.
              </span>
            </h3>

            <div className="mt-6 max-w-[590px] space-y-4 text-[13px] leading-6 text-[#716b62] sm:text-[14px] sm:leading-7">
              <p>
                At <strong className="font-medium text-[#3d3831]">
                  Opulence Resorts
                </strong>
                , every wedding is thoughtfully planned around your
                vision, from the first celebration to the final farewell.
              </p>

              <p>
                Our two distinctive venues, <strong className="font-medium text-[#3d3831]">
                  Opulence
                </strong>
                and <strong className="font-medium text-[#3d3831]">
                  The Opera
                </strong>
                , offer elegant spaces for celebrations of different
                scales and styles.
              </p>

              <p>
                With beautiful décor possibilities, curated catering,
                comfortable spaces, and seamless event planning, every
                detail comes together to create a celebration that feels
                truly yours.
              </p>
            </div>

            {/* ================= FEATURES ================= */}
            <div className="mt-7 grid grid-cols-1 gap-4 border-y border-[#ded7cb] py-6 sm:grid-cols-2">

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-[#c7a66d]">
                  <span className="h-px w-3 bg-[#b58a4a]" />
                </div>

                <div>
                  <h4 className="font-serif text-[18px] text-[#302b25]">
                    Grand Celebrations
                  </h4>

                  <p className="mt-1 text-[11px] leading-5 text-[#777067]">
                    Elegant spaces created for memorable wedding moments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-[#c7a66d]">
                  <span className="h-px w-3 bg-[#b58a4a]" />
                </div>

                <div>
                  <h4 className="font-serif text-[18px] text-[#302b25]">
                    Seamless Planning
                  </h4>

                  <p className="mt-1 text-[11px] leading-5 text-[#777067]">
                    Thoughtful planning and execution for your special day.
                  </p>
                </div>
              </div>

            </div>

            {/* ================= CTA ================= */}
            <div className="mt-7">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#b58a4a] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition duration-300 hover:bg-[#9c733c]"
              >
                Plan Your Wedding

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ================= DECORATIVE BACKGROUND ================= */}
      <div className="pointer-events-none absolute -right-28 top-24 hidden h-60 w-60 rounded-full border border-[#ddc9a5]/40 lg:block" />

      <div className="pointer-events-none absolute -left-20 bottom-10 hidden h-40 w-40 rounded-full border border-[#ddc9a5]/30 lg:block" />
    </section>
  );
};

export default Weddings;