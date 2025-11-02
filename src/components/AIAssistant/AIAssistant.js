import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useVoiceRecognition from '../../hooks/useVoiceRecognition';
import './AIAssistant.css';

// Confetti Component
const Confetti = ({ trigger }) => {
  return (
    <div className="confetti-container">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            background: `hsl(${Math.random() * 360}, 100%, 50%)`
          }}
          initial={{ y: -100, opacity: 1, rotate: 0 }}
          animate={{ 
            y: 1000, 
            opacity: 0, 
            rotate: 360,
            x: Math.random() * 200 - 100
          }}
          transition={{ 
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 0.5
          }}
        />
      ))}
    </div>
  );
};

const AIAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! 👋 I'm Asmeret's AI assistant. I'm really excited to chat with you about her journey, projects, and passions. What would you like to explore first?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Enhanced voice recognition with real transcript
  const { 
    isListening, 
    transcript,
    startListening, 
    stopListening, 
    browserSupportsSpeechRecognition 
  } = useVoiceRecognition((transcript) => {
    setInputMessage(transcript);
    handleSendMessage(transcript);
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update input with live transcript
  useEffect(() => {
    if (transcript && isListening) {
      setInputMessage(transcript);
    }
  }, [transcript, isListening]);

  // Close when clicking outside (excluding the chat container)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          chatContainerRef.current && 
          !chatContainerRef.current.contains(event.target)) {
        handleClose();
      }
    };

    // Handle escape key press
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Enhanced close function
  const handleClose = () => {
    // Stop listening if active
    if (isListening) {
      stopListening();
    }
    
    // Reset any ongoing states
    setIsTyping(false);
    setShowConfetti(false);
    
    // Call the parent's onClose function
    onClose();
  };

  // Enhanced human-like responses
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    
    // Enhanced greetings with more personality
    if (/(hi|hello|hey|greetings|what's up|howdy)/i.test(message)) {
      const greetings = [
        "Hey there! 👋 Thanks for stopping by to chat! I've been looking forward to telling you about Asmeret's amazing work.",
        "Hello! 😊 It's so nice to meet you! I'm absolutely thrilled to share Asmeret's journey and projects with you.",
        "Hi there! 🌟 What a wonderful surprise! I'd love to tell you all about Asmeret's passion for technology and innovation.",
        "Hey! 👋 I was just thinking about how excited I am to share Asmeret's story! What's on your mind today?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (/(how are you|how's it going|how do you do)/i.test(message)) {
      const feelings = [
        "I'm absolutely wonderful, thanks for asking! 😊 Just buzzing with excitement to talk about Asmeret's work.",
        "Doing great! 🌟 Every time I get to share Asmeret's journey, it just makes my day better.",
        "I'm fantastic! 🚀 There's something so energizing about connecting people with inspiring stories like Asmeret's."
      ];
      return feelings[Math.floor(Math.random() * feelings.length)];
    }

    if (/(thank you|thanks|appreciate it)/i.test(message)) {
      return "You're most welcome! 😊 It's genuinely my pleasure to help you discover Asmeret's amazing work.";
    }

    if (/(bye|goodbye|see you|farewell)/i.test(message)) {
      const goodbyes = [
        "It was an absolute delight chatting with you! 👋 Hope you discovered something inspiring today!",
        "Thanks for the wonderful conversation! 🌟 Can't wait to share more about Asmeret's journey next time!",
        "So lovely talking with you! 🚀 Wishing you an amazing day filled with inspiration!"
      ];
      return goodbyes[Math.floor(Math.random() * goodbyes.length)];
    }

    // Enhanced portfolio information with more depth
    if (/(about|who is|tell me about|asmeret)/i.test(message)) {
      const aboutResponses = [
        "Asmeret is this incredibly passionate Software Engineering graduate who just radiates enthusiasm for technology! 💻 She completed her degree in 2024 and has this amazing blend of technical skills and creative thinking. What really stands out is her drive to build solutions that actually make a difference in people's lives.",
        "Let me tell you about Asmeret! She's not just a developer - she's a problem-solver with a heart for her community. Graduating in 2024, she's been diving deep into the MERN stack while keeping her eyes on how AI can transform user experiences. There's this genuine excitement she brings to every project!",
        "Asmeret's journey is so inspiring! 🌟 As a recent Software Engineering graduate, she combines solid technical foundation with this wonderful curiosity about emerging technologies. She's particularly passionate about creating solutions that resonate with Ethiopian and African contexts."
      ];
      return aboutResponses[Math.floor(Math.random() * aboutResponses.length)];
    }
    
    if (/(project|what has she built|portfolio)/i.test(message)) {
      const projectResponses = [
        "Oh, her projects are absolutely fascinating! 🎵 She built an AI Mood Music Player that actually adapts to your emotions, a super-smart Note Taking App that organizes itself, and a full E-commerce Platform. Each project shows this beautiful progression in her skills and creativity!",
        "Let me walk you through her projects - they're like a journey of growth! 📝 From interactive weather apps to AI-powered music systems, each one solves real problems. The way she blends functionality with beautiful design is just remarkable!",
        "Her project portfolio tells such an interesting story! 🛒 She moves from foundational web apps to complex full-stack solutions, always with this focus on user experience. The AI integration in her later projects shows such forward-thinking!"
      ];
      return projectResponses[Math.floor(Math.random() * projectResponses.length)];
    }
    
    if (/(skill|tech|technologies|what can she do)/i.test(message)) {
      const skillResponses = [
        "Her technical toolkit is quite impressive! 🛠️ She's strong in React and JavaScript for creating dynamic interfaces, Node.js for robust backends, and she's been exploring AI integration. But what's really special is how she combines these technical skills with digital marketing knowledge!",
        "Let me break down her skills - it's this wonderful mix of depth and breadth! 💪 From frontend finesse with modern frameworks to backend reliability with Express and MongoDB, plus she understands how to make technology marketable and user-friendly.",
        "Her skill set is like a well-orchestrated symphony! 🎻 Solid foundation in web technologies, growing expertise in AI tools, and this strategic understanding of digital presence. It's that combination that makes her approach so effective!"
      ];
      return skillResponses[Math.floor(Math.random() * skillResponses.length)];
    }
    
    if (/(education|study|background|degree)/i.test(message)) {
      const educationResponses = [
        "Her educational journey is so purposeful! 📚 She chose Software Engineering because she genuinely believes in technology's power to create change. Beyond the degree, she's constantly learning - currently immersed in FreeCodeCamp's curriculum while exploring AI advancements.",
        "Education for Asmeret isn't just about degrees - it's about continuous growth! 🌱 Her Software Engineering foundation gave her the principles, but her real learning happens through building, experimenting, and staying curious about emerging technologies.",
        "She approaches learning with such wonderful intentionality! 🎓 The degree provided the framework, but she's always adding new layers - whether it's through online courses, personal projects, or exploring how technology can serve her community better."
      ];
      return educationResponses[Math.floor(Math.random() * educationResponses.length)];
    }
    
    if (/(experience|work|professional)/i.test(message)) {
      const experienceResponses = [
        "What's really exciting about Asmeret's experience is how she turns learning into doing! 🚀 Each project represents real problem-solving, from college challenges to personal passion projects. She's building this rich portfolio that shows both technical growth and user-centric thinking.",
        "Her experience story is about meaningful creation rather than just time spent! 💫 Through various projects, she's developed this ability to identify needs and build solutions that are both technically sound and genuinely useful to people.",
        "She's been crafting her experience through purposeful projects! 🌟 Each application she builds demonstrates not just coding skills, but this deeper understanding of how technology fits into people's lives and solves actual problems."
      ];
      return experienceResponses[Math.floor(Math.random() * experienceResponses.length)];
    }
    
    if (/(contact|hire|opportunity|job|work together)/i.test(message)) {
      const contactResponses = [
        "She'd be absolutely thrilled to connect! 🤝 Asmeret is actively seeking opportunities where she can contribute her unique blend of technical and creative skills. She's particularly excited about roles involving AI, full-stack development, or projects with social impact.",
        "This is so exciting - she's really looking forward to new collaborations! 🚀 Whether it's internships, entry-level positions, or interesting projects, she brings this wonderful energy and commitment to everything she does.",
        "She's open to opportunities that let her grow while making a difference! 💼 The perfect role would let her combine her technical skills with her passion for creating solutions that matter. She's especially interested in Ethiopian and African tech ecosystems."
      ];
      return contactResponses[Math.floor(Math.random() * contactResponses.length)];
    }
    
    if (/(goal|dream|aspiration|future)/i.test(message)) {
      const goalResponses = [
        "Her vision is truly inspiring! 🌍 She dreams of becoming a full-stack developer who specializes in AI-powered solutions that address real challenges in Ethiopian and African contexts. There's this beautiful sense of purpose in everything she aims for.",
        "What drives Asmeret is this powerful combination of technical ambition and social consciousness! 💫 She wants to lead projects that don't just use cool technology, but actually improve people's lives and strengthen communities through innovation.",
        "Her aspirations are so grounded in making a difference! 🚀 She envisions creating technology that's accessible, meaningful, and transformative - particularly for markets and communities that are often overlooked in the tech world."
      ];
      return goalResponses[Math.floor(Math.random() * goalResponses.length)];
    }

    if (/(hobby|interest|passion|what does she like)/i.test(message)) {
      const hobbyResponses = [
        "When she's not coding, she's usually exploring the next frontier of technology! 🎯 She has this wonderful curiosity about AI advancements, open-source projects, and understanding how technology can be more human-centered and accessible.",
        "Her interests reflect such a beautiful balance! ⚖️ She loves diving into new technologies while also thinking about how they can be applied meaningfully. There's always this thread of 'how can this help people?' in everything that captures her attention.",
        "She's passionate about the intersection of technology and creativity! 🎨 Whether it's experimenting with new frameworks, contributing to open-source, or thinking about digital marketing strategies, she approaches everything with this infectious enthusiasm."
      ];
      return hobbyResponses[Math.floor(Math.random() * hobbyResponses.length)];
    }

    if (/(ethiopia|africa|heritage|background)/i.test(message)) {
      const ethiopiaResponses = [
        "Her Ethiopian heritage is such a core part of her motivation! 🇪🇹 She's deeply committed to creating technology solutions that are relevant and accessible in Ethiopian contexts. There's this beautiful sense of responsibility to contribute to her community's technological growth.",
        "Being Ethiopian shapes everything about her approach to technology! 🌍 She understands the unique challenges and opportunities in African markets, and she's passionate about building solutions that are culturally aware and contextually appropriate.",
        "Her background gives her this wonderful perspective! 💫 She sees technology not as something imported, but as something that can be shaped by and for Ethiopian and African users. It's about creating with understanding and respect for local contexts."
      ];
      return ethiopiaResponses[Math.floor(Math.random() * ethiopiaResponses.length)];
    }

    // Enhanced default responses with more engagement
    const defaultResponses = [
      "That's such an interesting question! 🤔 It really makes me think about how Asmeret's experiences might relate to what you're curious about. Would you like me to dive deeper into any particular aspect of her journey?",
      "Oh, I love that you're asking about this! 😊 It connects so well with Asmeret's approach to technology and problem-solving. Maybe I can share some specific examples that would give you better insight?",
      "What a thoughtful question! 🌟 This really gets to the heart of what makes Asmeret's journey special. I'd be delighted to explore this further with you - are you particularly interested in her technical projects or her learning philosophy?",
      "That's a fascinating angle! 💡 It reminds me of how Asmeret often thinks about the bigger picture behind technology. Would you like me to connect this to some of her specific experiences or projects?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    if (isListening) {
      stopListening();
    }

    // Enhanced confetti triggers
    if (/(amazing|awesome|impressive|congratulations|wow|incredible)/i.test(message)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    // More natural typing delay
    const thinkingTime = 1000 + Math.random() * 1000;
    
    setTimeout(() => {
      const aiResponse = getAIResponse(message);
      
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, thinkingTime);
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
      setInputMessage("");
    } else {
      startListening();
      setInputMessage("🎤 Listening... Speak now!");
    }
  };

  const clearConversation = () => {
    setMessages([
      {
        id: Date.now(),
        text: "Hey there! Let's start fresh. 👋 I'm absolutely thrilled to tell you all about Asmeret's incredible journey, projects, and passions. What's caught your interest today?",
        isUser: false,
        timestamp: new Date()
      }
    ]);
  };

  const quickActions = [
    "Hello! Tell me about Asmeret 👋",
    "What projects has she built? 🛠️",
    "What are her technical skills? 💻",
    "What's her education background? 📚",
    "Is she available for opportunities? 🤝",
    "What are her future goals? 🌟"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay with enhanced click/tap detection */}
          <motion.div 
            className="ai-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          />
          
          {showConfetti && <Confetti trigger={showConfetti} />}
          
          {/* Chat container with ref for click outside detection */}
          <motion.div 
            ref={chatContainerRef}
            className="ai-assistant"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()} // Prevent overlay close when clicking inside
          >
            {/* Header */}
            <div className="ai-header">
              <div className="ai-profile">
                <div className="ai-avatar">
                  <div className="ai-pulse"></div>
                  <span>🤖</span>
                </div>
                <div className="ai-info">
                  <h3>Asmeret's AI Assistant</h3>
                  <p>
                    {isTyping ? "Thinking deeply... 💭" : 
                     isListening ? "🎤 Listening carefully..." : 
                     "Ready to chat! ✨"}
                  </p>
                </div>
              </div>
              <div className="ai-controls">
                <motion.button 
                  className="clear-btn"
                  onClick={clearConversation}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Start fresh conversation"
                >
                  🗑️
                </motion.button>
                <motion.button 
                  className="close-btn"
                  onClick={handleClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Close assistant"
                >
                  ×
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="ai-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.isUser ? "user" : "ai"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-bubble">
                    {message.text}
                  </div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: "2-digit", 
                      minute: "2-digit" 
                    })}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="message ai">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h4>Quick Questions ✨</h4>
              <div className="quick-actions-grid">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    className="quick-action-btn"
                    onClick={() => handleSendMessage(action)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {action}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Enhanced Voice Status */}
            {isListening && (
              <motion.div 
                className="voice-status"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="voice-pulse"></div>
                <span>{transcript || "I'm listening carefully... speak now!"}</span>
              </motion.div>
            )}

            {/* Input Area */}
            <div className="ai-input-area">
              {browserSupportsSpeechRecognition && (
                <motion.button
                  className={`voice-btn ${isListening ? "listening" : ""}`}
                  onClick={toggleListening}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={isListening ? "Stop listening" : "Start voice input"}
                >
                  {isListening ? "🔴" : "🎤"}
                </motion.button>
              )}
              
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={
                  isListening ? (transcript || "Listening... speak now!") : 
                  "Ask me anything about Asmeret's journey... 🌟"
                }
                className="ai-input"
              />
              
              <motion.button 
                onClick={() => handleSendMessage()}
                className="send-btn"
                disabled={!inputMessage.trim()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Send message"
              >
                <span>↑</span>
              </motion.button>
            </div>

            {/* Footer */}
            <div className="ai-footer">
              <p>
                {browserSupportsSpeechRecognition 
                  ? "💡 Try voice! Say 'Tell me about her projects' or 'What are her skills?'"
                  : "💡 Ask about specific projects or her approach to technology!"
                }
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AIAssistant;