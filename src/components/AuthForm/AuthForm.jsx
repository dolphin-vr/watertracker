import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../../shared/api/validation';

function AuthForm({ email, setEmail, password, setPassword, onSubmit }) {
    const [errors, setErrors] = useState({ email: '', password: '' });

    const handleEmailChange = (value) => {
        setEmail(value);
        setErrors((prevErrors) => ({ ...prevErrors, email: validateEmail(value) }));
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
        setErrors((prevErrors) => ({ ...prevErrors, password: validatePassword(value) }));
    };

    const handleSubmit = () => {
        const isEmailValid = !errors.email;
        const isPasswordValid = !errors.password;

        if (isEmailValid && isPasswordValid) {
            onSubmit();
        } else {
            console.error('Invalid data. Please check your input.');
        }
    };

    return (
        <div>
            <p>Enter your email</p>
            <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <p>Enter your password</p>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
    );
}

export default AuthForm;