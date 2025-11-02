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
      description: "Responsive Web Design certification with modern HTML5, CSS3, and JavaScript techniques.",
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
      description: "National digital literacy program focusing on programming fundamentals and web development.",
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
      description: "Digital marketing certification covering SEO, social media marketing, and analytics.",
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
      description: "JavaScript algorithms and data structures certification with advanced programming concepts.",
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
      description: "Bachelor's degree in Software Engineering with comprehensive training in modern development.",
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
      description: "Comprehensive full-stack web development curriculum covering React, Node.js, MongoDB.",
      progress: 75,
      date: "2024",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
      url: "https://freecodecamp.org",
      credentialId: "FCC-FULLSTACK-2024"
    }
  ];

  const handleDownload = (certificate) => {
    if (certificate.status === "Completed") {
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
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px", threshold: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My <span className="gradient-text">Certifications</span></h1>
          <p className="certificates-subtitle">
            Validated skills and professional achievements
          </p>
        </motion.div>

        <motion.div 
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((certificate, index) => (
            <motion.div 
              key={certificate.id}
              className="certificate-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              custom={index}
            >
              <div className="certificate-badge">
                <motion.div 
                  className="badge-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {certificate.status === "Completed" ? "🎓" : "🚀"}
                </motion.div>
              </div>

              <div className="certificate-header">
                <h3>{certificate.title}</h3>
                <motion.span 
                  className={`certificate-status ${certificate.status.toLowerCase().replace(' ', '-')}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {certificate.status}
                </motion.span>
              </div>
              
              <div className="certificate-issuer">
                <span className="issuer-name">{certificate.issuer}</span>
                <span className="certificate-date">• {certificate.date}</span>
              </div>
              
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
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
              </div>
              
              <div className="certificate-actions">
                <motion.button 
                  className={`action-btn view-btn ${certificate.status === "Completed" ? "completed" : ""}`}
                  onClick={() => handleViewDetails(certificate)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {certificate.status === "Completed" ? "View Certificate" : "View Details"}
                </motion.button>
                
                <motion.button 
                  className="action-btn download-btn"
                  onClick={() => handleDownload(certificate)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📥 Download
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;