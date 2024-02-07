import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { useEffect } from "react";
import { UserRoutes } from "./components/UserRoutes/UserRoutes";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/auth";
import { Loader } from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader/>
  ) : (
    <>
      <UserRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
