import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const InputField = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 2px;
  border-color: rgb(200, 200, 200);
  border-style: solid;
  padding: 10px;
  margin: 15px 0;
  ::placeholder {
    color: rgb(205, 205, 205);
  }
`;
export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainButton = styled.button`
  width: 350px;
  height: 50px;
  background-color: ${primaryColor};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 2px;
  margin: 15px;
`;

export const LogoImage = styled.img`
  width: 40vh;
  margin: 20px;
`;
