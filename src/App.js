import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SobreMi from './components/SobreMi/SobreMi';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <main className="container  mt-2 ">
        <SobreMi />

        <section id="servicios" className="py-5">
          <h2>Diseños</h2>
          <p>Aquí vas a encontrar algunos proyectos de diseño gráfico, interfaces web y branding.</p>
        </section>

        <section id="contacto" className="py-5">
          <h2>Contacto</h2>
          <p>¿Querés trabajar conmigo? ¡Escribime o descargá mi CV!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
