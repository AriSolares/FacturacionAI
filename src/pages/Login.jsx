import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/components/css/login.css";

function Login({ onLogin }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loaded, setLoaded] = useState(false); // Estado para activar la animación

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true); // Activa la animación después de que la página carga
    }, 100);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@facturas.com" && password === "1234") {
      onLogin();
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Registro exitoso");
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <div className="background-blur"></div>

      {/* Pestañas de selección */}
      <div className="navPills">
        <button 
          className={`navItem ${activeTab === "login" ? "active" : ""}`} 
          
          onClick={() => setActiveTab("login")}
        >
          Iniciar Sesión
        </button>
        <button 
          className={`navItem ${activeTab === "register" ? "active" : ""}`} 
          onClick={() => setActiveTab("register")}
        >
          Registrarse
        </button>
      </div>

      {/* Contenedor del login con animación */}
      <div className={`login-container ${loaded ? "fade-in-up" : ""}`}>
        {/* Formulario de Login */}
        <div className={`tabContent ${activeTab === "login" ? "activeTab" : "hiddenTab"}`}>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="formGroup">
              <label>Email</label>
              <input 
                type="email" 
                className="inputField" 
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="formGroup">
              <label>Contraseña</label>
              <input 
                type="password" 
                className="inputField" 
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btnSubmit">Ingresar</button>
          </form>
        </div>

        {/* Formulario de Registro */}
        <div className={`tabContent ${activeTab === "register" ? "activeTab" : "hiddenTab"}`}>
          <h2>Registrarse</h2>
          <form onSubmit={handleRegister}>
            <div className="formGroup">
              <label>Nombre Completo</label>
              <input 
                type="text" 
                className="inputField" 
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="formGroup">
              <label>Usuario</label>
              <input 
                type="text" 
                className="inputField" 
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="formGroup">
              <label>Email</label>
              <input 
                type="email" 
                className="inputField" 
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="formGroup">
              <label>Contraseña</label>
              <input 
                type="password" 
                className="inputField" 
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="formGroup">
              <label>Confirmar Contraseña</label>
              <input 
                type="password" 
                className="inputField" 
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btnSubmit">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
