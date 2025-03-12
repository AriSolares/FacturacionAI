import React, { useState } from "react";
import "./css/facturacion.css";

const Facturacion = () => {
  const [tarjeta, setTarjeta] = useState("");
  const [expiracion, setExpiracion] = useState("");
  const [cvv, setCvv] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleActualizarPago = () => {
    alert("Información de pago actualizada.");
  };

  return (
    <div className="facturacion-container">
      <h1 className="titulo">Facturación</h1>

      {/* Información de Facturación */}
      <div className="facturacion-card">
        <h2>Información de facturación</h2>

        <div className="facturacion-item">
          <label>Número de tarjeta</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={tarjeta}
            onChange={(e) => setTarjeta(e.target.value)}
          />
        </div>

        <div className="facturacion-row">
          <div className="facturacion-item">
            <label>Fecha de expiración</label>
            <input
              type="text"
              placeholder="MM/AA"
              value={expiracion}
              onChange={(e) => setExpiracion(e.target.value)}
            />
          </div>

          <div className="facturacion-item">
            <label>CVV</label>
            <input
              type="text"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <div className="facturacion-item">
          <label>Dirección de facturación</label>
          <input
            type="text"
            placeholder="Calle, Ciudad, País"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>

        <button className="actualizar-btn" onClick={handleActualizarPago}>
          Actualizar información de pago
        </button>
      </div>

      {/* Plan Actual */}
      <div className="facturacion-card">
        <h2>Plan actual</h2>
        <p className="plan-titulo">Plan Pro</p>
        <h4>Características incluidas:</h4>
        <ul>
          <li>Hasta 1000 facturas por mes</li>
          <li>Soporte prioritario</li>
          <li>Acceso a todas las funciones de IA</li>
        </ul>
        <p className="plan-precio">$29.99/mes</p>
        <button className="cambiar-plan-btn">Cambiar plan</button>
      </div>
    </div>
  );
};

export default Facturacion;
