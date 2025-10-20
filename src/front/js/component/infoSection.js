import React from "react";
import "../../styles/infoSection.css";

const IMAGE_URL =
"https://images.unsplash.com/photo-1627549569239-0d1119c96f1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070";

const SERVICES = [
{ icon: "fa-file-invoice-dollar", title: "Balances contables trimestrales" },
{ icon: "fa-handshake", title: "Revisión de contratos con proveedores" },
{ icon: "fa-shield", title: "Optimización de pólizas, mantenimiento y reparaciones" },
{ icon: "fa-bolt", title: "Revisión anual de los contratos de luz" },
{ icon: "fa-people-group", title: "Trato personalizado y directo con los vecinos" },
{ icon: "fa-building", title: "Visitas recurrentes a las comunidades" }
];

const InfoSection = () => {
return (
  <section id="services" className="container">
    <div className="services-split">
      <div className="split-grid">
        {/* Imagen (izquierda) */}
        <figure className="split-media">
          <div className="media-inner">
            <img
              src={IMAGE_URL}
              alt="Gestión y atención cercana a comunidades de vecinos"
              className="split-img"
              loading="lazy"
              decoding="async"
            />
            <span className="media-overlay" aria-hidden="true"></span>
          </div>
        </figure>

        {/* Contenido (derecha) */}
        <div className="split-content">
          <h2 className="fw-bold mb-2">Servicios de administración de fincas</h2>
          <p className="lead text-muted mb-4">
            Gestión integral y transparente para tu comunidad en Madrid. Nos ocupamos de todo para
            que tú no tengas que preocuparte.
          </p>

          <div className="service-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card">
                <span className="icon-wrap" aria-hidden="true">
                  <i className={`fa-solid ${s.icon}`}></i>
                </span>
                <h6 className="service-title">{s.title}</h6>
              </div>
            ))}
          </div>

          <div className="cta-row">
            <a href="#contact" className="btn btn-warning fw-bold">Solicita presupuesto</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default InfoSection;