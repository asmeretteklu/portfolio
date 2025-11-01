import React, { useEffect, useState } from 'react';
import './RainEffect.css';

const RainEffect = () => {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    const createRaindrops = () => {
      const drops = [];
      for (let i = 0; i < 100; i++) {
        drops.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: (Math.random() * 2 + 1) + 's',
          animationDelay: (Math.random() * 5) + 's',
          height: (Math.random() * 20 + 10) + 'px',
          opacity: Math.random() * 0.6 + 0.2
        });
      }
      setRaindrops(drops);
    };

    createRaindrops();
  }, []);

  return (
    <div className="rain-container">
      {raindrops.map(drop => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: `${drop.left}%`,
            animationDuration: drop.animationDuration,
            animationDelay: drop.animationDelay,
            height: drop.height,
            opacity: drop.opacity
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;