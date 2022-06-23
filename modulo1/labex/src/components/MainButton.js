import styled from "styled-components";

const ButtonPattern = styled.button`
  width: 350px;
  height: 50px;
  background-color: #fac710;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 2px;
  margin: 15px;
`;

export const MainButton = (button) => {
  return <ButtonPattern onClick={button.onClick}>{button.name}</ButtonPattern>;
};
