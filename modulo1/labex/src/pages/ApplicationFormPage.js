import { Link, useParams } from "react-router-dom";
import { OrangeText } from "../components/OrangeText";
import { Header } from "../components/Header";
import { MainBox } from "../components/MainBox";
import { Input } from "../components/Input";
import { MainButton } from "../components/MainButton";
import styled from "styled-components";
import { useForm } from "../hooks/useForm";
import { postApplyTrip } from "../services/postApplyTrip";

const TextBox = styled.div`
  padding: 0 20px;
  text-align: center;
`;

export const ApplicationFormPage = () => {
  const tripParams = useParams();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const sendForm = async (ev) => {
    ev.preventDefault();
    try {
      await postApplyTrip({
        path: tripParams.tripId,
        body: form,
      });
      alert("Inscrição feita com sucesso!");
    } catch (e) {
      alert(e);
    }
    cleanFields();
  };

  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <MainBox>
        <h1>
          <OrangeText name={"Formulário de Interesse"} />
        </h1>
        <TextBox>
          <p>Insira seus dados para se inscrever na Viagem</p>
        </TextBox>
        <form onSubmit={sendForm}>
          <Input
            onChange={onChange}
            name={"name"}
            value={form.name}
            label="nome"
            placeholder="nome e sobrenome"
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />
          <Input
            onChange={onChange}
            name={"age"}
            value={form.age}
            label="idade"
            placeholder="digite a sua idade"
            required
            type={"number"}
            min={18}
          />
          <Input
            onChange={onChange}
            name={"applicationText"}
            value={form.applicationText}
            label="mensagem"
            placeholder="fale com a Labex"
            required
            pattern={"^.{30,}"}
            title={"Sua mensagem deve ter no mínimo 30 caracteres"}
          />
          <Input
            onChange={onChange}
            name={"profession"}
            value={form.profession}
            label="profissao"
            placeholder="qual o seu emprego"
            required
            pattern={"^.{6,}"}
            title={"Sua profissão deve ter no mínimo 6 caracteres"}
          />
          <Input
            onChange={onChange}
            name={"country"}
            value={form.country}
            label="pais"
            placeholder="seu pais natal"
            required
            pattern={"^.{2,}"}
            title={"Insira um país válido"}
          />
          <MainButton name="Quero Viajar!" />
        </form>
      </MainBox>
    </div>
  );
};
