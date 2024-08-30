import React, { useState, useEffect } from 'react';
import  uparrow from '../../assets/uparrow2.png'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Change 300 to the scroll position threshold
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        className="bottom-0  fixed animate-bounce right-24   p-3  bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white rounded-full shadow-lg shadow-blue-500/30   text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out"
      >
        <img src={uparrow} alt="" />
      </button>
    )
  );
}

export default ScrollToTopButton;
