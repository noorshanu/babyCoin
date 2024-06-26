import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";

function App() {
  return (
    <>
      <div className=" relative">
        <Navbar />
        <Hero />
        <BorderSec />
        <AboutUs />
        <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[6%] bg-[#0243b9] ">
          <img src="images/star.png" alt="" className=" h-auto sm:h-[80px]" />

          <h1 className=" text-xl sm:text-6xl font-bold text-white font-dream">
            Tokenomics
          </h1>

          <img src="images/star.png" alt="" className="h-auto sm:h-[80px]" />
        </div>
        <Taxs />
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
