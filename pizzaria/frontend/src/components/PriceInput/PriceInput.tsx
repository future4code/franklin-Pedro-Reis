import { Box, CheckboxIcon, IconButton, Input } from "@chakra-ui/react";
import { InputDiv } from "../styled/styled";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { addPizzaPrice } from "../../services/Admin/addPizza";

const PriceInputLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #760000;
`;

interface PriceInputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  onClick?: () => void;
}

export const PriceInput = (props: PriceInputProps) => {
  const params = useParams();
  const { form, onChange } = useForm({
    sabor_id: params.id,
    tipo_id: props.name,
    price: "",
  });

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    addPizzaPrice(form);
  };

  return (
    <InputDiv>
      <form onSubmit={onSubmitForm}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          css={`
            margin-top: 20px;
          `}
        >
          <PriceInputLabel>{props.label}</PriceInputLabel>
          <Input
            type={props.type}
            name="price"
            value={form.price}
            placeholder={props.placeholder}
            width="150px"
            height="50px"
            background="rgba(118, 0, 0, 1)"
            border="none"
            onChange={onChange}
          />
          <IconButton
            type="submit"
            backgroundColor="rgba(118, 0, 0, 1)"
            aria-label="check icon"
            icon={<CheckboxIcon isChecked />}
            css={`
              margin-top: 8px;
            `}
          />
        </Box>
      </form>
    </InputDiv>
  );
};
