import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { HashRouter } from "react-router-dom";

const theme = {
  colors: {
    primary: {
      white: "#FFFFFF",
      blue: "#407BFF",
      black: "#2F2F2F",
    },
    secondary: {
      white: "#ECF2FF",
      grey: "#9b9b9b",
      red: "#EF5050",
      blue: "#9EBBFF",
      liteblue: "#c7efffb0",
      violet: "#9370d8",
      today: "#e2e8f7",
      orange: "#FF9D43",
      green: "#b0fcef",
      whiteblue: "#D7E3FF",
      opablue: "#d7e3ff44",
      backdrop: "#000000CC"
    },
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  transition: "0.3s",
  spacing: (value) => `${value * 4}px`,
};
// padding: ${({ theme }) => theme.spacing(1)};
// padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
// gap: ${({ theme }) => theme.spacing(3)};
// margin-bottom: ${({ theme }) => theme.spacing(5)};
// margin: ${({theme}) => theme.spacing(4)} auto ${({theme}) => theme.spacing(3)};
// border-bottom: 4px solid ${({ theme }) => theme.colors.darkgray};
// border-radius: ${({ theme }) => theme.radii.sm};
// background-color: ${({ theme }) => theme.colors.primary.white};
// color: ${({ theme }) => theme.colors.darkgray};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename="/">
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </HashRouter>
    </PersistGate>
  </React.StrictMode>
);
