import React from 'react';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Photo from './components/Photos';
import Riders from './components/Riders';
import Locations from './components/Locations';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Photo />
      <Riders />
      <Locations />
    </div>
  );
}

export default App;


