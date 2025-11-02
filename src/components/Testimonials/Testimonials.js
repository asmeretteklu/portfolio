import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Asmeret built an amazing AI music player for our class project. Her attention to detail and problem-solving skills are exceptional!",
      author: "College Professor",
      role: "Software Engineering",
      emoji: "👨‍🏫"
    },
    {
      text: "Worked with Asmeret on a group project - she's a great team player and writes clean, efficient code. Highly recommended!",
      author: "Classmate",
      role: "Team Project",
      emoji: "👩‍💻"
    },
    {
      text: "Asmeret's portfolio showcases incredible talent. Her projects demonstrate strong full-stack development skills and creativity.",
      author: "Tech Mentor", 
      role: "Industry Professional",
      emoji: "🚀"
    }
  ];

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
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px", threshold: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>What People Say 💬</h2>
          <p>Feedback from colleagues, professors, and collaborators</p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="testimonial-emoji"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {testimonial.emoji}
              </motion.div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <motion.div 
                className="testimonial-author"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;