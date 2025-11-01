import React from 'react';
import { motion } from 'framer-motion';
import './CertificatesSection.css';

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "FreeCodeCamp - Front End Development",
      issuer: "FreeCodeCamp",
      status: "Completed",
      description: "Responsive Web Design certification with modern HTML5, CSS3, and JavaScript techniques. Built multiple projects including portfolio websites and interactive applications.",
      progress: 100,
      date: "2023",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
      url: "https://freecodecamp.org/certification/asmeret/responsive-web-design",
      credentialId: "FCC-RWD-2023"
    },
    {
      id: 2,
      title: "5 Million Ethiopians Coders",
      issuer: "Ethiopian Government & UAE",
      status: "In Progress",
      description: "National digital literacy program focusing on programming fundamentals, web development, and digital skills for the Ethiopian youth.",
      progress: 60,
      date: "2024",
      skills: ["Python", "Web Development", "Digital Literacy", "Problem Solving"],
      url: "https://5millionethiopians.gov.et",
      credentialId: "5MEC-2024"
    },
    {
      id: 3,
      title: "Digital Marketing Professional",
      issuer: "Google Digital Garage",
      status: "Completed",
      description: "Comprehensive digital marketing certification covering SEO, social media marketing, analytics, and e-commerce strategies.",
      progress: 100,
      date: "2023",
      skills: ["SEO", "Social Media", "Google Analytics", "Content Marketing"],
      url: "https://learndigital.withgoogle.com/digitalgarage",
      credentialId: "G-DM-2023"
    },
    {
      id: 4,
      title: "FreeCodeCamp - JavaScript Algorithms",
      issuer: "FreeCodeCamp",
      status: "Completed",
      description: "JavaScript algorithms and data structures certification with advanced programming concepts and problem-solving techniques.",
      progress: 100,
      date: "2023",
      skills: ["JavaScript", "Algorithms", "Data Structures", "ES6+"],
      url: "https://freecodecamp.org/certification/asmeret/javascript-algorithms-and-data-structures",
      credentialId: "FCC-JS-2023"
    },
    {
      id: 5,
      title: "Software Engineering Degree",
      issuer: "Microlink IT College",
      status: "Completed",
      description: "Bachelor's degree in Software Engineering with comprehensive training in modern development practices, databases, and software architecture.",
      progress: 100,
      date: "2024",
      skills: ["Software Engineering", "Full-Stack", "Database Design", "Project Management"],
      url: "#",
      credentialId: "MITC-SE-2024"
    },
    {
      id: 6,
      title: "FreeCodeCamp - Full Stack Development",
      issuer: "FreeCodeCamp",
      status: "In Progress",
      description: "Comprehensive full-stack web development curriculum covering React, Node.js, MongoDB, and backend development.",
      progress: 75,
      date: "2024",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
      url: "https://freecodecamp.org",
      credentialId: "FCC-FULLSTACK-2024"
    }
  ];

  const certificationStats = {
    total: certificates.length,
    completed: certificates.filter(c => c.status === "Completed").length,
    inProgress: certificates.filter(c => c.status === "In Progress").length,
    planned: certificates.filter(c => c.status === "Planned").length
  };

  // UPDATED: Better download functionality
  const handleDownload = (certificate) => {
    if (certificate.status === "Completed") {
      // Create a realistic certificate file
      const certificateContent = `
        CERTIFICATE OF COMPLETION
        
        This is to certify that
        ASMERET TEKLU
        has successfully completed the
        
        ${certificate.title}
        
        Issued by: ${certificate.issuer}
        Date: ${certificate.date}
        Credential ID: ${certificate.credentialId}
        
        Skills demonstrated: ${certificate.skills.join(', ')}
        
        ${certificate.description}
        
        Congratulations on your achievement!
      `;
      
      // Create and download file
      const blob = new Blob([certificateContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      alert(`⏳ "${certificate.title}" is still in progress (${certificate.progress}% complete). The certificate will be available once you finish the course!`);
    }
  };

  const handleViewDetails = (certificate) => {
    if (certificate.url && certificate.url !== '#') {
      window.open(certificate.url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`${certificate.title}\n\nIssuer: ${certificate.issuer}\nDate: ${certificate.date}\nStatus: ${certificate.status}\n\nCredential ID: ${certificate.credentialId}`);
    }
  };

  const handleDownloadAll = () => {
    const completedCerts = certificates.filter(c => c.status === "Completed");
    if (completedCerts.length > 0) {
      // Download each certificate with delay
      completedCerts.forEach((cert, index) => {
        setTimeout(() => {
          handleDownload(cert);
        }, index * 500);
      });
    } else {
      alert("🎯 Keep learning! You'll have certificates to download once you complete your courses.");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <motion.div 
          className="certificates-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My <span className="gradient-text">Certifications</span></h1>
          <p className="certificates-subtitle">
            Validated skills and professional achievements that demonstrate my commitment to continuous learning
          </p>
        </motion.div>

        <div className="certificates-content">
          {/* MAIN CERTIFICATES GRID */}
          <motion.div 
            className="certificates-main"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div 
              className="certificates-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {certificates.map((certificate, index) => (
                <motion.div 
                  key={certificate.id}
                  className="certificate-card"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Certificate Badge */}
                  <div className="certificate-badge">
                    <div className="badge-icon">
                      {certificate.status === "Completed" ? "🎓" : 
                       certificate.status === "In Progress" ? "🚀" : "📅"}
                    </div>
                  </div>

                  <div className="certificate-header">
                    <h3>{certificate.title}</h3>
                    <span className={`certificate-status ${certificate.status.toLowerCase().replace(' ', '-')}`}>
                      {certificate.status}
                    </span>
                  </div>
                  
                  <div className="certificate-issuer">
                    <span className="issuer-icon">🏆</span>
                    <span className="issuer-name">{certificate.issuer}</span>
                    <span className="certificate-date">• {certificate.date}</span>
                  </div>

                  {certificate.credentialId && (
                    <div className="credential-id">
                      ID: {certificate.credentialId}
                    </div>
                  )}
                  
                  <p className="certificate-description">{certificate.description}</p>
                  
                  <div className="certificate-skills">
                    {certificate.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        className="skill-tag"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="certificate-progress">
                    <div className="progress-info">
                      <span className="progress-label">Progress</span>
                      <span className="progress-text">{certificate.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${certificate.progress}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.2,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="certificate-actions">
                    <motion.button 
                      className={`action-btn view-btn ${certificate.status === "Completed" ? "completed" : ""}`}
                      onClick={() => handleViewDetails(certificate)}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {certificate.status === "Completed" ? "View Certificate" : "View Details"}
                    </motion.button>
                    
                    <motion.button 
                      className="action-btn download-btn"
                      onClick={() => handleDownload(certificate)}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(102, 126, 234, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📥 Download
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ENHANCED SIDEBAR */}
          <motion.div 
            className="certificates-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Progress Overview Card */}
            <motion.div 
              className="sidebar-card stats-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>📊 Learning Journey</h3>
              <div className="stats-grid">
                <div className="stat-item total">
                  <div className="stat-number">{certificationStats.total}</div>
                  <div className="stat-label">Total Certifications</div>
                </div>
                <div className="stat-item completed">
                  <div className="stat-number">{certificationStats.completed}</div>
                  <div className="stat-label">Completed</div>
                </div>
                <div className="stat-item in-progress">
                  <div className="stat-number">{certificationStats.inProgress}</div>
                  <div className="stat-label">In Progress</div>
                </div>
                <div className="stat-item success-rate">
                  <div className="stat-number">
                    {Math.round((certificationStats.completed / certificationStats.total) * 100)}%
                  </div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Current Focus Card */}
            <motion.div 
              className="sidebar-card focus-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>🎯 Current Focus</h3>
              <div className="focus-item">
                <div className="focus-icon">🚀</div>
                <div className="focus-content">
                  <h4>Full Stack Development</h4>
                  <p>Completing FreeCodeCamp's full-stack curriculum</p>
                  <div className="focus-progress">
                    <div className="progress-bar small">
                      <div className="progress-fill" style={{width: '75%'}}></div>
                    </div>
                    <span>75%</span>
                  </div>
                </div>
              </div>
              <div className="focus-item">
                <div className="focus-icon">🌍</div>
                <div className="focus-content">
                  <h4>5 Million Coders</h4>
                  <p>Ethiopian national digital skills program</p>
                  <div className="focus-progress">
                    <div className="progress-bar small">
                      <div className="progress-fill" style={{width: '60%'}}></div>
                    </div>
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Download All Certificates Card */}
            <motion.div 
              className="sidebar-card download-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>📁 My Certificates</h3>
              <p>Download all my professional certifications in one package</p>
              <motion.button 
                className="download-all-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadAll}
              >
                📦 Download All Certificates
              </motion.button>
            </motion.div>

            {/* Learning Philosophy Card */}
            <motion.div 
              className="sidebar-card philosophy-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>💡 My Learning Philosophy</h3>
              <div className="philosophy-item">
                <span className="philosophy-icon">🎯</span>
                <span>Focus on practical, project-based learning</span>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-icon">🔄</span>
                <span>Continuous improvement and skill updates</span>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-icon">🌍</span>
                <span>Combine global standards with local impact</span>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-icon">🤝</span>
                <span>Share knowledge and collaborate with others</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;