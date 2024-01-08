import React, { useState } from "react";
import "../index.css";
import { Link } from "react-scroll";
//import BoulderBikeTourLogo from '../assets/BBR-Logo.png';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      {/* <img
          src={BoulderBikeTourLogo}
          alt="Boulder Bike Tour Logo" /> */}
      <h1 className="outline-text-brown w-full text-4xl font-bold hero-font text-[#a04008]">
        BBT
      </h1>
      <ul className="outline-text-white hidden md:flex">
        <li className="p-4">
          <Link to="home-section" smooth={true} duration={500} className="cursor-pointer">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="photos-section" smooth={true} duration={500} className="cursor-pointer">
            Photos
          </Link>
        </li>
        <li className="p-4">
          <Link to="riders-section" smooth={true} duration={500} className="cursor-pointer">
            Riders
          </Link>
        </li>
        <li className="p-4">
          <Link to="locations-section" smooth={true} duration={500} className="cursor-pointer">
            Locations
          </Link>
        </li>
        <li className="p-4">
          <Link to="competition-section" smooth={true} duration={500} className="cursor-pointer">
            Competition
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#f59e0b] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl hero-font font-bold text-[#a04008] m-4">
          BBT
        </h1>
        <li className="p-4 border-b border-black text-black">
          <Link
            onClick={handleNav}
            to="home-section"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="p-4 border-b border-black text-black">
          <Link
            onClick={handleNav}
            to="photos-section"
            smooth={true}
            duration={500}
          >
            Photos
          </Link>
        </li>
        <li className="p-4 border-b border-black text-black">
          <Link
            onClick={handleNav}
            to="riders-section"
            smooth={true}
            duration={500}
          >
            Riders
          </Link>
        </li>
        <li className="p-4 border-b border-black text-black">
          <Link
            onClick={handleNav}
            to="locations-section"
            smooth={true}
            duration={500}
          >
            Locations
          </Link>
        </li>
        <li className="p-4 border-b border-black text-black">
          <Link
            onClick={handleNav}
            to="competition-section"
            smooth={true}
            duration={500}
          >
            Competition
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
