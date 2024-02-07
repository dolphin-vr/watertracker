import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SharedLayout } from "../../SharedLayout/SharedLayout";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "../../pages/HomePage/WelcomePage";
import MainPage from "../../pages/MainPage/MainPage";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<SharedLayout/>}>
        <Route element={<PublicRoute />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
            <Route path="/main" element={<MainPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  )
};
