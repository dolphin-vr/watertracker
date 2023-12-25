import { useState } from "react";
import bottle1 from "/water-plastic.svg";
import bottle2 from "/water-blue.svg";
import bottle3 from "/water-yellow.svg";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";
const SigninPage = lazy(() => import("./pages/SignInPage/SignInPage"));
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
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SigninPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      {/* <h1>Water Tracker</h1>
      <h2>drink water</h2>
      <div>
        <img src={bottle1} className="logo" alt="logo" width={200} />
        <img src={bottle2} className="logo" alt="logo" width={200} />
        <img src={bottle3} className="logo" alt="logo" width={200} />
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Url from ENV VAR - {baseURL}</p>
      </div> */}
      <GlobalStyle />
    </>
  );
}

export default App;
