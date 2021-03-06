import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink exact to="/" activeClassName='nav-active'>
                Acceuil
            </NavLink>
            <NavLink exact to="/menu" activeClassName='nav-active'>
                Menu
            </NavLink>
            <NavLink exact to="/contact" activeClassName='nav-active'>
                Contact
            </NavLink>
            <NavLink exact to="/about" activeClassName='nav-active'>
                About
            </NavLink>
        </div>
    );
};

export default Navigation;