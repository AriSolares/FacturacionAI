import React, { useState } from "react";
import "./css/chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bienvenido a la plataforma de Facturas AI. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;
    
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        text: trimmedInput,
        sender: "user",
      },
    ]);
    setUserInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat con AI</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-bubble ${
              msg.sender === "user" ? "user-bubble" : "bot-bubble"
            }`}
          >
            {msg.sender === "user" ? `Tú: ${msg.text}` : msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          className="chat-input"
          placeholder="Escribe tu mensaje..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="chat-send-btn" onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
