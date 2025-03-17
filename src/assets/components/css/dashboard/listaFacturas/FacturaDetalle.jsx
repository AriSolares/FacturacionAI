import { useParams } from "react-router-dom";

const facturas = [
  { id: 1, nombre: "FIDEAS SA de CV", concepto: "Servicios de consultoría", monto: "$2,500", fecha: "01/03/2024" },
  { id: 2, nombre: "TechSolutions Inc.", concepto: "Desarrollo de software", monto: "$5,000", fecha: "05/03/2024" },
  { id: 3, nombre: "Global Logistics SA", concepto: "Servicios de transporte", monto: "$3,200", fecha: "10/03/2024" },
  { id: 4, nombre: "InnovaTech Ltd.", concepto: "Mantenimiento de equipos", monto: "$1,800", fecha: "12/03/2024" },
  { id: 5, nombre: "EcoGreen Solutions", concepto: "Consultoría ambiental", monto: "$2,100", fecha: "15/03/2024" }
];

const FacturaDetalle = () => {
  const { id } = useParams();
  const factura = facturas.find(f => f.id === parseInt(id));

  if (!factura) return <h2>Factura no encontrada</h2>;

  return (
    <div className="factura-detalle">
      <h2>{factura.nombre}</h2>
      <p><strong>Concepto:</strong> {factura.concepto}</p>
      <p><strong>Monto:</strong> {factura.monto}</p>
      <p><strong>Fecha:</strong> {factura.fecha}</p>
    </div>
  );
};

export default FacturaDetalle;
