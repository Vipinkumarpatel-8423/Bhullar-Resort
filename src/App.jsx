
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import LocationSection from "./components/LocationSection";
import Loader from "./components/Loader";

import Opera from "./pages/Opera";
import Opulence from "./pages/Opulence";
import Aboutpage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// ================= HOME PAGE =================
function Home() {
  return (
    <>
      <main id="home" className="pt-[30px]">
        <Hero />
        <About />
        {/* <Services /> */}
        {/* <Weddings /> */}
        {/* <Gallery /> */}
        <Contact />
        <LocationSection />
      </main>
    </>
  );
}

// ================= MAIN APP =================
function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Loader on initial website visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Opera aur Opulence routes par common Footer hide hoga
  const hideFooter =
    location.pathname === "/resorts/opera" ||
    location.pathname === "/resorts/opulence";

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      {/* CONDITIONAL LOADER */}
      {isLoading && <Loader isLoading={isLoading} />}

      {/* WEBSITE CONTENT */}
      <Header />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* OPERA */}
        <Route path="/resorts/opera" element={<Opera />} />

        {/* OPULENCE */}
        <Route path="/resorts/opulence" element={<Opulence />} />

        {/* ABOUT */}
        <Route path="/about" element={<Aboutpage />} />

        {/* CONTACT */}
        <Route path="/contact" element={<ContactPage />} />

      </Routes>

      {/* COMMON FOOTER */}
      {!hideFooter && <Footer />}

    </div>
  );
}

export default App;
