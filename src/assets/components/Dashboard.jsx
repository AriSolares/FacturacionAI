import { Routes, Route, Navigate } from "react-router-dom";
import Aside from "./aside";
import Chatbot from "./Chatbot";
import DashboardHome from "./DashboardHome";
import Facturas from "./ListaFacturas";
import Accesos from "./Accesos";
import Contribuyentes from "./Contribuyentes";
import Perfil from "./Perfil";
import Ajustes from "./Ajustes";
import Facturacion from "./Facturacion";
import "./css/dashboard.css";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <Aside onLogout={onLogout} />
      <div className="dashboard-content">
        <Routes>
          {/* ✅ Ahora redirige a Chatbot en lugar de DashboardHome */}
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
