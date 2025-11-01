import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './HomeSection.css';
import AsmeretPhoto from '../../assets/images/asmeret.jpg';

const HomeSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 968);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/asmeret-teklu-cv.pdf';
    link.download = 'Asmeret_Teklu_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="home-section">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="home-container">
        {/* Left Content */}
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="intro-text"
          >
            <span className="waving-hand">👋</span> Hello there! I'm Asmeret
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="main-heading"
          >
            Building Digital Experiences
            <span className="highlight"> That Make a Difference</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="typewriter-container"
          >
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Developer',
                  'Digital Marketer',
                  'Problem Solver',
                  'SEO Specialist',
                  'Tech Enthusiast'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
                cursor: '▊'
              }}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="description"
          >
            Fresh Software Engineering graduate passionate about creating web solutions that 
            <strong> solve real problems</strong>. Currently mastering the MERN stack through 
            FreeCodeCamp while exploring how AI can enhance user experiences.
          </motion.p>

          {/* Marketing Highlight */}
          <motion.div 
            variants={itemVariants}
            className="marketing-highlight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="marketing-icon">🎯</div>
            <div className="marketing-content">
              <h4>Development + Marketing Insight</h4>
              <p>
                Combining technical skills with <strong>SEO, content strategy, and user engagement</strong> 
                to build web experiences that convert and connect with the right audience.
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="action-buttons"
          >
            <motion.button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="btn-icon">🚀</span>
              See My Work
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="btn-icon">💬</span>
              Let's Talk
            </motion.button>
            
            <motion.button 
              className="btn btn-download"
              onClick={handleDownloadCV}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="btn-icon">📄</span>
              Download CV
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="stats"
          >
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">2024</div>
              <div className="stat-label">Fresh Graduate</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">MERN</div>
              <div className="stat-label">Stack Focus</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">SEO + Dev</div>
              <div className="stat-label">Dual Expertise</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo */}
        <motion.div 
          className="home-visual"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="photo-container">
            <motion.div 
              className="profile-photo-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="profile-photo">
                <AnimatePresence>
                  {!imageLoaded && (
                    <motion.div 
                      className="photo-skeleton"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                <motion.img 
                  src={AsmeretPhoto}
                  alt="Asmeret Teklu - Software Engineer & Digital Marketer"
                  className="profile-photo-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="photo-placeholder">
                  AT
                </div>
                
                {/* Animated border effect */}
                <div className="photo-glow"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="availability"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 1.2,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="status-dot"></div>
              🎯 Open for opportunities
            </motion.div>

            {/* Floating elements around photo */}
            <motion.div 
              className="floating-tech-icon"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 1.5,
                type: "spring",
                stiffness: 200
              }}
              style={{ top: '10%', right: '10%' }}
            >
              ⚛️
            </motion.div>
            <motion.div 
              className="floating-tech-icon"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 1.7,
                type: "spring",
                stiffness: 200
              }}
              style={{ bottom: '20%', left: '5%' }}
            >
              🟨
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default HomeSection;