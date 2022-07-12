export const goToLogin = (navigate) => {
  navigate("/login/");
};
export const goToSignUp = (navigate) => {
  navigate("/criar-conta/");
};
export const goToRecipesList = (navigate) => {
  navigate("/");
};
export const goToAddRecipes = (navigate) => {
  navigate("/criar-receita/");
};
export const goToRecipeDetails = (navigate, id) => {
  navigate(`/receita/${id}`);
};
