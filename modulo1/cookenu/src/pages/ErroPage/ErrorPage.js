import { ErrorImage } from "./styled";
import error from "../../assets/error.png";
import { Typography } from "@material-ui/core";

export const ErrorPage = () => {
  return (
    <div>
      <ErrorImage src={error} />
      <Typography color={"primary"}>Deu ruim, tente novamente</Typography>
    </div>
  );
};
