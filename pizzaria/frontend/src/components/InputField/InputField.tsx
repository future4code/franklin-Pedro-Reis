import { InputDiv } from "../styled/styled";
import { Input } from "@chakra-ui/react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string | undefined;
  id: string;
  name: string;
  value: string;
  onChange: any;
}

export const InputField = (props: InputFieldProps) => {
  const checkSize = () => {
    if (props.label === "CEP") {
      return "225px";
    }
    if (props.label === "Número") {
      return "100px";
    }
    return "350px";
  };
  return (
    <InputDiv>
      <label>{props.label}</label>
      <Input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        width={checkSize()}
        height="50px"
        background="rgba(118, 0, 0, 1)"
        border="none"
        onChange={props.onChange}
      />
    </InputDiv>
  );
};
