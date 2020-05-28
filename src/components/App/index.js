import React from 'react';
import { Route } from 'react-router-dom';

import Nav from 'src/components/Nav';
import Page from 'src/components/Page';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';

import recipes from 'src/data';

const App = () => (
  <div>
    <Nav recipes={recipes} />
    {/* on instancie le composant page en lui passant un/des enfants */}
    {/* Le composant Route permet de conditionner du JSX en fonction de l'url */}
    <Route path="/" exact>
      <Page>
        <Home />
      </Page>
    </Route>
    <Route path="/recipe" exact>
      <Page>
        <Recipe recipe={recipes[1]} />
      </Page>
    </Route>
  </div>
);

export default App;
