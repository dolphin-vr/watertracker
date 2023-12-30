import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const isLogin = useSelector(state => state.auth.isLoggedIn);

    if(isLogin) {
        return <Navigate to={"/main"}/>
    }

    return <Outlet/>
}

export default PublicRoute;