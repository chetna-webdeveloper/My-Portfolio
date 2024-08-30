import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Home from '../Home/Home';

import { FaBars, FaTimes } from 'react-icons/fa'
// import {contactme} from '../../assets/contactme.png'
import Contactme from '../../assets/contactme.png'
import logo from '../../assets/Logo.png'



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b-2 border-gray-400">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-auto rounded-lg overflow-hidden " />
          {/* <span className="text-xl font-bold">YourLogo</span> */}
        </div>

        {/* Navigation Links - desktop */}
        <div className="hidden md:flex space-x-6">
          <ul className='flex flex-row mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" :"text-white-700" }    hover:pb-2 hover:border-b-2 hover:border-white lg:hover:bg-transparent lg:border-0 hover:text-white-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" :"text-white-700" }    hover:pb-2 hover:border-b-2 hover:border-white lg:hover:bg-transparent lg:border-0 hover:text-white-700 lg:p-0`
              }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" :"text-white-700" }    hover:pb-2 hover:border-b-2 hover:border-white lg:hover:bg-transparent lg:border-0 hover:text-white-700 lg:p-0`
              }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" :"text-white-700" }    hover:pb-2 hover:border-b-2 hover:border-white lg:hover:bg-transparent lg:border-0 hover:text-white-700 lg:p-0`
              }
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>


    {/* Mobile Menu Toggle Button */}
    <button onClick={toggleMenu} className="text-white md:hidden focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* {mobile Nav} */}
            {/* Mobile Navigation Links */}
            {isOpen && (
          <div className="absolute top-16 right-0 w-full bg-gray-800 text-white transition-transform md:hidden">
            <ul className="flex flex-col items-center py-4">
              <li className="py-2">
                <NavLink to="/" onClick={toggleMenu} >Home</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
              </li>
            </ul>
          </div>
        )}

        {/* Contact Us Button */}
        <Link
          to="/Contact"
          className="hidden md:flex items-center px-4 py-2 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-6 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out">
          
              <img src={Contactme} alt="Contact" className="h-5 w-5   mr-2" />
          Contact Me
        </Link>
      </div>
    </nav>
  );

}

export default Header