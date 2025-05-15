import React, { useState } from 'react';
import { Carousel, Row, Col, Modal, Button } from 'react-bootstrap';
import './DiseñoGrafico.css';
import {
  imagenesDesarmario,
  imagenesEsperanza,
  imagenesPoderJudicial,
  imagenesCatalogoObras,
  imagenesCurriculumObras
} from './imagenesDiseño';

const DiseñoGrafico = () => {
  const [showModal, setShowModal] = useState(false);
  const [imagenesActuales, setImagenesActuales] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);

  const abrirGaleria = (imagenes, index = 0) => {
    setImagenesActuales(imagenes);
    setIndiceActual(index);
    setShowModal(true);
  };

  const cerrarModal = () => setShowModal(false);

  // Al hacer click en la imagen, avanza a la siguiente
  const manejarClickImagen = () => {
    setIndiceActual((prevIndex) => (prevIndex + 1) % imagenesActuales.length);
  };

  return (
    <section id="DiseñoGrafico" className="diseño-grafico py-3">
      <div className="container px-3 px-md-6">
        <div className="row justify-content-center">
          <Row className="justify-content-center g-1">

            <Col lg={4} md={6} className="mb-4">
              <div 
                className="card" 
                style={{ cursor: 'pointer' }} 
                onClick={() => abrirGaleria(imagenesDesarmario)}
              >
                <div className="card-texto-diseño">
                  <Carousel indicators={false} controls={false} touch={false} interval={null}>
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
              <div 
                className="card" 
                style={{ cursor: 'pointer' }} 
                onClick={() => abrirGaleria(imagenesEsperanza)}
              >
                <div className="card-texto-diseño">
                  <Carousel indicators={false} controls={false} touch={false} interval={null}>
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
              <div 
                className="card" 
                style={{ cursor: 'pointer' }} 
                onClick={() => abrirGaleria(imagenesPoderJudicial)}
              >
                <div className="card-texto-diseño">
                  <Carousel indicators={false} controls={false} touch={false} interval={null}>
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
              <div 
                className="card" 
                style={{ cursor: 'pointer' }} 
                onClick={() => abrirGaleria(imagenesCatalogoObras)}
              >
                <div className="card-texto-diseño">
                  <Carousel indicators={false} controls={false} touch={false} interval={null}>
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
              <div 
                className="card" 
                style={{ cursor: 'pointer' }} 
                onClick={() => abrirGaleria(imagenesCurriculumObras)}
              >
                <div className="card-texto-diseño">
                  <Carousel indicators={false} controls={false} touch={false} interval={null}>
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

      {/* Modal con carrusel para imágenes grandes */}
      <Modal show={showModal} onHide={cerrarModal} size="lg" centered>
        <Modal.Header closeButton className="justify-content-center">
          <div className="w-100 text-center">
          <Modal.Title className="modal-title-custom">Galería de imágenes</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body style={{ cursor: 'pointer' }} onClick={manejarClickImagen}>
          <img
            src={imagenesActuales[indiceActual]}
            alt={`Imagen grande ${indiceActual + 1}`}
            style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain' }}
          />
        </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button className="Button" onClick={cerrarModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
    </section>
  );
};

export default DiseñoGrafico;
