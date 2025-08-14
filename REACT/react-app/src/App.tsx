//import { useState } from "react";
//Importando logos
import FBLogo from "./assets/facebook.svg";
import GitHubLogo from "./assets/github-mark.svg";
import GmailLogo from "./assets/gmail.svg";
import { Routes, Route } from "react-router-dom"; // Importando rutas  para la navegación
import Linker from "./components/Linker"; // Importando componente Linker
import Card from "./components/Card"; // Importando componente Card
import PrincipalMenu from "./components/Menu"; // Importando componente Menu
//importando paginas
//import Inicio from "./pages/inicio";

import Dibujos from "./pages/dibujos";
import "./services/App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Bienvenido a mi pagina</h1>} />
        <Route path="/galeria" element={<Dibujos />} />
        <Route path="/proyectos" element={<h1>Proyectos realizados</h1>} />
        <Route path="/acerca-de-mi" element={<h1>Acerca de mi</h1>} />
      </Routes>

      <PrincipalMenu />
      <Card>
        <h1 className="card-title">Hola, soy Elharqui</h1>
        <p className="card-text">
          Esta es una pagina de ejemplo para practicar React y TypeScript.
          Puedes hacer clic en los enlaces a continuación para visitar mis
          perfiles en redes sociales.
        </p>
      </Card>
      <p className="description">
        Esta sera una pagina para practicar React y TypeScript. Al concluir el
        curso, se subira a GitHub. Terminara siendo una pagina de portafolio y
        dibujos dijitales.
      </p>

      <footer>
        <Linker
          Logo={FBLogo}
          Pagina="https://www.facebook.com/Elharqui/"
          Mensaje="Visita mi Facebook"
        />
        <Linker
          Logo={GitHubLogo}
          Pagina="https://github.com/ElHarqui"
          Mensaje="Visita mi GitHub"
        />
        <Linker
          Logo={GmailLogo}
          Pagina="https://mail.google.com/mail/?view=cm&fs=1&to=sebastianlps1421@gmail.com&su=Consulta%20sobre%20el%20curso%20de%20React"
          Mensaje="Enviame un correo"
        />
        <p>Elharqui</p>
        <p>2025</p>
      </footer>
    </>
  );
}

export default App;
