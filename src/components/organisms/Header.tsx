import React from "react";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white shadow">
      <div className="d-flex fs-4 fw-bold text-dark">
        Talento <span className="text-warning">Tech</span>
      </div>

      <nav className="d-flex gap-3">
        <a href="#presentation" className="text-secondary text-decoration-none">
          Presentacion
        </a>
        <a href="#reservation" className="text-secondary text-decoration-none">
          Reservar
        </a>
      </nav>
    </header>
  );
};

export default Header;
