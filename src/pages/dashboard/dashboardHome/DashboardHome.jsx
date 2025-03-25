import { 
  FaFileInvoice, 
  FaUsers, 
  FaBolt, 
  FaChartLine, 
  FaChartPie, 
  FaCalendarAlt, 
  FaArrowUp, 
  FaArrowDown, 
  FaTachometerAlt, 
  FaRocket 
} from "react-icons/fa";
import { Line, Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useState, useEffect } from "react";
import "./dashboardHome.css"; 

const DashboardHome = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  
  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const lineData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Facturas por Mes",
        data: [4, 3, 2, 5, 7, 5],
        borderColor: "#966BF2",
        backgroundColor: "rgba(150, 107, 242, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: "#966BF2",
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#F2F2F2",
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: "rgba(14, 12, 64, 0.8)",
        titleColor: "#F2F2F2",
        bodyColor: "#F2F2F2",
        borderColor: "rgba(150, 107, 242, 0.3)",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12
        },
        callbacks: {
          label: function(context) {
            return `Facturas: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: "rgba(150, 107, 242, 0.1)",
        },
        ticks: {
          color: "#baa6cc",
        }
      },
      y: {
        grid: {
          color: "rgba(150, 107, 242, 0.1)",
        },
        ticks: {
          color: "#baa6cc",
          precision: 0
        }
      }
    }
  };

  const pieData = {
    labels: ["Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E"],
    datasets: [
      {
        data: [29, 23, 20, 15, 13],
        backgroundColor: ["#966BF2", "#7135F2", "#6b9cf2", "#31078C", "#2B0973"],
        borderColor: "rgba(12, 13, 39, 0.8)",
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: "#F2F2F2",
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: "rgba(14, 12, 64, 0.8)",
        titleColor: "#F2F2F2",
        bodyColor: "#F2F2F2",
        borderColor: "rgba(150, 107, 242, 0.3)",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12
        },
        callbacks: {
          label: function(context) {
            return `Facturas: ${context.raw}`;
          }
        }
      }
    }
  };

  const barData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Ingresos",
        data: [12500, 9800, 11200, 15600, 18900, 16700],
        backgroundColor: "rgba(150, 107, 242, 0.7)",
        borderColor: "#966BF2",
        borderWidth: 1,
        borderRadius: 5,
        hoverBackgroundColor: "#7135F2",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#F2F2F2",
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: "rgba(14, 12, 64, 0.8)",
        titleColor: "#F2F2F2",
        bodyColor: "#F2F2F2",
        borderColor: "rgba(150, 107, 242, 0.3)",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12
        },
        callbacks: {
          label: function(context) {
            return `$${context.raw.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: "rgba(150, 107, 242, 0.1)",
        },
        ticks: {
          color: "#baa6cc",
        }
      },
      y: {
        grid: {
          color: "rgba(150, 107, 242, 0.1)",
        },
        ticks: {
          color: "#baa6cc",
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      }
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case "overview":
        return (
          <>
            <div className="dashboard-stats">
              <div className="stat-card">
                <div className="stat-icon-container">
                  <FaFileInvoice className="stat-icon" />
                </div>
                <div className="stat-content">
                  <p className="stat-label">Facturas Totales</p>
                  <h3 className="stat-value">28</h3>
                  <div className="stat-trend positive">
                    <FaArrowUp /> <span>12%</span>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-container">
                  <FaUsers className="stat-icon" />
                </div>
                <div className="stat-content">
                  <p className="stat-label">Clientes Activos</p>
                  <h3 className="stat-value">15</h3>
                  <div className="stat-trend positive">
                    <FaArrowUp /> <span>8%</span>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-container">
                  <FaBolt className="stat-icon" />
                </div>
                <div className="stat-content">
                  <p className="stat-label">Tokens AI Usados</p>
                  <h3 className="stat-value">1,234</h3>
                  <div className="stat-trend negative">
                    <FaArrowDown /> <span>3%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="charts-grid">
              <div className="chart-container line-chart">
                <div className="chart-header">
                  <div className="chart-title">
                    <FaChartLine className="chart-icon" />
                    <h4>Facturas por Mes</h4>
                  </div>
                  <div className="chart-actions">
                    <select className="chart-select">
                      <option value="6">Últimos 6 meses</option>
                      <option value="12">Último año</option>
                    </select>
                  </div>
                </div>
                <div className="chart-body">
                  <Line data={lineData} options={lineOptions} />
                </div>
              </div>

              <div className="chart-container pie-chart">
                <div className="chart-header">
                  <div className="chart-title">
                    <FaChartPie className="chart-icon" />
                    <h4>Top 5 Clientes</h4>
                  </div>
                </div>
                <div className="chart-body">
                  <Pie data={pieData} options={pieOptions} />
                </div>
              </div>
            </div>
          </>
        );
      case "revenue":
        return (
          <>
            <div className="dashboard-stats">
              <div className="stat-card">
                <div className="stat-icon-container">
                  <FaRocket className="stat-icon" />
                </div>
                <div className="stat-content">
                  <p className="stat-label">Ingresos Totales</p>
                  <h3 className="stat-value">$84,700</h3>
                  <div className="stat-trend positive">
                    <FaArrowUp /> <span>15%</span>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-container">
                  <FaCalendarAlt className="stat-icon" />
                </div>
                <div className="stat-content">
                  <p className="stat-label">Promedio Mensual</p>
                  <h3 className="stat-value">$14,116</h3>
                  <div className="stat-trend positive">
                    <FaArrowUp /> <span>5%</span>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-container">
                  <FaTachometerAlt className="stat-icon" />
                </div>
                <div className="stat-content">
                  <p className="stat-label">Crecimiento</p>
                  <h3 className="stat-value">+8.4%</h3>
                  <div className="stat-trend positive">
                    <FaArrowUp /> <span>2%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-container full-width">
              <div className="chart-header">
                <div className="chart-title">
                  <FaChartLine className="chart-icon" />
                  <h4>Ingresos por Mes</h4>
                </div>
                <div className="chart-actions">
                  <select className="chart-select">
                    <option value="6">Últimos 6 meses</option>
                    <option value="12">Último año</option>
                  </select>
                </div>
              </div>
              <div className="chart-body">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-home-container">
      <div className="dashboard-header">
        <div className="dashboard-header-icon">
          <FaTachometerAlt />
        </div>
        <div className="dashboard-header-text">
          <h2>Panel de Control</h2>
          <p>Resumen de actividad y estadísticas</p>
        </div>
      </div>
      
      <div className="dashboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <FaChartLine className="tab-icon" />
          <span className="tab-text">Resumen</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'revenue' ? 'active' : ''}`}
          onClick={() => setActiveTab('revenue')}
        >
          <FaRocket className="tab-icon" />
          <span className="tab-text">Ingresos</span>
        </button>
      </div>
      
      <div className="dashboard-content">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando datos...</p>
          </div>
        ) : (
          renderTabContent()
        )}
      </div>
      
      <div className="dashboard-footer">
        <p>Datos actualizados • {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default DashboardHome;
