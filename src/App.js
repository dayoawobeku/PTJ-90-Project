import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroSection from "./Hero Section/HeroSection";
import SecondSection from "./Second Section/SecondSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <SecondSection />
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
