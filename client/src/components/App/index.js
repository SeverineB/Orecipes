import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from '../LoginForm';
import Page from '../Page';
import Home from '../Home';
import Recipe from '../../containers/Recipe';
import Nav from '../../containers/Nav';

import './style.scss';

const App = ({ fetchRecipes }) => {
  useEffect(fetchRecipes, []);
  return (
    <div className="wrapper">
      <LoginForm />
      <Nav />
      <Route path="/" exact>
        <Page>
          <Home />
        </Page>
      </Route>
      <Route path="/recipe/:slug" exact>
        <Page>
          <Recipe />
        </Page>
      </Route>
    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
};

export default App;
