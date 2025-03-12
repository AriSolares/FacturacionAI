import React, { useState } from "react";
import './css/facturas.css';

function ChatAI() {
  // Estado para almacenar los mensajes del chat
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bienvenido a la plataforma de Facturas AI. ¿En qué puedo ayudarte hoy?",
      sender: "system",
    },
  ]);

  // Estado para controlar el input del usuario
  const [userInput, setUserInput] = useState("");

  // Función que se ejecuta al hacer clic en el botón "Enviar"
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

    // Limpiar el campo de entrada
    setUserInput("");
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h2>Facturas AI</h2>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#facturas">Facturas</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#accesos">Accesos</a></li>
            <li><a href="#contribuyentes">Contribuyentes</a></li>
            <li><a href="#perfil">Perfil</a></li>
            <li><a href="#ajustes">Ajustes</a></li>
            <li><a href="#facturacion">Facturación</a></li>
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <header>
          <h1>Chat con AI</h1>
          <p className="alias">
            Alias actual: <span>No seleccionado</span>
          </p>
        </header>

        <section className="chat-section">
          <div className="chat-window">
            {messages.map((msg) => (
              <p
                key={msg.id}
                className={
                  msg.sender === "user" ? "user-message" : "system-message"
                }
              >
                {msg.sender === "user" ? `Tú: ${msg.text}` : msg.text}
              </p>
            ))}
          </div>

          {/* Área de entrada de texto */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Escribe tu mensaje aquí..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ChatAI;
