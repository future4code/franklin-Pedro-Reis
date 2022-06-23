import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { LoginPage } from "../pages/LoginPage";
import { AdminHomePage } from "../pages/AdminHomePage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="lista-de-viagens" element={<ListTripsPage />} />
        <Route
          path="lista-de-viagens/:tripId"
          element={<ApplicationFormPage />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<AdminHomePage />} />
        <Route path="create-trip" element={<CreateTripPage />} />
        <Route path="detalhes-da-viagem" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
