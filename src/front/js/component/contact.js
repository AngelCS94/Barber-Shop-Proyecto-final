import React, { useState } from "react";
import "../../styles/contact.css";

const Contact = () => {
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((f) => ({ ...f, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Aquí puedes integrar tu envío (fetch/EmailJS/etc.)
  console.log("Contacto:", form);
  alert("Gracias. Te contactaremos lo antes posible.");
  setForm({ name: "", email: "", phone: "", subject: "", message: "" });
};

return (
  <>
    <section id="contact" className="contact-section container">
      <div className="contact-grid">
        {/* Imagen */}
        <figure className="contact-media">
          <div className="media-inner">
            <img
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1600&auto=format&fit=crop"
              alt="Atención y asesoría para tu comunidad"
              className="contact-img"
              loading="lazy"
              decoding="async"
            />
            <span className="media-overlay" aria-hidden="true"></span>
          </div>
        </figure>

        {/* Contenido y formulario */}
        <div className="contact-card">
          <h2 className="fw-bold mb-2">Solicita presupuesto</h2>
          <p className="lead text-muted mb-4">
            Solicita tu presupuesto personalizado en Madrid sin compromiso.
          </p>

          {/* Canales rápidos */}
          <div className="quick-row">
            <a href="https://wa.me/34666666666" className="quick-item" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:+3499966666" className="quick-item">
              <i className="bi bi-telephone"></i>
              <span>(+34) 999 66 66</span>
            </a>
            <a href="mailto:info@barbershop.com" className="quick-item">
              <i className="bi bi-envelope"></i>
              <span>info@barbershop.com</span>
            </a>
          </div>

          {/* Formulario */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Nombre completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9 +()-]*"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="subject">Asunto</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntanos brevemente qué necesitas"
              />
            </div>

            <button type="submit" className="btn btn-warning fw-bold">
              Enviar solicitud
            </button>
          </form>
        </div>
      </div>
    </section>

    {/* Mapa (opcional) */}
    <section className="map-card container">
      <div className="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.598423755146!2d-3.683553222811296!3d40.439888254227704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422989055a08a7%3A0xb1a742c609c68c4b!2s4Geeks%20Academy%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1725646287369!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa ubicación"
        />
      </div>
    </section>
  </>
);
};

export default Contact;