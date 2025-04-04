import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/lawyer_logo.png"
import Header from "../Header/Header";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "HOME", path: "/", icon: "https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav1.png" },
    { name: "SERVICES", path: "/services", icon: "https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav2.png" },
    { name: "ABOUTUS", path: "/about", icon: "https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav3.png" },
    { name: "CONTACT", path: "/contact", icon: "https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav4.png" },
    { name: "ADVOCATE", path: "/advocate", icon: "https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav5.png" },
  ];

  return (
    <div>
    <div className="xs:hidden -block"><Header /></div>  
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo Section */}
          <div className="flex items-center ">
            {/* <h1 className="text-2xl"><b>LAW</b></h1> */}
            <img src={Logo} alt="Ashoka Emblem" className="h-18 w-auto" />
            {/* <h1 className="text-2xl"><b>YER</b></h1> */}
            {/* <div>
              <h1 className="hidden sm:block text-2xl font-semibold text-blue-600">india.gov.in</h1>
              <p className="hidden sm:block text-gray-500 text-sm">national portal of india</p>
            </div> */}
    

          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="flex flex-col items-center">
                <img src={item.icon} alt={item.name} className="h-15 w-15 rounded-full bg-gray-200 p-2 hover:bg-gray-300" />
                <span className="text-xs text-gray-600 mt-1">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="h-8 w-8 text-gray-700" /> : <Menu className="h-8 w-8 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 rounded-lg py-2 shadow-lg flex flex-col items-center">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-200">
                <img src={item.icon} alt={item.name} className="h-8 w-8 rounded-full bg-gray-200 p-1" />
                <span className="text-gray-700">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
     {/* <div className="md:hidden block ">< Navbar /></div> */}
    </header>
    </div>
  );
};

export default Navbar;



// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="bg-blue-600 text-white py-3">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between">
        
//         {/* Search Input Section */}
//         <div className="flex bg-white rounded-md overflow-hidden w-full md:w-1/2">
//           <input
//             type="text"
//             placeholder="Search - Keyword, Phrase"
//             className="w-full px-4 py-2 outline-none text-gray-700"
//           />
//           <button className="bg-orange-500 px-4 py-2 text-white font-semibold">
//             Search
//           </button>
//           <button className="bg-blue-500 px-4 py-2 text-white font-semibold">
//             Advanced Search ▼
//           </button>
//         </div>

//         {/* Most Searched Section */}
//         {/* <div className="mt-3 md:mt-0 text-sm text-right">
//           <span className="font-bold">MOST SEARCHED</span>
//           <span className="ml-3">Birth Certificate | Driving Licence | Pan Card</span>
//         </div> */}
        
//       </div>
//     </div>
//   );
// };

// export default Navbar;
