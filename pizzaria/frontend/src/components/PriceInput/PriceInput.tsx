import { Center, Input } from "@chakra-ui/react";
import { InputDiv } from "../styled/styled";
import styled from "styled-components";

const PriceInputLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #760000;
`;

export const PriceInput = (props: any) => {
  return (
    <InputDiv>
      <Center>
        <PriceInputLabel>{props.label}</PriceInputLabel>
      </Center>
      <Center>
        <Input
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          width="150px"
          height="50px"
          background="rgba(118, 0, 0, 1)"
          border="none"
          onChange={props.onChange}
        />
      </Center>
    </InputDiv>
  );
};
