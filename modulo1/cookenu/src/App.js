import { ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { primaryColor } from "./constants/colors";
import { theme } from "./constants/theme";
import { Router } from "./router/Router";

function App() {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
          color={primaryColor}
        />
        <Router
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
