import OperaHero from "../components/opera/OperaHero";
import OperaWhoAreWe from "../components/opera/OperaWhoAreWe";
// import OperaBallroom from "../components/opera/OperaBallroom";
import Services from "../components/Services"
import OperaLocation from "../components/opera/OperaLocation";
import OperaFooter from "../components/opera/OperaFooter";
// import OperaImageSection from "../components/opera/OperaImageSection";
// import OperaCelebrations from "../components/opera/OperaCelebrations";
// import OperaExperience from "../components/opera/OperaExperience";
// import OperaGallery from "../components/opera/OperaGallery";
// import OperaLocation from "../components/opera/OperaLocation";
// import OperaEnquiry from "../components/opera/OperaEnquiry";
// import OperaContact from "../components/opera/OperaContact";

const Opera = () => {
  return (
    <main className="bg-[#faf9f6] mt-20">

      {/* 1. Hero Section */}
      <OperaHero />

<OperaWhoAreWe/>
<Services/>
<OperaLocation/>
<OperaFooter/>
    </main>
  );
};

export default Opera;