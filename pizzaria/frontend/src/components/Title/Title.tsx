import styled from "styled-components";

const StyledTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: #000000;
`;
interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps) => {
  return <StyledTitle>{props.text}</StyledTitle>;
};
