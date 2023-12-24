import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../shared/api/auth';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';

function SignUpPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false); // стан для визначення невідповідності паролів

    const handleRegister = () => {
        if (password === repeatPassword) {
            dispatch(registerUser({ email, password }));
            setPasswordMismatch(false); // Скидання стану, якщо паролі знову співпадають
        } else {
            setPasswordMismatch(true);
            console.error('Passwords do not match');
        }
    };

    const handleAuthFormSubmit = () => {
        handleRegister();
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <AuthForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={handleAuthFormSubmit}
            />
            <p>Repeat your password</p>
            <input
                type="password"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {passwordMismatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
            <button onClick={handleRegister}>Sign Up</button>
            <Link to="/signin">Sign In</Link>
            <Outlet />
        </div>
    );
}

export default SignUpPage;