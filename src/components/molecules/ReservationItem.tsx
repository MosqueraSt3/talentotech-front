import React from "react";

type Props = {
  reservation: {
    id: string;
    customerName: string;
    roomNumber: number;
    checkInDate: string;
    checkOutDate: string;
  };
};

const ReservationItem: React.FC<Props> = ({ reservation }) => {
  return (
    <li>
      <p>Cliente: {reservation.customerName}</p>
      <p>Habitación: {reservation.roomNumber}</p>
      <p>Desde: {reservation.checkInDate}</p>
      <p>Hasta: {reservation.checkOutDate}</p>
    </li>
  );
};

export default ReservationItem;
