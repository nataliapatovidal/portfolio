import './App.css';
import NavBar from './components/NavBar/NavBar';
import SobreMi from './components/SobreMi/SobreMi';
import MisProyectos from './components/MisProyectos/MisProyectos';
import Footer from './components/footer/footer';
import Skills from './components/Skills/Skills';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <div className="App">
      <NavBar />
      
      <main className="container  mt-2 ">
        <SobreMi />
        <MisProyectos />
        <Skills />
        <Footer />

      </main>
    </div>
  );
}

export default App;
