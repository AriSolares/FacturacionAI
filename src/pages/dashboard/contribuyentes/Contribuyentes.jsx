import React, { useState, useRef } from "react";
import { FaUpload, FaBuilding, FaIdCard, FaFileAlt, FaSearch, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import './contribuyentes.css';

const Contribuyentes = () => {
  const [file, setFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newContribuyente, setNewContribuyente] = useState({ nombre: "", rfc: "" });
  const [contribuyentes, setContribuyentes] = useState([
    { id: 1, nombre: "FIDEAS SA de CV", rfc: "FSA123456ABC", fecha: "15/03/2025" },
    { id: 2, nombre: "TechSolutions Inc.", rfc: "TSI987654XYZ", fecha: "12/03/2025" },
    { id: 3, nombre: "Global Logistics SA", rfc: "GLS456789DEF", fecha: "10/03/2025" },
    { id: 4, nombre: "InnovaTech Ltd.", rfc: "ITL321654GHI", fecha: "05/03/2025" },
    { id: 5, nombre: "EcoGreen Solutions", rfc: "EGS159753JKL", fecha: "01/03/2025" },
  ]);
  
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // Aquí iría la lógica para procesar el archivo
      alert("Procesando el archivo de constancia fiscal: " + file.name);
      // Simular la adición de un nuevo contribuyente
      const newId = contribuyentes.length + 1;
      const today = new Date().toLocaleDateString();
      const newEntry = {
        id: newId,
        nombre: file.name.split('.')[0],
        rfc: "RFC" + Math.floor(Math.random() * 1000000),
        fecha: today
      };
      
      setContribuyentes([newEntry, ...contribuyentes]);
      setFile(null);
      
      // Limpiar el input file
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddContribuyente = () => {
    if (newContribuyente.nombre && newContribuyente.rfc) {
      const newId = contribuyentes.length + 1;
      const today = new Date().toLocaleDateString();
      const newEntry = {
        id: newId,
        nombre: newContribuyente.nombre,
        rfc: newContribuyente.rfc,
        fecha: today
      };
      
      setContribuyentes([newEntry, ...contribuyentes]);
      setNewContribuyente({ nombre: "", rfc: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteContribuyente = (id) => {
    setContribuyentes(contribuyentes.filter(c => c.id !== id));
  };

  const filteredContribuyentes = contribuyentes.filter(c => 
    c.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.rfc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contribuyentes-container">
      <div className="contribuyentes-header">
        <div className="contribuyentes-header-icon">
          <FaBuilding />
        </div>
        <div className="contribuyentes-header-text">
          <h2>Gestión de Contribuyentes</h2>
          <p>Administra tus contribuyentes fiscales</p>
        </div>
      </div>
      
      <section className="upload-section">
        <h3>Subir Constancia de Situación Fiscal</h3>
        <div className="upload-box">
          <div className="file-input-container">
            <input 
              type="file" 
              onChange={handleFileChange} 
              ref={fileInputRef}
              id="file-upload"
              className="file-input"
            />
            <label htmlFor="file-upload" className="file-label">
              <FaFileAlt className="file-icon" />
              <span>{file ? file.name : "Seleccionar archivo..."}</span>
            </label>
          </div>
          <button 
            onClick={handleUpload} 
            className={`btn-upload ${file ? 'active' : ''}`}
            disabled={!file}
          >
            <FaUpload className="btn-icon" />
            <span>Procesar Contribuyente</span>
          </button>
        </div>
      </section>

      <section className="contribuyentes-list-section">
        <div className="list-header">
          <h3>Lista de Contribuyentes</h3>
          <div className="list-actions">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Buscar contribuyente..." 
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            <button 
              className="btn-add" 
              onClick={() => setShowAddForm(!showAddForm)}
            >
              <FaPlus className="btn-icon" />
              <span className="btn-text">Nuevo</span>
            </button>
          </div>
        </div>
        
        {showAddForm && (
          <div className="add-form">
            <div className="form-group">
              <label>Nombre de la Empresa</label>
              <input 
                type="text" 
                value={newContribuyente.nombre}
                onChange={(e) => setNewContribuyente({...newContribuyente, nombre: e.target.value})}
                placeholder="Nombre de la empresa"
              />
            </div>
            <div className="form-group">
              <label>RFC</label>
              <input 
                type="text" 
                value={newContribuyente.rfc}
                onChange={(e) => setNewContribuyente({...newContribuyente, rfc: e.target.value})}
                placeholder="RFC"
              />
            </div>
            <div className="form-actions">
              <button className="btn-cancel" onClick={() => setShowAddForm(false)}>Cancelar</button>
              <button className="btn-save" onClick={handleAddContribuyente}>Guardar</button>
            </div>
          </div>
        )}
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th><FaBuilding className="table-icon" /> Empresa</th>
                <th><FaIdCard className="table-icon" /> RFC</th>
                <th>Fecha de Registro</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredContribuyentes.length > 0 ? (
                filteredContribuyentes.map((contribuyente) => (
                  <tr key={contribuyente.id}>
                    <td>{contribuyente.nombre}</td>
                    <td>{contribuyente.rfc}</td>
                    <td>{contribuyente.fecha}</td>
                    <td className="actions-cell">
                      <button className="action-btn edit-btn">
                        <FaEdit />
                      </button>
                      <button 
                        className="action-btn delete-btn"
                        onClick={() => handleDeleteContribuyente(contribuyente.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-results">
                    No se encontraron contribuyentes
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      
      <div className="contribuyentes-footer">
        <p>Sistema de Gestión de Contribuyentes • Invoicely.AI</p>
      </div>
    </div>
  );
};

export default Contribuyentes;
