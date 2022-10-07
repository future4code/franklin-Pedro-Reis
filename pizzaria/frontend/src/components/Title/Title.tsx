import { Center } from "@chakra-ui/react";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  color: #000000;
`;
interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps) => {
  return (
    <Center>
      <StyledTitle>{props.text}</StyledTitle>
    </Center>
  );
};
