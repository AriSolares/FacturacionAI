import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Landing from "./assets/components/Landing";
import Login from "./pages/Login";
import Dashboard from "./assets/components/Dashboard";
import Header from "./assets/components/Header";
import './style.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false); // ✅ Cierra la sesión
  };

  return (
    <Router>
      <Routes>
        {/* Ruta Landing Page con el Header */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Landing />
            </>
          } 
        />

        {/* Ruta Login */}
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />

        {/* Dashboard con protección de autenticación */}
        <Route
          path="/dashboard/*"
          element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
