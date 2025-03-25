import React, { useState, useRef } from "react";
import { 
  FaUpload, 
  FaTrash, 
  FaPlus, 
  FaKey, 
  FaFileAlt, 
  FaLock, 
  FaUserShield, 
  FaEdit, 
  FaCheck, 
  FaSearch 
} from "react-icons/fa";
import "./accesos.css";

const Accesos = () => {
  const [alias, setAlias] = useState("");
  const [cerFile, setCerFile] = useState(null);
  const [keyFile, setKeyFile] = useState(null);
  const [privateKey, setPrivateKey] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accesos, setAccesos] = useState([
    { id: 1, alias: "Empresa Principal", fecha: "15/03/2025" },
    { id: 2, alias: "Sucursal Norte", fecha: "10/03/2025" },
    { id: 3, alias: "Departamento Contable", fecha: "05/03/2025" },
  ]);
  
  const cerFileRef = useRef(null);
  const keyFileRef = useRef(null);

  const handleCerFileChange = (e) => {
    setCerFile(e.target.files[0]);
  };

  const handleKeyFileChange = (e) => {
    setKeyFile(e.target.files[0]);
  };

  const handleAddAcceso = () => {
    if (alias && cerFile && keyFile && privateKey) {
      const newId = accesos.length > 0 ? Math.max(...accesos.map(a => a.id)) + 1 : 1;
      const today = new Date().toLocaleDateString();
      
      setAccesos([
        ...accesos,
        { id: newId, alias, fecha: today }
      ]);
      
      // Reset form
      setAlias("");
      setCerFile(null);
      setKeyFile(null);
      setPrivateKey("");
      
      if (cerFileRef.current) cerFileRef.current.value = "";
      if (keyFileRef.current) keyFileRef.current.value = "";
    }
  };

  const handleDeleteAcceso = (id) => {
    setAccesos(accesos.filter(acceso => acceso.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAccesos = accesos.filter(acceso => 
    acceso.alias.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="accesos-container">
      <div className="accesos-header">
        <div className="accesos-header-icon">
          <FaUserShield />
        </div>
        <div className="accesos-header-text">
          <h2>Gestión de Accesos</h2>
          <p>Administra tus certificados y claves de acceso</p>
        </div>
      </div>

      <div className="accesos-content">
        {/* Formulario de Accesos */}
        <section className="accesos-form-section">
          <h3>Nuevo Acceso</h3>
          <div className="accesos-form">
            <div className="form-group">
              <label htmlFor="alias">
                <FaKey className="form-icon" /> Alias
              </label>
              <input
                id="alias"
                type="text"
                placeholder="Nombre para este acceso"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cerFile">
                <FaFileAlt className="form-icon" /> Archivo .cer
              </label>
              <div className="file-upload">
                <input 
                  type="file" 
                  id="cerFile"
                  ref={cerFileRef}
                  onChange={handleCerFileChange}
                  className="file-input"
                />
                <label htmlFor="cerFile" className="file-label">
                  <FaFileAlt className="file-icon" />
                  <span>{cerFile ? cerFile.name : "Seleccionar archivo .cer"}</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="keyFile">
                <FaFileAlt className="form-icon" /> Archivo .key
              </label>
              <div className="file-upload">
                <input 
                  type="file" 
                  id="keyFile"
                  ref={keyFileRef}
                  onChange={handleKeyFileChange}
                  className="file-input"
                />
                <label htmlFor="keyFile" className="file-label">
                  <FaFileAlt className="file-icon" />
                  <span>{keyFile ? keyFile.name : "Seleccionar archivo .key"}</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="privateKey">
                <FaLock className="form-icon" /> Clave Privada
              </label>
              <div className="password-input-container">
                <input
                  id="privateKey"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese la clave privada"
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                />
                <button 
                  type="button" 
                  className="toggle-password-btn"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <div className="accesos-actions">
              <button 
                className={`add-btn ${alias && cerFile && keyFile && privateKey ? 'active' : ''}`}
                onClick={handleAddAcceso}
                disabled={!alias || !cerFile || !keyFile || !privateKey}
              >
                <FaPlus className="btn-icon" /> Agregar Acceso
              </button>
            </div>
          </div>
        </section>

        {/* Lista de Accesos Existentes */}
        <section className="accesos-list-section">
          <div className="list-header">
            <h3>Accesos Existentes</h3>
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Buscar acceso..." 
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
          </div>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th><FaKey className="table-icon" /> Alias</th>
                  <th>Fecha de Registro</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredAccesos.length > 0 ? (
                  filteredAccesos.map((acceso) => (
                    <tr key={acceso.id}>
                      <td>{acceso.alias}</td>
                      <td>{acceso.fecha}</td>
                      <td className="actions-cell">
                        <button className="action-btn edit-btn">
                          <FaEdit />
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleDeleteAcceso(acceso.id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="no-results">
                      No se encontraron accesos
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      
      <div className="accesos-footer">
        <p>Sistema de Gestión de Accesos • Invoicely.AI</p>
      </div>
    </div>
  );
};

export default Accesos;
