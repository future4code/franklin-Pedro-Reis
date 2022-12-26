import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  color: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton type={props.type} onClick={props.onClick} color={props.color}>
      {props.text}
    </StyledButton>
  );
};
