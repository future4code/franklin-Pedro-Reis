import styled from "styled-components";

export const StyledButton = styled.button`
  height: 50px;
  width: 350px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color === "rgba(86, 0, 0, 1)" ? "white" : "rgba(86, 0, 0, 1)"};
  text-transform: uppercase;
  font-weight: regular;
  margin: 6px;
  border: none;
`;
