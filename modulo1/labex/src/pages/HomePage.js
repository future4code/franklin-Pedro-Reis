import { MainButton } from "../components/MainButton";
import { OrangeText } from "../components/OrangeText";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToListTrips, goToLogin } from "../routes/coordinator";

const HomeDiv = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomeDiv>
      <h1>
        Bem-vindo ao <OrangeText name="Labex" />
      </h1>
      <MainButton name="Login" onClick={() => goToLogin(navigate)} />
      <MainButton
        onClick={() => goToListTrips(navigate)}
        name="Todas as Viagens"
      />
    </HomeDiv>
  );
};
