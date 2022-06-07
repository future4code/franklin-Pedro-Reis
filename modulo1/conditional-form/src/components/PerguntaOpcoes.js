import styled from "styled-components";

const CaixaPerguntaOpcoes = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PerguntaOpcoes = (props) => {
  const opcoes = props.opcoes;
  const opcoesList = opcoes.map((opcao) => <option>{opcao}</option>);

  return (
    <CaixaPerguntaOpcoes>
      {props.pergunta}
      <select value={opcoesList}>{opcoesList}</select>
    </CaixaPerguntaOpcoes>
  );
};

export { PerguntaOpcoes };
