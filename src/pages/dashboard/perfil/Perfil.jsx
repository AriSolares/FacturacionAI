import React, { useState } from "react";
import { FaCamera, FaUser, FaEnvelope, FaBuilding, FaSave } from "react-icons/fa";
import "./perfil.css";

const Perfil = () => {
  const [user, setUser] = useState({
    nombre: "Juan Doe",
    email: "juan@example.com",
    empresa: "ACME Inc.",
    foto: "https://via.placeholder.com/150", // Imagen por defecto
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //...user es para no perder los valores anteriores deconstruccion de un objeto c:
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los cambios
    console.log("Guardando cambios:", user);
    // Mostrar mensaje de éxito o error
  };

  return (
    <div className="perfil-container">
      <h2 className="perfil-titulo">Perfil de Usuario</h2>
      <div className="perfil-card">
        <div className="perfil-foto-container">
          <div className="perfil-foto">
            <img src={user.foto} alt="Foto de perfil" />
            <label htmlFor="file-input" className="perfil-cambiar-foto">
              <FaCamera />
            </label>
            <input id="file-input" type="file" accept="image/*" onChange={handlePhotoChange} />
          </div>
          <h3 className="perfil-nombre-display">{user.nombre}</h3>
        </div>

        <form className="perfil-form" onSubmit={handleSubmit}>
          <div className="perfil-form-grid">
            <div className="perfil-input">
              <label htmlFor="nombre">
                <FaUser className="perfil-input-icon" /> Nombre
              </label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={user.nombre} 
                onChange={handleChange} 
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            <div className="perfil-input">
              <label htmlFor="email">
                <FaEnvelope className="perfil-input-icon" /> Correo electrónico
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={user.email} 
                onChange={handleChange} 
                placeholder="Ingresa tu correo electrónico"
              />
            </div>

            <div className="perfil-input">
              <label htmlFor="empresa">
                <FaBuilding className="perfil-input-icon" /> Empresa
              </label>
              <input 
                type="text" 
                id="empresa" 
                name="empresa" 
                value={user.empresa} 
                onChange={handleChange} 
                placeholder="Ingresa el nombre de tu empresa"
              />
            </div>
          </div>

          <button type="submit" className="perfil-boton">
            <FaSave className="perfil-boton-icon" /> Guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
