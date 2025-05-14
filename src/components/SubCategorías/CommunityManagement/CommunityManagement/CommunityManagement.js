import React from 'react';
import './CommunityManagement.css';

const CommunityManagement = () => {
  return (
    <section id="CommunityManagement" className=" CommunityManagement py-3">
      <div className="container px-4 px-md-6">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">

          <div className="card h-100 shadow w-100">

            <video className="card-img-top" controls>
              <source src="/assets/videos/osadia-instagram.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Instagram Osadía</h5>
              <p className="card-text">Creación y desarrollo del perfil desde cero. Diseño de identidad visual, estrategia de contenido, redacción creativa, fotografía de producto y gestión de comunidad. Contenido enfocado en educación, promociones y eventos para posicionar la marca de forma cercana y atractiva.</p>
              <a
                href="https://www.instagram.com/osadiawine/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Ver Perfil
              </a>
            </div>
          </div>
        </div>


      </div>
        {/* duplicar  card aca */}
      </div>
    </section>
  );
};

export default CommunityManagement;

