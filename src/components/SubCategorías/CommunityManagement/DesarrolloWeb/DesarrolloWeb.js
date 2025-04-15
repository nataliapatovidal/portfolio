import React from 'react';
import './DesarrolloWeb.css'; // Por si querés agregar estilos personalizados

const DesarrolloWeb = () => {
  return (
    <section id="DesarrolloWeb" className="py-5">
      <h3>Desarrollo Web</h3>
      <p>Proyectos de sitios y aplicaciones web hechos en HTML, CSS, React, etc.</p>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <img src="ruta-a-tu-captura1.jpg" className="card-img-top" alt="Proyecto Web 1" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Portfolio Web</h5>
              <p className="card-text">Diseño y desarrollo de un portfolio responsive con React y Bootstrap.</p>
              <a
                href="https://tusitioejemplo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <img src="ruta-a-tu-captura1.jpg" className="card-img-top" alt="Proyecto Web 2" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Portfolio Web</h5>
              <p className="card-text">Diseño y desarrollo de un portfolio responsive con React y Bootstrap.</p>
              <a
                href="https://tusitioejemplo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <img src="ruta-a-tu-captura1.jpg" className="card-img-top" alt="Proyecto Web 3" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Portfolio Web</h5>
              <p className="card-text">Diseño y desarrollo de un portfolio responsive con React y Bootstrap.</p>
              <a
                href="https://tusitioejemplo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>

        {/* Podés duplicar esta card y cambiar el contenido para otros proyectos */}
      </div>
    </section>
  );
};

export default DesarrolloWeb;
