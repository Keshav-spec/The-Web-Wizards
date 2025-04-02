import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";

const Navbar = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const basePath = "/portfolio/template1";
  
  const navItems = [
    { path: `${basePath}`, label: "Home" },
    { path: `${basePath}/about`, label: "About" },
    { path: `${basePath}/projects`, label: "Projects" },
    { path: `${basePath}/skills`, label: "Skills" },
    { path: `${basePath}/contact`, label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to={`${basePath}`} className="text-2xl font-bold text-blue-400">
            {userData?.name || "Portfolio"}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                } transition-all duration-300 font-medium`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-3 text-gray-300 hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
