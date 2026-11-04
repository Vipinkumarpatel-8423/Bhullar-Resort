
import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  MessageCircle,
} from "lucide-react";


const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    date: "",
    service: "",
    venue: "",
    whatsapp: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Opulence Resorts!

I would like to enquire about an event.

Name: ${formData.name}
Mobile Number: ${formData.mobile}
Event Date: ${formData.date}
Event Type: ${formData.service}
No. Of Guests / Venue: ${formData.venue}
WhatsApp Updates: ${formData.whatsapp ? "Yes" : "No"}

Please contact me with further details.

Thank you!
    `.trim();

    const whatsappURL = `https://wa.me/916284315908?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[760px] w-full items-center overflow-hidden bg-[#24190f] lg:min-h-[760px]"
    >

      {/* BACKGROUND VIDEO */}

      {/* <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ objectPosition: "center center" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video> */}

       <video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="absolute inset-0 -z-20 h-full w-full object-cover"
>
  <source
    src="https://res.cloudinary.com/dw9uxx5n6/video/upload/v1793772150/hero-background_-_Trim.mp4"
    type="video/mp4"
  />
</video>

      {/* CINEMATIC OVERLAY */}

      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/25 to-black/20" />

      {/* MAIN CONTENT */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-14">

        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] xl:gap-16">

          {/* LEFT CONTENT */}

          <div className="max-w-[780px] text-white">

            {/* BRAND LABEL */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#d5ad62]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#dfbd78] sm:text-xs">
                Opulence Resorts
              </span>
            </div>

            {/* HEADING */}

            <h1 className="font-serif text-[45px] leading-[1.04] tracking-[-1.5px] sm:text-[58px] md:text-[68px] lg:text-[66px] xl:text-[82px]">
              Your perfect day,

              <br />

              <span className="italic text-[#d5b274]">
                beautifully
                <br className="hidden sm:block" />
                celebrated.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-[650px] text-[14px] leading-7 text-white/90 sm:text-[15px] sm:leading-8 md:text-base">
              A luxurious destination for weddings, celebrations and
              unforgettable moments — where every detail is designed
              to make your special day truly memorable.
            </p>

            {/* BOTTOM INFO */}

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[1.5px] text-white/80 sm:gap-x-8 sm:text-xs">

              <span>Weddings</span>

              <span className="h-1 w-1 rounded-full bg-[#d5b274]" />

              <span>Banquets</span>

              <span className="h-1 w-1 rounded-full bg-[#d5b274]" />

              <span>Celebrations</span>

            </div>

          </div>

          {/* RIGHT GLASS FORM */}

          <div className="w-full">

            <div className="hero-glass-card rounded-[22px] border border-white/35 p-5 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-7 md:p-8">

              {/* FORM HEADER */}

              <div className="mb-6">

                <h2 className="font-serif text-[28px] font-semibold text-white sm:text-[34px]">
                  Let's Connect!
                </h2>

                <p className="mt-2 max-w-[440px] text-[12px] leading-6 text-white/85 sm:text-[13px]">
                  Tell us about your event and let our team help
                  you plan a celebration that's truly special.
                </p>

                <div className="mt-4 h-[3px] w-16 rounded-full bg-[#d5ad62]" />

              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="space-y-3"
              >

                {/* NAME */}

                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="hero-glass-input"
                />

                {/* MOBILE */}

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  pattern="[0-9+\-\s()]{10,15}"
                  title="Please enter a valid mobile number"
                  className="hero-glass-input"
                />

                {/* DATE */}

                <div className="relative">

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="hero-glass-input hero-date-input"
                  />

                  <CalendarDays
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white"
                  />

                </div>

                {/* EVENT TYPE */}

                <div className="relative">

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="hero-glass-input appearance-none pr-12"
                  >
                    <option value="" className="text-black">
                      Event Type
                    </option>

                    <option value="Wedding" className="text-black">
                      Wedding
                    </option>

                    <option value="Reception" className="text-black">
                      Reception
                    </option>

                    <option value="Engagement" className="text-black">
                      Engagement
                    </option>

                    <option value="Birthday" className="text-black">
                      Birthday Party
                    </option>

                    <option value="Corporate" className="text-black">
                      Corporate Event
                    </option>

                    <option value="Other" className="text-black">
                      Other Event
                    </option>

                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white"
                  />

                </div>

                {/* VENUE */}

                <div className="relative">

                  <select
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                    className="hero-glass-input appearance-none pr-12"
                  >

                    <option value="" className="text-black">
                      No. Of Guests
                    </option>

                    <option value="Banquet Hall" className="text-black">
                      Banquet Hall
                    </option>

                    <option value="Lawn" className="text-black">
                      Lawn
                    </option>

                    <option value="Both" className="text-black">
                      Banquet + Lawn
                    </option>

                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white"
                  />

                </div>

                {/* WHATSAPP CHECKBOX */}

                <label className="flex cursor-pointer items-center gap-3 py-1 text-[12px] text-white/95 sm:text-[13px]">

                  <input
                    type="checkbox"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={handleChange}
                    className="h-[17px] w-[17px] cursor-pointer accent-[#d5ad62]"
                  />

                  Send updates on WhatsApp

                </label>

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  className="hero-glass-button group mt-2 flex h-[55px] w-full items-center justify-center gap-3 rounded-xl px-4 text-[11px] font-bold uppercase tracking-[1.5px] text-white sm:text-[12px]"
                >

                  Connect With Our Team

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href="https://wa.me/916284315908"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#20b83f] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#159c32] sm:right-7"
      >
        <MessageCircle size={27} fill="currentColor" />
      </a>

    </section>
  );
};

export default Hero;
