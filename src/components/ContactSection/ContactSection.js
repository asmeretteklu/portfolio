import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './ContactSection.css';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef();

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

  const getEmailJSConfig = () => {
    return {
      serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id_here',
      templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id_here',
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key_here'
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const { serviceID, templateID, publicKey } = getEmailJSConfig();

    if (!serviceID || !templateID || !publicKey) {
      setSubmitStatus('error');
      setErrorMessage('Email service not configured properly. Please contact me directly at asmeretteklu03@gmail.com');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      setSubmitStatus('success');
      formRef.current.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      let userMessage = 'Failed to send message. ';
      if (error.text) {
        userMessage += error.text;
      } else if (error.status === 0) {
        userMessage += 'Network error. Please check your connection.';
      } else {
        userMessage += 'Please try again or email me directly at asmeretteklu03@gmail.com';
      }
      setSubmitStatus('error');
      setErrorMessage(userMessage);
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px", threshold: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Let's <span className="gradient-text">Connect</span> 🚀</h1>
          <p>Ready to bring your ideas to life? Let's create something amazing together!</p>
        </motion.div>

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
            ❌ {errorMessage || 'Failed to send message. Please try again or email me directly.'}
          </motion.div>
        )}

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
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
                  href="https://github.com/asmeretteklu"
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
                    name="from_name"
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
                    name="from_email"
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
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'sent' : ''}`}
                  disabled={isSubmitting || submitStatus === 'success'}
                  whileHover={{ scale: (isSubmitting || submitStatus === 'success') ? 1 : 1.05 }}
                  whileTap={{ scale: (isSubmitting || submitStatus === 'success') ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <span>Sent! </span>
                      <span className="success-check">✅</span>
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