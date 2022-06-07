import styled from "styled-components";

const Form3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;
const Input3 = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Etapa3 = () => {
  return (
    <Form3>
      <h1>Etapa 2 - Informações Gerais de Ensino</h1>
      <Input3>
        <label>5. Porque você não terminou um curso de graduação?</label>
        <br></br>
        <input></input>
      </Input3>
      <Input3>
        <label>6. Você fez algum curso complementar?</label>
        <br></br>
        <input></input>
      </Input3>
    </Form3>
  );
};

export { Etapa3 };
