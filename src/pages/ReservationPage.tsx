import React, { useEffect, useState } from "react";
import { Column, useTable } from "react-table";
import { fetchReservations, createReservation } from "../services/api";
import Header from "../components/organisms/Header";

const ReservationsPage: React.FC = () => {
  interface IReservation {
    id: number;
    customerName: string;
    roomNumber: string;
    checkInDate: string;
    checkOutDate: string;
  }

  const [reservations, setReservations] = useState<IReservation[]>([]);
  const [newReservation, setNewReservation] = useState({
    id: 0,
    customerName: "",
    roomNumber: 0,
    checkInDate: "",
    checkOutDate: "",
  });

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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  const formattedReservations = reservations.map((reservation) => ({
    ...reservation,
    checkInDate: formatDate(reservation.checkInDate),
    checkOutDate: formatDate(reservation.checkOutDate),
  }));

  const columns: Column<IReservation>[] = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Customer Name", accessor: "customerName" },
      { Header: "Room Number", accessor: "roomNumber" },
      { Header: "Check-In Date", accessor: "checkInDate" },
      { Header: "Check-Out Date", accessor: "checkOutDate" },
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

        <form onSubmit={handleCreate} className="mb-4">
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
            Agregar reserva
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
