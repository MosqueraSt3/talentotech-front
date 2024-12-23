import React, { useEffect, useState } from "react";
import { Column, useTable } from "react-table";
import {
  fetchReservations,
  createReservation,
  updateReservation,
  deleteReservation,
} from "../services/api";
import Header from "../components/organisms/Header";

const ReservationsPage: React.FC = () => {
  interface IReservation {
    id: number;
    customerName: string;
    roomNumber: number;
    checkInDate: string;
    checkOutDate: string;
  }

  const [reservations, setReservations] = useState<IReservation[]>([]);
  const [newReservation, setNewReservation] = useState<IReservation>({
    id: 0,
    customerName: "",
    roomNumber: 0,
    checkInDate: "",
    checkOutDate: "",
  });
  const [editingReservation, setEditingReservation] =
    useState<IReservation | null>(null);

  useEffect(() => {
    fetchReservations().then(setReservations);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReservation({
      ...newReservation,
      [name]: name === "roomNumber" ? Number(value) : value,
    });
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const created = await createReservation(newReservation);
    setReservations([...reservations, created]);
    setNewReservation({
      id: 0,
      customerName: "",
      roomNumber: 0,
      checkInDate: "",
      checkOutDate: "",
    });
  };

  const handleEditClick = (reservation: IReservation) => {
    const formatDateForInput = (dateString: string) => {
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
    };

    setEditingReservation(reservation);
    setNewReservation({
      id: reservation.id,
      customerName: reservation.customerName,
      roomNumber: reservation.roomNumber,
      checkInDate: formatDateForInput(reservation.checkInDate),
      checkOutDate: formatDateForInput(reservation.checkOutDate),
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const updated = await updateReservation(newReservation.id, {
      customerName: newReservation.customerName,
      roomNumber: newReservation.roomNumber,
      checkInDate: newReservation.checkInDate,
      checkOutDate: newReservation.checkOutDate,
    });

    setReservations((prevReservations) =>
      prevReservations.map((reservation) =>
        reservation.id === updated.id ? updated : reservation
      )
    );

    setEditingReservation(null);
    setNewReservation({
      id: 0,
      customerName: "",
      roomNumber: 0,
      checkInDate: "",
      checkOutDate: "",
    });
  };

  const handleDeleteClick = async (reservation: IReservation) => {
    const confirmDelete = window.confirm(
      `¿Estás seguro de eliminar la reserva #${reservation.id}?`
    );

    if (confirmDelete) {
      await deleteReservation(reservation.id.toString());
      setReservations((prevReservations) =>
        prevReservations.filter((r) => r.id !== reservation.id)
      );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-CA", options);
  };

  const formattedReservations = reservations.map((reservation) => ({
    ...reservation,
    checkInDate: formatDate(reservation.checkInDate),
    checkOutDate: formatDate(reservation.checkOutDate),
  }));

  const columns: Column<IReservation>[] = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Cliente", accessor: "customerName" },
      { Header: "Habitacion", accessor: "roomNumber" },
      { Header: "Check In", accessor: "checkInDate" },
      { Header: "Check Out", accessor: "checkOutDate" },
    ],
    []
  );

  const data = React.useMemo(
    () => formattedReservations,
    [formattedReservations]
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="min-vh-100 bg-light">
      <Header />
      <div className="container py-5">
        <h1 className="mb-4">Reservaciones</h1>

        <form
          onSubmit={editingReservation ? handleUpdate : handleCreate}
          className="mb-4"
        >
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={newReservation.id}
            onChange={handleInputChange}
            className="form-control mb-2"
          />
          <input
            type="text"
            name="customerName"
            placeholder="Cliente"
            value={newReservation.customerName}
            onChange={handleInputChange}
            className="form-control mb-2"
          />
          <input
            type="number"
            name="roomNumber"
            placeholder="Habitacion"
            value={newReservation.roomNumber}
            onChange={handleInputChange}
            className="form-control mb-2"
          />
          <input
            type="date"
            name="checkInDate"
            value={newReservation.checkInDate}
            onChange={handleInputChange}
            className="form-control mb-2"
          />
          <input
            type="date"
            name="checkOutDate"
            value={newReservation.checkOutDate}
            onChange={handleInputChange}
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-primary">
            {editingReservation ? "Actualizar reserva" : "Agregar reserva"}
          </button>
        </form>

        <table {...getTableProps()} className="table table-striped">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={cell.row.id + "-" + cell.column.id}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleEditClick(row.original)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDeleteClick(row.original)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationsPage;
