import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/auth';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { todayISO } from '../../shared/api/dates';

function SignUpPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const repeatPassword = form.elements.repeatPassword.value;

    if (password !== repeatPassword) {
        console.error('Passwords do not match');
        return;
    }

    try {
        const date = todayISO(new Date());
        // const response =
        await dispatch(
            registerUser({
                email: email,
                password: password,
                date
            })
        );

        // console.log('Registration successful:', response);

        form.reset();
        navigate('/');
    } catch (error) {
        // Ваш код для обробки помилки реєстрації
        console.error('Registration error:', error);
    }
};

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegister} autoComplete="off">
                <label>
                    Enter your email
                    <input type="email" name="email" placeholder="E-mail"/>
                </label>
                <label>
                    Enter your password
                    <input type="password" name="password" placeholder="Password"/>
                </label>
                <label>
                    Repeat your password
                    <input type="password" name="repeatPassword" placeholder="Repeat your password"/>
                </label>
                <button>Sign Up</button> 
            </form>
            <Link to="/signin">Sign In</Link>
            <Outlet />
        </div>
    );
}

export default SignUpPage;


