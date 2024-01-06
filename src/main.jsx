import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { HashRouter } from "react-router-dom";
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
      grey: "#9b9b9b",
      Red: "#EF5050",
      Blue: "#9EBBFF",      
      violet: "#9370d8",
      today: "#e2e8f7",
      Orange: "#FF9D43",
      WhiteBlue: "#D7E3FF",
    },
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};
// padding: ${({ theme }) => theme.spacing(1)};
// padding: ${({ theme }) => theme.spacing(10)};
// padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
// gap: ${({ theme }) => theme.spacing(3)};
// margin-bottom: ${({ theme }) => theme.spacing(5)};
// margin: 0 auto ${props => props.theme.spacing(8)};
// margin: ${({theme}) => theme.spacing(4)} auto ${({theme}) => theme.spacing(3)};
// border-bottom: 4px solid ${({ theme }) => theme.colors.darkgray};
// padding: 0 ${({ theme }) => theme.spacing(2)};
// border-radius: ${({ theme }) => theme.radii.sm};
// background-color: ${props => props.theme.colors.primary.White};
// color: ${({ theme }) => theme.colors.darkgray};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename="/">
        <ThemeProvider theme={theme}>
          <Provider store = {store}>
            <App />
          </Provider>
        </ThemeProvider>
      </HashRouter>
      {/* <BrowserRouter basename={(import.meta.env.VITE_NODE_ENV === "development") ? "/" : import.meta.env.VITE_PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <Provider store = {store}>
            <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter> */}
    </PersistGate>
  </React.StrictMode>
);



