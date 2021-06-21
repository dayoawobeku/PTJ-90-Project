import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroSection from "./Hero Section/HeroSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
