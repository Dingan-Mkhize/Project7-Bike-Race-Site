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
    <div>
      <Navbar />
      <Hero />
      <Photo />
      <Riders />
      <Locations />
      <Contest />
      <Footer />
    </div>
  );
}

export default App;
