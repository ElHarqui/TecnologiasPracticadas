//import { useState } from "react";

import { Routes, Route } from "react-router-dom"; // Importando rutas  para la navegación

// import Card from "./components/Card"; // Importando componente Card
import PrincipalMenu from "./components/Menu"; // Importando componente Menu
import FooterBody from "./components/FooterBody"; // Importando componente Footer
//importando paginas
import Inicio from "./pages/inicio";

import Dibujos from "./pages/dibujos";
import "./services/App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <PrincipalMenu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria" element={<Dibujos />} />
        <Route path="/proyectos" element={<h1>Proyectos realizados</h1>} />
        <Route path="/acerca-de-mi" element={<h1>Acerca de mi</h1>} />
      </Routes>

      <FooterBody />
    </>
  );
}

export default App;
