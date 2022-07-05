export const goToListTrips = (navigate) => {
  navigate("lista-de-viagens");
};
export const goToHome = (navigate) => {
  navigate("/");
};

export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToAdminHomePage = (navigate) => {
  navigate("/admin");
};

export const goToCreateTripPage = (navigate) => {
  navigate("/create-trip");
};

export const goToTripDetails = (navigate, props) => {
  navigate(`/detalhes-da-viagem/${props}`);
};

export const goToSignUp = (navigate) => {
  navigate("/signup");
};
