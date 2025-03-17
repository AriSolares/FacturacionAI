import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";  
import "./landing.css"; 

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ users: 0, facturas: 0, ahorro: 0 });
  const statsRef = useRef(null);
  const targetCounts = { users: 5000, facturas: 25000, ahorro: 40 };
  const counterDuration = 2000; // ms

  useEffect(() => {
    // Fade-in animation for sections
    const sections = document.querySelectorAll(".animate-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          entry.target.classList.add("animate-in");
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -100px 0px" });

    sections.forEach(section => {
      section.id = section.id || `section-${Math.random().toString(36).substr(2, 9)}`;
      observer.observe(section);
    });

    // Counter animation
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      sections.forEach(section => observer.unobserve(section));
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
    };
  }, []);

  const animateCounters = () => {
    const startTime = Date.now();
    
    const updateCounters = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / counterDuration, 1);
      
      setCounters({
        users: Math.floor(progress * targetCounts.users),
        facturas: Math.floor(progress * targetCounts.facturas),
        ahorro: Math.floor(progress * targetCounts.ahorro)
      });
      
      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };
    
    requestAnimationFrame(updateCounters);
  };

  return (
    <div className="landing-section-container">

      {/* Hero Section */}
      <section className="hero-section animate-section" id="hero">
        <div className="hero-background"></div>
        <div className="section-container hero-section hero-container" >
          <div className="hero-content">
            <h1 className="hero-title">
              Revoluciona tu facturación con 
              <span className="gradient-text"> Inteligencia Artificial</span>
            </h1>
            <p className="hero-subtitle">Automatiza procesos, reduce errores y ahorra tiempo con nuestra plataforma impulsada por IA.</p>
            <div className="hero-cta">
              <a href="#signup" className="btn btn-primary btn-lg pulse-animation">
                Prueba ahora
              </a>
              <a href="#demo" className="btn btn-outline btn-lg">
                <span className="play-icon">▶</span> Ver demo
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/hero.png" alt="Dashboard de facturación" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section animate-section" id="stats" ref={statsRef}>
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">{counters.users.toLocaleString()}+</div>
              <div className="stat-label">Usuarios activos</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📄</div>
              <div className="stat-number">{counters.facturas.toLocaleString()}+</div>
              <div className="stat-label">Facturas generadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-number">{counters.ahorro}%</div>
              <div className="stat-label">Ahorro de tiempo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Clave */}
      <section className="benefits-section animate-section" id="benefits">
        <div className="section-container">
          <h2 className="section-title">Beneficios Clave</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src="/automation.svg" alt="Automatización" />
              </div>
              <h3 className="benefit-title">Automatización</h3>
              <p className="benefit-description">Optimiza tus procesos sin complicaciones y reduce el trabajo manual.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src="/precision.svg" alt="Precisión" />
              </div>
              <h3 className="benefit-title">Precisión</h3>
              <p className="benefit-description">Reduce errores y mejora la exactitud en todas tus facturas.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src="/rocket.svg" alt="Rapidez" />
              </div>
              <h3 className="benefit-title">Rapidez</h3>
              <p className="benefit-description">Procesos rápidos y eficientes que ahorran tiempo valioso.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src="/lock.svg" alt="Seguridad" />
              </div>
              <h3 className="benefit-title">Seguridad</h3>
              <p className="benefit-description">Protección y confidencialidad de tus datos garantizada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Características y Funcionalidades */}
      <section className="features-section animate-section" id="features">
        <div className="section-container">
          <h2 className="section-title">Características y Funcionalidades</h2>
          
          <div className="feature-row">
            <div className="feature-content">
              <div className="feature-badge">Nuevo</div>
              <h3 className="feature-title">Generación Automática de Facturas</h3>
              <p className="feature-description">
                Con un solo clic, crea facturas precisas y personalizadas utilizando nuestra avanzada tecnología de IA.
              </p>
              <ul className="feature-list">
                <li>Reconocimiento automático de datos</li>
                <li>Plantillas personalizables</li>
                <li>Validación fiscal integrada</li>
              </ul>
            </div>
            <div className="feature-image">
              <img src="/facturas-02.svg" alt="Generación de Facturas" className="feature-img"/>
            </div>
          </div>
          
          <div className="feature-row reverse">
            <div className="feature-content">
              <div className="feature-badge">Popular</div>
              <h3 className="feature-title">Dashboard Inteligente</h3>
              <p className="feature-description">
                Visualiza todos tus datos de facturación en un panel intuitivo con análisis en tiempo real.
              </p>
              <ul className="feature-list">
                <li>Gráficos interactivos</li>
                <li>Análisis predictivo</li>
                <li>Alertas personalizadas</li>
              </ul>
            </div>
            <div className="feature-image">
              <img src="/facturas-01.svg" alt="Dashboard Inteligente" className="feature-img"/>
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="pricing-section animate-section" id="pricing">
        <div className="section-container">
          <h2 className="section-title">Planes y Precios</h2>
          <p className="section-subtitle">Elige el plan que mejor se adapte a tus necesidades</p>
          
          <div className="pricing-toggle">
            <span>Mensual</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span>Anual <span className="discount-badge">20% dto.</span></span>
          </div>
          
          <div className="pricing-grid">
            {/* Plan Básico */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Básico</h3>
                <p className="pricing-subtitle">Ideal para pequeños negocios</p>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">9</span>
                <span className="period">.99/mes</span>
              </div>
              <ul className="pricing-features">
                <li>Hasta 200 facturas por mes</li>
                <li>Soporte estándar</li>
                <li>Acceso limitado a funciones de IA</li>
                <li>1 usuario</li>
              </ul>
              <a href="#signup" className="btn btn-outline btn-block">Seleccionar</a>
            </div>
            
            {/* Plan Pro */}
            <div className="pricing-card popular">
              <div className="popular-badge">Más popular</div>
              <div className="pricing-header">
                <h3 className="pricing-title">Pro</h3>
                <p className="pricing-subtitle">Para negocios en crecimiento</p>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">19</span>
                <span className="period">.99/mes</span>
              </div>
              <ul className="pricing-features">
                <li>Hasta 1000 facturas por mes</li>
                <li>Soporte prioritario</li>
                <li>Acceso a todas las funciones de IA</li>
                <li>5 usuarios</li>
                <li>Reportes avanzados</li>
              </ul>
              <a href="#signup" className="btn btn-primary btn-block">Seleccionar</a>
            </div>
            
            {/* Plan Enterprise */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Enterprise</h3>
                <p className="pricing-subtitle">Para grandes empresas</p>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">49</span>
                <span className="period">.99/mes</span>
              </div>
              <ul className="pricing-features">
                <li>Facturas ilimitadas</li>
                <li>Soporte 24/7</li>
                <li>Funciones de IA personalizadas</li>
                <li>Usuarios ilimitados</li>
                <li>API completa</li>
                <li>Integración con ERP</li>
              </ul>
              <a href="#signup" className="btn btn-outline btn-block">Contactar ventas</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials-section animate-section" id="testimonials">
        <div className="section-container">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Esta plataforma ha revolucionado nuestra forma de gestionar facturas. Ahorramos horas cada semana y los errores se han reducido drásticamente."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <div className="avatar-placeholder">MR</div>
                </div>
                <div className="testimonial-info">
                  <h4>María Rodríguez</h4>
                  <p>Directora Financiera, TechSolutions</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"La integración con nuestro sistema existente fue sorprendentemente fácil. El soporte técnico es excepcional y siempre están disponibles para ayudar."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <div className="avatar-placeholder">JL</div>
                </div>
                <div className="testimonial-info">
                  <h4>Juan López</h4>
                  <p>CEO, Innovatech</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="faq-section animate-section" id="faq">
        <div className="section-container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          
          <div className="faq-section-container">
            <div className="faq-item">
              <input type="checkbox" id="faq1" className="faq-toggle" />
              <label htmlFor="faq1" className="faq-question">
                <span className="faq-icon">❓</span> ¿Cómo funciona el sistema?
                <span className="faq-arrow"></span>
              </label>
              <div className="faq-answer">
                <p>Nuestro sistema automatiza la generación y gestión de facturas utilizando inteligencia artificial. La plataforma analiza tus datos, identifica patrones y automatiza tareas repetitivas, permitiéndote enfocarte en lo que realmente importa para tu negocio.</p>
              </div>
            </div>

            <div className="faq-item">
              <input type="checkbox" id="faq2" className="faq-toggle" />
              <label htmlFor="faq2" className="faq-question">
                <span className="faq-icon">🔒</span> ¿Es seguro el manejo de mis datos?
                <span className="faq-arrow"></span>
              </label>
              <div className="faq-answer">
                <p>Sí, contamos con altos estándares de seguridad y cumplimiento de normativas de protección de datos. Utilizamos encriptación de extremo a extremo y seguimos las mejores prácticas de la industria para garantizar la seguridad de tu información.</p>
              </div>
            </div>

            <div className="faq-item">
              <input type="checkbox" id="faq3" className="faq-toggle" />
              <label htmlFor="faq3" className="faq-question">
                <span className="faq-icon">💳</span> ¿Cuáles son los métodos de pago aceptados?
                <span className="faq-arrow"></span>
              </label>
              <div className="faq-answer">
                <p>Aceptamos tarjetas de crédito, débito y pagos electrónicos como PayPal y Stripe. También ofrecemos opciones de facturación para planes empresariales.</p>
              </div>
            </div>

            <div className="faq-item">
              <input type="checkbox" id="faq4" className="faq-toggle" />
              <label htmlFor="faq4" className="faq-question">
                <span className="faq-icon">📄</span> ¿Puedo personalizar mis facturas?
                <span className="faq-arrow"></span>
              </label>
              <div className="faq-answer">
                <p>Sí, puedes personalizar tus facturas con logotipos, colores y formatos específicos según tu negocio. Ofrecemos múltiples plantillas y opciones de personalización para que tus facturas reflejen la identidad de tu marca.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate-section" id="signup">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para revolucionar tu facturación?</h2>
            <p className="cta-subtitle">Únete a miles de empresas que ya están ahorrando tiempo y dinero.</p>
            <form className="cta-form">
              <input type="email" placeholder="Tu correo electrónico" className="cta-input" />
              <button type="submit" className="btn btn-primary">Comenzar gratis</button>
            </form>
            <p className="cta-disclaimer">Prueba gratuita por 14 días. No se requiere tarjeta de crédito.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/Invoicely-02.svg" alt="Logo" className="footer-logo" />
              <p className="footer-tagline">Facturación inteligente para tu negocio</p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="social-icon">f</i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="social-icon">t</i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="social-icon">in</i>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Producto</h4>
              <ul>
                <li><a href="#">Características</a></li>
                <li><a href="#">Precios</a></li>
                <li><a href="#">Integraciones</a></li>
                <li><a href="#">Novedades</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Empresa</h4>
              <ul>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Soporte</h4>
              <ul>
                <li><a href="#">Centro de ayuda</a></li>
                <li><a href="#">Documentación</a></li>
                <li><a href="#">Estado del sistema</a></li>
                <li><a href="#">Política de privacidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="copyright">© 2025 Facturación AI. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <a href="#">Términos de servicio</a>
              <a href="#">Privacidad</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
