import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const personalInfo = {
    education: "Software Engineering Graduate 2024",
    institution: "Microlink IT College, Mekelle",
    currentFocus: "Mastering MERN Stack & AI Integration",
    certificate: "FreeCodeCamp Full-Stack (In Progress)",
    languages: "English (Professional), Amharic (Native), Tigrigna (Native)",
    location: "Mekelle, Ethiopia",
    passion: "Building AI-powered solutions for local challenges"
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My <span className="gradient-text">Journey</span></h1>
          <p className="about-subtitle">
            From curious student to passionate developer - building solutions that matter
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-card">
              {/* UPDATED PHOTO SECTION */}
              <div className="profile-photo">
                <div className="actual-profile-photo">
                  <img 
                    src="/images/asmeret-photo.jpg"
                    alt="Asmeret Teklu - Software Engineer"
                    className="profile-photo-img"
                    onError={(e) => {
                      console.log('Photo not available, showing placeholder');
                      e.target.style.display = 'none';
                      const placeholder = e.target.nextSibling;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="photo-placeholder">
                    AT
                  </div>
                </div>
                <div className="photo-badge">
                  <span className="badge-dot"></span>
                  Open to Opportunities
                </div>
              </div>
              
              <div className="quick-info">
                <h3>Quick Facts</h3>
                <div className="info-item">
                  <span className="info-label">Education</span>
                  <span className="info-value">{personalInfo.education}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">College</span>
                  <span className="info-value">{personalInfo.institution}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Current Focus</span>
                  <span className="info-value">{personalInfo.currentFocus}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Learning Path</span>
                  <span className="info-value">{personalInfo.certificate}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages</span>
                  <span className="info-value">{personalInfo.languages}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Based In</span>
                  <span className="info-value">{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Passion</span>
                  <span className="info-value">{personalInfo.passion}</span>
                </div>
              </div>

              <div className="contact-cta">
                <motion.button 
                  className="cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Build Something Amazing
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="about-sections">
              <div className="about-section-item">
                <h3>My Story</h3>
                <p>
                  Hey! I'm <strong>Asmeret Teklu</strong>, a passionate Software Engineering graduate 
                  who fell in love with coding while solving real-world problems. My journey started 
                  at Microlink IT College in Mekelle, where I discovered the power of technology to 
                  create meaningful change.
                </p>
                <p>
                  What excites me most? <strong>Building solutions that actually help people</strong>. 
                  Whether it's a web app that simplifies daily tasks or integrating AI to make 
                  technology more accessible, I believe code should serve humanity.
                </p>
                <p>
                  Currently, I'm diving deep into <strong>FreeCodeCamp's full-stack curriculum</strong> 
                  while exploring how AI can enhance user experiences. I'm particularly interested 
                  in creating tech solutions that address local challenges here in Ethiopia.
                </p>
                <p>
                  I combine my technical skills with <strong>digital marketing strategies</strong>—SEO, 
                  content planning, and user engagement—to build web experiences that convert and connect.
                </p>
              </div>

              <div className="about-section-item">
                <h3>My Learning Path</h3>
                <div className="journey-cards">
                  <div className="journey-card">
                    <div className="journey-icon">💻</div>
                    <div className="journey-content">
                      <h4>Software Engineering Degree</h4>
                      <p>Graduated 2024 with hands-on experience in modern web technologies, database design, and software architecture. Built several projects that solved real college challenges.</p>
                    </div>
                  </div>
                  <div className="journey-card">
                    <div className="journey-icon">🚀</div>
                    <div className="journey-content">
                      <h4>FreeCodeCamp Journey</h4>
                      <p>Currently mastering the MERN stack through project-based learning. Building responsive web applications while following industry best practices and clean code principles.</p>
                    </div>
                  </div>
                  <div className="journey-card">
                    <div className="journey-icon">🌍</div>
                    <div className="journey-content">
                      <h4>Global Mindset</h4>
                      <p>Professional English proficiency enables me to collaborate internationally while bringing unique Ethiopian perspectives to global tech conversations and solutions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-section-item">
                <h3>What I Work With</h3>
                <div className="expertise-grid">
                  <div className="expertise-category">
                    <h4>Frontend Development</h4>
                    <div className="skill-items">
                      <span className="skill-item">React.js</span>
                      <span className="skill-item">JavaScript (ES6+)</span>
                      <span className="skill-item">HTML5 & CSS3</span>
                      <span className="skill-item">Responsive Design</span>
                      <span className="skill-item">Framer Motion</span>
                    </div>
                  </div>
                  <div className="expertise-category">
                    <h4>Backend & Databases</h4>
                    <div className="skill-items">
                      <span className="skill-item">Node.js</span>
                      <span className="skill-item">Express.js</span>
                      <span className="skill-item">MongoDB</span>
                      <span className="skill-item">RESTful APIs</span>
                      <span className="skill-item">Git & GitHub</span>
                    </div>
                  </div>
                  <div className="expertise-category">
                    <h4>Digital Marketing</h4>
                    <div className="skill-items">
                      <span className="skill-item">SEO Optimization</span>
                      <span className="skill-item">Content Strategy</span>
                      <span className="skill-item">Keyword Research</span>
                      <span className="skill-item">Social Media Campaigns</span>
                    </div>
                  </div>
                  <div className="expertise-category">
                    <h4>Currently Learning</h4>
                    <div className="skill-items">
                      <span className="skill-item learning">AI Integration</span>
                      <span className="skill-item learning">TypeScript</span>
                      <span className="skill-item learning">Next.js</span>
                      <span className="skill-item learning">Python</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-section-item">
                <h3>Language Skills</h3>
                <div className="languages-grid">
                  <div className="language-item">
                    <span className="language-flag">🇺🇸</span>
                    <div className="language-info">
                      <span className="language-name">English</span>
                      <span className="language-level">Professional Working Proficiency</span>
                    </div>
                    <div className="language-proficiency">
                      <div className="proficiency-bar">
                        <div className="proficiency-level english"></div>
                      </div>
                    </div>
                  </div>
                  <div className="language-item">
                    <span className="language-flag">🇪🇹</span>
                    <div className="language-info">
                      <span className="language-name">Amharic</span>
                      <span className="language-level">Native Speaker</span>
                    </div>
                    <div className="language-proficiency">
                      <div className="proficiency-bar">
                        <div className="proficiency-level amharic"></div>
                      </div>
                    </div>
                  </div>
                  <div className="language-item">
                    <span className="language-flag">🇪🇹</span>
                    <div className="language-info">
                      <span className="language-name">Tigrigna</span>
                      <span className="language-level">Native Speaker</span>
                    </div>
                    <div className="language-proficiency">
                      <div className="proficiency-bar">
                        <div className="proficiency-level tigrigna"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-section-item">
                <h3>My Approach</h3>
                <div className="skills-grid">
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">💡</span>
                    <span className="soft-skill-text">Problem-First Mindset</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">🚀</span>
                    <span className="soft-skill-text">Quick Learner</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">🔍</span>
                    <span className="soft-skill-text">Attention to Detail</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">🤝</span>
                    <span className="soft-skill-text">Team Player</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">🎯</span>
                    <span className="soft-skill-text">Goal-Oriented</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">💪</span>
                    <span className="soft-skill-text">Persistent</span>
                  </div>
                </div>
                <p className="values-text">
                  I believe in <strong>understanding the problem deeply</strong> before writing code, 
                  <strong> continuous learning</strong> as technology evolves, and 
                  <strong> collaboration</strong> as the key to building amazing things.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;