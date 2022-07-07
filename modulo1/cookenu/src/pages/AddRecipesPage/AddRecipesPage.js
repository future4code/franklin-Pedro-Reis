import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { FormDiv, InputField, MainButton } from "./styled";
import { useForm } from "../../hooks/useForm";
import { addRecipe } from "../../services/recipe";

export const AddRecipesPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    title: "",
    description: "",
    image: "",
  });

  const onSubmitForm = (ev) => {
    ev.preventDefault();
    addRecipe(form, cleanFields, navigate);
  };

  return (
    <div>
      <h1>Adicionar Receita</h1>
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
          <MainButton>Adicionar Receita</MainButton>{" "}
        </FormDiv>
      </form>
    </div>
  );
};
