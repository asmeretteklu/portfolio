import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
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
};

export default Loading;