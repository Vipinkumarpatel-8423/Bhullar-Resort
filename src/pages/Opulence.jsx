import OpulenceHero from "../components/opulence/OpulenceHero";
import OpulenceServices from "../components/opulence/OpulenceServices";
import OpulenceWhoAreWe from "../components/opulence/OpulenceWhoAreWe";
// import Services from "../components/Services";
import OpulenceLocation from "../components/opulence/OpulenceLocation";
import OpulenceFooter from "../components/opulence/OpulenceFooter";


const Opulence = () => {
  return (
    <main className="bg-[#faf9f6] mt-20">
      {/* 1. Hero Section */}
      <OpulenceHero />

      <OpulenceWhoAreWe />
      <OpulenceServices/>
      <OpulenceLocation />
      <OpulenceFooter />
    
    </main>
  );
};

export default Opulence;
