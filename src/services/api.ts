const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/api/reservations";

export const fetchReservations = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Error al obtener las reservas");
  }
  return response.json();
};

export const fetchReservationById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener la reserva");
  }
  return response.json();
};

export const createReservation = async (reservation: {
  customerName: string;
  roomNumber: number;
  checkInDate: string;
  checkOutDate: string;
}) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservation),
  });

  if (!response.ok) {
    throw new Error("Error al crear la reserva");
  }
  return response.json();
};

export const updateReservation = async (
  id: number,
  reservation: {
    customerName: string;
    roomNumber: number;
    checkInDate: string;
    checkOutDate: string;
  }
) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservation),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar la reserva");
  }
  return response.json();
};

export const deleteReservation = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar la reserva");
  }
};
