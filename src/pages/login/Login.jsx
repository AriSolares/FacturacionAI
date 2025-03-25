import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ onLogin }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Animación de entrada
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de carga
    setTimeout(() => {
      if (email === "admin@facturas.com" && password === "1234") {
        onLogin();
        navigate("/dashboard");
      } else {
        alert("Credenciales incorrectas");
        setIsLoading(false);
      }
    }, 800);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de carga
    setTimeout(() => {
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        setIsLoading(false);
        return;
      }
      alert("Registro exitoso");
      setIsLoading(false);
      setActiveTab("login");
    }, 800);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="background-image"></div>
        <div className="background-blur"></div>
        <div className="background-gradient"></div>
      </div>

      <div className="login-content">
        <div className="login-brand">
          <img src="/Invoicely-02.svg" alt="Logo" className="login-logo" />
          <h1 className="login-title">
            Facturación <span className="gradient-text">Inteligente</span>
          </h1>
        </div>

        {/* Pestañas de selección */}
        <div className="navPills">
          <button 
            className={`navItem ${activeTab === "login" ? "active" : ""}`} 
            onClick={() => setActiveTab("login")}
            aria-label="Iniciar Sesión"
          >
            Iniciar Sesión
          </button>
          <button 
            className={`navItem ${activeTab === "register" ? "active" : ""}`} 
            onClick={() => setActiveTab("register")}
            aria-label="Registrarse"
          >
            Registrarse
          </button>
        </div>

        {/* Contenedor del login con animación */}
        <div className={`login-container ${loaded ? "fade-in-up" : ""}`}>
          {/* Formulario de Login */}
          <div className={`tabContent ${activeTab === "login" ? "activeTab" : "hiddenTab"}`}>
            <h2>Bienvenido de nuevo</h2>
            <p className="form-subtitle">Ingresa tus credenciales para continuar</p>
            
            <form onSubmit={handleLogin}>
              <div className="formGroup">
                <label htmlFor="login-email">Email</label>
                <div className="input-container">
                  <span className="input-icon">✉️</span>
                  <input 
                    id="login-email"
                    type="email" 
                    className="inputField" 
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="formGroup">
                <label htmlFor="login-password">Contraseña</label>
                <div className="input-container">
                  <span className="input-icon">🔒</span>
                  <input 
                    id="login-password"
                    type={showPassword ? "text" : "password"} 
                    className="inputField" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    className="password-toggle" 
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>
              
              <div className="form-options">
                <div className="remember-me">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember">Recordarme</label>
                </div>
                <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
              </div>
              
              <button 
                type="submit" 
                className={`btnSubmit ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  "Ingresar"
                )}
              </button>
            </form>
            
            <div className="social-login">
              <p>O inicia sesión con</p>
              <div className="social-buttons">
                <button className="social-btn google">
                  <span>G</span>
                </button>
                <button className="social-btn facebook">
                  <span>f</span>
                </button>
                <button className="social-btn apple">
                  <span>🍎</span>
                </button>
              </div>
            </div>
          </div>

          {/* Formulario de Registro */}
          <div className={`tabContent ${activeTab === "register" ? "activeTab" : "hiddenTab"}`}>
            <h2>Crea tu cuenta</h2>
            <p className="form-subtitle">Completa tus datos para comenzar</p>
            
            <form onSubmit={handleRegister}>
              <div className="form-row">
                <div className="formGroup">
                  <label htmlFor="register-name">Nombre Completo</label>
                  <div className="input-container">
                    <span className="input-icon">👤</span>
                    <input 
                      id="register-name"
                      type="text" 
                      className="inputField" 
                      placeholder="Nombre completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="formGroup">
                  <label htmlFor="register-username">Usuario</label>
                  <div className="input-container">
                    <span className="input-icon">🆔</span>
                    <input 
                      id="register-username"
                      type="text" 
                      className="inputField" 
                      placeholder="Nombre de usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="formGroup">
                <label htmlFor="register-email">Email</label>
                <div className="input-container">
                  <span className="input-icon">✉️</span>
                  <input 
                    id="register-email"
                    type="email" 
                    className="inputField" 
                    placeholder="Correo electrónico"
                    required
                  />
                </div>
              </div>
              
              <div className="formGroup">
                <label htmlFor="register-password">Contraseña</label>
                <div className="input-container">
                  <span className="input-icon">🔒</span>
                  <input 
                    id="register-password"
                    type={showPassword ? "text" : "password"} 
                    className="inputField" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    className="password-toggle" 
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                <div className="password-strength">
                  <div className="strength-meter">
                    <div className={`strength-level ${password.length > 0 ? 'active' : ''}`}></div>
                    <div className={`strength-level ${password.length >= 6 ? 'active' : ''}`}></div>
                    <div className={`strength-level ${password.length >= 8 ? 'active' : ''}`}></div>
                    <div className={`strength-level ${/[A-Z]/.test(password) && /[0-9]/.test(password) ? 'active' : ''}`}></div>
                  </div>
                  <span className="strength-text">
                    {password.length === 0 ? 'Ingresa tu contraseña' : 
                     password.length < 6 ? 'Débil' :
                     password.length < 8 ? 'Media' :
                     /[A-Z]/.test(password) && /[0-9]/.test(password) ? 'Fuerte' : 'Media'}
                  </span>
                </div>
              </div>
              
              <div className="formGroup">
                <label htmlFor="register-confirm-password">Confirmar Contraseña</label>
                <div className="input-container">
                  <span className="input-icon">🔒</span>
                  <input 
                    id="register-confirm-password"
                    type={showConfirmPassword ? "text" : "password"} 
                    className="inputField" 
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    className="password-toggle" 
                    onClick={toggleConfirmPasswordVisibility}
                    aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {password && confirmPassword && (
                  <div className="password-match">
                    {password === confirmPassword ? 
                      <span className="match-success">✓ Las contraseñas coinciden</span> : 
                      <span className="match-error">✗ Las contraseñas no coinciden</span>
                    }
                  </div>
                )}
              </div>
              
              <div className="terms-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  Acepto los <a href="#">Términos y Condiciones</a> y la <a href="#">Política de Privacidad</a>
                </label>
              </div>
              
              <button 
                type="submit" 
                className={`btnSubmit ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  "Crear cuenta"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
