import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
// import uparrow from '../../assets/uparrow.png'
import ScrollToTopButton from '../ScrollToTopBtn/ScrollToTopBtn';
import WhatsAppButton from '../WhatsappBtn/WhatsappBtn'
import {FaPhone} from 'react-icons/fa'
import { FaFacebook, FaTwitter, FaInstagram ,FaLinkedin } from 'react-icons/fa';

function Footer(){
  return (
    <footer className="bg-black text-white p-10 relative">
      <div className="container mx-auto  md:grid-cols-3 grid-cols-1 grid lg:grid-cols-3 lg:justify-items-center items-start"> 
        {/* Links Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold inline-block mb-4 border-b-2 border-gray-400">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-gray-400">Skills</Link>
            </li>
            <li>
              <Link to="/Projects" className="hover:text-gray-400">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
            </li>
          </ul>
        </div>
        

    
        {/* Contact Information */}
        <div className="mb-6 md:mb-0 right-0 ">
          <h3 className="text-xl font-semibold mb-4 border-b-2 inline-block border-gray-400">Contact Us</h3>
          <p className="mb-2">A-22,South Anarkali, Delhi,India</p>
          <p className="mb-2">Email: chetnachetna@gmail.com</p>
          <p>Phone:+91 9315831292 </p>  
        </div>

       
        
        {/* Social Media Icons */}
        <div className=" mb-6 md:mb-0 right-0"> 
        <h3 className="text-xl font-semibold mb-4 border-b-2 inline-block border-gray-400">Social Media</h3>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 flex items-center m-1">
          
            <FaFacebook className="text-blue-600 text-xl lg:text-3xl mr-1" /> Facebook
            
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 flex items-center m-1">
          <FaTwitter className="text-blue-400 text-xl lg:text-3xl mr-1" />Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 flex items-center m-1">
          <FaInstagram className="text-pink-500  text-xl lg:text-3xl mr-1" />Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 flex items-center m-1">
          <FaLinkedin className="text-blue-500 text-xl lg:text-3xl mr-1" />Linkedin

          </a>
        </div>
     

      </div>
      
      {/* Bottom Copyright */}
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Chenta. All rights reserved.</p>
      </div>

      {/* {button for taking on home page} */}
      <div><ScrollToTopButton/></div>

      {/* {button for whatsapp} */}
      <div><WhatsAppButton/></div>
{/* 
      <Link to="tel:+919315831292"    className='bottom-0  fixed animate-bounce right-24   p-3  bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white rounded-full shadow-lg shadow-blue-500/30   text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out'>
      <FaPhone size={24} />
      </Link> */}
    </footer>
  );
}

export default Footer;
