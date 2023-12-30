import { lazy } from "react";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import UnSignedHomePage from "../pages/UnSignedHomePage/UnSignedHomePage";
import MainHomepage from "../pages/MainHomepage/MainHomepage";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<PublicRoute />}>
          <Route index element={<UnSignedHomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="main" element={<MainHomepage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  )
};
