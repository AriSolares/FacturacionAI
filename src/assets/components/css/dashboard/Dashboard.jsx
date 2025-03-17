import { Routes, Route, Navigate } from "react-router-dom";
import Aside from "../dashboard/aside/Aside";
import Chatbot from "../dashboard/chatbot/Chatbot";
import Facturas from "../dashboard/listaFacturas/ListaFacturas";
import Accesos from "../dashboard/accesos/Accesos";
import Contribuyentes from "../dashboard/contribuyentes/Contribuyentes";
import Perfil from "../dashboard/perfil/Perfil";
import Ajustes from "../dashboard/ajustes/Ajustes";
import Facturacion from "../../Facturacion";
import "../dashboard/dashboard.css";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <Aside onLogout={onLogout} />
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/chatbot" />} />
          <Route path="chatbot" element={<Chatbot />} />
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