import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import { selectIsLoggedIn } from '../../redux/auth/selectors'; 

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Logo />
      {isLoggedIn ? <UserLogo /> : <UserAuth />}
    </div>
  );
};

export default Header;

//компонент рендериться відповідно до того чи авторизоваий користувач чи ні
