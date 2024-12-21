import React from "react";
import Header from "../components/organisms/Header";
import Countdown from "../components/organisms/Countdown";
import HeroSection from "../components/organisms/HeroSection";

const HomePage: React.FC = () => {
  return (
    <div className="min-vh-100 bg-light">
      <Header />
      <HeroSection />
      <Countdown />
    </div>
  );
};

export default HomePage;
