import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { MainBox } from "../components/MainBox";
import { MainButton } from "../components/MainButton";
import { OrangeText } from "../components/OrangeText";
import { goToAdminHomePage, goToHome } from "../routes/coordinator";
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

  const newTrip = async () => {
    try {
      await postTrip({
        name: nameRef.current.value,
        planet: planetRef.current.value,
        date: dateRef.current.value,
        description: descriptionRef.current.value,
        durationInDays: durationRef.current.value,
      });
      goToAdminHomePage(navigate);
    } catch (e) {
      alert(e);
    }
  };

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
        <MainButton onClick={newTrip} name="Criar Viagem" />
      </MainBox>
    </div>
  );
};
