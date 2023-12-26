import { useState } from "react";
import bottle1 from "/water-plastic.svg";
import bottle2 from "/water-blue.svg";
import bottle3 from "/water-yellow.svg";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const ForgotPasswordPage = lazy(() =>
  import("./pages/ForgotPasswordPage/ForgotPasswordPage")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  const [count, setCount] = useState(0);
  const baseURL = import.meta.env.VITE_API_URL;
  // console.log(baseURL)
  return (
    <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>
        </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
