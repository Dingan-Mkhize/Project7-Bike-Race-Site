import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Photo from "./components/Photos";
import Riders from "./components/Riders";
import Locations from "./components/Locations";
import Contest from "./components/Competition";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div className="bg-[#f59e0b] overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Photo />
        <Riders />
        <Locations />
        <Contest />
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
