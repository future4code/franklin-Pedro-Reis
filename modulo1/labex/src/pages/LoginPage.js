import { MainBox } from "../components/MainBox";
import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { MainButton } from "../components/MainButton";
import { goToAdminHomePage } from "../routes/coordinator";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <MainBox>
        LoginPage
        <MainButton onClick={() => goToAdminHomePage(navigate)} name="Login" />
      </MainBox>
    </div>
  );
};
