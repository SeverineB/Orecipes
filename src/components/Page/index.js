import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// la prop children correspond au éléments enfants passés à l'instanciation
const Page = ({ children }) => (
  <main className="page">
    <h1 className="page-title">oRecipe</h1>
    {children}
  </main>
);

// on valide children avec le type node = tout ce qui peut être affiché dans du jsx
Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
