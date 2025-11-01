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

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>What People Say 💬</h2>
          <p>Feedback from colleagues, professors, and collaborators</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-emoji">{testimonial.emoji}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;