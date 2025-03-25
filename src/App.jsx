import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./assets/components/header/Header";
import './style.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false); 
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
