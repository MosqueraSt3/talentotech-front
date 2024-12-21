import React, { useEffect, useState } from "react";
import { fetchReservations } from "../services/api";
import ReservationList from "../components/organisms/ReservationList";

const ReservationsPage: React.FC = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations().then(setReservations);
  }, []);

  return (
    <div>
      <h1>Reservas</h1>
      <ReservationList reservations={reservations} />
    </div>
  );
};

export default ReservationsPage;
