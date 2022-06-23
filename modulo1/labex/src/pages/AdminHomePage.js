import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { MainButton } from "../components/MainButton";
import { goToCreateTripPage, goToTripDetails } from "../routes/coordinator";

export const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      Admin Home Page
      <MainButton
        onClick={() => goToCreateTripPage(navigate)}
        name="Criar Viagem"
      />
      <MainButton
        onClick={() => goToTripDetails(navigate)}
        name="Detalhes da Viagem"
      />
    </div>
  );
};
