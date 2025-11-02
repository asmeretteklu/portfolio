import React, { useState, useEffect } from 'react';
import './Header.css';
import AIAssistant from '../AIAssistant/AIAssistant';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  // ADDED: Header animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      const header = document.querySelector('.header');
      if (header) {
        header.classList.add('loaded');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'certificates', label: 'Certificates', icon: '📜' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation click
  const handleNavClick = (navId) => {
    setActiveNav(navId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(navId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // AI Assistant click
  const handleAIAssistantClick = () => {
    setIsAIAssistantOpen(true);
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav') && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          {/* Logo */}
          <div className="logo">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              <div className="logo-content">
                <div className="logo-icon">AT</div>
                <span className="logo-text">Asmeret Teklu</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <div key={item.id} className="nav-item-wrapper">
                <a
                  href={`#${item.id}`}
                  className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="header-controls">
            <ThemeToggle />
            
            <button 
              className="ai-assistant-btn"
              onClick={handleAIAssistantClick}
            >
              <span className="ai-icon">🤖</span>
              <span className="ai-text">AI Assistant</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mobile-nav-item ${activeNav === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                {item.label}
              </a>
            ))}
            
            {/* Mobile Controls - ADDED THEME TOGGLE HERE */}
            <div className="mobile-controls">
              {/* ADDED: Theme Toggle in Mobile Menu */}
              <div className="mobile-theme-toggle">
                <ThemeToggle />
              </div>
              
              <button 
                className="mobile-ai-btn"
                onClick={handleAIAssistantClick}
              >
                <span className="ai-icon">🤖</span>
                AI Assistant
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* AI Assistant */}
      <AIAssistant 
        isOpen={isAIAssistantOpen} 
        onClose={() => setIsAIAssistantOpen(false)} 
      />
    </>
  );
};

export default Header;