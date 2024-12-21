import React from "react";
import ReservationItem from "../molecules/ReservationItem";

type Reservation = {
  id: string;
  customerName: string;
  roomNumber: number;
  checkInDate: string;
  checkOutDate: string;
};

type Props = {
  reservations: Reservation[];
};

const ReservationList: React.FC<Props> = ({ reservations }) => {
  return (
    <ul>
      {reservations.map((reservation) => (
        <ReservationItem key={reservation.id} reservation={reservation} />
      ))}
    </ul>
  );
};

export default ReservationList;
