import React, { useState, useEffect } from "react";
import "../../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const THRESHOLD = 60; // píxeles desde el final para mostrar

  const onScrollOrResize = () => {
    const doc = document.documentElement;
    const body = document.body;

    const scrollTop = doc.scrollTop || body.scrollTop || 0;
    const clientHeight = doc.clientHeight || window.innerHeight || 0;
    const scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight);

    const nearBottom = scrollTop + clientHeight >= scrollHeight - THRESHOLD;
    setIsVisible(nearBottom);
  };

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
  onScrollOrResize();

  return () => {
    window.removeEventListener("scroll", onScrollOrResize);
    window.removeEventListener("resize", onScrollOrResize);
  };
}, []);

useEffect(() => {
  const cls = "has-sticky-footer";
  document.body.classList.toggle(cls, isVisible);
  return () => document.body.classList.remove(cls);
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