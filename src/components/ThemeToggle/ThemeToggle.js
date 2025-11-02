import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    console.log('🎯 Loading theme:', savedTheme);
    setIsDark(savedTheme === 'dark');
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Force body styles
    document.body.style.color = savedTheme === 'dark' ? '#ffffff' : '#1e293b';
    document.body.style.background = savedTheme === 'dark' 
      ? 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)' 
      : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)';
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    console.log('🎯 Switching to theme:', newTheme);
    
    setIsDark(!isDark);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Force body styles immediately
    document.body.style.color = newTheme === 'dark' ? '#ffffff' : '#1e293b';
    document.body.style.background = newTheme === 'dark' 
      ? 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)' 
      : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)';
    
    localStorage.setItem('theme', newTheme);
    
    // Debug: Check if theme was applied
    setTimeout(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      console.log('🎯 Current theme after toggle:', currentTheme);
      console.log('🎯 Body color:', document.body.style.color);
    }, 100);
  };

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;