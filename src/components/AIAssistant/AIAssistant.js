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
      text: "Hey there! 👋 I'm Asmeret's AI assistant. I'd love to tell you about her amazing projects, skills, and experience. What would you like to know first?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const messagesEndRef = useRef(null);

  // Voice recognition hook
  const { 
    isListening, 
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

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    
    // Greetings and casual conversation
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      const greetings = [
        "Hello there! 👋 Thanks for stopping by! I'm excited to tell you about Asmeret's work.",
        "Hey! Great to meet you! 😊 I'm here to share all about Asmeret's projects and skills.",
        "Hi! Lovely to chat with you! 🌟 I'm Asmeret's assistant - ready to answer any questions."
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (message.includes('how are you')) {
      return "I'm doing great, thanks for asking! 😊 Just excited to share about Asmeret's amazing work.";
    }

    if (message.includes('thank')) {
      return "You're very welcome! 😊 I'm always happy to help.";
    }

    if (message.includes('bye')) {
      return "It was lovely chatting with you! 👋 Hope you learned something interesting!";
    }

    // Portfolio information
    if (message.includes('about') || message.includes('who') || message.includes('asmeret')) {
      return "Asmeret Teklu is a passionate Software Engineering Graduate (2024) from Microlink IT College. She specializes in MERN stack development and is currently advancing her skills through FreeCodeCamp's full-stack curriculum. She's particularly excited about AI integration in web applications! 💻";
    }
    
    if (message.includes('project')) {
      return "Asmeret has built several creative projects: 🎵 AI Mood Music Player, 📝 Smart Note Taking App, 🛒 E-commerce Platform, 🌐 Portfolio Website, ✅ Task Management App, and 🌤️ Weather Dashboard. All feature modern tech stacks and innovative solutions!";
    }
    
    if (message.includes('skill') || message.includes('tech')) {
      return "Asmeret's technical arsenal includes: Frontend: React, JavaScript, HTML5, CSS3, Tailwind; Backend: Node.js, Java, Python, Express; Databases: MongoDB, MySQL; AI: OpenAI API, TensorFlow.js; Tools: Git, VS Code, Figma. She's also strong in Digital Marketing! 🛠️";
    }
    
    if (message.includes('education')) {
      return "Asmeret graduated with a Software Engineering degree in 2024. She's currently completing FreeCodeCamp's full-stack certification and holds a professional English diploma. She believes in continuous learning and practical application! 📚";
    }
    
    if (message.includes('experience')) {
      return "As a recent graduate, Asmeret combines fresh technical knowledge with practical project experience. She's completed multiple personal projects and holds certifications in both development and digital marketing. She's eager to apply her skills in real-world scenarios! 🌟";
    }
    
    if (message.includes('contact') || message.includes('hire')) {
      return "Asmeret is open to internship opportunities, collaborative projects, and entry-level developer roles! You can contact her through the portfolio's contact form. She's particularly interested in roles involving AI, full-stack development, or digital marketing integration. 🤝";
    }
    
    if (message.includes('goal')) {
      return "Asmeret aims to become a full-stack developer specializing in AI-powered applications. She wants to create technology that solves real problems, particularly for Ethiopian and African markets. Her dream is to lead innovative tech projects that make a positive impact! 🌍";
    }

    if (message.includes('hobby')) {
      return "When she's not coding, Asmeret loves exploring new technologies, contributing to open-source projects, and learning about AI advancements. She's passionate about creating user-friendly applications that blend technology with creativity!";
    }

    if (message.includes('ethiopia')) {
      return "Asmeret is really proud of her Ethiopian heritage! 🇪🇹 She's particularly interested in creating technology solutions that address local challenges. Her projects are specifically designed with Ethiopian users in mind.";
    }

    // Default response
    const defaultResponses = [
      "That's really interesting! 🤔 Asmeret loves exploring topics like that. Would you like me to tell you more about her specific projects or technical skills?",
      "Great question! 😊 She's passionate about that kind of thing. I'd be happy to share how her skills and experience relate to what you're asking about.",
      "Oh, that's a fascinating topic! 🌟 Asmeret has some thoughts about that based on her projects. Maybe I can tell you about relevant work she's done?"
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

    // Trigger confetti for exciting messages
    if (message.toLowerCase().includes('amazing') || 
        message.toLowerCase().includes('awesome') || 
        message.toLowerCase().includes('congrat') ||
        message.toLowerCase().includes('wow')) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    const thinkingTime = 800 + Math.random() * 700;
    
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
        text: "Hey there! Let's start fresh. 👋 I'm here to tell you all about Asmeret's skills, projects, and experience. What would you like to know?",
        isUser: false,
        timestamp: new Date()
      }
    ]);
  };

  const quickActions = [
    "Hello! 👋",
    "Tell me about Asmeret",
    "What projects has she built?",
    "What are her technical skills?",
    "What's her education background?",
    "Is she available for opportunities?"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="ai-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {showConfetti && <Confetti trigger={showConfetti} />}
          
          <motion.div 
            className="ai-assistant"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
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
                    {isTyping ? "Thinking..." : 
                     isListening ? "🎤 Listening..." : 
                     "Ask me anything!"}
                  </p>
                </div>
              </div>
              <div className="ai-controls">
                <motion.button 
                  className="clear-btn"
                  onClick={clearConversation}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Clear conversation"
                >
                  🗑️
                </motion.button>
                <motion.button 
                  className="close-btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
              <h4>Quick Questions</h4>
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

            {/* Voice Status */}
            {isListening && (
              <motion.div 
                className="voice-status"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="voice-pulse"></div>
                <span>Speak now... I'm listening!</span>
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
                  title={isListening ? "Stop listening" : "Voice input"}
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
                  isListening ? "Listening... Speak now!" : 
                  "Ask about Asmeret's skills, projects, or experience..."
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
                  ? "💡 Try voice commands! Say 'Tell me about projects' or 'What are her skills?'"
                  : "💡 Ask about specific projects like 'AI Mood Music Player'"
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