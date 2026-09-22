import { Routes, Route, useLocation } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Opera from "./pages/Opera";
import Opulence from "./pages/Opulence";
// import Weddings from "./components/Weddings";
// import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import LocationSection from "./components/LocationSection";



function Home() {
  return (
    <>
      <main id="home" className="pt-[30px]">
        <Hero />
        <About />
        {/* <Services /> */}
        {/* <Weddings /> */}
        {/* <Gallery /> */}
        <Contact/>
        <LocationSection />

      </main>
    </>
  );
}


function App() {
  const location = useLocation();

  // Opera aur Opulence routes par common Footer hide hoga
  const hideFooter =
    location.pathname === "/resorts/opera" ||
    location.pathname === "/resorts/opulence";

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      <Header />

      <Routes>

        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= OPERA ================= */}
        <Route
          path="/resorts/opera"
          element={<Opera />}
        />

        {/* ================= OPULENCE ================= */}
        <Route
          path="/resorts/opulence"
          element={<Opulence />}
        />

      </Routes>

      {/* Common Footer sirf Home par show hoga */}
      {!hideFooter && <Footer />}

    </div>
  );
}

export default App;


















// import { Routes, Route } from "react-router-dom";

// import About from "./components/About";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// // import Services from "./components/Services";

// import Opera from "./pages/Opera";
// import Opulence from "./pages/Opulence";


// function Home() {
//   return (
//     <>
//       <main id="home" className="pt-[30px]">
//         <Hero />
//         <About />
//         {/* <Services /> */}
//       </main>
//     </>
//   );
// }
// function App() {
//   return (
//     <div className="min-h-screen bg-[#faf9f6]">
//       <Header />
//       <Routes>
//         {/* ================= HOME ================= */}
//         <Route path="/" element={<Home />} />
//         {/* ================= OPERA ================= */}
//         <Route
//           path="/resorts/opera"
//           element={<Opera />}
//         />
//         {/* ================= OPULENCE ================= */}
//         <Route
//           path="/resorts/opulence"
//           element={<Opulence />}
//         />

//       </Routes>

//       <Footer />

//     </div>
//   );
// }

// export default App;