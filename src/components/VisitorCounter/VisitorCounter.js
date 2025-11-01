import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(1247);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + 1);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visitor-counter">
      <span className="counter-icon">👁️</span>
      <span className="counter-number">{visitorCount.toLocaleString()}+ visitors</span>
    </div>
  );
};

export default VisitorCounter;