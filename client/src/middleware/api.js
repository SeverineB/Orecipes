import axios from 'axios';

import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('http://orecipes.severinebianchi.com/recipes')
        .then((response) => {
          const saveRecipesAction = saveRecipes(response.data);
          store.dispatch(saveRecipesAction);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
      next(action);
  }
};

export default api;
