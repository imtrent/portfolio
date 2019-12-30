import React from 'react';
import PropTypes from 'prop-types';
import Burger from './styles';

const Hamburger = ({ isToggled, toggleMobileMenu }) => {
    return (
        <Burger
            className={`hamburger ${isToggled ? 'toggle' : ''}`}
            onClick={toggleMobileMenu}
            role="button"
        >
            <div />
            <div />
            <div />
        </Burger>
    );
};

Hamburger.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    toggleMobileMenu: PropTypes.func.isRequired
};

export default Hamburger;
