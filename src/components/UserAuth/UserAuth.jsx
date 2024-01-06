import { UserAuthLink, UserAuthLinkHover } from './UserAuth.styled';
import sprite from "../../images/sprite.svg";

const UserAuth = () => {
    return (
        <UserAuthLink to="/signin">
            <UserAuthLinkHover>Sign In</UserAuthLinkHover>
            <svg width="24" height="24" stroke="#2F2F2F">
                <use href={sprite + "#signin"}></use>
            </svg>
        </UserAuthLink>
    );
};

export default UserAuth;