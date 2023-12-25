import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../shared/api/auth';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';

function SignInPage() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(loginUser({ email, password }));
    }

    const handleAuthFormSubmit = () => {
        handleLogin();
    }

    return (
        <div>
        <h1>Sign In</h1>
        <AuthForm email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={handleAuthFormSubmit}/>
        <button onClick={handleLogin}>Sign In</button>
        <Link to="/signup">Sign Up</Link>
        <Outlet />
        </div>
    );
}

export default SignInPage;