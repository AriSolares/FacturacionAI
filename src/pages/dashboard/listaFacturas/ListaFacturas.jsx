import React, { useState, useEffect } from "react";
import "./listafacturas.css";
import { 
  FaChevronRight, 
  FaFileInvoiceDollar, 
  FaSearch, 
  FaFilter, 
  FaCalendarAlt, 
  FaSortAmountDown, 
  FaSortAmountUp,
  FaEye,
  FaDownload,
  FaEllipsisV
} from "react-icons/fa";

const facturas = [
  { 
    id: 1, 
    nombre: "FIDEAS SA de CV", 
    concepto: "Servicios de consultoría", 
    monto: "$2,500", 
    fecha: "01/03/2025",
    estado: "Pagada",
    tipo: "Ingreso"
  },
  { 
    id: 2, 
    nombre: "TechSolutions Inc.", 
    concepto: "Desarrollo de software", 
    monto: "$5,000", 
    fecha: "05/03/2025",
    estado: "Pendiente",
    tipo: "Ingreso"
  },
  { 
    id: 3, 
    nombre: "Global Logistics SA", 
    concepto: "Servicios de transporte", 
    monto: "$3,200", 
    fecha: "10/03/2025",
    estado: "Pagada",
    tipo: "Ingreso"
  },
  { 
    id: 4, 
    nombre: "InnovaTech Ltd.", 
    concepto: "Mantenimiento de equipos", 
    monto: "$1,800", 
    fecha: "12/03/2025",
    estado: "Cancelada",
    tipo: "Gasto"
  },
  { 
    id: 5, 
    nombre: "EcoGreen Solutions", 
    concepto: "Consultoría ambiental", 
    monto: "$2,100", 
    fecha: "15/03/2025",
    estado: "Pendiente",
    tipo: "Ingreso"
  }
];

