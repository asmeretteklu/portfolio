import React from 'react';
import { motion } from 'framer-motion';
import './CodingStats.css';

const CodingStats = () => {
  const stats = [
    { number: "1000+", label: "Hours Coding", icon: "💻" },
    { number: "50+", label: "Projects Built", icon: "🚀" },
    { number: "15+", label: "Technologies", icon: "🛠️" },
    { number: "2024", label: "Graduation Year", icon: "🎓" }
  ];

  return (
    <section className="coding-stats-section">
      <div className="stats-container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Coding Journey 📈
        </motion.h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingStats;