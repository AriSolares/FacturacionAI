import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import "./css/header.css";

const Header = () => {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <header>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img
            src="../../../public/Invoicely-02.svg"
            alt="Logo"
            width="170"
            height="auto"
            className="d-inline-block align-top"
          />
        </a>
        <div className="justify-content-end" id="navbarContent">

          <button 
            className="btn btn-primary btn-iniciar" 
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
