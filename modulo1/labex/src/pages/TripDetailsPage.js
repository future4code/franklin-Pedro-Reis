import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const TripDetailsPage = () => {
  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      Trip Details Page
    </div>
  );
};
