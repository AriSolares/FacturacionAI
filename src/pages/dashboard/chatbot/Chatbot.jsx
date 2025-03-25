import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaRobot, FaUser, FaInfoCircle } from "react-icons/fa";
import "./chat.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bienvenido a la plataforma de Facturas AI. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;
    
    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        text: trimmedInput,
        sender: "user",
      },
    ]);
    setUserInput("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response (would be replaced with actual API call)
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now() + 1,
          text: "Gracias por tu mensaje. Estoy procesando tu consulta sobre facturas.",
          sender: "bot",
        },
      ]);
    }, 1500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-header-icon">
          <FaRobot />
        </div>
        <div className="chatbot-header-text">
          <h2>Asistente de Facturas AI</h2>
          <p>Disponible 24/7 para ayudarte</p>
        </div>
        <div className="chatbot-header-info">
          <FaInfoCircle />
        </div>
      </div>
      
      <div className="chatbot-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-bubble ${
              msg.sender === "user" ? "user-bubble" : "bot-bubble"
            }`}
          >
            <div className="chat-bubble-icon">
              {msg.sender === "user" ? <FaUser /> : <FaRobot />}
            </div>
            <div className="chat-bubble-content">
              <div className="chat-bubble-text">{msg.text}</div>
              <div className="chat-bubble-time">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="chat-bubble bot-bubble typing-indicator">
            <div className="chat-bubble-icon">
              <FaRobot />
            </div>
            <div className="chat-bubble-content">
              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chatbot-input-area">
        <input
          ref={inputRef}
          type="text"
          className="chatbot-input"
          placeholder="Escribe tu mensaje..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button 
          className={`chatbot-send-btn ${userInput.trim() ? 'active' : ''}`} 
          onClick={handleSend}
          disabled={!userInput.trim()}
        >
          <FaPaperPlane />
        </button>
      </div>
      
      <div className="chatbot-footer">
        <p>Powered by Invoicely.AI</p>
      </div>
    </div>
  );
};

export default Chatbot;
