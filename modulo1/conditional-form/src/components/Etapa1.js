import styled from "styled-components";
import { PerguntaAberta } from "./PerguntaAberta";
import { PerguntaOpcoes } from "./PerguntaOpcoes";

const Form1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;
const Input1 = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Etapa1 = () => {
  return (
    <Form1>
      <h1>Etapa 1 - Dados Gerais</h1>
      <Input1>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
      </Input1>
      <Input1>
        <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
      </Input1>
      <Input1>
        <PerguntaAberta pergunta={"3. Qual o seu email?"} />
      </Input1>
      <Input1>
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior completo",
            "Ensino superior incompleto",
          ]}
        />
      </Input1>
    </Form1>
  );
};

export { Etapa1 };
