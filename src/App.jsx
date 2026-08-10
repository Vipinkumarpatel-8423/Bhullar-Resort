import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";


function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />

      <main id="home" className="pt-[30px]">
        {/* Your website content */}
        <Hero />
        <About />
        <Services />

      </main>
      <Footer />
    </div>
  );
}

export default App;