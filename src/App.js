import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroSection from "./Hero Section/HeroSection";
import SecondSection from "./Second Section/SecondSection";
import ThirdSection from "./Third Section/ThirdSection";
import FourthSection from "./Fourth Section/Fourth-section";
import FourthSectionButton from "./Fourth Section/FourthSectionButton";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FourthSectionButton />
        <Footer />

        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
