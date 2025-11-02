import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Get existing count or initialize
    const getVisitorCount = () => {
      try {
        // Check if we've already counted this session
        const sessionCounted = sessionStorage.getItem('visitorCounted');
        
        if (!sessionCounted) {
          // This is a new session - increment the count
          const existingCount = localStorage.getItem('portfolioVisitorCount');
          let newCount = 1247; // Start from your base number
          
          if (existingCount) {
            newCount = parseInt(existingCount) + 1;
          }
          
          // Save updated count
          localStorage.setItem('portfolioVisitorCount', newCount.toString());
          // Mark this session as counted
          sessionStorage.setItem('visitorCounted', 'true');
          
          setVisitorCount(newCount);
        } else {
          // Already counted this session, just display
          const existingCount = localStorage.getItem('portfolioVisitorCount');
          setVisitorCount(existingCount ? parseInt(existingCount) : 1247);
        }
      } catch (error) {
        console.log('Visitor counter error:', error);
        setVisitorCount(1247); // Fallback
      }
    };

    getVisitorCount();
  }, []);

  // Optional: Auto-hide after some time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return (
      <div className="visitor-counter-minimized" onClick={toggleVisibility}>
        <span className="counter-icon">👁️</span>
      </div>
    );
  }

  return (
    <div className="visitor-counter" onClick={toggleVisibility}>
      <span className="counter-icon">👁️</span>
      <span className="counter-number">{visitorCount.toLocaleString()}</span>
      <span className="counter-label">visitors</span>
      <button className="counter-close" onClick={(e) => {
        e.stopPropagation();
        setIsVisible(false);
      }}>
        ×
      </button>
    </div>
  );
};

export default VisitorCounter;