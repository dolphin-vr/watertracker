import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import './index.css'
const theme = {
  colors: {
    primary: {
      primaryWhite: "#FFFFFF",
      primaryBlue: "#407BFF",
      primaryBlack: "#2F2F2F",
    },
    secondary: {
      secondaryWhite: "#ECF2FF",
      secondaryRed: "#EF5050",
      secondaryBlue: "#9EBBFF",
      secondaryOrange: "#FF9D43",
      secondaryWhiteBlue: "#D7E3FF",
    },
  },
  fonts: {},
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
