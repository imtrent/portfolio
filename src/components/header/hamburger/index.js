import React from 'react';

const Hamburger = ({ isToggled, toggleMobileMenu }) => {
    return (
        <div
            className={`hamburger ${isToggled ? 'toggle' : ''}`}
            onClick={toggleMobileMenu}
            role="button"
        >
            <div />
            <div />
            <div />
        </div>
    );
};

export default Hamburger;
