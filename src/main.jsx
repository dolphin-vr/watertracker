import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
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
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/">
        <ThemeProvider theme={theme}>
          <Provider store = {store}>
            <App /> 
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);

//Віка внесла Провайдер та зробила імпорт стору (п.с. так видавало в браузеру помилку що треба провайдер обгорнути навколо додатку)
// стор і персістор теж 