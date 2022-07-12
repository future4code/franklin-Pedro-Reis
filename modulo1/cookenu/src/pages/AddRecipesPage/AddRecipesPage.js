import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { FormDiv, InputField, MainButton } from "./styled";
import { useForm } from "../../hooks/useForm";
import { addRecipe } from "../../services/recipe";
import { useState } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { MainBox } from "../../constants/styled";

export const AddRecipesPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    title: "",
    description: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (ev) => {
    ev.preventDefault();
    addRecipe(form, cleanFields, navigate, setIsLoading);
  };

  return (
    <MainBox>
      <Typography
        gutterBottom
        align={"center"}
        variant={"h4"}
        color={"primary"}
      >
        Adicionar Receita
      </Typography>
      <form onSubmit={onSubmitForm}>
        <FormDiv>
          <InputField
            placeholder={"Título"}
            name={"title"}
            value={form.title}
            onChange={onChange}
            required
          />
          <InputField
            placeholder={"Descrição"}
            name={"description"}
            value={form.description}
            onChange={onChange}
            required
          />
          <InputField
            placeholder={"Url da Imagem"}
            name={"image"}
            value={form.image}
            onChange={onChange}
            required
          />
          <MainButton>
            {" "}
            {isLoading ? (
              <CircularProgress color={"inherit"} size={`24px`} />
            ) : (
              <>Criar Receita</>
            )}
          </MainButton>{" "}
        </FormDiv>
      </form>
    </MainBox>
  );
};
