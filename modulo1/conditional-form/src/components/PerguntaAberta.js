import styled from "styled-components";

const CaixaPergunta = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PerguntaAberta = (props) => {
  return (
    <CaixaPergunta>
      {props.pergunta}
      <input></input>
    </CaixaPergunta>
  );
};

export { PerguntaAberta };
