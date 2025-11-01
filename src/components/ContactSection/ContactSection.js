import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Use environment variables (safe for deployment)
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "", 
        subject: "",
        message: ""
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Let's <span className="gradient-text">Connect</span> 🚀</h1>
          <p>Ready to bring your ideas to life? Let's create something amazing together!</p>
        </motion.div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <motion.div 
            className="alert alert-success"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✅ Message sent successfully! I'll get back to you within 24 hours.
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div 
            className="alert alert-error"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ❌ Failed to send message. Please try again or email me directly.
          </motion.div>
        )}

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT SIDE - Contact Info */}
          <motion.div 
            className="contact-info"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="info-header">
              <h2>Get In Touch</h2>
              <p>
                I'm passionate about turning ideas into reality. Whether you have a project in mind, 
                need technical expertise, or just want to connect - I'd love to hear from you!
              </p>
            </div>

            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Mekelle, Ethiopia</p>
                  <small>Available for remote opportunities worldwide</small>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">💼</div>
                <div className="contact-text">
                  <h4>Availability</h4>
                  <p>Open to Opportunities</p>
                  <small>Internships & Entry-level positions</small>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">🌍</div>
                <div className="contact-text">
                  <h4>Timezone</h4>
                  <p>East Africa Time (EAT)</p>
                  <small>UTC+3 • Flexible hours</small>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">⚡</div>
                <div className="contact-text">
                  <h4>Response Time</h4>
                  <p>Within 24 Hours</p>
                  <small>Usually much faster!</small>
                </div>
              </motion.div>
            </div>

            <div className="contact-advantages">
              <h3>🌟 Why Collaborate With Me?</h3>
              <div className="advantages-grid">
                {[
                  { icon: "🎓", text: "2024 Software Engineering Graduate" },
                  { icon: "📚", text: "FreeCodeCamp Certified Developer" },
                  { icon: "🗣️", text: "Professional English Communication" },
                  { icon: "🤖", text: "AI & Modern Tech Specialist" },
                  { icon: "⚡", text: "Quick Learner & Adaptable" },
                  { icon: "💡", text: "Creative Problem Solver" }
                ].map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="advantage-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="advantage-icon">{advantage.icon}</span>
                    <span className="advantage-text">{advantage.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="contact-cta">
              <h3>📞 Let's Connect Directly</h3>
              <div className="contact-methods">
                <motion.a 
                  href="mailto:asmeretteklu03@gmail.com"
                  className="method"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="method-icon">📧</span>
                  <span className="method-text">Email (Preferred)</span>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/asmeret-teklu-b65bb7382?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXb399FPHSOCrQrbK1W%2BzNA%3D%3D"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="method"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="method-icon">💼</span>
                  <span className="method-text">LinkedIn</span>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/asmeret"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="method"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="method-icon">🐙</span>
                  <span className="method-text">GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div 
            className="contact-form-container"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send Me a Message</h3>
                <p className="form-subtitle">
                  Have a project in mind? Let's discuss how we can work together to bring it to life!
                </p>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <motion.select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">What brings you here today?</option>
                  <option value="job-opportunity">💼 Job Opportunity</option>
                  <option value="internship">🎓 Internship Inquiry</option>
                  <option value="project-collab">🤝 Project Collaboration</option>
                  <option value="freelance-work">⚡ Freelance Work</option>
                  <option value="technical-question">🔧 Technical Question</option>
                  <option value="general-inquiry">💬 General Inquiry</option>
                </motion.select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, idea, or opportunity. I'm excited to learn more and see how we can work together to create something amazing! 🚀"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="form-footer">
                <p className="form-note">
                  💫 I'm committed to responding within 24 hours. Your message is important to me!
                </p>
                <motion.button 
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Message 🚀"
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;