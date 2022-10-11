import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };
  const goToSearch = () => {
    navigate("/search");
  };
  const goToSearchResults = (id: string) => {
    navigate("/search/id");
  };
  return { goToLogin, goToSearch, goToSearchResults };
};
