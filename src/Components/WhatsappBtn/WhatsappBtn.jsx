import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Using react-icons library

function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919315831292" 
      target="_blank" 
      rel="noopener noreferrer" 
    //   className="fixed bottom-0 animate-bounce right-10 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 "
     className='bottom-0 fixed animate-bounce right-10   p-3  bg-green-500 bg-opacity-30 backdrop-blur-lg border border-white rounded-full shadow-lg shadow-green-500/30   text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out'
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default WhatsAppButton;
