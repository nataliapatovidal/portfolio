import React from 'react';
import './DiseñoGrafico.css';

const DiseñoGrafico = () => {
  return (
    <section id="DiseñoGrafico" className="diseño-grafico-container">
      <div className="diseño-grafico-left">
        <h3>Diseño Gráfico</h3>
        <p>Identidad visual</p>
      </div>

      <div className="diseño-grafico-right">
        <div className="card escalonada escalonada-1">
        <div className="card-texto">
            <h5>Identidad Visual</h5>
            <p>Rediseño de marca para una tienda de ropa urbana.</p>
          </div>
          <img src="ruta-a-tu-imagen1.jpg" alt="Proyecto 1" />
        </div>

        <div className="card escalonada escalonada-2">
        <div className="card-texto">
            <h5>Editorial</h5>
            <p>Diseño de revista cultural con estilo minimalista.</p>
          </div>
          <img src="ruta-a-tu-imagen2.jpg" alt="Proyecto 2" />
        </div>

        <div className="card escalonada escalonada-3">
        <div className="card-texto">
            <h5>Afiches</h5>
            <p>Serie de afiches para eventos musicales en Córdoba.</p>
          </div>
          <img src="ruta-a-tu-imagen3.jpg" alt="Proyecto 3" />
        </div>
      </div>
    </section>
  );
};

export default DiseñoGrafico;
