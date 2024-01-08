import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import { selectIsLoggedIn } from '../../redux/auth/selectors'; 
import { HeaderStyled } from "./Header.styled";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled>
      <Logo />
      {isLoggedIn ? <UserLogo /> : <UserAuth />}
    </HeaderStyled>
  );
};

export default Header;

