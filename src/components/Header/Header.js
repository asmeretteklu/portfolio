import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import AIAssistant from '../AIAssistant/AIAssistant';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'certificates', label: 'Certificates', icon: '📜' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 100;
      
      navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveNav(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setIsMenuOpen(false);
    
    const element = document.getElementById(navItem);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for header height
        behavior: 'smooth'
      });
    }
  };

  const handleAIAssistantClick = () => {
    setIsAIAssistantOpen(true);
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          {/* Logo */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" onClick={() => handleNavClick('home')}>
              <div className="logo-content">
                <div className="logo-icon">AT</div>
                <span className="logo-text">Asmeret Teklu</span>
              </div>
            </a>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="nav-links">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="nav-item-wrapper"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.id}`}
                  className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {activeNav === item.id && (
                    <motion.div 
                      className="nav-indicator"
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Header Controls - Desktop */}
          <div className="header-controls">
            <ThemeToggle />
            
            <motion.button 
              className="ai-assistant-btn"
              onClick={handleAIAssistantClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="ai-icon">🤖</span>
              <span className="ai-text">AI Assistant</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`mobile-nav-item ${activeNav === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    variants={navItemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mobile-nav-icon">{item.icon}</span>
                    {item.label}
                    {activeNav === item.id && (
                      <motion.div 
                        className="mobile-nav-indicator"
                        layoutId="mobileNavIndicator"
                      />
                    )}
                  </motion.a>
                ))}
                
                {/* Mobile Controls */}
                <div className="mobile-controls">
                  <ThemeToggle />
                  <motion.button 
                    className="mobile-ai-btn"
                    onClick={handleAIAssistantClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="ai-icon">🤖</span>
                    AI Assistant
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* AI Assistant Component */}
      <AIAssistant 
        isOpen={isAIAssistantOpen} 
        onClose={() => setIsAIAssistantOpen(false)} 
      />
    </>
  );
};

export default Header;