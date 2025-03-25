import { Routes, Route, Navigate } from "react-router-dom";
import Aside from "./aside/Aside";
import Chatbot from "./chatbot/Chatbot";
import Facturas from "./listaFacturas/ListaFacturas";
import Accesos from "./accesos/Accesos";
import DashboardHome from "./dashboardHome/DashboardHome";
import Contribuyentes from "./contribuyentes/Contribuyentes";
import Perfil from "./perfil/Perfil";
import Ajustes from "./ajustes/Ajustes";
import Facturacion from "./facturas/Facturacion";
import "./dashboard.css";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <Aside onLogout={onLogout} />
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/chatbot" />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="facturas" element={<Facturas />} />
          <Route path="accesos" element={<Accesos />} />
          <Route path="contribuyentes" element={<Contribuyentes />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="facturacion" element={<Facturacion />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;