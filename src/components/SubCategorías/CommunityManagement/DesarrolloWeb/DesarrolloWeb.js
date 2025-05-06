import React from 'react';
import './DesarrolloWeb.css'; 

const DesarrolloWeb = () => {
  return (
    <section id="DesarrolloWeb" className="DesarrolloWeb py-5">
      <h3>Desarrollo Web</h3>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
          <video className="card-img-top" controls>
              <source src="/assets/videos/osadia.mp4" type="video/mp4" />
            </video>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Osadía</h5>
              <p className="card-text">Sitio web moderno y responsivo para una marca con identidad visual atrevida y elegante.</p>
              <h5 className="card-title">Tecnologías utilizadas:</h5>
              <p className="card-text">HTML5, CSS3, Bootstrap 5, JavaScript, React JS, Sass, Vite, Git, GitHub y Vercel.</p>
              <a
                href="https://osadia-nine.vercel.app/"
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
          <video className="card-img-top" controls>
              <source src="/assets/videos/casa-los-abrazos.mp4" type="video/mp4" />
            </video>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Casa los Abrazos</h5>
              <p className="card-text">Sitio web moderno y amigable, diseñado para transmitir una experiencia cálida y visualmente atractiva.</p>
              <h5 className="card-title">Tecnologías utilizadas:</h5>
              <p className="card-text"> HTML5, CSS3, Bootstrap 5, JavaScript, React JS, App.js, Vite, Git, GitHub, Vercel, FontAwesome.</p>
              <a
                href="https://casa-los-abrazos.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto">
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
                href="https://proyecto-final-desarrollo-web-pied.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesarrolloWeb;
