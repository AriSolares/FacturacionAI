import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import "../perfil/perfil.css";

const Perfil = () => {
  const [user, setUser] = useState({
    nombre: "Juan Doe",
    email: "juan@example.com",
    empresa: "ACME Inc.",
    foto: "https://via.placeholder.com/120", // Imagen por defecto
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser({ ...user, foto: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="perfil-container">
      <h2 className="perfil-titulo">Perfil de Usuario</h2>
      <div className="perfil-card">
        <div className="perfil-foto">
          <img src={user.foto} alt="" />
          <input id="file-input" type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>

        <form className="perfil-form">
          <div className="perfil-input">
            <label>Nombre</label>
            <input type="text" name="nombre" value={user.nombre} onChange={handleChange} />
          </div>

          <div className="perfil-input">
            <label>Correo electrónico</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
          </div>

          <div className="perfil-input">
            <label>Empresa</label>
            <input type="text" name="empresa" value={user.empresa} onChange={handleChange} />
          </div>

          <button type="submit" className="perfil-boton">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
