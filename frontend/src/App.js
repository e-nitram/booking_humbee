import { createTheme, ThemeProvider } from '@mui/material/styles';

import Main from "./pages";
import { AppWrapper } from "./context/AppContext";
import "./App.css";
import { CheckoutProvider } from "./context/CheckoutContext";

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(77, 125, 107, 1)'
    }
  },
});

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <AppWrapper>
        <CheckoutProvider>
          <Main />
        </CheckoutProvider>
      </AppWrapper>
    </ThemeProvider >
  );
}

export default App;
