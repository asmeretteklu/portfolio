import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // FIX: Use instant scroll instead of smooth to prevent conflicts
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Changed from 'smooth' to 'instant'
    });
  };

  return (
    <motion.button
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }} // Added faster transition
    >
      ↑
    </motion.button>
  );
};

export default BackToTop;