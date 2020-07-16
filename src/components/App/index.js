import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import LoginForm from 'src/containers/LoginForm';
import Page from 'src/components/Page';
import Home from 'src/components/Home';
import Recipe from 'src/containers/Recipe';

const App = ({ fetchRecipes }) => {
  useEffect(fetchRecipes, []);
  return (
    <div>
      <Nav />
      <LoginForm />
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
