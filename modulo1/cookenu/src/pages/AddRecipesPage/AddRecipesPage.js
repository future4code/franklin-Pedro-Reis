import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../router/coordinator";

export const AddRecipesPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      Add Recipe Page
      <button onClick={() => goToLogin(navigate)}>Login</button>
    </div>
  );
};
