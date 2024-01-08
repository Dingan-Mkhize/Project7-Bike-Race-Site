import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Photo from "./components/Photos";
import Riders from "./components/Riders";
import Locations from "./components/Locations";
import Contest from "./components/Competition";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f59e0b]">
      <Navbar />
        <Hero />
        <div className="max-w-[1240px] mx-auto">
        <Photo />
        <Riders />
        <Locations />
        <Contest />
        </div>
      <Footer />
    </div>
  );
}

export default App;
