import { CircularProgress } from "@material-ui/core";
import { LoadingBox } from "./styled";

export const Loading = () => {
  return (
    <LoadingBox>
      <CircularProgress size={`80px`} color={"primary"} />
    </LoadingBox>
  );
};
