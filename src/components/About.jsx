import {
  ArrowUpRight,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import AboutImage from "../assets/bhullar-about.jpg";

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
                alt="Bhullar Resort Banquet Hall"
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

          {/* ================= CONTENT SIDE ================= */}
          <div className="lg:pl-2">

            {/* Small Heading */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b58a4a]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#a17b45]">
                Welcome to Bhullar Resort
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
                Welcome to <strong className="font-medium text-[#3d3831]">
                  Bhullar Resort
                </strong>
                , a banquet hall destination in Punjab where
                celebrations come together with elegance, comfort
                and memorable experiences.
              </p>

              <p>
                Whether you are planning a wedding, reception,
                engagement or a special celebration, Bhullar Resort
                offers a welcoming space to make your important
                occasions truly special.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-y border-[#ded7cb] py-6 sm:grid-cols-2">

              <div className="flex items-start gap-3">
                <div className="mt-1 h-7 w-7 shrink-0 border border-[#c7a66d]">
                  <div className="mx-auto mt-[13px] h-px w-3 bg-[#b58a4a]" />
                </div>

                <div>
                  <h3 className="font-serif text-[18px] text-[#302b25]">
                    Elegant Celebrations
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-[#777067]">
                    A refined setting for your memorable occasions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-7 w-7 shrink-0 border border-[#c7a66d]">
                  <div className="mx-auto mt-[13px] h-px w-3 bg-[#b58a4a]" />
                </div>

                <div>
                  <h3 className="font-serif text-[18px] text-[#302b25]">
                    Banquet Venue
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-[#777067]">
                    A dedicated destination for celebrations and events.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Details */}
            {/* <div className="mt-7 space-y-4">

              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5c09d] bg-[#f1eadf]">
                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#a77d42]"
                  />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[2px] text-[#9a794c]">
                    Visit Us
                  </p>

                  <p className="max-w-[430px] text-[13px] leading-6 text-[#5f5951]">
                    Zirakpur, Nabha, Punjab 140603
                  </p>
                </div>
              </div>

              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5c09d] bg-[#f1eadf]">
                  <Phone
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#a77d42]"
                  />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[2px] text-[#9a794c]">
                    Call Us
                  </p>

                  <a
                    href="tel:06284315908"
                    className="text-[13px] text-[#5f5951] transition hover:text-[#a77d42]"
                  >
                    06284 315 908
                  </a>
                </div>
              </div>

            </div> */}

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