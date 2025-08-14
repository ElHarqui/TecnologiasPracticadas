type Dibujo = {
  titulo: string;
  imagen: string;
};

const dibujosPorAño: Record<number, Dibujo[]> = {
  2023: [
    { titulo: "Paisaje digital", imagen: "/assets/dibujos/2023/paisaje.jpg" },
    { titulo: "Retrato a lápiz", imagen: "/assets/dibujos/2023/retrato.jpg" },
  ],
  2024: [
    {
      titulo: "Boceto de criatura",
      imagen: "/assets/dibujos/2024/criatura.jpg",
    },
  ],
};

export default function Dibujos() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mis dibujos</h1>
      {Object.entries(dibujosPorAño).map(([año, dibujos]) => (
        <section key={año}>
          <h2>{año}</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {dibujos.map((dibujo, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <img
                  src={dibujo.imagen}
                  alt={dibujo.titulo}
                  style={{
                    width: "200px",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <p>{dibujo.titulo}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

//export default Dibujos;
