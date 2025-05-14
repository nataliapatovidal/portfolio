import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import './DiseñoGrafico.css';
import {
  imagenesDesarmario,
  imagenesEsperanza,
  imagenesPoderJudicial
} from './imagenesDiseño';

const DiseñoGrafico = () => {
  return (
    <section id="DiseñoGrafico" className="diseño-grafico py-5">
      <div className="container px-4 px-md-5">
        <div className="row justify-content-center">
          <Row className="g-4 justify-content-center">
              <Col lg={4} md={6}>
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

            {/* Card 2 - Mi Pueblo Esperanza */}
              <Col lg={4} md={6}>
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

            {/* Card 3 - Poder Judicial */}
              <Col lg={4} md={6}>
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
            </Row>
          </div>
        </div>
    </section>
  );
};

export default DiseñoGrafico;
