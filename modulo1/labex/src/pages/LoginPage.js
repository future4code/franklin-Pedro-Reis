import { MainBox } from "../components/MainBox";
import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { MainButton } from "../components/MainButton";
import { Input } from "../components/Input";
import { OrangeText } from "../components/OrangeText";
import { useRef } from "react";
import axios from "axios";
import { goToAdminHomePage } from "../routes/coordinator";
import { goToSignUp } from "../routes/coordinator";

export const LoginPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();

  const mainButtonAction = () => {
    const body = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axios
      .post(
        `    https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login
    `,
        body
      )
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <MainBox>
        <h1>
          Minha conta <OrangeText name="Labex" />
        </h1>
        <Input text={emailRef} label="email" placeholder="Insira seu Email" />
        <Input
          text={passwordRef}
          label="senha"
          placeholder="Insira sua senha"
        />
        <MainButton onClick={mainButtonAction} name="Login" />
        <p onClick={() => goToSignUp(navigate)}>Crie uma conta aqui</p>
      </MainBox>
    </div>
  );
};
