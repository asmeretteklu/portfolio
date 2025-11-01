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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
    >
      ↑
    </motion.button>
  );
};

export default BackToTop;