import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import LoginForm from 'src/containers/LoginForm';
import Page from 'src/components/Page';
import Home from 'src/components/Home';
import Recipe from 'src/containers/Recipe';

const App = ({ fetchRecipes }) => {
  // objectif : récupérer la liste des recettes depuis l'api
  // après le rendu de montage on déclenche le chargement des recettes
  useEffect(fetchRecipes, []);
  return (
    <div>
      <Nav />
      <LoginForm />
      {/* on instancie le composant page en lui passant un/des enfants */}
      {/* Le composant Route permet de conditionner du JSX en fonction de l'url; ici quand l'url active est exactement / le jsx enfant s'active */}
      <Route path="/" exact>
        <Page>
          <Home />
        </Page>
      </Route>
      {/* on peut faire une route dynamique grâce à react router */}
      <Route path="/recipe/:slug" exact>
        <Page>
          {/* ici je passe la recette en dur : objectif
          je veux trouver la bonne recette dans liste (find dans array) celle qui a le slug actif : react-router va me permettre de connaitre le slug actif */}
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
