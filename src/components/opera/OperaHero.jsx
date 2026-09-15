import OperaBg from "../../assets/opera/opera-hero.png";
import OperaLogo from "../../assets/opera/opera-logo.png";


const OperaHero = () => {
  return (
    <main className="bg-[#faf9f6]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[calc(100vh-30px)] w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={OperaBg}
          alt="The Opera by Opulence Resorts"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Slight Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/55" />


        {/* ================= CONTENT ================= */}
        <div className="relative z-10 flex min-h-[calc(100vh-30px)] items-center justify-center px-5 py-16 text-center">

          <div className="flex max-w-5xl flex-col items-center">

            {/* Opera Logo */}
            <img
              src={OperaLogo}
              alt="The Opera"
              className="
                mb-5
                w-[150px]
                object-contain
                sm:w-[190px]
                md:w-[230px]
                lg:w-[270px]
              "
            />


            {/* Main Title */}
            <h1
              className="
                font-serif
                text-[52px]
                font-normal
                uppercase
                leading-none
                tracking-[8px]
                text-white
                sm:text-[72px]
                sm:tracking-[12px]
                md:text-[92px]
                md:tracking-[15px]
                lg:text-[115px]
                lg:tracking-[20px]
              "
            >
              OPERA
            </h1>


            {/* By Bhullar Resorts */}
            <p
              className="
                mt-3
                text-[10px]
                font-medium
                uppercase
                tracking-[5px]
                text-white
                sm:text-[12px]
                sm:tracking-[7px]
                md:text-[14px]
                md:tracking-[8px]
              "
            >
              BY BHULLAR RESORTS
            </p>


            {/* Divider */}
            <div className="my-7 h-px w-16 bg-white/70 sm:w-20" />


            {/* Tagline */}
            <p
              className="
                max-w-[850px]
                font-serif
                text-[16px]
                italic
                uppercase
                leading-7
                tracking-[1px]
                text-white/95
                sm:text-[19px]
                sm:leading-8
                md:text-[23px]
                md:leading-9
                lg:text-[25px]
              "
            >
              The only ballroom in the Tricity region where scale,
              grandeur, and exclusivity stand alone.
            </p>


          </div>

        </div>


        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">

          <div className="flex flex-col items-center gap-2 text-white/80">

            <span className="text-[9px] uppercase tracking-[3px]">
              Discover
            </span>

            <span className="h-8 w-px bg-white/60" />

          </div>

        </div>

      </section>

    </main>
  );
};

export default OperaHero;