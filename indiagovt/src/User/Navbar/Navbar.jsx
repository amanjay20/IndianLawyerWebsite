import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/lawyer_logo.png";
import Header from "../Header/Header";
import {
  FaHome,
  FaCog,
  FaUniversity,
  FaUsers,
  FaUserTie,
  FaCreditCard,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/", icon: <FaHome /> },
    { name: "SERVICES", path: "/services", icon: <FaCog /> },
    { name: "ABOUTUS", path: "/about", icon: <FaUniversity /> },
    { name: "CONTACT", path: "/contact", icon: <FaUsers /> },
    { name: "ADVOCATE", path: "/advocate", icon: <FaUserTie /> },
    { name: "PAYMENT", path: "/payment", icon: <FaCreditCard /> },
  ];

  const iconContainerSize = "h-12 w-12";
  const iconSize = "w-8 h-8";

  return (
    <>
      {/* Header stays above */}
      <Header />

      {/* Navbar: Adjusts top margin on scroll */}
      <div
        className={`fixed left-0 w-full z-50 bg-white shadow-md py-2 transition-all duration-300 ${
          isScrolled ? "top-0" : "mt-[2.5rem] top-0"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="w-auto">
            <Link to="/" className="block">
              <img src={Logo} alt="Logo" className="h-16 w-auto md:h-28" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {/* Navigation */}
          <nav
            className={`w-full md:w-auto mt-4 md:mt-0 ${
              isOpen
                ? "flex flex-col items-center space-y-2"
                : "hidden md:flex space-x-2 md:space-x-4"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 rounded-full hover:bg-gray-200 transition duration-200 p-2 ${
                  isOpen ? "w-full justify-center" : ""
                }`}
              >
                <div
                  className={`rounded-full bg-gray-100 flex items-center justify-center ${iconContainerSize}`}
                >
                  {React.cloneElement(item.icon, {
                    className: `${iconSize} text-gray-600`,
                  })}
                </div>
                <span className="text-sm text-gray-700">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
            <div className="px-4 py-2 flex justify-between items-center border-b">
              <Link to="/" className="block">
                <img src={Logo} alt="Logo" className="h-12 w-auto" />
              </Link>
              <button onClick={toggleMenu} className="text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 rounded-md hover:bg-gray-100 transition duration-200 p-3 w-4/5 justify-center"
                >
                  <div
                    className={`rounded-full bg-gray-200 flex items-center justify-center ${iconContainerSize}`}
                  >
                    {React.cloneElement(item.icon, {
                      className: `${iconSize} text-gray-600`,
                    })}
                  </div>
                  <span className="text-sm text-gray-700">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Spacer for Navbar height */}
      <div className="h-[9.5rem]" />
    </>
  );
};

export default Navbar;
