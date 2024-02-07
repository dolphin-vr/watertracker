// import { lazy } from "react";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SharedLayout } from "../SharedLayout";
import {SignInPage} from "../../pages/SignInPage/SignInPage";
import {SignUpPage} from "../../pages/SignUpPage/SignUpPage";
import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";
import { WelcomePage } from "../../pages/HomePage/WelcomePage";
import { MainPage } from "../../pages/MainPage/MainPage";
// import { PassResetPage } from "../pages/PassResetPage/PassResetPage";
import { PassRemindPage } from "../../pages/PassResetPage/PassRemindPage";
import { PassResetPage } from "../../pages/PassResetPage/PassResetPage";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<SharedLayout/>}>
        <Route element={<PublicRoute />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/remind" element={<PassRemindPage />} />
            <Route path="/reset/:token" element={<PassResetPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
            <Route path="/main" element={<MainPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
    // <Routes>
    //   <Route path="/" element={<SharedLayout/>}>
    //     <Route element={<PublicRoute />}>
    //       <Route index element={<WelcomePage/>} />
    //       <Route path="/signup" element={<SignUpPage />} />
    //       <Route path="/signin" element={<SignInPage />} />
    //     </Route>
    //     <Route element={<PrivateRoute />}>
    //       <Route path="/main" element={<MainPage />} />
    //     </Route>
    //   </Route>
    //   <Route path="*" element={<Navigate to="/main" />} />
    // </Routes>
  )
};
