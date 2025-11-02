import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Mood Music Player",
      description: "An intelligent music player that detects your mood using AI and curates personalized playlists. Features real-time emotion analysis and smart recommendations.",
      icon: "🎵",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      status: "completed",
      features: ["Real-time mood detection", "AI-powered playlists", "Spotify integration", "Responsive design"],
      technologies: ["React", "TensorFlow.js", "Node.js", "Spotify API"],
      githubUrl: "https://github.com/asmeret/ai-music-player",
      liveUrl: "https://ai-music-player.asmeret.com"
    },
    {
      id: 2,
      title: "Smart Note Taking App",
      description: "A feature-rich note-taking application with AI-powered organization, smart search, and cross-platform synchronization. Perfect for students and professionals.",
      icon: "📝",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      status: "completed",
      features: ["AI-powered organization", "Real-time collaboration", "Offline-first design", "Smart search"],
      technologies: ["React", "Firebase", "AI Integration", "PWA"],
      githubUrl: "https://github.com/asmeret/smart-notes",
      liveUrl: "https://smart-notes.asmeret.com"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      icon: "🛒",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      status: "in-development",
      features: ["Payment processing", "Admin dashboard", "Real-time inventory", "User reviews"],
      technologies: ["MERN Stack", "Stripe API", "Redux", "JWT"],
      githubUrl: "https://github.com/asmeret/ecommerce-platform",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "My personal portfolio website featuring AI-assistant , smooth animations, dark/light mode, and responsive design. Built with modern AI integration for enhanced user experience.",
      icon: "🌐",
      gradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
      status: "completed",
      features: ["AI-powered content editing", "Dark/Light theme", "Smooth animations", "Mobile-responsive", "SEO optimized"],
      technologies: ["React", "Framer Motion", "AI Integration", "CSS3", "Netlify"],
      githubUrl: "https://github.com/asmeret/portfolio",
      liveUrl: "https://asmeret.com"
    },
    {
      id: 5,
      title: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality, team collaboration, and progress tracking.",
      icon: "✅",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      status: "completed",
      features: ["Real-time collaboration", "Drag & drop", "Team management", "Progress analytics"],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/asmeret/task-manager",
      liveUrl: "https://taskmanager.asmeret.com"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, severe weather alerts, and interactive maps.",
      icon: "🌤️",
      gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      status: "completed",
      features: ["Location-based forecasts", "Interactive maps", "7-day forecasts", "Severe weather alerts"],
      technologies: ["React", "Weather API", "Chart.js", "Geolocation"],
      githubUrl: "https://github.com/asmeret/weather-dashboard",
      liveUrl: "https://weather.asmeret.com"
    }
  ];

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === "completed").length,
    inDevelopment: projects.filter(p => p.status === "in-development").length,
    planned: projects.filter(p => p.status === "planned").length
  };

  const handleViewDemo = (project) => {
    if (project.liveUrl && project.liveUrl !== '#') {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(`🚧 ${project.title} Demo\n\nThis project is currently under development. The live demo will be available soon!\n\nIn the meantime, you can check out the code on GitHub.`);
    }
  };

  const handleViewCode = (project) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactMe = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeeMore = () => {
    window.open('https://github.com/asmeret', '_blank', 'noopener,noreferrer');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
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
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Header with scroll animations */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px", threshold: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My <span className="gradient-text">Projects</span></h1>
          <motion.p 
            className="projects-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of my work that showcases practical problem-solving and modern development skills
          </motion.p>
        </motion.div>

        {/* Project Stats with scroll animations */}
        <motion.div 
          className="project-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-number">{projectStats.total}</div>
            <div className="stat-label">Total Projects</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-number completed">{projectStats.completed}</div>
            <div className="stat-label">Completed</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-number in-development">{projectStats.inDevelopment}</div>
            <div className="stat-label">In Development</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-number planned">{projectStats.planned}</div>
            <div className="stat-label">Planned</div>
          </motion.div>
        </motion.div>

        {/* Projects Grid with scroll animations */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Project Badge */}
              <div className="project-badge">
                <div 
                  className="badge-dot"
                  style={{ 
                    background: project.status === "completed" ? "#4CAF50" : 
                               project.status === "in-development" ? "#FF9800" : "#9C27B0"
                  }}
                ></div>
              </div>

              {/* Project Visual */}
              <motion.div 
                className="project-visual"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="project-image" style={{ background: project.gradient }}>
                  <div className="project-icon">{project.icon}</div>
                </div>
                <div 
                  className="project-gradient"
                  style={{ background: project.gradient }}
                ></div>
              </motion.div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-status ${project.status}`}>
                    {project.status === "completed" ? "Completed" : 
                     project.status === "in-development" ? "In Development" : "Planned"}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <motion.div 
                  className="project-features"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4>✨ Key Features</h4>
                  <div className="features-list">
                    {project.features.map((feature, index) => (
                      <motion.span 
                        key={index} 
                        className="feature-tag"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="tech-stack"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4>🛠️ Technologies</h4>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        className="tech-tag"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <div className="project-actions">
                  <motion.button 
                    className="action-btn live-demo"
                    onClick={() => handleViewDemo(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>🚀</span>
                    Live Demo
                  </motion.button>
                  <motion.button 
                    className="action-btn view-code"
                    onClick={() => handleViewCode(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>📁</span>
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action with scroll animations */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="cta-content">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Build Something Amazing?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm passionate about turning ideas into reality. Whether you need a web application, 
              mobile app, or custom software solution, I'd love to help bring your vision to life.
            </motion.p>
            <div className="cta-buttons">
              <motion.button 
                className="cta-btn primary"
                onClick={handleContactMe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>💬</span>
                Let's Work Together
              </motion.button>
              <motion.button 
                className="cta-btn secondary"
                onClick={handleSeeMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>⭐</span>
                See More Projects
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;