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

    console.log("Enquiry:", formData);

    // API / EmailJS / WhatsApp integration yahan add kar sakte ho
  };

  return (
    <section
      id="home"
      className="relative min-h-[760px] overflow-hidden bg-[#f8f5ef]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../assets/banner.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Extra Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1400px] items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_420px]">

          {/* LEFT CONTENT */}
          <div className="max-w-[700px] pt-8 lg:pt-0">

            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#d7b77c]">
                Opulence Resorts
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[680px] font-serif text-[46px] leading-[1.02] tracking-[-1px] text-white sm:text-[58px] md:text-[68px] lg:text-[72px] xl:text-[82px]">
              Your perfect day,
              <br />

              <span className="italic text-[#d5b274]">
                beautifully celebrated.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-[15px] leading-7 text-white/85 sm:text-[16px]">
              A luxurious destination for weddings, celebrations and
              unforgettable moments — where every detail is designed
              to make your special day truly memorable.
            </p>

            {/* Bottom Info */}
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs uppercase tracking-[1.5px] text-white/70">
              <span>Weddings</span>
              <span className="h-1 w-1 rounded-full bg-[#c9a66b]" />
              <span>Banquets</span>
              <span className="h-1 w-1 rounded-full bg-[#c9a66b]" />
              <span>Celebrations</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full">
            <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-6 md:p-7">

              {/* Form Header */}
              <div className="mb-5">
                <h2 className="font-serif text-[26px] text-[#24211d]">
                  Let's Connect!
                </h2>

                <p className="mt-1 text-[11px] leading-5 text-gray-500">
                  Tell us about your event and let our team help
                  you plan a celebration that's truly special.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-2.5"
              >

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-none border border-transparent bg-[#f5f5f4] px-3 text-[13px] text-gray-700 outline-none transition focus:border-[#c49a5a] focus:bg-white"
                />

                {/* Mobile */}
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-none border border-transparent bg-[#f5f5f4] px-3 text-[13px] text-gray-700 outline-none transition focus:border-[#c49a5a] focus:bg-white"
                />

                {/* Location */}
                {/* <div className="relative">
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="h-11 w-full appearance-none rounded-none border border-transparent bg-[#f5f5f4] px-3 pr-10 text-[13px] text-gray-500 outline-none transition focus:border-[#c49a5a] focus:bg-white"
                  >
                    <option value="">
                      Location of your event*
                    </option>
                    <option value="Bhullar Resort">
                      Bhullar Resort
                    </option>
                    <option value="Other">
                      Other Location
                    </option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div> */}

                {/* Date */}
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-none border border-transparent bg-[#f5f5f4] px-3 pr-10 text-[13px] text-gray-500 outline-none transition focus:border-[#c49a5a] focus:bg-white"
                  />

                  <CalendarDays
                    size={17}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="h-11 w-full appearance-none rounded-none border border-transparent bg-[#f5f5f4] px-3 pr-10 text-[13px] text-gray-500 outline-none transition focus:border-[#c49a5a] focus:bg-white"
                  >
                    <option value="">
                      {/* Select your Event  */}
                      Event Type
                    </option>
                    <option value="Wedding">
                      Wedding
                    </option>
                    <option value="Reception">
                      Reception
                    </option>
                    <option value="Engagement">
                      Engagement
                    </option>
                    <option value="Birthday">
                      Birthday Party
                    </option>
                    <option value="Corporate">
                      Corporate Event
                    </option>
                    <option value="Other">
                      Other Event
                    </option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>

                {/* Venue */}
                <div className="relative">
                  <select
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                    className="h-11 w-full appearance-none rounded-none border border-transparent bg-[#f5f5f4] px-3 pr-10 text-[13px] text-gray-500 outline-none transition focus:border-[#c49a5a] focus:bg-white"
                  >
                    <option value="">
                      No. Of Guets 
                    </option>
                    <option value="Banquet Hall">
                      Banquet Hall
                    </option>
                    <option value="Lawn">
                      Lawn
                    </option>
                    <option value="Both">
                      Banquet + Lawn
                    </option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>

                {/* WhatsApp */}
                <label className="flex cursor-pointer items-center gap-2 py-1 text-[12px] text-gray-700">
                  <input
                    type="checkbox"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#c49a5a]"
                  />

                  Send updates on WhatsApp
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-1 flex h-12 w-full items-center justify-center bg-[#b8833f] px-4 text-[12px] font-semibold uppercase tracking-[1px] text-white transition duration-300 hover:bg-[#9d6d31]"
                >
                  Connect With Our Team
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ivory Shape */}
      <div className="absolute bottom-0 left-0 z-20 h-16 w-full bg-[#f8f5ef] [clip-path:ellipse(72%_100%_at_50%_100%)] sm:h-20 md:h-24" />

      {/* WhatsApp Floating Button */}
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