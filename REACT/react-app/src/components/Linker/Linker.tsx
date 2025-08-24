import ImagenLinker from "../ImagenLinker/ImagenLinker";
import "./Linker.css";
interface LinkerProps {
  Logo: string;
  Pagina: string;
  Mensaje?: string;
}

function Linker({ Logo, Pagina, Mensaje = "Visita mi perfil" }: LinkerProps) {
  return (
    <div>
      <a href={Pagina} target="_blank" rel="noopener noreferrer">
        <ImagenLinker fuente={Logo} className="imagen-linker-footer" />
        <p>{Mensaje}</p>
      </a>
    </div>
  );
}
export default Linker;
