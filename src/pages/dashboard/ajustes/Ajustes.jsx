import React, { useState } from "react";
import { 
  FaCog, 
  FaBell, 
  FaPalette, 
  FaGlobe, 
  FaSave, 
  FaLock, 
  FaKey, 
  FaShieldAlt, 
  FaToggleOn, 
  FaToggleOff 
} from "react-icons/fa";
import "./ajustes.css";

const Ajustes = () => {
  const [notificaciones, setNotificaciones] = useState(false);
  const [tema, setTema] = useState("oscuro");
  const [idioma, setIdioma] = useState("español");
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleGuardarPreferencias = () => {
    alert("Preferencias guardadas correctamente.");
  };

  const handleGuardarSeguridad = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    
    if (passwordData.newPassword.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    
    alert("Contraseña actualizada correctamente.");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="ajustes-container">
      <h2 className="ajustes-titulo">
        <FaCog className="ajustes-titulo-icon" /> Configuración
      </h2>
      
      <div className="ajustes-content">
        <div className="ajustes-card">
          <h3 className="ajustes-card-titulo">
            <FaCog /> Ajustes de la cuenta
          </h3>
          
          <div className="ajustes-form">
            <div className="ajuste-item">
              <label className="ajuste-label">
                <FaBell className="ajuste-icon" /> Notificaciones
              </label>
              <div className="toggle-container">
                <span>Recibir notificaciones por correo</span>
                <button 
                  className={`toggle-btn ${notificaciones ? 'active' : ''}`}
                  onClick={() => setNotificaciones(!notificaciones)}
                  aria-label={notificaciones ? "Desactivar notificaciones" : "Activar notificaciones"}
                >
                  {notificaciones ? <FaToggleOn /> : <FaToggleOff />}
                </button>
              </div>
            </div>

            <div className="ajuste-item">
              <label className="ajuste-label">
                <FaPalette className="ajuste-icon" /> Tema
              </label>
              <div className="tema-opciones">
                <label className={`tema-opcion ${tema === "claro" ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="tema"
                    value="claro"
                    checked={tema === "claro"}
                    onChange={() => setTema("claro")}
                  />
                  <span className="tema-check"></span>
                  <span>Claro</span>
                </label>
                <label className={`tema-opcion ${tema === "oscuro" ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="tema"
                    value="oscuro"
                    checked={tema === "oscuro"}
                    onChange={() => setTema("oscuro")}
                  />
                  <span className="tema-check"></span>
                  <span>Oscuro</span>
                </label>
                <label className={`tema-opcion ${tema === "sistema" ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="tema"
                    value="sistema"
                    checked={tema === "sistema"}
                    onChange={() => setTema("sistema")}
                  />
                  <span className="tema-check"></span>
                  <span>Sistema</span>
                </label>
              </div>
            </div>

            <div className="ajuste-item">
              <label className="ajuste-label">
                <FaGlobe className="ajuste-icon" /> Idioma
              </label>
              <div className="select-container">
                <select 
                  value={idioma} 
                  onChange={(e) => setIdioma(e.target.value)}
                  className="ajuste-select"
                >
                  <option value="español">Español</option>
                  <option value="ingles">Inglés</option>
                  <option value="frances">Francés</option>
                </select>
              </div>
            </div>

            <button className="ajustes-btn" onClick={handleGuardarPreferencias}>
              <FaSave className="btn-icon" /> Guardar preferencias
            </button>
          </div>
        </div>

        <div className="ajustes-card">
          <h3 className="ajustes-card-titulo">
            <FaShieldAlt /> Seguridad
          </h3>
          
          <div className="ajustes-form">
            <div className="ajuste-item">
              <label className="ajuste-label">
                <FaKey className="ajuste-icon" /> Contraseña actual
              </label>
              <input 
                type="password" 
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="Ingrese su contraseña actual" 
                className="ajuste-input"
              />
            </div>
            
            <div className="ajuste-item">
              <label className="ajuste-label">
                <FaLock className="ajuste-icon" /> Nueva contraseña
              </label>
              <input 
                type="password" 
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="Ingrese nueva contraseña" 
                className="ajuste-input"
              />
            </div>
            
            <div className="ajuste-item">
              <label className="ajuste-label">
                <FaLock className="ajuste-icon" /> Confirmar nueva contraseña
              </label>
              <input 
                type="password" 
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirme su nueva contraseña" 
                className="ajuste-input"
              />
            </div>
            
            <button className="ajustes-btn" onClick={handleGuardarSeguridad}>
              <FaSave className="btn-icon" /> Actualizar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajustes;
