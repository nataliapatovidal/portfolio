import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import './DiseñoGrafico.css';
import {
  imagenesDesarmario,
  imagenesEsperanza,
  imagenesPoderJudicial,
  imagenesCatalogoObras,
  imagenesCurriculumObras
} from './imagenesDiseño';

const DiseñoGrafico = () => {
  return (
    <section id="DiseñoGrafico" className="diseño-grafico py-3">
      <div className="container px-3 px-md-6">
        <div className="row justify-content-center">
          <Row className=" justify-content-center g-1">

              <Col lg={4} md={6} className="mb-4">

                <div className="card">
                  <div className="card-texto-diseño">
                    <Carousel>
                      {imagenesDesarmario.map((src, i) => (
                      <Carousel.Item key={i}>
                      <img className="d-block w-100" src={src} alt={`Desarmario ${i + 1}`} />
                      </Carousel.Item>
                      ))}
                    </Carousel>
                    <h5>Desarmario - Diseño para obra de teatro</h5>
                    <p>Obra teatral, realicé el diseño de la identidad visual completa. Me encargué de la cartelería, el diseño de banners para difusión, folletos informativos y calcomanías promocionales. Todo el material fue pensado para acompañar el enfoque crítico y actual de la obra.</p>
                  </div>
                    
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4">

                <div className="card">
                  <div className="card-texto-diseño">
                    <Carousel>
                      {imagenesEsperanza.map((src, i) => (
                      <Carousel.Item key={i}>
                        <img className="d-block w-100" src={src} alt={`Esperanza ${i + 1}`} />
                      </Carousel.Item>
                      ))}
                    </Carousel>
                    <h5>Mi Pueblo Esperanza - Gráfica con identidad local</h5>
                    <p>Obra teatral, trabajé también en el diseño gráfico aplicado a su comunicación. Desarrollé el afiche principal, un banner institucional, folletos de mano para entregar al público y calcomanías ilustradas.</p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4">

                <div className="card">
                  <div className="card-texto-diseño">
                    <Carousel>
                    {imagenesPoderJudicial.map((src, i) => (
                      <Carousel.Item key={i}>
                        <img className="d-block w-100" src={src} alt={`Poder Judicial ${i + 1}`} />
                      </Carousel.Item>
                      ))}
                  </Carousel>
                    <h5>Poder Judicial Santiago del Estero</h5>
                    <p>Diseños institucionales para el Poder Judicial. Realicé salutaciones festivas, avisos de diario, campañas de prevención y comunicaciones con teléfonos y direcciones de los tribunales del interior.</p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4">

                <div className="card">
                  <div className="card-texto-diseño">
                    <Carousel>
                    {imagenesCatalogoObras.map((src, i) => (
                      <Carousel.Item key={i}>
                        <img className="d-block w-100" src={src} alt={`Catálogo Obras ${i + 1}`} />
                      </Carousel.Item>
                      ))}
                  </Carousel>
                    <h5>Diseño de catálogo: Obras y Proyectos</h5>
                    <p>Para esta sección desarrollé un diseño limpio y funcional, destacando la solidez de las estructuras y su adaptabilidad a distintos espacios. Utilicé una paleta sobria y jerarquías visuales claras para resaltar cada proyecto con profesionalismo y coherencia visual.</p>
                  </div>
                </div>
              </Col>

               <Col lg={4} md={6} className="mb-4">

                <div className="card">
                  <div className="card-texto-diseño">
                    <Carousel>
                    {imagenesCurriculumObras.map((src, i) => (
                      <Carousel.Item key={i}>
                        <img className="d-block w-100" src={src} alt={`Curriculum Obras ${i + 1}`} />
                      </Carousel.Item>
                      ))}
                  </Carousel>
                    <h5>Diseño de Currículum: Obras y Proyectos</h5>
                    <p>Desarrollé piezas gráficas y contenidos visuales para presentar obras y proyectos de estructuras metálicas, destacando la funcionalidad, estética y solidez de cada realización. Mi enfoque se centró en comunicar de forma clara y atractiva las soluciones constructivas, cuidando la coherencia visual y la identidad de marca en cada pieza.</p>
                  </div>
                </div>
              </Col>

            </Row>
          </div>
        </div>
    </section>
  );
};

export default DiseñoGrafico;
