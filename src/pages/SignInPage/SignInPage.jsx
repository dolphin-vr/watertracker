import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/auth";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectToken } from "../../redux/auth/selectors";


export const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    navigate("/");
  };

  // // // перевірка чи токен зберігається в  редакс
  // const tokenInRedux = useSelector((state) => selectToken(state));
  // console.log("Token in Redux state:", tokenInRedux);

  // // перевірка чи токен зберігається в локальному сховищі
  // const tokenInLocalStorage = localStorage.getItem("token");
  // console.log("Token in localStorage:", tokenInLocalStorage);

  return (
    <div>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin} autoComplete="off">
            <label>
                Enter your email
                <input type="email" name="email" placeholder="E-mail"/>
            </label>
            <label>
                Enter your password
                <input type="password" name="password" placeholder="Password"/>
            </label>
            <button>Sign In</button> 
        </form>
        <Link to="/signup">Sign Up</Link>
        <Outlet />
    </div>
    );
}

export default SignInPage;
