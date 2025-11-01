import React, { useState, useEffect } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 8 : 15;
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: Math.random() * -20,
        animationDuration: Math.random() * 10 + 20,
        animationType: Math.random() > 0.5 ? 'float' : 'float-slow',
        opacity: Math.random() * 0.1 + 0.05,
      }));
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <div 
      className="particle-background"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`particle particle-${particle.animationType}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
      
      {/* Animated gradient orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </div>
  );
};

export default ParticleBackground;