import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/criar-conta/");
  };

  const goToAdminHome = () => {
    navigate("/admin/");
  };

  return { goToLogin, goToSignUp, goToAdminHome };
};
