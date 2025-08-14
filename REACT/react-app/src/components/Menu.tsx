import Logo from "../assets/UNMSM.svg";
import ImagenLinker from "./ImagenLinker";
import { Link } from "react-router-dom";

function MenuButton({
  to,
  label,
  id,
}: {
  to: string;
  label: string;
  id: string;
}) {
  return (
    <li>
      <Link to={to}>
        <button id={id}>{label}</button>
      </Link>
    </li>
  );
}

function PrincipalMenu() {
  return (
    <div className="menu">
      <Link to="/">
        <ImagenLinker fuente={Logo} />
      </Link>
      <nav>
        <ul className="menu-list">
          <MenuButton to="/galeria" label="Galeria" id="BotonGaleria" />
          <MenuButton to="/proyectos" label="Proyectos" id="BotonProyectos" />
          <MenuButton to="/acerca-de-mi" label="Acerca de mi" id="Acerca" />
        </ul>
      </nav>
    </div>
  );
}
export default PrincipalMenu;
/* <div className="news">
        <a href="#">
          NASA’s Webb Delivers Deepest Infrared Image of Universe Yet
        </a>
        <menu>
          <li>
            <button id="BotonGaleria">Galeria</button>
          </li>
          <li>
            <button id="BotonProyectos">Proyectos</button>
          </li>
        </menu>
      </div> */
