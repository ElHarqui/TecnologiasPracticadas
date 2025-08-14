import "./NombreUsuario.css";

function Nombre() {
  const nombre = "Harqui";

  if (nombre === "Harqui") {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Desconocido</h1>;
}
export default Nombre;
