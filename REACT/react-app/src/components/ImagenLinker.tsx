import "./ImagenLinker.css";

interface ImagenLinkerProps {
  fuente: string;
  className?: string;
}

function ImagenLinker({ fuente, className }: ImagenLinkerProps) {
  return (
    <img
      src={fuente}
      className={className ? className : "imagen-linker"}
      alt={fuente.split("/").pop()?.split(".")[0] || "Logo"}
    />
  );
}

export default ImagenLinker;
