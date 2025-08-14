import ImagenLinker from "./ImagenLinker";
import "./Linker.css";
interface interfaceLinker {
  Logo: string;
  Pagina: string;
  Mensaje?: string;
}

function Linker(linker: interfaceLinker) {
  const { Logo, Pagina, Mensaje = "Visita mi perfil" } = linker;
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
