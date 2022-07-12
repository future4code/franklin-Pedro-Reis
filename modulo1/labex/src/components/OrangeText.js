import styled from "styled-components";

const StyledText = styled.span`
  color: #fac710;
`;

export const OrangeText = (text) => {
  return <StyledText>{text.name}</StyledText>;
};
