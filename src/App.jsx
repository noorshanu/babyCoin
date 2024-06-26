import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <div className=" relative">
        <Navbar />
        <Hero />
        <BorderSec />
        <AboutUs />
        <ChooseHero />
        <HowToBuy />
        <div className="main-bg2">
          <Faq />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
