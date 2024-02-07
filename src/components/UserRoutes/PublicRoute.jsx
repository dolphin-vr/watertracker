import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if(isLoggedIn) {
        return <Navigate to={"/main"}/>
    }

    return <Outlet/>
}
