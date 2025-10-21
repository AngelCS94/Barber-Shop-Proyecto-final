import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/footer.css";

export const Footer = ({
// Si tu app scrollea en un contenedor (por ej. #app-root), pásalo aquí.
// Si el scroll es del window, deja esto en null.
scrollContainerSelector = null,
threshold = 80 // píxeles antes del final para mostrar
}) => {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const container = scrollContainerSelector ? document.querySelector(scrollContainerSelector) : null;
  const scroller = document.scrollingElement || document.documentElement;
  const target = container || window;

  const getMetrics = () => {
    if (container) {
      return {
        st: container.scrollTop,
        vh: container.clientHeight,
        sh: container.scrollHeight
      };
    }
    return {
      st: scroller.scrollTop,
      vh: window.innerHeight,
      sh: scroller.scrollHeight
    };
  };

  const update = () => {
    const { st, vh, sh } = getMetrics();
    const hasScroll = sh > vh + 1;             // solo mostrar si hay scroll real
    const nearBottom = st + vh >= sh - threshold;
    setIsVisible(hasScroll && nearBottom);
  };

  target.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);

  // estado inicial
  update();

  return () => {
    target.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  };
}, [scrollContainerSelector, threshold]);

// Reserva espacio solo cuando es visible para no tapar el último contenido
useEffect(() => {
  document.body.classList.toggle("has-sticky-footer", isVisible);
  return () => document.body.classList.remove("has-sticky-footer");
}, [isVisible]);

return (
  <footer className={`footer ${isVisible ? "show" : ""}`} aria-hidden={!isVisible}>
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <p className="text ms-1 mt-1 mb-1">
          <i className="bi bi-c-circle"></i> Copyright Barber Shop 2024 - All rights reserved
        </p>
        <div className="icon">
          <a href="https://4geeksacademy.com" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="bi bi-whatsapp text me-3"></i>
          </a>
          <a href="https://www.facebook.com/4geeksacademy" rel="noopener noreferrer" aria-label="Facebook">
            <i className="bi bi-facebook text me-3"></i>
          </a>
          <a href="https://www.instagram.com/4geeksacademy/" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bi bi-instagram text me-3"></i>
          </a>
        </div>
      </div>
    </nav>
  </footer>
);
};