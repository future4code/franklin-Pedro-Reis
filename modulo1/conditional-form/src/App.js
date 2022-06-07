import "./App.css";
import styled from "styled-components";
import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { Etapa4 } from "./components/Etapa4";
import { useState } from "react";

const CaixaForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

function App() {
  const [etapa, setEtapa] = useState(1);

  const proximaEtapa = () => {
    setEtapa(etapa + 1);
  };

  const RenderizaEtapa = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
        return <Etapa3 />;
        break;
      case 4:
        return <Etapa4 />;
        break;
      default:
        break;
    }
  };

  return (
    <CaixaForm>
      {RenderizaEtapa()}
      {etapa != 4 ? (
        <button onClick={proximaEtapa}>Próxima etapa</button>
      ) : (
        <p>Muito obrigado por participar! Entraremos em contato.</p>
      )}
    </CaixaForm>
  );
}

export default App;
