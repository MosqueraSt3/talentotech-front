import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const ReservationForm: React.FC = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log(`Reserva creada para: ${name}`);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del cliente"
      />
      <Button text="Crear Reserva" onClick={handleSubmit} />
    </form>
  );
};

export default ReservationForm;
