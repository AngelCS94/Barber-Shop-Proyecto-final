import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

const Header = () => {
  // 👉 Función para hacer scroll suave hasta una sección
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='header'>
        <img
          src="https://images.unsplash.com/photo-1534298261662-f8fdd25317db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="img-fluid-header"
          alt="..."
        />

        <div className="titleheader">
          <h1 className='display-1 fw-bold'>Zabaleta Asociados</h1>
          <h3>Tu administrador de fincas en Madrid</h3>
          <button
            className='btn btn-warning fw-bold'
            onClick={() => scrollToSection('contact')}
          >
            Contacta con nosotros
          </button>
        </div>

        <div className="cardHeader">
          <div className="card" style={{ width: '100%' }}>
            <div className="card-body-header row">
              <div className="card-item col-lg-4 col-md-6 col-12">
                <i className="fa-solid fa-location-dot"></i>
                <h2 className='card-title-Header'>ADDRESS</h2>
                <h3>Cl. Edison, 3, Chamartín, 28006 Madrid</h3>
              </div>

              <div className="card-item col-lg-4 col-md-6 col-12">
                <i className="fa-solid fa-phone-volume"></i>
                <h2 className='card-title-Header'>PHONE</h2>
                <h3>+34 606-66-66-66</h3>
                <h3>+34 966-66-66-66</h3>
              </div>

              <div className="card-item col-lg-4 col-md-12 col-12">
                <i className="fa-solid fa-clock"></i>
                <h2 className='card-title-Header'>HOURS</h2>
                <h3>Mon-Sat: 9am-8pm</h3>
                <h3>SUN: 9am-6pm</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
