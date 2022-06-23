import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const CreateTripPage = () => {
  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      Create Trip Page
    </div>
  );
};
