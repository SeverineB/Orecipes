import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Nav = ({ recipes }) => (
  <nav className="menu">
    <NavLink
      to="/"
      className="menu-link"
      activeClassName=" menu-link--current"
    >
      Accueil
    </NavLink>
    {recipes.map(({ id, title }) => (
      <NavLink
        to="/recipe"
        key={id}
        className="menu-link"
      >
        {title}
      </NavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Nav;
