export const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid ? '' : 'Invalid email';
};

export const validatePassword = (password) => {
    const isValid = password.length >= 8 && password.length <= 64;
    return isValid ? '' : 'Password must be 8-64 characters long';
};