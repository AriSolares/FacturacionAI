import React, { useState } from "react";
import "./css/ajustes.css";

const Ajustes = () => {
  const [notificaciones, setNotificaciones] = useState(false);
  const [tema, setTema] = useState("claro");
  const [idioma, setIdioma] = useState("español");

  const handleGuardarPreferencias = () => {
    alert("Preferencias guardadas correctamente.");
  };

  return (
    <div className="ajustes-container">
      <h1 className="titulo">Ajustes</h1>

      <div className="ajustes-card">
        <h2>Ajustes de la cuenta</h2>
        <div className="ajuste-item">
          <label>Notificaciones</label>
          <div className="notificaciones">
            <span>Recibir notificaciones por correo</span>
            <input
              type="checkbox"
              checked={notificaciones}
              onChange={() => setNotificaciones(!notificaciones)}
            />
          </div>
        </div>

        <div className="ajuste-item">
          <label>Tema</label>
          <div className="tema-opciones">
            <label>
              <input
                type="radio"
                name="tema"
                value="claro"
                checked={tema === "claro"}
                onChange={() => setTema("claro")}
              />
              Claro
            </label>
            <label>
              <input
                type="radio"
                name="tema"
                value="oscuro"
                checked={tema === "oscuro"}
                onChange={() => setTema("oscuro")}
              />
              Oscuro
            </label>
            <label>
              <input
                type="radio"
                name="tema"
                value="sistema"
                checked={tema === "sistema"}
                onChange={() => setTema("sistema")}
              />
              Sistema
            </label>
          </div>
        </div>

        <div className="ajuste-item">
          <label>Idioma</label>
          <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
            <option value="español">Español</option>
            <option value="ingles">Inglés</option>
            <option value="frances">Francés</option>
          </select>
        </div>

        <button className="guardar-btn" onClick={handleGuardarPreferencias}>
          Guardar preferencias
        </button>
      </div>

      <div className="ajustes-card">
        <h2>Seguridad</h2>
        <div className="ajuste-item">
          <label>Contraseña actual</label>
          <input type="password" placeholder="Ingrese su contraseña actual" />
        </div>
        <div className="ajuste-item">
          <label>Nueva contraseña</label>
          <input type="password" placeholder="Ingrese nueva contraseña" />
        </div>
        <div className="ajuste-item">
          <label>Confirmar nueva contraseña</label>
          <input type="password" placeholder="Confirme su nueva contraseña" />
        </div>
        <button className="guardar-btn">Guardar cambios</button>
      </div>
    </div>
  );
};

export default Ajustes;
