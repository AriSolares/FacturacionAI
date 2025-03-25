import React, { useState } from "react";
import { 
  FaCreditCard, 
  FaCalendarAlt, 
  FaLock, 
  FaMapMarkerAlt, 
  FaSave, 
  FaCrown, 
  FaCheckCircle, 
  FaExchangeAlt, 
  FaFileInvoiceDollar 
} from "react-icons/fa";
import "./facturacion.css";

const Facturacion = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    tarjeta: "",
    expiracion: "",
    cvv: "",
    direccion: ""
  });

  const handleInputChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleActualizarPago = () => {
    // Validación básica
    if (!paymentInfo.tarjeta || !paymentInfo.expiracion || !paymentInfo.cvv || !paymentInfo.direccion) {
      alert("Por favor complete todos los campos.");
      return;
    }
    
    alert("Información de pago actualizada correctamente.");
  };

  const handleCambiarPlan = () => {
    alert("Próximamente: Opciones para cambiar de plan.");
  };

  return (
    <div className="facturacion-container">
      <h2 className="facturacion-titulo">
        <FaFileInvoiceDollar className="facturacion-titulo-icon" /> Facturación
      </h2>

      <div className="facturacion-content">
        {/* Información de Facturación */}
        <div className="facturacion-card">
          <h3 className="facturacion-card-titulo">
            <FaCreditCard /> Información de pago
          </h3>

          <div className="facturacion-form">
            <div className="facturacion-item">
              <label className="facturacion-label">
                <FaCreditCard className="facturacion-icon" /> Número de tarjeta
              </label>
              <input
                type="text"
                name="tarjeta"
                placeholder="1234 5678 9012 3456"
                value={paymentInfo.tarjeta}
                onChange={handleInputChange}
                className="facturacion-input"
              />
            </div>

            <div className="facturacion-row">
              <div className="facturacion-item">
                <label className="facturacion-label">
                  <FaCalendarAlt className="facturacion-icon" /> Fecha de expiración
                </label>
                <input
                  type="text"
                  name="expiracion"
                  placeholder="MM/AA"
                  value={paymentInfo.expiracion}
                  onChange={handleInputChange}
                  className="facturacion-input"
                />
              </div>

              <div className="facturacion-item">
                <label className="facturacion-label">
                  <FaLock className="facturacion-icon" /> CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  value={paymentInfo.cvv}
                  onChange={handleInputChange}
                  className="facturacion-input"
                />
              </div>
            </div>

            <div className="facturacion-item">
              <label className="facturacion-label">
                <FaMapMarkerAlt className="facturacion-icon" /> Dirección de facturación
              </label>
              <input
                type="text"
                name="direccion"
                placeholder="Calle, Ciudad, País"
                value={paymentInfo.direccion}
                onChange={handleInputChange}
                className="facturacion-input"
              />
            </div>

            <button className="facturacion-btn" onClick={handleActualizarPago}>
              <FaSave className="btn-icon" /> Actualizar información de pago
            </button>
          </div>
        </div>

        {/* Plan Actual */}
        <div className="facturacion-card plan-card">
          <h3 className="facturacion-card-titulo">
            <FaCrown /> Plan actual
          </h3>
          
          <div className="plan-info">
            <div className="plan-header">
              <h4 className="plan-titulo">Plan Pro</h4>
              <span className="plan-precio">$29.99<span className="plan-periodo">/mes</span></span>
            </div>
            
            <div className="plan-features">
              <h5>Características incluidas:</h5>
              <ul className="feature-list">
                <li><FaCheckCircle className="feature-icon" /> Hasta 1000 facturas por mes</li>
                <li><FaCheckCircle className="feature-icon" /> Soporte prioritario</li>
                <li><FaCheckCircle className="feature-icon" /> Acceso a todas las funciones de IA</li>
                <li><FaCheckCircle className="feature-icon" /> Exportación ilimitada</li>
                <li><FaCheckCircle className="feature-icon" /> Almacenamiento en la nube</li>
              </ul>
            </div>
            
            <button className="cambiar-plan-btn" onClick={handleCambiarPlan}>
              <FaExchangeAlt className="btn-icon" /> Cambiar plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facturacion;
