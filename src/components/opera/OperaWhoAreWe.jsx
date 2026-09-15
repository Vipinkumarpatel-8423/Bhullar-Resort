const OperaWhoAreWe = () => {
  const features = [
    {
      value: "18,000",
      description: "sq. ft. of Total Space",
      type: "large",
    },
    {
      value: "350",
      description: "Guests",
      smallText: "Capacity of upto",
      type: "large",
    },
    {
      value: "Ample",
      description: "Parking Space",
      type: "large",
    },
    {
      value: "Catering",
      description: "",
      smallText: "Premium In House",
      type: "large",
    },
    {
      value: "End-to-End",
      description: "Planning to Execution",
      type: "large",
    },
    {
      value: "Weather",
      secondLine: "Controlled",
      description: "",
      type: "large",
    },
  ];

  return (
    <section
      id="who-are-we"
      className="w-full overflow-hidden bg-[#10101c] px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* ================= SECTION HEADING ================= */}
        <div className="mb-7 flex items-center gap-3 sm:mb-8 md:gap-4">

          <h2
            className="
              shrink-0
              font-serif
              text-[27px]
              italic
              leading-none
              text-[#f5eee8]
              sm:text-[32px]
              md:text-[36px]
              lg:text-[40px]
            "
          >
            WHO ARE WE?
          </h2>

          {/* Horizontal Line */}
          <div className="mt-1 h-px flex-1 bg-[#c58232]" />

        </div>


        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-3 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                flex
                min-h-[145px]
                flex-col
                items-center
                justify-center
                border
                border-[#c58232]
                bg-[#e7e3e2]
                px-4
                py-7
                text-center
                transition-all
                duration-300
                hover:bg-[#eeeae7]
                sm:min-h-[155px]
                md:min-h-[170px]
                lg:min-h-[175px]
              "
            >

              {/* Small Text Above */}
              {feature.smallText && (
                <p
                  className="
                    mb-[-2px]
                    font-serif
                    text-[11px]
                    leading-4
                    text-[#10101c]
                    sm:text-xs
                  "
                >
                  {feature.smallText}
                </p>
              )}


              {/* Main Value */}
              <h3
                className={`
                  max-w-full
                  font-serif
                  font-normal
                  leading-[1]
                  tracking-[-0.5px]
                  text-[#c58232]
                  ${
                    feature.value === "End-to-End"
                      ? "text-[29px] sm:text-[34px] md:text-[37px]"
                      : feature.value === "Catering"
                      ? "text-[36px] sm:text-[40px] md:text-[43px]"
                      : feature.value === "Ample"
                      ? "text-[37px] sm:text-[43px] md:text-[47px]"
                      : "text-[38px] sm:text-[45px] md:text-[48px]"
                  }
                `}
              >
                {feature.value}

                {/* Second Line */}
                {feature.secondLine && (
                  <span className="block">
                    {feature.secondLine}
                  </span>
                )}
              </h3>


              {/* Description */}
              {feature.description && (
                <p
                  className="
                    mt-1
                    max-w-[220px]
                    font-serif
                    text-[11px]
                    leading-4
                    text-[#10101c]
                    sm:text-xs
                  "
                >
                  {feature.description}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OperaWhoAreWe;