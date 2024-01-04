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
      White: "#FFFFFF",
      Blue: "#407BFF",
      Black: "#2F2F2F",
    },
    secondary: {
      White: "#ECF2FF",
      Red: "#EF5050",
      Blue: "#9EBBFF",
      today: "#e2e8f7",
      Orange: "#FF9D43",
      WhiteBlue: "#D7E3FF",
    },
  },
  fonts: {},
};

// padding: ${({ theme }) => theme.spacing(1)};
  // background-color: ${props => props.theme.colors.primary.White};

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



