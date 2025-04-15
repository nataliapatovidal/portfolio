import React from 'react';
import './CommunityManagement.css';

const CommunityManagement = () => {
  return (
    <section id="CommunityManagement" className="py-5">
      <h3>Community Management</h3>
      <p>Gestión de redes, campañas, creación de contenido y planificación digital.</p>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <video className="card-img-top" controls>
              <source src="/videos/historias-instagram.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Historias para Instagram</h5>
              <p className="card-text">Planificación y diseño de contenido para campaña de lanzamiento.</p>
              <a
                href="https://instagram.com/cliente"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Ver Perfil
              </a>
            </div>
          </div>
        </div>

        {/* Podés duplicar esta card para otros proyectos de redes */}
      </div>
    </section>
  );
};

export default CommunityManagement;

