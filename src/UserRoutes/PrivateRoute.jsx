import { Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ()=> {
    const isLogin = useSelector(state => state.auth.isLoggedIn)
    const token = useSelector(state => state.auth.token)
    
    if(!isLogin || !token) {
        return <Navigate to={"/"}/>
    }

    return <Outlet/>
}
