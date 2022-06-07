import styled from "styled-components";

const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;
const Input2 = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Etapa2 = () => {
  return (
    <Form2>
      <h1>Etapa 2 - Informações do Ensino Superior</h1>
      <Input2>
        <label>5. Qual o curso?</label>
        <br></br>
        <input></input>
      </Input2>
      <Input2>
        <label>6. Qual a undidade de ensino?</label>
        <br></br>
        <input></input>
      </Input2>
    </Form2>
  );
};

export { Etapa2 };
