import React, { useMemo } from "react";
import DibujoCard from "@components/DibujoCard";
import "./dibujos.css";

// importa todas las imágenes de las subcarpetas de assets/dibujos
const dibujosImportados = import.meta.glob(
  "../../assets/dibujos/*/*.{jpg,png,jpeg,gif,svg,webp,bmp,tif,tiff}",
  { eager: true }
);

function getTitulo(path: string) {
  const parts = path.split("/");
  const filename = parts[parts.length - 1] ?? path;
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  return decodeURIComponent(nameWithoutExt).replace(/[_-]+/g, " ");
}

export default function Dibujos() {
  const dibujosPorAño = useMemo(() => {
    const resultado: Record<
      string,
      { titulo: string; imagen: string; path: string }[]
    > = {};

    Object.entries(dibujosImportados).forEach(([path, mod]) => {
      const partes = path.split("/");
      const año = partes[partes.length - 2] ?? "otros";
      const titulo = getTitulo(path);
      const imagen = (mod as any).default ?? (mod as any);

      if (!resultado[año]) resultado[año] = [];
      resultado[año].push({ titulo, imagen, path });
    });

    // ordenar títulos dentro de cada año
    Object.keys(resultado).forEach((año) => {
      resultado[año].sort((a, b) =>
        a.titulo.localeCompare(b.titulo, undefined, { sensitivity: "base" })
      );
    });

    return resultado;
  }, []);

  const años = useMemo(
    () => Object.keys(dibujosPorAño).sort((a, b) => Number(b) - Number(a)),
    [dibujosPorAño]
  );

  return (
    <>
      <div className="dibujos-container">
        <h1>Mis dibujos</h1>
        {años.map((año) => {
          const dibujos = dibujosPorAño[año];
          return (
            <section key={año} className="dibujos-seccion">
              <h2>{año}</h2>
              {!dibujos || dibujos.length === 0 ? (
                <p>No hay imágenes disponibles para este año.</p>
              ) : (
                <div className="dibujos-lista" aria-label={`Galería ${año}`}>
                  {dibujos.map((dibujo) => (
                    <DibujoCard
                      key={dibujo.path}
                      titulo={dibujo.titulo}
                      imagen={dibujo.imagen}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
