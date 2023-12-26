import { useDispatch } from 'react-redux';
import { logoutUser } from '../shared/api/auth';

const LogOutBtn = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    );
};

export default LogOutBtn;

//цей компонент зробила щоб перевірити логін, переробиться потім 