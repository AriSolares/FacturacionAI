import React from 'react';
import { FaHome, FaFileInvoice, FaTachometerAlt, FaKey, FaUser, FaCog, FaReceipt, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import '../aside/aside.css';

const Aside = ({ onLogout }) => {
  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleLogout = () => {
    onLogout(); // Llama la función de App.jsx para cerrar sesión
    navigate("/"); // Redirige a la página principal
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Invoicely.AI</h2>
        <h4>Bienvenido Alias</h4>
      </div>

      <nav className="nav-menu">
        <ul>
          <div className='top'>
            <li>
              <Link to="/dashboard/chatbot">
                <FaHome className="icon" /> Inicio
              </Link>
            </li>
            <li>
            <Link to="/dashboard/facturas">
                  <FaFileInvoice className="icon" /> Facturas
            </Link>
            </li>
            <li>
            <Link to="/dashboard/home">
            <FaTachometerAlt className="icon" /> Dashboard
            </Link>
            </li>
            <li>
            <Link to="/dashboard/accesos">
            <FaKey className="icon" /> Accesos
            </Link>
            </li>
            <li>
              <Link to="/dashboard/contribuyentes">
                <FaReceipt className="icon" /> Contribuyentes
              </Link>
            </li>
          </div>

          <div className='bottom'>
            <li>
            <Link to="/dashboard/perfil">
              <FaUser className="icon" /> Perfil
            </Link>
            </li>
            <li>
            <Link to="/dashboard/ajustes">
              <FaCog className="icon" /> Ajustes
            </Link>
            </li>
            <li>
            <Link to="/dashboard/facturacion">
              <FaFileInvoice className="icon" /> Facturación
            </Link>
            </li>

            {/* Botón Salir */}
            <li onClick={handleLogout} style={{ cursor: "pointer" }}>
              <span style={{ color: '#f83b3b' }}>
                <FaSignOutAlt className="icon" /> Salir
              </span>
            </li>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;