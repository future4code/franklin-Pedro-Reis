import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants/theme";
import { Router } from "./router/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
