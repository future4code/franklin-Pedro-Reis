import { InputDiv } from "../styled/styled";
import { Input } from "@chakra-ui/react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string | undefined;
  id: string;
  name: string;
  value: string;
}

export const InputField = (props: InputFieldProps) => {
  return (
    <InputDiv>
      <label>{props.label}</label>
      <Input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        width={
          props.label === "CEP"
            ? "225px"
            : "350px" && props.label === "Número"
            ? "100px"
            : "350px"
        }
        height="50px"
        background="rgba(118, 0, 0, 1)"
        border="none"
      />
    </InputDiv>
  );
};
