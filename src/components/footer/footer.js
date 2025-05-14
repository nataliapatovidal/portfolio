import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid-footer">
                <a href="#SobreMi" className="logo1-container">
                    <span className="initials1">NV</span>
                    <span className="nombre-logo1">Natalia Vidal</span>
                </a>

                <div className="contact-section">
                    <div className="social-links">
                        <a href="mailto:nataliapatriciavidal@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Escribime un mail" title="Enviar mail">
                            <i className="bi bi-envelope-fill"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/natalia-p-vidal" target="_blank" rel="noopener noreferrer" aria-label="Ir a LinkedIn" title="Ver perfil en LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <a href="/CV-NataliaVidal.pdf" download className="btn">Descargar mi CV</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
