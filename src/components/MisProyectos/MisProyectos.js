import React from 'react';
import './MisProyectos.css';
import DiseñoGrafico from '../SubCategorías/CommunityManagement/DesarrolloWeb/DiseñoGrafico/DiseñoGrafico';
import DesarrolloWeb from '../SubCategorías/CommunityManagement/DesarrolloWeb/DesarrolloWeb';
import CommunityManagement from '../SubCategorías/CommunityManagement/CommunityManagement';

const MisProyectos = () => {
  return (
    <section id="MisProyectos" className="mis-proyectos py-5">
      <h2>Mis Proyectos</h2>
      <div className="row mt-4">
          <DiseñoGrafico />
          <DesarrolloWeb />
          <CommunityManagement />
      </div>
    </section>
  );
};

export default MisProyectos;

