import Logo from "@assets/UNMSM.svg";
import ImagenLinker from "../ImagenLinker/ImagenLinker";
import { Link } from "react-router-dom";
import "./Menu.css";

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
        <ImagenLinker fuente={Logo} className="imagen-linker-menu" />
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
