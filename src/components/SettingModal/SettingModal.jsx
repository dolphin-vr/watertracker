import React, { useState, useEffect } from 'react';

const SettingModal = () => {
    const [photo, setPhoto] = useState(null);
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

    }, []);

      //   const handleEscKeyPress = event => {
    //     if (event.key === 'Escape' && isOpen) {
    //       onClose();
    //     }
    //   };

    //   const handleOutsideClick = event => {
    //     if (!event.target.closest('.dropdown-container') && isOpen) {
    //       onClose();
    //     }
    //   };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div>
            <h1>Setting</h1>
            <p>Your photo</p>

            <img alt="User" />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleInputChange({ target: { name: 'photo', value: e.target.files[0] } })}
            />
            <h2>Your gender identity</h2>

            <input
                type="radio"
                checked={gender === 'Man'}
            />
            <label htmlFor="man">Man</label>

            <input
                type="radio"
                checked={gender === 'Woman'}
            />
            <label>Your name</label>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
            />
            <label>E-mail</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
            />
            <h2>Password</h2>
            <label>Outdated password</label>
            <input
                type="password"
                name="outdatedPassword"
                placeholder="Enter your outdated password"
            />
            <label>New password</label>
            <input
                type="password"
                name="newPassword"
                placeholder="Enter your new password"
            />
            <label>Repeat new password</label>
            <input
                type="password"
                name="repeatNewPassword"
                placeholder="Repeat your new password"
            />
            <button type="submit">Save</button>
        </div>
    );
};

export default SettingModal;