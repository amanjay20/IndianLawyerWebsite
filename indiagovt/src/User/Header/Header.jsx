import React from "react";
import {  FaUser } from "react-icons/fa"; // Login icon
import { IoMdClose } from "react-icons/io"; // Close icon

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-100 px-6 py-2 shadow-md">
      {/* Left Side: Login Icon */}
      <div className="flex items-center space-x-4">
        < FaUser className="text-blue-600 text-2xl cursor-pointer" title="Login" />
        {/* <IoMdClose className="text-gray-600 text-2xl cursor-pointer" title="Close" /> */}
      </div>
               {/* Search Input Section */}
      <div className="flex bg-white rounded-md overflow-hidden w-full md:w-1/2">
  <input
    type="text"
    placeholder="Search - Keyword"
    className="w-full p-4 py-2 outline-none text-gray-700"
  />
  {/* Button hidden on small screens, visible on md+ screens */}
  {/* Button hidden on small screens, visible on md+ screens */}
<button className="hidden md:block bg-orange-500 mr-12 py-2 text-white font-semibold">
  Search
</button>

{/* Center: Skip to Main - Hidden on small screens
<a href="#main" className="hidden md:inline text-gray-600 hover:underline">
  Skip to main content
</a> */}

{/* Right Side: Accessibility & Language Switcher - Hidden on small screens */}
<div className="hidden md:flex items-center space-x-4">
  
  <button className="text-lg font-bold">A</button>
  <button className="text-lg">+A</button>
  <button className="bg-black text-white px-2 py-1 rounded">A</button>
  <button className="bg-orange-500 text-white px-2 py-1 rounded">हिन्दी</button>
</div>
</div>
    </header>
  );
};

export default Header;
