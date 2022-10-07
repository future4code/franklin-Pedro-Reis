import { FormEvent } from "react";
import { PriceInput } from "../../components";
import { useForm } from "../../hooks/useForm";

export const AdminSetPrice = () => {
  const { form, onChange, cleanFields } = useForm({
    broto: "",
    media: "",
    familia: "",
    supergg: "",
  });

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(form);
    cleanFields();
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <PriceInput
          label="BROTO"
          placeholder="R$"
          id="broto"
          name="broto"
          value={form.broto}
          onChange={onChange}
          type="text"
        />
        <PriceInput
          label="MÉDIA"
          placeholder="R$"
          id="media"
          name="media"
          value={form.media}
          onChange={onChange}
          type="text"
        />
        <PriceInput
          label="FAMILIA"
          placeholder="R$"
          id="familia"
          name="familia"
          value={form.familia}
          onChange={onChange}
          type="text"
        />
        <PriceInput
          label="SUPER GG"
          placeholder="R$"
          id="supergg"
          name="supergg"
          value={form.supergg}
          onChange={onChange}
          type="text"
        />
      </form>
    </div>
  );
};
