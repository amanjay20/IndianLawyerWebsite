import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/lawyer_logo.png";
import Header from "../Header/Header";
import { FaHome, FaCog, FaUniversity, FaUsers, FaUserTie } from 'react-icons/fa'; // Example icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'HOME', path: '/', icon: <FaHome className="w-10 h-w-10 text-gray-600" /> },
    { name: 'SERVICES', path: '/services', icon: <FaCog className="w-10 h-w-10 text-gray-600" /> },
    { name: 'ABOUTUS', path: '/about', icon: <FaUniversity className="w-10 h-w-10 text-gray-600" /> },
    { name: 'CONTACT', path: '/contact', icon: <FaUsers className="w-10 h-w-10 text-gray-600" /> },
    { name: 'ADVOCATE', path: '/advocate', icon: <FaUserTie className="w-10 h-w-10 text-gray-600" /> },
  ];

  const iconContainerSize = 'h-8 w-8'; // Smaller for mobile
  const iconSize = 'w-6 h-6'; // Smaller for mobile

  return (
    <div>
      <div className="xs:hidden -block"><Header /></div>
      <div className="bg-white shadow-md py-2 w-full">
        <div className="container mx-auto  flex items-center justify-between">
          {/* Left Side - Logo */}
          <div className="w-auto">
            <Link to="/" className="block">
              <img src={Logo} alt="Logo" className="h-16 w-auto md:h-28" />
            </Link>
          </div>

          {/* Mobile Menu Button (Visible on small screens) */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>

          {/* Right Side - Navigation Items (Hidden on mobile by default) */}
          <nav className={`w-full md:w-auto mt-4 md:mt-0 ${isOpen ? 'flex flex-col items-center space-y-2' : 'hidden md:flex space-x-2 md:space-x-4'}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 rounded-full hover:bg-gray-200 transition duration-200 p-2 ${isOpen ? 'w-full justify-center' : ''}`}
              >
                <div className={`rounded-full bg-gray-100 flex items-center justify-center ${iconContainerSize}`}>
                  {React.cloneElement(item.icon, { className: `${iconSize} text-gray-600` })}
                </div>
                <span className="text-sm text-gray-700">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
            {/* Logo and Close Button */}
            <div className="px-4 py-2 flex justify-between items-center border-b">
              <Link to="/" className="block">
                <img src={Logo} alt="Logo" className="h-12 w-auto" />
              </Link>
              <button onClick={toggleMenu} className="text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 rounded-md hover:bg-gray-100 transition duration-200 p-3 w-4/5 justify-center"
                >
                  <div className={`rounded-full bg-gray-200 flex items-center justify-center ${iconContainerSize}`}>
                    {React.cloneElement(item.icon, { className: `${iconSize} text-gray-600` })}
                  </div>
                  <span className="text-sm text-gray-700">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
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
