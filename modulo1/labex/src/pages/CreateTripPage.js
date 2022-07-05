import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToHome } from "../routes/coordinator";
import { MainBox } from "../components/MainBox";
import { OrangeText } from "../components/OrangeText";
import { Input } from "../components/Input";
import { MainButton } from "../components/MainButton";
import { useRef } from "react";
import { postTrip } from "../services/postTrip";

export const CreateTripPage = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const planetRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const durationRef = useRef();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Nao esta logado");
      goToHome(navigate);
    }
  }, []);

  //   {
  //     "name": "Ano novo em Mercúrio",
  //     "planet": "Mercúrio",
  //     "date": "31/12/2019",
  //     "description": "Venha passar a virada pertinho do Sol!",
  //     "durationInDays": 7
  // }

  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <MainBox>
        <h1>
          Criar conta <OrangeText name="Labex" />
        </h1>
        <Input text={nameRef} label="titulo" placeholder="título da viagem" />
        <Input text={planetRef} label="destino" placeholder="pra onde vamos" />
        <Input text={dateRef} label="data" placeholder="XX/DD/AA" />
        <Input
          text={descriptionRef}
          label="descrição"
          placeholder="detalhes da viagem"
        />
        <Input
          text={durationRef}
          label="duração"
          placeholder="quanto tempo vamos viajar"
        />
        <MainButton
          onClick={() =>
            postTrip({
              name: nameRef,
              planet: planetRef,
              date: dateRef,
              description: descriptionRef,
              durationInDays: durationRef,
            })
          }
          name="Criar Viagem"
        />
      </MainBox>
    </div>
  );
};
