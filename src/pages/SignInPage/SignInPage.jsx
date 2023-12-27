import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../shared/api/auth";
import { Link, useNavigate, Outlet } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { selectToken } from "../../redux/auth/selectors";

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await dispatch(loginUser({ email, password }));
      const token = response.token;
      console.log(response.token);

      const saveTokenToLocalStorage = (token) => {
        localStorage.setItem("token", token);
      };
      // збереження токену у локальному сховищі
      saveTokenToLocalStorage(token);

      // перекидає на хоум після успішного завершення запиту на логін
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleAuthFormSubmit = () => {
    handleLogin();
  };

  // перевірка чи токен зберігається в  редакс
  const tokenInRedux = useSelector((state) => selectToken(state));
  console.log("Token in Redux state:", tokenInRedux);

  // перевірка чи токен зберігається в локальному сховищі
  const tokenInLocalStorage = localStorage.getItem("token");
  console.log("Token in localStorage:", tokenInLocalStorage);

  return (
    <div>
      <h1>Sign In</h1>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleAuthFormSubmit}
      />
      <button onClick={handleLogin}>Sign In</button>
      <Link to="/signup">Sign Up</Link>
      <Outlet />
    </div>
  );
}

export default SignInPage;
