import React from 'react';
import { useSelector } from 'react-redux';
import Logo from "../Logo/Logo";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import { selectIsLoggedIn } from '../../redux/selectors'; 
// import LogOutBtn from '../LogOutBtn';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Logo />
      {/* <LogOutBtn /> */}
      {isLoggedIn ? <UserLogo /> : <UserAuth />}
    </div>
  );
};

export default Header;

//компонент рендериться відповідно до того чи авторизоваий користувач чи ні 
