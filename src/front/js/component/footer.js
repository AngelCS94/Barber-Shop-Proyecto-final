import React, { useState, useEffect } from "react";
import "../../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const THRESHOLD = 240; // px desde el final para mostrar
  const handleScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset || 0;
    const windowHeight = window.innerHeight || 0;
    const documentHeight = document.documentElement.scrollHeight || 0;

    const distanceFromBottom = Math.max(documentHeight - (scrollTop + windowHeight), 0);
    const canScroll = documentHeight - windowHeight > 80; // página más alta que la ventana
    const hasScrolled = scrollTop > 10; // no mostrar si no se ha movido

    const nearBottom = distanceFromBottom <= THRESHOLD;

    setIsVisible(canScroll && hasScrolled && nearBottom);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);
  // Estado inicial
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

// Si no debe mostrarse, ni lo pintamos
if (!isVisible) return null;

return (
  <footer className="footer show" aria-hidden="false">
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <p className="text ms-1 mt-1 mb-1">
          <i className="bi bi-c-circle"></i> Copyright Barber Shop 2024 - All rights reserved
        </p>
        <div className="icon">
          <a href="https://4geeksacademy.com" rel="noopener noreferrer">
            <i className="bi bi-whatsapp text me-3"></i>
          </a>
          <a href="https://www.facebook.com/4geeksacademy" rel="noopener noreferrer">
            <i className="bi bi-facebook text me-3"></i>
          </a>
          <a href="https://www.instagram.com/4geeksacademy/" rel="noopener noreferrer">
            <i className="bi bi-instagram text me-3"></i>
          </a>
        </div>
      </div>
    </nav>
  </footer>
);
};