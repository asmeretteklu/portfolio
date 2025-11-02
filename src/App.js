import React, { useState, useEffect } from 'react';
import './styles/global.css';
import './App.css';

// Import Components
import Header from './components/Header/Header';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import AIAssistant from './components/AIAssistant/AIAssistant';
import Footer from './components/Footer/Footer';

// Import Sections
import HomeSection from './components/HomeSection/HomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import RainEffect from './components/RainEffect/RainEffect';
import CertificatesSection from './components/CertificatesSection/CertificatesSection';
import ContactSection from './components/ContactSection/ContactSection';

// NEW COMPONENTS
import VisitorCounter from './components/VisitorCounter/VisitorCounter';
import ProjectTimeline from './components/ProjectTimeline/ProjectTimeline';
import GitHubActivity from './components/GitHubActivity/GitHubActivity';
import CodingStats from './components/CodingStats/CodingStats';
import Testimonials from './components/Testimonials/Testimonials';
import BackToTop from './components/BackToTop/BackToTop';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRainActive] = useState(false);

  // FIX FOR SCROLLING BLINKING
  useEffect(() => {
    // Force hardware acceleration for smooth scrolling
    document.body.style.transform = 'translateZ(0)';
    document.body.style.webkitTransform = 'translateZ(0)';
    
    // Prevent horizontal scroll and improve performance
    document.body.style.overflowX = 'hidden';
    
    // Cleanup function
    return () => {
      document.body.style.transform = '';
      document.body.style.webkitTransform = '';
    };
  }, []);

  // Initialize theme and handle loading
  useEffect(() => {
    // Set up theme - default to dark
    document.documentElement.setAttribute('data-theme', 'dark');
    
    // Add smooth transition class after page loads
    const timer = setTimeout(() => {
      document.documentElement.classList.add('theme-ready');
    }, 100);

    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup timers
    return () => {
      clearTimeout(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner">
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
          </div>
          <div className="loading-text">
            <h2>Asmeret Teklu</h2>
            <p>Loading Portfolio...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Background Elements */}
      <ParticleBackground />
      {isRainActive && <RainEffect />}
      
      {/* NEW: Visitor Counter */}
      <VisitorCounter />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="main-content">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <ThemeToggle /> */}
        {/* NEW: Coding Stats */}
        <CodingStats />
        
        {/* NEW: Project Timeline */}
        <ProjectTimeline />
        
        {/* NEW: GitHub Activity */}
        <GitHubActivity />
        
        <CertificatesSection />
        
        {/* NEW: Testimonials */}
        <Testimonials />
        
        <ContactSection />
      </main>
      
      {/* AI Assistant */}
      <AIAssistant />
      
      {/* NEW: Back to Top Button */}
      <BackToTop />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;