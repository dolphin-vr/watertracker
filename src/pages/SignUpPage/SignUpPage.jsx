import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../shared/api/auth';
import { Outlet, useNavigate, Link} from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { todayISO } from '../../shared/api/dates';

function SignUpPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [registrationError, setRegistrationError] = useState(null); //  стан для повідомлення про помилку при реєстрації


    const handleRegister = async () => {
        try {
            if (password === repeatPassword) {
                const date = todayISO(new Date());
                dispatch(registerUser({ email, password, date }));
                setPasswordMismatch(false);
                setRegistrationError(null); // Скидаємо стан помилки при успішній реєстрації
                navigate('/signin');
            } else {
                setPasswordMismatch(true);
                console.error('Passwords do not match');
            }
        } catch (error) {
            setRegistrationError(error.message); // Встановлюємо повідомлення про помилку у випадку невдалої реєстрації
        }
    };

    const handleAuthFormSubmit = () => {
        handleRegister();
    };

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
                placeholder="Repeat your password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {passwordMismatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
            {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
            <button onClick={handleRegister}>Sign Up</button>
            <Link to="/signin">Sign In</Link>
            <Outlet />
        </div>
    );
}

export default SignUpPage;



