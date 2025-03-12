import { FaFileInvoice, FaUsers, FaBolt } from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./css/dashboardHome.css"; 

const DashboardHome = () => {
  const lineData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Facturas por Mes",
        data: [4, 3, 2, 5, 7, 5],
        borderColor: "#71D9B3",
        backgroundColor: "rgba(113, 53, 242, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const pieData = {
    labels: ["Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E"],
    datasets: [
      {
        data: [29, 23, 20, 15, 13],
        backgroundColor: ["#D92B6B", "#71D9B3", "#966BF2", "#6b9cf2", "#4b21a5"],
      },
    ],
  };

  return (
    <div className="dashboard-home">
      {/* Estadísticas */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <FaFileInvoice className="stat-icon" />
          <div>
            <p>Facturas Totales</p>
            <h3>28</h3>
          </div>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div>
            <p>Clientes Activos</p>
            <h3>15</h3>
          </div>
        </div>
        <div className="stat-card">
          <FaBolt className="stat-icon" />
          <div>
            <p>Tokens AI Usados</p>
            <h3>1,234</h3>
          </div>
        </div>
      </div>

      {/* Gráfica de Facturas por Mes */}
      <div className="chart-container">
        <h4>Facturas por Mes</h4>
        <Line data={lineData} />
      </div>

      {/* Gráfica de Top Clientes */}
      <div className="chart-container">
        <h4>Top 5 Clientes por Facturas</h4>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default DashboardHome;
