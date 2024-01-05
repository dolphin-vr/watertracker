import { GlobalStyle } from "./shared/styles/GlobalStyle";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
// import { SharedLayout } from "./SharedLayout/SharedLayout";
import { useEffect } from "react";
import { UserRoutes } from "./UserRoutes/UserRoutes";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/auth";
// const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
// const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
// const ForgotPasswordPage = lazy(() =>
//   import("./pages/ForgotPasswordPage/ForgotPasswordPage")
// );
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const MainHomepage = lazy(() => import("./pages/MainHomepage/MainHomepage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     // Викликати асинхронну функцію
    //     await dispatch(refreshUser());

    //     // Інші дії після оновлення користувача (якщо потрібно)
    //     console.log("Користувач оновлено!");
    //   } catch (error) {
    //     console.error("Помилка під час оновлення користувача", error);
    //   }
    // }
    // fetchData()
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Loading</p>
  ) : (
    <>
      <UserRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
