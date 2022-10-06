import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  color: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.onClick} color={props.color}>
      {props.text}
    </StyledButton>
  );
};
