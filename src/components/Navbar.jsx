import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-4xl font-bold hero-font text-[#a04008]">
        BBR.
      </h1>
      <ul className="hidden md:flex text-white text-xl">
        <li className="p-4">Home</li>
        <li className="p-4">Photos</li>
        <li className="p-4">Riders</li>
        <li className="p-4">Locations</li>
        <li className="p-4">Competition</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-yellow-500 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl hero-font font-bold text-[#a04008] m-4">
          BBR.
        </h1>
        <li className="p-4 border-b border-black text-black">Home</li>
        <li className="p-4 border-b border-black text-black">Photos</li>
        <li className="p-4 border-b border-black text-black">Riders</li>
        <li className="p-4 border-b border-black text-black">Locations</li>
        <li className="p-4 text-black">Competition</li>
      </ul>
    </div>
  );
};

export default Navbar;
