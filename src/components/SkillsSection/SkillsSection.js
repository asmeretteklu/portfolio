import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      color: "#667eea",
      skills: [
        {
          name: "React.js",
          level: 85,
          description: "Building dynamic user interfaces with hooks and modern patterns",
          icon: "⚛️"
        },
        {
          name: "JavaScript (ES6+)",
          level: 90,
          description: "Modern JavaScript with async/await, destructuring, and modules",
          icon: "🟨"
        },
        {
          name: "HTML5 & CSS3",
          level: 95,
          description: "Semantic markup, responsive design, and CSS animations",
          icon: "🎨"
        },
        {
          name: "Framer Motion",
          level: 80,
          description: "Creating smooth animations and interactive experiences",
          icon: "✨"
        }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "⚡",
      color: "#4facfe",
      skills: [
        {
          name: "Node.js",
          level: 75,
          description: "Server-side JavaScript with Express.js framework",
          icon: "🟢"
        },
        {
          name: "MongoDB",
          level: 70,
          description: "NoSQL database design and CRUD operations",
          icon: "🍃"
        },
        {
          name: "RESTful APIs",
          level: 80,
          description: "Designing and consuming REST APIs",
          icon: "🔗"
        },
        {
          name: "Git & GitHub",
          level: 85,
          description: "Version control and collaborative development",
          icon: "📚"
        }
      ]
    },
    {
      title: "Digital Marketing",
      icon: "📈",
      color: "#f093fb",
      skills: [
        {
          name: "SEO Optimization",
          level: 75,
          description: "Search engine optimization and keyword strategy",
          icon: "🔍"
        },
        {
          name: "Content Strategy",
          level: 80,
          description: "Creating engaging content that converts",
          icon: "✍️"
        },
        {
          name: "Social Media Marketing",
          level: 70,
          description: "Building brand presence across platforms",
          icon: "📱"
        },
        {
          name: "Google Analytics",
          level: 65,
          description: "Tracking and analyzing user behavior",
          icon: "📊"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "#ffd89b",
      skills: [
        {
          name: "VS Code",
          level: 95,
          description: "Advanced code editing with extensions and debugging",
          icon: "🔧"
        },
        {
          name: "Figma",
          level: 70,
          description: "UI/UX design and prototyping",
          icon: "🎯"
        },
        {
          name: "Postman",
          level: 80,
          description: "API testing and documentation",
          icon: "📬"
        },
        {
          name: "Netlify/Vercel",
          level: 85,
          description: "Modern deployment and hosting platforms",
          icon: "☁️"
        }
      ]
    }
  ];

  const softSkills = [
    { skill: "Problem Solving", level: 90, icon: "💡" },
    { skill: "Communication", level: 85, icon: "🗣️" },
    { skill: "Team Collaboration", level: 88, icon: "🤝" },
    { skill: "Adaptability", level: 92, icon: "🔄" },
    { skill: "Time Management", level: 80, icon: "⏰" },
    { skill: "Creativity", level: 85, icon: "🎨" },
    { skill: "Attention to Detail", level: 90, icon: "🔍" },
    { skill: "Continuous Learning", level: 95, icon: "📚" }
  ];

  const learningGoals = [
    { skill: "TypeScript", target: "Advanced", progress: 60 },
    { skill: "Next.js", target: "Production Ready", progress: 50 },
    { skill: "Python", target: "Data Science", progress: 40 },
    { skill: "AI Integration", target: "Practical Projects", progress: 30 }
  ];

  // Animation variants for container
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

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px", threshold: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My <span className="gradient-text">Technical Skills</span></h1>
          <p className="skills-subtitle">
            A comprehensive showcase of my technical expertise, from frontend development to digital marketing
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 style={{ color: category.color }}>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    className="skill-item"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="skill-info">
                      <div className="skill-meta">
                        <span className="skill-name">
                          <span className="skill-icon">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        style={{ background: category.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills & Learning Goals */}
        <div className="skills-bottom-section">
          {/* Soft Skills */}
          <motion.div 
            className="soft-skills-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="section-header">
              <h2>💡 Professional Skills</h2>
              <p>Beyond technical expertise - what makes me a great team member</p>
            </div>
            <div className="soft-skills-grid">
              {softSkills.map((item, index) => (
                <motion.div
                  key={item.skill}
                  className="soft-skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#667eea",
                    color: "white"
                  }}
                >
                  <div className="soft-skill-icon">{item.icon}</div>
                  <div className="soft-skill-content">
                    <span className="soft-skill-name">{item.skill}</span>
                    <div className="soft-skill-bar">
                      <motion.div 
                        className="soft-skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.8 + index * 0.15 
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Goals */}
          <motion.div 
            className="learning-goals-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="section-header">
              <h2>🎯 Currently Learning</h2>
              <p>Skills I'm actively developing to stay ahead</p>
            </div>
            <div className="learning-goals">
              {learningGoals.map((goal, index) => (
                <motion.div 
                  key={goal.skill}
                  className="learning-goal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                >
                  <div className="goal-header">
                    <span className="goal-skill">{goal.skill}</span>
                    <span className="goal-target">{goal.target}</span>
                  </div>
                  <div className="goal-progress">
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 1 + index * 0.2 
                        }}
                      />
                    </div>
                    <span className="progress-text">{goal.progress}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="summary-content">
            <h3>🚀 My Development Philosophy</h3>
            <p>
              I believe in <strong>continuous learning</strong> and <strong>practical application</strong>. 
              Every project is an opportunity to grow, and every challenge is a chance to innovate. 
              By combining <strong>technical expertise</strong> with <strong>marketing insight</strong>, 
              I create solutions that not only work well but also reach the right audience and drive meaningful results.
            </p>
            <div className="summary-stats">
              <div className="stat">
                <div className="stat-number">4+</div>
                <div className="stat-label">Tech Domains</div>
              </div>
              <div className="stat">
                <div className="stat-number">16+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat">
                <div className="stat-number">8</div>
                <div className="stat-label">Soft Skills</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Growth Mindset</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;