const ListaFacturas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFacturas, setFilteredFacturas] = useState(facturas);
  const [sortOrder, setSortOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFactura, setSelectedFactura] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    estado: "todos",
    tipo: "todos"
  });

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Filtrar y ordenar facturas
  useEffect(() => {
    let result = [...facturas];
    
    // Aplicar búsqueda
    if (searchTerm) {
      result = result.filter(
        factura => 
          factura.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          factura.concepto.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Aplicar filtros
    if (filters.estado !== "todos") {
      result = result.filter(factura => factura.estado === filters.estado);
    }
    
    if (filters.tipo !== "todos") {
      result = result.filter(factura => factura.tipo === filters.tipo);
    }
    
    // Ordenar por fecha
    result.sort((a, b) => {
      const dateA = new Date(a.fecha.split('/').reverse().join('/'));
      const dateB = new Date(b.fecha.split('/').reverse().join('/'));
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    
    setFilteredFacturas(result);
  }, [searchTerm, sortOrder, filters]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const handleFacturaClick = (factura) => {
    setSelectedFactura(factura);
  };

  const closeFacturaDetalle = () => {
    setSelectedFactura(null);
  };

  const getStatusClass = (estado) => {
    switch(estado) {
      case "Pagada": return "status-paid";
      case "Pendiente": return "status-pending";
      case "Cancelada": return "status-cancelled";
      default: return "";
    }
  };

  const getTypeClass = (tipo) => {
    return tipo === "Ingreso" ? "type-income" : "type-expense";
  };

  return (
    <div className="facturas-container">
      <div className="facturas-header">
        <div className="facturas-header-icon">
          <FaFileInvoiceDollar />
        </div>
        <div className="facturas-header-text">
          <h2>Gestión de Facturas</h2>
          <p>Administra tus facturas emitidas y recibidas</p>
        </div>
      </div>
      
      <div className="facturas-actions">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Buscar factura..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="filter-sort-actions">
          <button 
            className="filter-button"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <FaFilter />
            <span>Filtrar</span>
          </button>
          
          <button 
            className="sort-button"
            onClick={toggleSortOrder}
          >
            {sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />}
            <span>Ordenar</span>
          </button>
        </div>
      </div>
      
      {filterOpen && (
        <div className="filters-panel">
          <div className="filter-group">
            <label>Estado</label>
            <select 
              value={filters.estado} 
              onChange={(e) => handleFilterChange("estado", e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="Pagada">Pagada</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Tipo</label>
            <select 
              value={filters.tipo} 
              onChange={(e) => handleFilterChange("tipo", e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="Ingreso">Ingreso</option>
              <option value="Gasto">Gasto</option>
            </select>
          </div>
        </div>
      )}
      
      <div className="facturas-content">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando facturas...</p>
          </div>
        ) : (
          <>
            {filteredFacturas.length > 0 ? (
              <div className="facturas-list">
                {filteredFacturas.map((factura) => (
                  <div 
                    key={factura.id} 
                    className="factura-card"
                    onClick={() => handleFacturaClick(factura)}
                  >
                    <div className="factura-main">
                      <div className="factura-info">
                        <h4 className="factura-nombre">{factura.nombre}</h4>
                        <p className="factura-concepto">{factura.concepto}</p>
                      </div>
                      
                      <div className="factura-details">
                        <div className="factura-monto">{factura.monto}</div>
                        <div className="factura-meta">
                          <div className="factura-fecha">
                            <FaCalendarAlt className="meta-icon" />
                            <span>{factura.fecha}</span>
                          </div>
                          <div className={`factura-estado ${getStatusClass(factura.estado)}`}>
                            {factura.estado}
                          </div>
                          <div className={`factura-tipo ${getTypeClass(factura.tipo)}`}>
                            {factura.tipo}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="factura-actions">
                      <button className="action-btn view-btn" title="Ver detalle">
                        <FaEye />
                      </button>
                      <button className="action-btn download-btn" title="Descargar">
                        <FaDownload />
                      </button>
                      <button className="action-btn more-btn" title="Más opciones">
                        <FaEllipsisV />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No se encontraron facturas que coincidan con tu búsqueda.</p>
              </div>
            )}
          </>
        )}
      </div>
      
      {selectedFactura && (
        <div className="factura-detalle-overlay">
          <div className="factura-detalle-container">
            <div className="factura-detalle-header">
              <h3>Detalle de Factura</h3>
              <button className="close-btn" onClick={closeFacturaDetalle}>×</button>
            </div>
            <div className="factura-detalle-content">
              <div className="detalle-section">
                <h4>Información General</h4>
                <div className="detalle-row">
                  <span className="detalle-label">Cliente/Proveedor:</span>
                  <span className="detalle-value">{selectedFactura.nombre}</span>
                </div>
                <div className="detalle-row">
                  <span className="detalle-label">Concepto:</span>
                  <span className="detalle-value">{selectedFactura.concepto}</span>
                </div>
                <div className="detalle-row">
                  <span className="detalle-label">Monto:</span>
                  <span className="detalle-value">{selectedFactura.monto}</span>
                </div>
                <div className="detalle-row">
                  <span className="detalle-label">Fecha:</span>
                  <span className="detalle-value">{selectedFactura.fecha}</span>
                </div>
                <div className="detalle-row">
                  <span className="detalle-label">Estado:</span>
                  <span className={`detalle-value ${getStatusClass(selectedFactura.estado)}`}>
                    {selectedFactura.estado}
                  </span>
                </div>
                <div className="detalle-row">
                  <span className="detalle-label">Tipo:</span>
                  <span className={`detalle-value ${getTypeClass(selectedFactura.tipo)}`}>
                    {selectedFactura.tipo}
                  </span>
                </div>
              </div>
              
              <div className="detalle-actions">
                <button className="detalle-btn download-btn">
                  <FaDownload /> Descargar PDF
                </button>
                <button className="detalle-btn edit-btn">
                  Editar Factura
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="facturas-footer">
        <p>Sistema de Gestión de Facturas • Invoicely.AI</p>
      </div>
    </div>
  );
};

export default ListaFacturas;
