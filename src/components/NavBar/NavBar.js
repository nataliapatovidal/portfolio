import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="navbar">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className="subtitulo-logo nav-creativa">
          Creativa Digital | Diseño <br /> & Desarrollo Front-end
        </div>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#SobreMi">Sobre Mi</Nav.Link>
            <Nav.Link href="#MisProyectos">Mis Proyectos</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
