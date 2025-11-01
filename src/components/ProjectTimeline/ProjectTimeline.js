import React from 'react';
import { motion } from 'framer-motion';
import './ProjectTimeline.css';

const ProjectTimeline = () => {
  const projects = [
    { 
      date: 'Jan 2024', 
      title: 'AI Mood Music Player', 
      status: 'completed',
      description: 'AI-powered music recommendation system',
      tech: ['React', 'TensorFlow.js', 'Spotify API']
    },
    { 
      date: 'Mar 2024', 
      title: 'Smart Note Taking App', 
      status: 'completed',
      description: 'AI-organized note taking application',
      tech: ['React', 'Firebase', 'AI Integration']
    },
    { 
      date: 'Jun 2024', 
      title: 'E-commerce Platform', 
      status: 'development',
      description: 'Full-stack e-commerce solution',
      tech: ['MERN Stack', 'Stripe', 'Redux']
    },
    { 
      date: 'Aug 2024', 
      title: 'Portfolio Website', 
      status: 'completed',
      description: 'Interactive portfolio with animations',
      tech: ['React', 'Framer Motion', 'CSS3']
    },
  ];

  return (
    <section id="timeline" className="timeline-section">
      <h2>My Journey</h2>
      <div className="timeline">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-date">{project.date}</div>
            <div className="timeline-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <span className={`status ${project.status}`}>
                {project.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTimeline;