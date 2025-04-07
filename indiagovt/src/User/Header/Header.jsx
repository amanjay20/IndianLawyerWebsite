import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // instead of from lucide-react


const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#89620E] via-[#D1C158] to-[#89620E] text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="flex items-center space-x-1 text-xs md:text-sm">
            <ImLocation className="text-sm md:text-base" />
            <span className="hidden sm:inline">BHEL, Bhopal, Madhya Pradesh 462022</span>
            <span className="inline sm:hidden">Bhopal, MP</span>
          </div>
          <div className="flex items-center space-x-1 text-xs md:text-sm hidden sm:flex">
            <MdCall className="text-sm md:text-base" />
            <span className="hidden md:inline">+919827261503</span>
            <span className="inline md:hidden">+91 9827261503</span>
          </div>
          <div className="flex items-center space-x-1 text-xs md:text-sm hidden lg:flex">
            <BiSolidMessage className="text-sm md:text-base" />
            <span>info@bestadvocatebhopalindia.in</span>
          </div>
          {/* Visible on Phone */}
          <div className="flex items-center space-x-1 text-xs sm:hidden">
            <BiSolidMessage className="text-sm" />
            <span>info@...in</span> {/* Abbreviated email for phone */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="hidden sm:flex space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl hover:opacity-75">
              <RiFacebookCircleFill />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl hover:opacity-75">
              <RiInstagramFill />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl hover:opacity-75">
              <RiTwitterXLine />
            </a>
            <Link to="/login">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl hover:opacity-75">
              < FaUser  />
            </a></Link>
          </div>
          {/* Visible on Phone */}
          <div className="flex sm:hidden space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-75">
              <RiFacebookCircleFill />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-75">
              <RiInstagramFill />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-75">
              <RiTwitterXLine />
            </a>
            <Link to="/login">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-75">
              < FaUser/>
            </a>
            </Link>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;