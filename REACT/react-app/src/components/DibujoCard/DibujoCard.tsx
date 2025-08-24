import React from "react";
import "./DibujoCard.css";

type DibujoCardProps = {
  titulo: string;
  imagen: string;
  alt?: string;
  className?: string;
};

export default function DibujoCard({
  titulo,
  imagen,
  alt,
  className = "",
}: DibujoCardProps) {
  return (
    <figure className={`dibujo-card ${className}`}>
      <img
        src={imagen}
        alt={alt ?? titulo}
        className="dibujo-card__img"
        loading="lazy"
      />
      <figcaption className="dibujo-card__title">{titulo}</figcaption>
    </figure>
  );
}
