import React, { useState, useEffect } from 'react';
import { FaHome, FaFileInvoice, FaTachometerAlt, FaKey, FaUser, FaCog, FaReceipt, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from "react-router-dom";
import './aside.css';

const Aside = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  // Verificar si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Botón de menú hamburguesa para móvil */}
      {windowWidth <= 768 && (
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {expanded ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <aside className={`sidebar ${expanded ? 'expanded' : ''}`}>
        <div className="logo">
          <h2>Invoicely.AI</h2>
          <h4>Bienvenido Alias</h4>
        </div>

        <nav className="nav-menu">
          <ul>
            <div className="top">
              <li>
                <Link to="/dashboard/chatbot" className={isActive('/dashboard/chatbot')}>
                  <FaHome className="icon" />
                  <span className="label">Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/facturas" className={isActive('/dashboard/facturas')}>
                  <FaFileInvoice className="icon" />
                  <span className="label">Facturas</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/home" className={isActive('/dashboard/home')}>
                  <FaTachometerAlt className="icon" />
                  <span className="label">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/accesos" className={isActive('/dashboard/accesos')}>
                  <FaKey className="icon" />
                  <span className="label">Accesos</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/contribuyentes" className={isActive('/dashboard/contribuyentes')}>
                  <FaReceipt className="icon" />
                  <span className="label">Contribuyentes</span>
                </Link>
              </li>
            </div>
            <div className="bottom">
              <li>
                <Link to="/dashboard/perfil" className={isActive('/dashboard/perfil')}>
                  <FaUser className="icon" />
                  <span className="label">Perfil</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/ajustes" className={isActive('/dashboard/ajustes')}>
                  <FaCog className="icon" />
                  <span className="label">Ajustes</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/facturacion" className={isActive('/dashboard/facturacion')}>
                  <FaFileInvoice className="icon" />
                  <span className="label">Facturación</span>
                </Link>
              </li>
              <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                <span>
                  <FaSignOutAlt className="icon" />
                  <span className="label">Salir</span>
                </span>
              </li>
            </div>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
