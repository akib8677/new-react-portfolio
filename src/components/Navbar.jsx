// src/components/Navbar.js
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold font-signature">Md Akib</div>

        <div className="lg:hidden">
          {isMobileMenuOpen ? (
            <AiOutlineClose
              className="text-white cursor-pointer text-2xl"
              onClick={toggleMobileMenu}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white cursor-pointer text-2xl"
              onClick={toggleMobileMenu}
            />
          )}
        </div>

        <ul className={`lg:flex items-center space-x-4 sm:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Portfolio</li>
          <li className="text-white">Experience</li>
          <li className="text-white">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
