// import { lazy } from "react";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "../pages/HomePage/WelcomePage";
import MainPage from "../pages/MainPage/MainPage";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<SharedLayout/>}>
        <Route element={<PublicRoute />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
            <Route path="/main" element={<MainPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  )
};

// <><>
// <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterForm />} />}/>
//         <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />}/>
//         <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactList />} />}/>
//         <Route path="/newcontact" element={<PrivateRoute redirectTo="/login" component={<ContactForm />} />}/>
//       </Route>
//     </Routes>
//     <MainNav>
//       <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
//       {isLogged && <>
//         <NavItem><StyledLink to="/contacts">Contacts List</StyledLink></NavItem>
//         <NavItem><StyledLink to="/newcontact">New Contact</StyledLink></NavItem>
//       </>}
//     </MainNav>
// </>
// <Routes>
//   <Route element={<PublicRoute />}>
//       <Route path="/register" element={<RegisterPage />} />
//       <Route path="/login" element={<LoginPage />} />
//   </Route>
//   <Route element={<PrivateRoute />}>
//       <Route path="/my-movies" element={<MyMoviesPage />} />
//       <Route path="/my-favorite-movies" element={<MyFavoriteMoviesPage />} />
//   </Route>
//   <Route path="*" element={<NotFoundPage />} />
// </Routes>
// const PrivateRoute = ()=> {
//   if(!isLogin && token) { return <p>...Loading</p> }
//   if(!isLogin && !token) {
//     return <Navigate to="/login" />
//   }
//   return <Outlet />
// }
// const PublicRoute = ()=> {
//     const isLogin = useSelector(isUserLogin);
//     if(isLogin) {
//         return <Navigate to="/my-movies" />
//     }
//     return <Outlet />
// }
// const NavbarMenu = () => {
//     const isLogin = useSelector(isUserLogin);
//         return (
//             <li key={id}>
//                 <NavLink to={link} className={styles.link}>{text}</NavLink>
//             </li>
//         )
//     };
// }
// <>
// </></>