import React, { useState } from 'react';
import './MisProyectos.css';
import DiseñoGrafico from '../SubCategorías/CommunityManagement/DiseñoGrafico/DiseñoGrafico';
import DesarrolloWeb from '../SubCategorías/CommunityManagement/DesarrolloWeb/DesarrolloWeb';
import CommunityManagement from '../SubCategorías/CommunityManagement/CommunityManagement/CommunityManagement';

const MisProyectos = () => {
  const [seccionActiva, setSeccionActiva] = useState('diseño');

  const renderSeccion = () => {
    switch (seccionActiva) {
      case 'diseño':
        return <DiseñoGrafico />;
      case 'desarrollo':
        return <DesarrolloWeb />;
      case 'community':
        return <CommunityManagement />;
      default:
        return null;
    }
  };

  return (
    <section id="MisProyectos" className="mis-proyectos py-5">
      <h2 className="text-center mb-4">Mis Proyectos</h2>

      <div className="tabs--fluid p-0 text-center mb-4">
        <button
          className={`tab-btn ${seccionActiva === 'diseño' ? 'active' : ''}`}
          onClick={() => setSeccionActiva('diseño')}
        >
          Diseño Gráfico
        </button>
        <button
          className={`tab-btn ${seccionActiva === 'desarrollo' ? 'active' : ''}`}
          onClick={() => setSeccionActiva('desarrollo')}
        >
          Desarrollo Web
        </button>
        <button
          className={`tab-btn ${seccionActiva === 'community' ? 'active' : ''}`}
          onClick={() => setSeccionActiva('community')}
        >
          Community Management
        </button>
      </div>

      <div className="tab-content">
        {renderSeccion()}
      </div>
    </section>
  );
};

export default MisProyectos;

