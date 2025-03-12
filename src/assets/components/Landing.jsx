import { Link } from "react-router-dom";
import { useEffect } from "react";  
import "./css/landing.css"; 

const LandingPage = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="all">
      {/* Sección Principal (Hero) */}
      <section className="py-5 hero fade-section">
        <div className="hero-all container"> 
          <div className="hero-info">
            <h1 className="display-4">
              Revoluciona tu facturación con 
              <span style={{ color: "var(--btn1)" }}> Inteligencia Artificial</span>
            </h1>
            <p className="lead">Automatiza procesos, reduce errores y ahorra tiempo.</p>
            <a href="#signup" className="btn btn-light btn-lg mt-3 btn-prueba">
              Prueba ahora
            </a>
          </div>
          <div className="hero-image">
            <img className="img-fluid" src="./public/hero.png" alt="hero image" />
          </div>
        </div>
      </section>

      {/* Beneficios Clave */}
      <section className="benefits fade-section">
        <div className="contenedor container">
          <h2 className="text-center mb-4">Beneficios Clave</h2>
          <div className="row">
            <div className="col-md-3 text-center">
              <img className="img-fluid landing-icons" src="./public/automation.svg" alt="Automatización" />
              <h5>Automatización</h5>
              <p>Optimiza tus procesos sin complicaciones.</p>
            </div>
            <div className="col-md-3 text-center">
              <img className="img-fluid landing-icons" src="./public/precision.svg" alt="Precisión" />
              <h5>Precisión</h5>
              <p>Reduce errores y mejora la exactitud.</p>
            </div>
            <div className="col-md-3 text-center">
              <img className="img-fluid landing-icons" src="./public/rocket.svg" alt="Rapidez" />
              <h5>Rapidez</h5>
              <p>Procesos rápidos y eficientes.</p>
            </div>
            <div className="col-md-3 text-center">
              <img className="img-fluid landing-icons" src="./public/lock.svg" alt="Seguridad" />
              <h5>Seguridad</h5>
              <p>Protección y confidencialidad de tus datos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Características y Funcionalidades */}
      <section className="py-5 fade-section">
        <div className="contenedor char">
          <h2 className="text-center mb-4">Características y Funcionalidades</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4>Generación Automática de Facturas</h4>
              <p>Con un solo clic, crea facturas precisas y personalizadas.</p>
            </div>
            <div className="col-md-6 caracteristicas">
              <img src="./public/facturas-02.svg" alt="Generación de Facturas" className="img-fluid"/>
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="planes py-5 fade-section">
        <div className="contenedor">
          <h2 className="text-center mb-4">Planes y Precios</h2>
          <div className="row">
            {/* Plan Básico */}
      <div className="col-md-4 pricebox">
        <div className="card text-center mb-3">
          <div className="card-header">Básico</div>
          <div className="card-body">
            <h5 className="card-title">$9.99/mes</h5>
            <p className="card-text"><span style={{ fontWeight: "600" }}>Ideal para pequeños negocios.</span></p>
            <ul>
              <li>Hasta 200 facturas por mes</li>
              <li>Soporte estándar</li>
              <li>Acceso limitado a funciones de IA</li>
            </ul>
            <a href="#signup" className="btn btn-primary btn-precios">Seleccionar</a>
          </div>
        </div>
      </div>

      {/* Plan Pro */}
      <div className="col-md-4 pricebox">
        <div className="card text-center mb-3">
          <div className="card-header">Plan Pro</div>
          <div className="card-body">
            <h5 className="card-title">$19.99/mes</h5>
            <p className="card-text"><span style={{ fontWeight: "600" }}>Para negocios en crecimiento.</span></p>
            <ul>
              <li>Hasta 1000 facturas por mes</li>
              <li>Soporte prioritario</li>
              <li>Acceso a todas las funciones de IA</li>
            </ul>
            <a href="#signup" className="btn btn-primary btn-precios">Seleccionar</a>
          </div>
        </div>
      </div>
          </div>
        </div>
      </section>


      {/* Preguntas Frecuentes */}
  <section className="py-5 fade-section faq-section">
  <div className="contenedor">
    <h2 className="text-center mb-4 faq-title">Preguntas Frecuentes</h2>
    <div className="faq-container">
      <div className="faq-item">
        <input type="checkbox" id="faq1" className="faq-toggle" />
        <label htmlFor="faq1" className="faq-question">
          <span className="faq-icon">❓</span> ¿Cómo funciona el sistema?
        </label>
        <div className="faq-answer">
          Nuestro sistema automatiza la generación y gestión de facturas utilizando inteligencia artificial.
        </div>
      </div>

      <div className="faq-item">
        <input type="checkbox" id="faq2" className="faq-toggle" />
        <label htmlFor="faq2" className="faq-question">
          <span className="faq-icon">🔒</span> ¿Es seguro el manejo de mis datos?
        </label>
        <div className="faq-answer">
          Sí, contamos con altos estándares de seguridad y cumplimiento de normativas de protección de datos.
        </div>
      </div>

      <div className="faq-item">
        <input type="checkbox" id="faq3" className="faq-toggle" />
        <label htmlFor="faq3" className="faq-question">
          <span className="faq-icon">💳</span> ¿Cuáles son los métodos de pago aceptados?
        </label>
        <div className="faq-answer">
          Aceptamos tarjetas de crédito, débito y pagos electrónicos como PayPal y Stripe.
        </div>
      </div>

      <div className="faq-item">
        <input type="checkbox" id="faq4" className="faq-toggle" />
        <label htmlFor="faq4" className="faq-question">
          <span className="faq-icon">📄</span> ¿Puedo personalizar mis facturas?
        </label>
        <div className="faq-answer">
          Sí, puedes personalizar tus facturas con logotipos, colores y formatos específicos según tu negocio.
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-dark text-white py-4 fade-section">
        <div className="footer text-center">
          <p>© 2025 Facturación AI. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
