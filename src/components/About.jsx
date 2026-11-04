import { ArrowUpRight, Sparkles } from "lucide-react";
import AboutImage from "../assets/bhullar-about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f5ef] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={AboutImage}
                alt=" Opulence Resorts"
                className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[580px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Decorative Border */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 -z-0 h-[180px] w-[180px] border border-[#c5a064] sm:-bottom-7 sm:-right-7" />

            {/* Experience Card */}
            <div className="absolute bottom-6 left-5 bg-[#fffdf9] px-6 py-5 shadow-xl sm:bottom-8 sm:left-8 sm:px-8">
              <div className="flex items-center gap-3">
                <Sparkles
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#b58a4a]"
                />

                <div>
                  <p className="font-serif text-[21px] text-[#28241f]">
                    Unforgettable
                  </p>

                  <p className="text-[9px] uppercase tracking-[2px] text-[#8c7657]">
                    Celebrations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-2">
            {/* Small Heading */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b58a4a]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#a17b45]">
                Welcome to Opulence Resorts
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-[650px] font-serif text-[40px] leading-[1.08] tracking-[-1px] text-[#28241f] sm:text-[48px] md:text-[54px] lg:text-[58px]">
              A beautiful setting for
              <span className="block italic text-[#b58a4a]">
                your special moments.
              </span>
            </h2>

            {/* Description */}
            <div className="mt-7 max-w-[620px] space-y-4 text-[14px] leading-7 text-[#6e685f] sm:text-[15px]">
              <p>
                Backed by a 20-year legacy and over 10,000 successful
                celebrations, Opulence Resorts offers two luxury venue spaces in
                Zirakpur designed for seamless event execution.
              </p>

              <p>
                Opulence spans 40,000 sq. ft. with a pillarless hall for 250–800
                guests, an 80 ft. stage, and a dedicated bar lounge. For more
                intimate gatherings, The Opera provides an exclusive 18,000 sq.
                ft. ballroom for 100–350 guests featuring a theatrical 60 ft.
                stage.
              </p>

              <p>
                Both venues offer turnkey planning, climate-controlled halls,
                luxury bridal suites, valet parking, and multi-cuisine catering
                with live artisanal stations.
              </p>

              <p>
                Located just 9 km from Chandigarh Railway Station and 12 km from
                the airport, we deliver complete grandeur and convenience for
                every special moment
              </p>
            </div>

            {/* Resorts */}

            {/* PREMIUM RESORT SHOWCASE */}

            <div className="mt-9 border-y border-[#ded7cb] py-7">
              {/* Section Heading */}

              <div className="mb-5">
                <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#a17b45]">
                  Our Exclusive Venues
                </span>

                <h3 className="mt-1 font-serif text-[25px] text-[#302b25]">
                  Explore Our Resorts
                </h3>
              </div>

              {/* Resort Cards */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* OPERA CARD */}

                <Link
                  to="/resorts/opera"
                  className="group relative overflow-hidden border border-[#d8c4a2] bg-[#fffdf9] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#b58a4a] hover:shadow-[0_12px_30px_rgba(181,138,74,0.13)] sm:p-5"
                >
                  {/* Gold Accent */}

                  <div className="absolute left-0 top-0 h-full w-[3px] bg-[#b58a4a] transition-all duration-500 group-hover:w-1.5" />

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-[2.5px] text-[#a17b45]">
                        Elegant Celebrations
                      </span>

                      <h3 className="mt-2 font-serif text-[26px] tracking-wide text-[#302b25] transition-colors duration-300 group-hover:text-[#a17b45]">
                        OPERA
                      </h3>

                      <div className="mt-2 h-px w-10 bg-[#c5a064] transition-all duration-500 group-hover:w-16" />
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d8c4a2] text-[#b58a4a] transition-all duration-300 group-hover:border-[#b58a4a] group-hover:bg-[#b58a4a] group-hover:text-white">
                      <ArrowUpRight
                        size={19}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-[12px] leading-6 text-[#777067]">
                    Discover Opera, an elegant destination for memorable
                    weddings and celebrations.
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#e9e0d3] pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[1.7px] text-[#a17b45]">
                      Explore Opera
                    </span>

                    <span className="text-lg text-[#b58a4a] transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </Link>

                {/* OPULENCE CARD */}

                <Link
                  to="/resorts/opulence"
                  className="group relative overflow-hidden border border-[#d8c4a2] bg-[#fffdf9] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#b58a4a] hover:shadow-[0_12px_30px_rgba(181,138,74,0.13)] sm:p-5"
                >
                  {/* Gold Accent */}

                  <div className="absolute left-0 top-0 h-full w-[3px] bg-[#b58a4a] transition-all duration-500 group-hover:w-1.5" />

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-[2.5px] text-[#a17b45]">
                        Grand Celebrations
                      </span>

                      <h3 className="mt-2 font-serif text-[26px] tracking-wide text-[#302b25] transition-colors duration-300 group-hover:text-[#a17b45]">
                        OPULENCE
                      </h3>

                      <div className="mt-2 h-px w-10 bg-[#c5a064] transition-all duration-500 group-hover:w-16" />
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d8c4a2] text-[#b58a4a] transition-all duration-300 group-hover:border-[#b58a4a] group-hover:bg-[#b58a4a] group-hover:text-white">
                      <ArrowUpRight
                        size={19}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-[12px] leading-6 text-[#777067]">
                    Experience Opulence, a sophisticated venue created for grand
                    celebrations and special occasions.
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#e9e0d3] pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[1.7px] text-[#a17b45]">
                      Explore Opulence
                    </span>

                    <span className="text-lg text-[#b58a4a] transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#b58a4a] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition duration-300 hover:bg-[#9c733c]"
              >
                Plan Your Celebration
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 top-20 hidden h-64 w-64 rounded-full border border-[#ddc9a5]/40 lg:block" />

      <div className="pointer-events-none absolute -left-20 bottom-10 hidden h-40 w-40 rounded-full border border-[#ddc9a5]/30 lg:block" />
    </section>
  );
};

export default About;
