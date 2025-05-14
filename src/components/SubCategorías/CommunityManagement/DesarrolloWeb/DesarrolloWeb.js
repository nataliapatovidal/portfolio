import React from 'react';
import './DesarrolloWeb.css';

const DesarrolloWeb = () => {
  return (
    <section id="DesarrolloWeb" className="DesarrolloWeb py-3">

      <div className="container px-4 px-md-6">
        <div className="row justify-content-center">
  
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">

            <div className="dw-card h-100 shadow w-100">
              <video className="dw-card-img-top" controls>
                <source src="/assets/videos/osadia.mp4" type="video/mp4" />
              </video>
              <div className="dw-card-body d-flex flex-column">
                <h5 className="dw-card-title">Osadía</h5>
                <p className="dw-card-text">
                  Sitio web moderno y responsivo para una marca con identidad visual atrevida y elegante.
                </p>
                <h5 className="dw-card-title">Tecnologías utilizadas:</h5>
                <p className="dw-card-text">
                  HTML5, CSS3, Bootstrap 5, JavaScript, React JS, Sass, Vite, Git, GitHub y Vercel.
                </p>
                <a
                  href="https://osadia-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dw-btn mt-auto"
                >
                  Ver Sitio
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">

            <div className="dw-card h-100 shadow w-100">
              <video className="dw-card-img-top" controls>
                <source src="/assets/videos/casa-los-abrazos.mp4" type="video/mp4" />
              </video>
              <div className="dw-card-body d-flex flex-column">
                <h5 className="dw-card-title">Casa los Abrazos</h5>
                <p className="dw-card-text">
                  Sitio web moderno y amigable, diseñado para transmitir una experiencia cálida y visualmente atractiva.
                </p>
                <h5 className="dw-card-title">Tecnologías utilizadas:</h5>
                <p className="dw-card-text">
                  HTML5, CSS3, Bootstrap 5, JavaScript, React JS, App.js, Vite, Git, GitHub, Vercel, FontAwesome.
                </p>
                <a
                  href="https://casa-los-abrazos.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dw-btn mt-auto"
                >
                  Ver Sitio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesarrolloWeb;
