import BallroomImage from "../../assets/opera/opera-ballroom.png";

const OperaBallroom = () => {
  return (
    <section
      id="ballroom"
      className="relative overflow-hidden bg-[#e7e3e2] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* ================= TOP DECORATIVE LINE ================= */}
        {/* <div className="mb-8 flex items-center justify-end sm:mb-10">
          <div className="h-px w-full max-w-[580px] bg-[#10101c]" />
        </div> */}


        {/* ================= MAIN CONTENT ================= */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 lg:pr-10">

            {/* Heading */}
            <h2
              className="
                font-serif
                text-[36px]
                font-semibold
                leading-tight
                text-[#10101c]
                sm:text-[44px]
                md:text-[48px]
                lg:text-[50px]
              "
            >
              The Ballroom
            </h2>


            {/* Description */}
            <p
              className="
                mt-3
                max-w-[540px]
                text-justify
                font-serif
                text-[12px]
                leading-[1.55]
                text-[#10101c]
                sm:text-[13px]
                sm:leading-[1.6]
              "
            >
              An architectural marvel spread across 18,000 sq. ft.,
              our signature pillarless grand hall offers an
              unobstructed, majestic view from every angle. Designed
              to comfortably host sophisticated gatherings of 100
              to 300 guests, the venue features an iconic,
              theatrical 60 ft. stage and multiple curated
              pre-function spaces, ensuring your celebration feels
              expansive and visually stunning.
            </p>


            {/* ================= HIGHLIGHTS ================= */}
            <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">

              {/* Ballroom */}
              <div className="flex items-start gap-2">

                <span className="mt-0.5 text-[25px] leading-none text-[#a9682c]">
                  ›
                </span>

                <p className="font-serif text-[20px] font-semibold leading-tight text-[#10101c] sm:text-[23px]">
                  Ballroom:
                  <span className="text-[#a9682c]">
                    {" "}18,000 sq. ft.
                  </span>
                </p>

              </div>


              {/* Stage */}
              <div className="flex items-start gap-2">

                <span className="mt-0.5 text-[25px] leading-none text-[#a9682c]">
                  ›
                </span>

                <p className="font-serif text-[20px] font-semibold leading-tight text-[#10101c] sm:text-[23px]">
                  Stage Size:
                  <span className="text-[#a9682c]">
                    {" "}60 ft.
                  </span>
                </p>

              </div>


              {/* Capacity */}
              <div className="flex items-start gap-2">

                <span className="mt-0.5 text-[25px] leading-none text-[#a9682c]">
                  ›
                </span>

                <p className="font-serif text-[20px] font-semibold leading-tight text-[#10101c] sm:text-[23px]">
                  Capacity:
                  <span className="text-[#a9682c]">
                    {" "}100–350 guests
                  </span>
                </p>

              </div>

            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">

            <div className="overflow-hidden">

              <img
                src={BallroomImage}
                alt="The Ballroom at Opera by Opulence Resorts"
                className="
                  h-[300px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                  sm:h-[360px]
                  md:h-[370px]
                  lg:h-[380px]
                  xl:h-[400px]
                "
              />

            </div>

          </div>

        </div>


        {/* ================= BOTTOM DECORATIVE LINE ================= */}
        {/* <div className="mt-8 flex items-center justify-end sm:mt-10">

          <div className="h-px w-full max-w-[545px] bg-[#10101c]" />

        </div> */}

      </div>

    </section>
  );
};

export default OperaBallroom;