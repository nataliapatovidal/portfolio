import React from 'react';
import './SobreMi.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const SobreMi = () => {
    return (
        <section id="Sobre-MI" className="">
  <div className="logo-section">
  
  <div className="logo-container">
    <span className="initials">NV</span>
    <span className="nombre-logo">Natalia Vidal</span>
  </div>
</div>


  <div className="sobre-mi-wrapper container-fluid">
    {/* Foto de perfil */}
    <div className="foto-perfil">
      <img src="/perfil.png" alt="Foto de Natalia Vidal" />
    </div>

    {/* Textos */}
    <div className="texto-presentacion">
      <h3>Bienvenidos a mi Portfolio Creativo</h3>
      <p>Diseñadora creativa, busco nuevos retos en una empresa que promueva mi crecimiento profesional y me permita aportar valor con mis habilidades. Actualmente estoy dando mis primeros pasos como desarrolladora web, combinando creatividad con conocimientos técnicos para crear soluciones.</p>
      <h4>Si quieres ponerte en contacto conmigo escribime a nataliapatriciavidal@gmail.com {""}<a href="mailto:nataliapatriciavidal@gmail.com"target="_blank"rel="noopener noreferrer"aria-label="Escribime un mail"title="Enviar mail"><i className="bi bi-envelope-fill"></i></a></h4>
      <a href="/CV-NataliaVidal.pdf" download className="btn btn-primary mt-3">Descargar mi CV</a>
    </div>
  </div>
</section>

    );
};

export default SobreMi;
