import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HowItWorks from "./components/howitworks";
import Features from "./components/features";
import TechStack from "./components/techstack";
import Demo from "./components/demo";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <TechStack />
      <Demo />
      <Footer />
    </div>
  );
};

export default App;
