import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white">
      <div className="d-flex fs-4 fw-bold text-dark">
        Talento <span className="text-warning">Tech</span>
      </div>

      <nav className="d-flex gap-3">
        <Link to="/" className="text-secondary text-decoration-none">
          Presentacion
        </Link>
        <Link to="reservations" className="text-secondary text-decoration-none">
          Reservar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
