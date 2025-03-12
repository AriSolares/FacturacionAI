import React, { useState } from "react";
import '../components/css/contribuyentes.css'

const Contribuyentes = () => {
  const [file, setFile] = useState(null);
  const [contribuyentes, setContribuyentes] = useState([
    { nombre: "FIDEAS SA de CV", rfc: "FSA123456ABC" },
    { nombre: "TechSolutions Inc.", rfc: "TSI987654XYZ" },
    { nombre: "Global Logistics SA", rfc: "GLS456789DEF" },
    { nombre: "InnovaTech Ltd.", rfc: "ITL321654GHI" },
    { nombre: "EcoGreen Solutions", rfc: "EGS159753JKL" },
  ]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert("Procesando el archivo de constancia fiscal: " + file.name);
    }
  };

  return (
    <div className="contribuyentes-container">
      {/* Sección de subida de archivo */}
      <section className="upload-section">
        <h2>Subir Constancia de Situación Fiscal</h2>
        <div className="upload-box">
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} className="btn-upload">
            Procesar Contribuyente
          </button>
        </div>
      </section>

      {/* Lista de Contribuyentes */}
      <section className="contribuyentes-list">
        <h2>Lista de Contribuyentes</h2>
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>RFC</th>
            </tr>
          </thead>
          <tbody>
            {contribuyentes.map((contribuyente, index) => (
              <tr key={index}>
                <td>{contribuyente.nombre}</td>
                <td>{contribuyente.rfc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Contribuyentes;