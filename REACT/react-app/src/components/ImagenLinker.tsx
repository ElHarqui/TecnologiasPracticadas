interface interfaceLogo {
  fuente: string;
}
function ImagenLinker(logo: interfaceLogo) {
  const { fuente } = logo;
  return (
    <img
      src={fuente}
      className="logo"
      alt={fuente.split("/").pop()?.split(".")[0] || "Logo"} // Alternativa para extraer el nombre del archivo
      style={{ width: "2%", height: "2%" }}
    />
  );
}
export default ImagenLinker;
