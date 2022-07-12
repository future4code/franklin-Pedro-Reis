import styled from "styled-components";

export const RecipeCardImage = styled.img`
  width: 100%;
  height: 20vh;
  max-width: 350px;
`;

export const RecipeCardBox = styled.div`
  margin-top: 40px;
  width: 30vh;
  height: 32vh;
  -webkit-box-shadow: 2px 5px 16px 0px #cccccc,
    0px 0px 50px 21px rgba(0, 0, 0, 0);
  box-shadow: 2px 5px 16px 0px #cccccc, 0px 0px 50px 21px rgba(0, 0, 0, 0);
  :hover {
    -webkit-box-shadow: 2px 5px 16px 0px #bbbbbb,
      0px 0px 50px 21px rgba(0, 0, 0, 0);
    box-shadow: 2px 5px 16px 0px #bbbbbb, 0px 0px 50px 21px rgba(0, 0, 0, 0);
    transition: 0.1s;
  }
`;

export const RecipeCardTextBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
