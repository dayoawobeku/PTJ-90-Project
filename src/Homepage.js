import React from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./Hero Section/HeroSection";
import SecondSection from "./Second Section/SecondSection";
import ThirdSection from "./Third Section/ThirdSection";
import FourthSection from "./Fourth Section/Fourth-section";
import FourthSectionButton from "./Fourth Section/FourthSectionButton";
import Footer from "./Footer/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FourthSectionButton />
      <Footer />
    </div>
  );
}

export default Homepage;
