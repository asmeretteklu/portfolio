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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px", threshold: 0.1 }}
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="profile-card"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* FIXED PHOTO SECTION */}
              <div className="profile-photo">
                <motion.div 
                  className="actual-profile-photo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/images/asmeret-photo.jpg"
                    alt="Asmeret Teklu - Software Engineer"
                    className="profile-photo-img"
                    onError={(e) => {
                      console.log('Photo not available, showing placeholder');
                      e.target.style.display = 'none';
                      const placeholder = document.querySelector('.photo-placeholder');
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="photo-placeholder">
                    AT
                  </div>
                </motion.div>
                <motion.div 
                  className="photo-badge"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="badge-dot"></span>
                  Open to Opportunities
                </motion.div>
              </div>
              
              <motion.div 
                className="quick-info"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
              >
                <h3>Quick Facts</h3>
                {[
                  { label: "Education", value: personalInfo.education },
                  { label: "College", value: personalInfo.institution },
                  { label: "Current Focus", value: personalInfo.currentFocus },
                  { label: "Learning Path", value: personalInfo.certificate },
                  { label: "Languages", value: personalInfo.languages },
                  { label: "Based In", value: personalInfo.location },
                  { label: "Passion", value: personalInfo.passion }
                ].map((info, index) => (
                  <motion.div 
                    key={index}
                    className="info-item"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </motion.div>
                ))}
              </motion.div>

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
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="about-sections"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              <motion.div 
                className="about-section-item"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
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
              </motion.div>

              <motion.div 
                className="about-section-item"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <h3>My Learning Path</h3>
                <div className="journey-cards">
                  {[
                    {
                      icon: "💻",
                      title: "Software Engineering Degree",
                      content: "Graduated 2024 with hands-on experience in modern web technologies, database design, and software architecture. Built several projects that solved real college challenges."
                    },
                    {
                      icon: "🚀",
                      title: "FreeCodeCamp Journey",
                      content: "Currently mastering the MERN stack through project-based learning. Building responsive web applications while following industry best practices and clean code principles."
                    },
                    {
                      icon: "🌍",
                      title: "Global Mindset",
                      content: "Professional English proficiency enables me to collaborate internationally while bringing unique Ethiopian perspectives to global tech conversations and solutions."
                    }
                  ].map((journey, index) => (
                    <motion.div 
                      key={index}
                      className="journey-card"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="journey-icon"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {journey.icon}
                      </motion.div>
                      <div className="journey-content">
                        <h4>{journey.title}</h4>
                        <p>{journey.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="about-section-item"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <h3>What I Work With</h3>
                <div className="expertise-grid">
                  {[
                    {
                      title: "Frontend Development",
                      skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Design", "Framer Motion"]
                    },
                    {
                      title: "Backend & Databases",
                      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Git & GitHub"]
                    },
                    {
                      title: "Digital Marketing",
                      skills: ["SEO Optimization", "Content Strategy", "Keyword Research", "Social Media Campaigns"]
                    },
                    {
                      title: "Currently Learning",
                      skills: ["AI Integration", "TypeScript", "Next.js", "Python"],
                      learning: true
                    }
                  ].map((category, index) => (
                    <motion.div 
                      key={index}
                      className="expertise-category"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4>{category.title}</h4>
                      <div className="skill-items">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span 
                            key={skillIndex}
                            className={`skill-item ${category.learning ? 'learning' : ''}`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="about-section-item"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <h3>Language Skills</h3>
                <div className="languages-grid">
                  {[
                    { flag: "🇺🇸", name: "English", level: "Professional Working Proficiency", proficiency: "english" },
                    { flag: "🇪🇹", name: "Amharic", level: "Native Speaker", proficiency: "amharic" },
                    { flag: "🇪🇹", name: "Tigrigna", level: "Native Speaker", proficiency: "tigrigna" }
                  ].map((language, index) => (
                    <motion.div 
                      key={index}
                      className="language-item"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="language-flag">{language.flag}</span>
                      <div className="language-info">
                        <span className="language-name">{language.name}</span>
                        <span className="language-level">{language.level}</span>
                      </div>
                      <div className="language-proficiency">
                        <div className="proficiency-bar">
                          <motion.div 
                            className={`proficiency-level ${language.proficiency}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="about-section-item"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <h3>My Approach</h3>
                <div className="skills-grid">
                  {[
                    { icon: "💡", text: "Problem-First Mindset" },
                    { icon: "🚀", text: "Quick Learner" },
                    { icon: "🔍", text: "Attention to Detail" },
                    { icon: "🤝", text: "Team Player" },
                    { icon: "🎯", text: "Goal-Oriented" },
                    { icon: "💪", text: "Persistent" }
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="soft-skill-item"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="soft-skill-icon">{skill.icon}</span>
                      <span className="soft-skill-text">{skill.text}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.p 
                  className="values-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I believe in <strong>understanding the problem deeply</strong> before writing code, 
                  <strong> continuous learning</strong> as technology evolves, and 
                  <strong> collaboration</strong> as the key to building amazing things.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;