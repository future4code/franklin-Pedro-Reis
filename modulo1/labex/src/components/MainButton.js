import styled from "styled-components";

const ButtonPattern = styled.button`
  width: 240px;
  height: 60px;
  background-color: #fac710;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 2px;
`;

export const MainButton = (button) => {
  return <ButtonPattern>{button.name}</ButtonPattern>;
};
