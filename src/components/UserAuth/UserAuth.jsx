import { UserAuthLogo } from './UserAuthLogo';
import { UserAuthLink, UserAuthLinkHover } from './UserAuth.styled';

const UserAuth = () => {
    return (
        <UserAuthLink to="/signin">
            <UserAuthLinkHover>Sign In</UserAuthLinkHover>
            <UserAuthLogo/>
        </UserAuthLink>
    );
};

export default UserAuth;