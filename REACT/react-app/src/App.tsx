import { Routes, Route } from "react-router-dom";
import PrincipalMenu from "./components/Menu";
import Footer from "./components/Footer";
import Inicio from "./pages/inicio";
import Dibujos from "./pages/dibujos";
import Proyectos from "./pages/proyectos";
import "./services/App.css";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function startTour() {
  const driverObj = driver({
    showProgress: true,
    showButtons: ["next", "previous", "close"],
    steps: [
      {
        element: "#BotonGaleria",
        popover: {
          title: "Galería",
          description: "Aquí puedes ver tus dibujos.",
          side: "bottom",
        },
      },
      {
        element: "#BotonProyectos",
        popover: {
          title: "Proyectos",
          description: "Aquí están tus proyectos.",
          side: "bottom",
        },
      },
      {
        element: "#Acerca",
        popover: {
          title: "Acerca de mí",
          description: "Conoce más sobre ti.",
          side: "bottom",
        },
      },
    ],
  });

  driverObj.drive();
}

function App() {
  return (
    <>
      <PrincipalMenu />
      <button onClick={startTour}>Mostrar Tour</button>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria" element={<Dibujos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/acerca-de-mi" element={<Inicio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
