
import OperaLogo from "../assets/opera/opera-logo.png";

const Loader = ({ isLoading = true }) => {
  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#10111c]"
      role="status"
      aria-label="Loading"
      aria-live="polite"
    >
      {/* Background Decorative Circles */}
      <div className="loader-circle loader-circle-one" />
      <div className="loader-circle loader-circle-two" />

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-[#b18a4a]/10 blur-[100px] sm:h-[380px] sm:w-[380px]" />

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center px-5">

        {/* Logo Animation */}
        <div className="relative flex h-[190px] w-[240px] items-center justify-center sm:h-[230px] sm:w-[290px]">

          {/* Rotating Outer Ring */}
          <div className="loader-ring absolute h-[170px] w-[170px] rounded-full border border-[#b18a4a]/30 sm:h-[210px] sm:w-[210px]" />

          {/* Inner Ring */}
          <div className="loader-ring-reverse absolute h-[145px] w-[145px] rounded-full border border-dashed border-[#b18a4a]/30 sm:h-[180px] sm:w-[180px]" />

          {/* Logo */}
          <img
            src={OperaLogo}
            alt="Opera"
            fetchPriority="high"
            className="loader-logo relative z-10 h-auto w-[155px] object-contain sm:w-[190px]"
          />
        </div>

        {/* Brand Text */}
        <div className="mt-5 text-center">
          <p className="font-serif text-3xl tracking-[5px] text-white sm:text-4xl sm:tracking-[7px]">
            OPERA
          </p>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#b18a4a]" />

            <p className="text-[8px] font-medium uppercase tracking-[4px] text-[#c5a064] sm:text-[9px]">
              BY BHULLAR RESORTS
            </p>

            <span className="h-px w-7 bg-[#b18a4a]" />
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="mt-10 w-[170px] sm:w-[200px]">
          <div className="loader-progress-track h-[2px] w-full overflow-hidden bg-white/15">
            <div className="loader-progress-bar h-full w-full bg-[#c5a064]" />
          </div>

          <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[3px] text-white/50">
            Preparing Your Experience
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loader;
