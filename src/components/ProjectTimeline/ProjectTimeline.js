import React from 'react';
import { motion } from 'framer-motion';
import './ProjectTimeline.css';

const ProjectTimeline = () => {
  const projects = [
    { 
      date: 'Jan 2024', 
      title: 'AI Mood Music Player', 
      status: 'completed',
      description: 'AI-powered music recommendation system that suggests songs based on user mood and listening history.',
      tech: ['React', 'TensorFlow.js', 'Spotify API'],
      icon: '🎵'
    },
    { 
      date: 'Mar 2024', 
      title: 'Smart Note Taking App', 
      status: 'completed',
      description: 'AI-organized note taking application with automatic categorization and smart search.',
      tech: ['React', 'Firebase', 'AI Integration'],
      icon: '📝'
    },
    { 
      date: 'Jun 2024', 
      title: 'E-commerce Platform', 
      status: 'development',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      tech: ['MERN Stack', 'Stripe', 'Redux'],
      icon: '🛒'
    },
    { 
      date: 'Aug 2024', 
      title: 'Portfolio Website', 
      status: 'completed',
      description: 'Interactive portfolio website with smooth animations and responsive design.',
      tech: ['React', 'Framer Motion', 'CSS3'],
      icon: '🌟'
    },
  ];

  // Animation variants
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="project-timeline" className="timeline-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px", threshold: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          Project Timeline
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My journey through recent projects and developments
        </motion.p>
        
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="timeline-marker"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="timeline-date">{project.date}</div>
                <div className="timeline-icon">{project.icon}</div>
                <div className="timeline-dot"></div>
              </motion.div>
              
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="timeline-header">
                  <h3>{project.title}</h3>
                  <span className={`status ${project.status}`}>
                    {project.status}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTimeline;