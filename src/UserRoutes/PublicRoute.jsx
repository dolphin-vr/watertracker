import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const isLogin = useSelector(state => state.auth.isLoggedIn);

    if(isLogin) {
        return <Navigate to={"/main"} replace/>
    }

    return <Outlet/>
}

export default PublicRoute;