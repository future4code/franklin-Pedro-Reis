import { useParams, Link } from "react-router-dom";
import { OrangeText } from "../components/OrangeText";
import { Header } from "../components/Header";
import { MainBox } from "../components/MainBox";
import { Input } from "../components/Input";
import { MainButton } from "../components/MainButton";
import styled from "styled-components";

const TextBox = styled.div`
  padding: 0 20px;
  text-align: center;
`;

export const ApplicationFormPage = () => {
  const selectedTrip = useParams();

  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <MainBox>
        <img alt="TripImage" src="https://picsum.photos/400" />
        <h1>
          <OrangeText name={selectedTrip.tripId} />
        </h1>
        <TextBox>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
            sit amet dictum sit. Sed felis eget velit aliquet sagittis id
            consectetur purus ut.
          </p>
        </TextBox>
        <h1>
          <OrangeText name="Partiu?" />
        </h1>
        <TextBox>
          <p>Insira seus dados e entre na fila de espera pra viagem</p>
        </TextBox>
        <Input label="nome" placeholder="nome e sobrenome" />
        <Input label="idade" placeholder="digite a sua idade" />
        <Input label="mensagem" placeholder="fale com a Labex" />
        <Input label="profissao" placeholder="qual o seu emprego" />
        <Input label="pais" placeholder="seu pais natal" />
        <MainButton name="Quero Viajar!" />
      </MainBox>
    </div>
  );
};
