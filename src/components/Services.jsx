import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import services from "../data/Services";


const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Check whether more than 3 services exist
  const hasMoreServices = services.length > 3;

  return (
    <section
      id="services"
      className="overflow-hidden bg-[#faf7f1] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1450px]">

        {/* ================= HEADER ================= */}
        <div className="px-5 text-center sm:px-8 lg:px-12">

          <h2 className="font-serif text-[38px] leading-tight tracking-[-0.5px] text-[#29251f] sm:text-[46px]">
            Our
            <span className="italic text-[#b58a4a]">
              {" "}Wedding & Event Services
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[13px] leading-6 text-[#716b62] sm:text-[15px]">
            From intimate celebrations to grand occasions, Opulence Resorts
            provides the perfect setting to turn your special moments into
            beautiful memories.
          </p>

        </div>


        {/* ================= CAROUSEL ================= */}
        <div className="relative mt-12 sm:mt-14">

          {/* LEFT ARROW */}
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous services"
            className="absolute left-3 top-[130px] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-[#4a4339] shadow-md transition-all duration-300 hover:border-[#b58a4a] hover:bg-[#b58a4a] hover:text-white sm:left-5 lg:left-8"
          >
            <ChevronLeft size={21} strokeWidth={1.5} />
          </button>


          {/* RIGHT ARROW */}
          <button
            ref={nextRef}
            type="button"
            aria-label="Next services"
            className="absolute right-3 top-[130px] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-[#4a4339] shadow-md transition-all duration-300 hover:border-[#b58a4a] hover:bg-[#b58a4a] hover:text-white sm:right-5 lg:right-8"
          >
            <ChevronRight size={21} strokeWidth={1.5} />
          </button>


          <Swiper
            modules={[Navigation]}
            spaceBetween={28}

            // 3 services = exactly 3 cards on desktop
            slidesPerView={1.1}

            speed={700}

            // Loop only when more than 3 services exist
            loop={hasMoreServices}

            grabCursor={hasMoreServices}
            watchOverflow={true}

            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}

            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}

            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 24,
              },

              768: {
                slidesPerView: 2.2,
                spaceBetween: 26,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },

              1280: {
                // Exactly 3 cards, equal left/right space
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}

            className="!px-5 sm:!px-12 lg:!px-20"
          >

            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>


        {/* ================= CTA ================= */}
        <div className="mt-12 flex justify-center sm:mt-14">

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#b86f2d] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[1.4px] text-white transition-all duration-300 hover:bg-[#9d5c23]"
          >
            Plan Your Celebration

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

        </div>

      </div>
    </section>
  );
};


/* ================= SERVICE CARD ================= */

const ServiceCard = ({ service }) => {

  const [expanded, setExpanded] = useState(false);

  // Show More only for longer descriptions
  const shouldShowMore = service.description.length > 115;

  return (
    <article className="group text-center">

      {/* ================= IMAGE ================= */}
      <div className="relative mx-auto aspect-square w-full max-w-[350px]">

        <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[3px]">

          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

        </div>


        {/* Bottom Decorative Circle */}
        <div className="absolute bottom-[-2px] left-1/2 flex h-[62px] w-[62px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#faf7f1] bg-[#faf7f1]">

          <div className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#77756f]">
            <span className="h-2 w-2 rounded-full bg-white" />
          </div>

        </div>

      </div>


      {/* ================= CONTENT ================= */}
      <div className="mx-auto mt-9 max-w-[340px] px-3">

        <h3 className="font-serif text-[20px] font-medium text-[#29251f] sm:text-[21px]">
          {service.title}
        </h3>


        {/* Description */}
        <p
          className={`mt-2.5 text-[12px] leading-5 text-[#716b62] sm:text-[13px] sm:leading-[1.6] ${
            !expanded && shouldShowMore ? "line-clamp-2" : ""
          }`}
        >
          {service.description}
        </p>


        {/* Show More / Show Less */}
        {shouldShowMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-[12px] font-semibold text-[#b58a4a] underline underline-offset-4 transition-colors duration-300 hover:text-[#9d5c23]"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}

      </div>

    </article>
  );
};


export default Services;