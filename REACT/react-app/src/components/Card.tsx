import "./Card.css";
import { ReactNode } from "react";

interface bodyCardProps {
  children?: ReactNode;
}

function Card({ children }: bodyCardProps) {
  const width = { width: "18rem" };

  return (
    <div className="card" style={width}>
      <div className="card-body">
        {children}
        <a href="http://localhost:5173/" className="btn btn-primary">
          MAGIA
        </a>
      </div>
    </div>
  );
}
export default Card;
