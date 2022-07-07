import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToLogin } from "../../router/coordinator";

export const AddRecipesPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  return (
    <div>
      Add Recipe Page
      <button onClick={() => goToLogin(navigate)}>Login</button>
    </div>
  );
};
