import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SobreMi from './components/SobreMi/SobreMi';
import MisProyectos from './components/MisProyectos/MisProyectos';
import Skills from './components/Skills/Skills';
import { Component } from 'react';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <main className="container  mt-2 ">
        <SobreMi />
        <MisProyectos />
        <Skills />

      </main>
    </div>
  );
}

export default App;
