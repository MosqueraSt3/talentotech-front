import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservationsPage from "./pages/ReservationPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
