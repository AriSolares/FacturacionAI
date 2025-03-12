import React from "react";
import "./css/listafacturas.css";
import { FaChevronRight } from "react-icons/fa";

const facturas = [
  { nombre: "FIDEAS SA de CV", concepto: "Servicios de consultoría" },
  { nombre: "TechSolutions Inc.", concepto: "Desarrollo de software" },
  { nombre: "Global Logistics SA", concepto: "Servicios de transporte" },
  { nombre: "InnovaTech Ltd.", concepto: "Mantenimiento de equipos" },
  { nombre: "EcoGreen Solutions", concepto: "Consultoría ambiental" }
];

const ListaFacturas = () => {
  return (
    <div className="facturas-container">
      <h2 className="facturas-title">Lista de Facturas</h2>
      <div className="facturas-list">
        {facturas.map((factura, index) => (
          <div key={index} className="factura-card">
            <div className="factura-info">
              <h4 className="factura-nombre">{factura.nombre}</h4>
              <p className="factura-concepto"><strong>Concepto:</strong> {factura.concepto}</p>
            </div>
            <FaChevronRight className="factura-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaFacturas;
