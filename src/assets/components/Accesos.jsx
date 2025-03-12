import React, { useState } from "react";
import { FaUpload, FaTrash, FaPlus } from "react-icons/fa";
import "./css/accesos.css";

const Accesos = () => {
  const [alias, setAlias] = useState("");
  const [cerFile, setCerFile] = useState(null);
  const [keyFile, setKeyFile] = useState(null);
  const [privateKey, setPrivateKey] = useState("");

  return (
    <div className="accesos-container">
      <h2>Accesos</h2>

      {/* Formulario de Accesos */}
      <div className="accesos-form">
        <label>Alias</label>
        <input
          type="text"
          placeholder="Nombre para este acceso"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />

        <label>Archivo .cer</label>
        <div className="file-upload">
          <input type="file" onChange={(e) => setCerFile(e.target.files[0])} />
          <button className="upload-btn">
            <FaUpload />
          </button>
        </div>

        <label>Archivo .key</label>
        <div className="file-upload">
          <input type="file" onChange={(e) => setKeyFile(e.target.files[0])} />
          <button className="upload-btn">
            <FaUpload />
          </button>
        </div>

        <label>Clave Privada</label>
        <input
          type="password"
          placeholder="Ingrese la clave privada"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
        />

        <div className="accesos-actions">
          <button className="add-btn">
            <FaPlus /> Agregar Acceso
          </button>
          <button className="delete-btn">
            <FaTrash /> Eliminar Acceso
          </button>
        </div>
      </div>

      {/* Lista de Accesos Existentes */}
      <div className="accesos-list">
        <h3>Accesos Existentes</h3>
        <table>
          <thead>
            <tr>
              <th>Alias</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí se renderizarían los accesos */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accesos;
