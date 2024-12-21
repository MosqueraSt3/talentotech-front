import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a la Gestión de Reservas Hoteleras</h1>
      <Link to="/reservations">
        <Button text="Gestionar Reservas" />
      </Link>
    </div>
  );
};

export default HomePage;
