import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";
import { UserRoutes } from "./UserRoutes/UserRoutes";
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const ForgotPasswordPage = lazy(() =>
  import("./pages/ForgotPasswordPage/ForgotPasswordPage")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MainHomepage = lazy(() => import("./pages/MainHomepage/MainHomepage"));

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes> */}
      <UserRoutes/>
      <GlobalStyle />
    </>
  );
}

export default App;
