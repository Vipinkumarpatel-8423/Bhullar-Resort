
import {
  ArrowUpRight,
  Sparkles,
  MapPin,
  CalendarDays,
  Plane,
  TrainFront,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";
import AboutImage from "../assets/bhullar-about.jpg";

const Aboutpage = () => {
  const venues = [
    {
      name: "OPERA",
      subtitle: "Elegant Celebrations",
      description:
        "Discover Opera, an elegant destination for memorable weddings and celebrations.",
      details: [
        "18,000 sq. ft. ballroom",
        "100–350 guests",
        "Theatrical 60 ft. stage",
      ],
      path: "/resorts/opera",
      number: "01",
    },
    {
      name: "OPULENCE",
      subtitle: "Grand Celebrations",
      description:
        "Experience Opulence, a sophisticated venue created for grand celebrations and special occasions.",
      details: [
        "40,000 sq. ft. venue",
        "250–800 guests",
        "80 ft. stage",
      ],
      path: "/resorts/opulence",
      number: "02",
    },
  ];

  const facilities = [
    "Turnkey event planning",
    "Climate-controlled halls",
    "Luxury bridal suites",
    "Valet parking",
    "Multi-cuisine catering",
    "Live artisanal stations",
  ];

  return (
    <main className="overflow-hidden bg-[#f8f5ef]">

      {/* ================= PAGE HERO ================= */}

      <section className="relative flex min-h-[370px] items-center justify-center overflow-hidden bg-[#211a14] py-24 sm:min-h-[430px]">

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 text-center sm:px-8">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#c6a36a]" />

            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#d0ad70]">
              Discover Our Story
            </span>

            <span className="h-px w-9 bg-[#c6a36a]" />
          </div>

          <h1 className="font-serif text-[46px] leading-tight text-white sm:text-[60px] md:text-[72px]">
            About
            <span className="italic text-[#d0ad70]"> Opulence</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-7 text-white/75 sm:text-[15px]">
            A beautiful destination for weddings, celebrations
            and unforgettable moments.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[2px] text-white/60">
            <Link to="/" className="transition hover:text-[#d0ad70]">
              Home
            </Link>

            <span>/</span>

            <span className="text-[#d0ad70]">About Us</span>
          </div>

        </div>

        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#c6a36a]/20" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#c6a36a]/20" />

      </section>

      {/* ================= OUR STORY ================= */}

      <section className="relative bg-[#f8f5ef] py-16 sm:py-20 lg:py-28">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <div className="relative mx-auto w-full max-w-[650px]">

              <div className="relative overflow-hidden">
                <img
                  src={AboutImage}
                  alt="Opulence Resorts wedding and celebration venue"
                  className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[580px]"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              <div className="pointer-events-none absolute -bottom-5 -right-5 -z-0 h-36 w-36 border border-[#c5a064] sm:-bottom-7 sm:-right-7 sm:h-48 sm:w-48" />

              <div className="absolute bottom-5 left-4 bg-[#fffdf9] px-5 py-4 shadow-xl sm:bottom-8 sm:left-8 sm:px-8 sm:py-5">

                <div className="flex items-center gap-3">

                  <Sparkles
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#b58a4a]"
                  />

                  <div>
                    <p className="font-serif text-[20px] text-[#28241f] sm:text-[23px]">
                      Unforgettable
                    </p>

                    <p className="text-[9px] uppercase tracking-[2px] text-[#8c7657]">
                      Celebrations
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="lg:pl-2">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b58a4a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#a17b45]">
                  Welcome to Opulence Resorts
                </span>
              </div>

              <h2 className="font-serif text-[38px] leading-[1.1] tracking-[-1px] text-[#28241f] sm:text-[48px] md:text-[54px]">
                A beautiful setting for

                <span className="block italic text-[#b58a4a]">
                  your special moments.
                </span>
              </h2>

              <div className="mt-7 max-w-[650px] space-y-4 text-[13px] leading-7 text-[#6e685f] sm:text-[15px]">

                <p>
                  Backed by a 20-year legacy and over 10,000 successful
                  celebrations, Opulence Resorts offers two luxury venue
                  spaces in Zirakpur designed for seamless event execution.
                </p>

                <p>
                  Opulence spans 40,000 sq. ft. with a pillarless hall for
                  250–800 guests, an 80 ft. stage, and a dedicated bar lounge.
                  For more intimate gatherings, The Opera provides an
                  exclusive 18,000 sq. ft. ballroom for 100–350 guests
                  featuring a theatrical 60 ft. stage.
                </p>

                <p>
                  Both venues offer turnkey planning, climate-controlled
                  halls, luxury bridal suites, valet parking, and
                  multi-cuisine catering with live artisanal stations.
                </p>

                <p>
                  Located just 9 km from Chandigarh Railway Station and
                  12 km from the airport, we deliver complete grandeur
                  and convenience for every special moment.
                </p>

              </div>

              {/* LEGACY HIGHLIGHTS */}

              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#ded7cb] py-6">

                <div>
                  <h3 className="font-serif text-[36px] text-[#b58a4a]">
                    20+
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[1.5px] text-[#777067]">
                    Years of Legacy
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[36px] text-[#b58a4a]">
                    10,000+
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[1.5px] text-[#777067]">
                    Successful Celebrations
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= OUR VENUES ================= */}

      <section className="bg-[#eee7db] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto mb-12 max-w-[700px] text-center">

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#b58a4a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#a17b45]">
                Our Exclusive Venues
              </span>

              <span className="h-px w-9 bg-[#b58a4a]" />
            </div>

            <h2 className="font-serif text-[36px] leading-tight text-[#28241f] sm:text-[46px] md:text-[52px]">
              Two Destinations.
              <span className="block italic text-[#b58a4a]">
                One Beautiful Experience.
              </span>
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-[#777067] sm:text-[15px]">
              Explore our two distinctive venues, each designed
              to make your celebrations memorable.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {venues.map((venue) => (

              <div
                key={venue.name}
                className="group relative border border-[#d6c7ae] bg-[#fffdf9] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(80,55,25,0.10)] sm:p-9 lg:p-10"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#a17b45]">
                      {venue.subtitle}
                    </span>

                    <h3 className="mt-3 font-serif text-[38px] tracking-wide text-[#302b25] sm:text-[46px]">
                      {venue.name}
                    </h3>

                  </div>

                  <span className="font-serif text-[36px] text-[#c5a064]/40">
                    {venue.number}
                  </span>

                </div>

                <div className="mt-4 h-px w-16 bg-[#c5a064] transition-all duration-500 group-hover:w-28" />

                <p className="mt-6 max-w-[470px] text-[13px] leading-7 text-[#777067] sm:text-[14px]">
                  {venue.description}
                </p>

                <div className="mt-7 grid gap-4 border-t border-[#e8dfd2] pt-6 sm:grid-cols-3">

                  {venue.details.map((detail) => (

                    <div
                      key={detail}
                      className="flex items-start gap-2"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-[#b58a4a]"
                      />

                      <span className="text-[11px] leading-5 text-[#625b51]">
                        {detail}
                      </span>

                    </div>

                  ))}

                </div>

                <Link
                  to={venue.path}
                  className="mt-8 inline-flex items-center gap-3 border border-[#b58a4a] px-5 py-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#9a713b] transition-all duration-300 hover:bg-[#b58a4a] hover:text-white"
                >
                  Explore {venue.name}

                  <ArrowUpRight size={16} />

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FACILITIES ================= */}

      <section className="bg-[#f8f5ef] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#b58a4a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#a17b45]">
                  The Opulence Experience
                </span>
              </div>

              <h2 className="font-serif text-[38px] leading-tight text-[#28241f] sm:text-[48px]">
                Every detail,
                <span className="block italic text-[#b58a4a]">
                  thoughtfully arranged.
                </span>
              </h2>

              <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-[#777067]">
                Both venues offer a range of facilities and services
                designed to support seamless events and memorable
                celebrations.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {facilities.map((facility) => (

                <div
                  key={facility}
                  className="flex items-center gap-4 border border-[#e1d7c8] bg-[#fffdf9] p-5 transition-all duration-300 hover:border-[#b58a4a] hover:shadow-md"
                >

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d8c29c] text-[#b58a4a]">
                    <Check size={17} />
                  </span>

                  <span className="text-[12px] font-medium text-[#50483e] sm:text-[13px]">
                    {facility}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= LOCATION ================= */}

      <section className="border-y border-[#e4d9c8] bg-[#eee7db] py-14 sm:py-16">

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-3 md:items-center lg:px-12">

          <div className="text-center md:text-left">

            <MapPin
              size={25}
              className="mx-auto mb-3 text-[#b58a4a] md:mx-0"
            />

            <h3 className="font-serif text-[22px] text-[#302b25]">
              Convenient Location
            </h3>

            <p className="mt-2 text-[12px] text-[#777067]">
              Zirakpur, Punjab
            </p>

          </div>

          <div className="flex items-center justify-center gap-5 border-y border-[#d9cdbb] py-6 md:border-x md:border-y-0 md:py-3">

            <div className="text-center">
              <TrainFront
                size={22}
                className="mx-auto mb-2 text-[#b58a4a]"
              />

              <p className="font-serif text-[27px] text-[#302b25]">
                9 km
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[1px] text-[#777067]">
                Railway Station
              </p>
            </div>

            <div className="h-12 w-px bg-[#d9cdbb]" />

            <div className="text-center">
              <Plane
                size={22}
                className="mx-auto mb-2 text-[#b58a4a]"
              />

              <p className="font-serif text-[27px] text-[#302b25]">
                12 km
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[1px] text-[#777067]">
                Airport
              </p>
            </div>

          </div>

          <div className="text-center md:text-right">

            <CalendarDays
              size={25}
              className="mx-auto mb-3 text-[#b58a4a] md:ml-auto md:mr-0"
            />

            <h3 className="font-serif text-[22px] text-[#302b25]">
              Your Celebration
            </h3>

            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#a17b45] hover:text-[#302b25]"
            >
              Plan With Us
              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="bg-[#211a14] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[750px]">

          <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#c6a36a]">
            Let's Make It Memorable
          </span>

          <h2 className="mt-5 font-serif text-[36px] leading-tight text-white sm:text-[48px] md:text-[55px]">
            Your perfect celebration
            <span className="block italic text-[#d0ad70]">
              starts here.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[530px] text-[13px] leading-7 text-white/65 sm:text-[14px]">
            Discover our venues and let us be part of your
            most special moments.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#b58a4a] px-7 py-4 text-[10px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#d0ad70] hover:text-[#211a14]"
          >
            Plan Your Celebration

            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Aboutpage;
