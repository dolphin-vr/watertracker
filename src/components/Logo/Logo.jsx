import React from 'react';
import { Link } from 'react-router-dom';
// import waterTrackerLogo from '' // наше лого імпорт

const Logo = () => {
    return (
        <div>
        <Link to="/">
            <button>
            {/* <img src={waterTrackerLogo} alt="Water Tracker Logo" /> */}
            Tracker of water
            </button>
        </Link>
        </div>
    );
};

export default Logo;
