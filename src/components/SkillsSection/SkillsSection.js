import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "🖥️ Frontend Development",
      color: "#667eea",
      icon: "💻",
      skills: [
        { name: "HTML5 & CSS3", level: 95, icon: "🎨", description: "Semantic HTML, CSS Grid, Flexbox, Animations" },
        { name: "JavaScript (ES6+)", level: 90, icon: "🟨", description: "Modern JS, Async/Await, DOM Manipulation" },
        { name: "React.js", level: 88, icon: "⚛️", description: "Hooks, Context API, Component Lifecycle" },
        { name: "Responsive Design", level: 92, icon: "📱", description: "Mobile-first, Cross-browser compatibility" },
        { name: "Tailwind CSS", level: 85, icon: "💨", description: "Utility-first CSS, Custom configurations" }
      ]
    },
    {
      title: "⚙️ Backend Development", 
      color: "#764ba2",
      icon: "🔧",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢", description: "Express.js, RESTful APIs, Middleware" },
        { name: "Java", level: 85, icon: "☕", description: "OOP, Data Structures, Spring Framework" },
        { name: "Python", level: 80, icon: "🐍", description: "Scripting, Automation, Backend logic" },
        { name: "Spring Boot", level: 75, icon: "🌱", description: "Dependency Injection, MVC Pattern" }
      ]
    },
    {
      title: "🗄️ Databases & Tools",
      color: "#4facfe", 
      icon: "💾",
      skills: [
        { name: "MongoDB", level: 80, icon: "🍃", description: "NoSQL, Mongoose ODM, Aggregation" },
        { name: "MySQL", level: 75, icon: "🐬", description: "SQL Queries, Database Design" },
        { name: "Git & GitHub", level: 90, icon: "📚", description: "Version control, Collaboration" },
        { name: "RESTful APIs", level: 85, icon: "🔗", description: "API Design, HTTP methods, JSON" }
      ]
    },
    {
      title: "🎯 Digital Marketing & AI",
      color: "#f093fb",
      icon: "🚀",
      skills: [
        { name: "SEO Optimization", level: 85, icon: "🔍", description: "Search Engine Optimization, Keyword Research" },
        { name: "Content Strategy", level: 80, icon: "📊", description: "Content Planning, User Engagement" },
        { name: "AI Integration", level: 75, icon: "🤖", description: "OpenAI API, AI-powered features" },
        { name: "Digital Analytics", level: 80, icon: "📈", description: "Performance Tracking, User Behavior" }
      ]
    }
  ];

  const softSkills = [
    { skill: "Problem Solving", icon: "🧩", level: 95 },
    { skill: "Team Collaboration", icon: "🤝", level: 90 },
    { skill: "Communication", icon: "🗣️", level: 88 },
    { skill: "Adaptability", icon: "🔄", level: 92 },
    { skill: "Quick Learning", icon: "⚡", level: 94 },
    { skill: "Creative Thinking", icon: "💡", level: 87 },
    { skill: "Time Management", icon: "⏰", level: 89 },
    { skill: "Attention to Detail", icon: "🔍", level: 93 }
  ];

  const learningGoals = [
    { skill: "TypeScript", progress: 60, target: "Advanced" },
    { skill: "Next.js", progress: 50, target: "Production Ready" },
    { skill: "AWS/Azure", progress: 40, target: "Cloud Certified" },
    { skill: "Machine Learning", progress: 35, target: "AI Specialist" }
  ];

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

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
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
          animate="visible"
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
                        animate={{ width: `${skill.level}%` }}
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
            animate={{ opacity: 1, x: 0 }}
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
                  animate={{ opacity: 1, scale: 1 }}
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
                      <div 
                        className="soft-skill-progress" 
                        style={{ width: `${item.level}%` }}
                      ></div>
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
            animate={{ opacity: 1, x: 0 }}
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
                  animate={{ opacity: 1, y: 0 }}
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
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
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
          animate={{ opacity: 1, y: 0 }}
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