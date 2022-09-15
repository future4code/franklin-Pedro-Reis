import styled from "styled-components";

const HeaderDiv = styled.div`
  margin: 20px;
  display: block;
  opacity: calc(90%);
`;

export const Header = (header) => {
  return (
    <HeaderDiv onClick={header.onClick}>
      <img
        alt="home"
        src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
        width={35}
        height={35}
      />
    </HeaderDiv>
  );
};
