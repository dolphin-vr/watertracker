import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy, useEffect } from "react";
import { UserRoutes } from "./UserRoutes/UserRoutes";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/auth";
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const ForgotPasswordPage = lazy(() =>
  import("./pages/ForgotPasswordPage/ForgotPasswordPage")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MainHomepage = lazy(() => import("./pages/MainHomepage/MainHomepage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : ( <>
      <UserRoutes/>
      <GlobalStyle />
    </>
  );
}

export default App;
