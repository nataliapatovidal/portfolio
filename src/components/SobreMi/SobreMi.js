import React, { useEffect, useState } from 'react';
import './SobreMi.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SobreMi = () => {
  const [texto, setTexto] = useState('');
  const mensaje = 'Bienvenidos a mi Portfolio Creativo';

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      setTexto(mensaje.slice(0, i + 1));
      i++;
      if (i === mensaje.length) clearInterval(intervalo);
    }, 100); 
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section id="SobreMi">
      <div className="logo-section">
        <div className="logo-container">
          <span className="initials">NV</span>
          <span className="nombre-logo">Natalia Vidal</span>
        </div>
      </div>
      <div className="sobre-mi-wrapper container-fluid">
        
        <div className="foto-perfil">
          <img src="/perfil.png" alt="Foto de Natalia Vidal" />
        </div>
    <div className="texto-presentacion">
          <h3 className="maquina-escribir">{texto}<span className="cursor">|</span></h3>
          <p>Diseñadora creativa, busco nuevos retos en una empresa que promueva mi crecimiento profesional y me permita aportar valor con mis habilidades. Actualmente estoy dando mis primeros pasos como desarrolladora web, combinando creatividad con conocimientos técnicos para crear soluciones.</p>
          <h4>Si quieres ponerte en contacto conmigo escribime a nataliapatriciavidal@gmail.com{" "}
            <a href="mailto:nataliapatriciavidal@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Escribime un mail" title="Enviar mail">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/natalia-p-vidal" target="_blank" rel="noopener noreferrer" aria-label="Ir a LinkedIn" title="Ver perfil en LinkedIn">
  <i className="bi bi-linkedin"></i>
</a>
          </h4>
          <a href="/CV-NataliaVidal.pdf" download className="btn btn-primary mt-3">Descargar mi CV</a>
        </div>   
      </div>
    </section>
  );
};

export default SobreMi;
