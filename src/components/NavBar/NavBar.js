import './NavBar.css';

const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" subtitulo-logo nav-creativa ">Creativa Digital | Diseño <br />& Desarrollo Front-end
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#SobreMi">Sobre Mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#MisProyectos">Mis Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
};

export default NavBar;