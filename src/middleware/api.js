import axios from 'axios';

import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      // je traduis l'intention d'aller chercher les recettes
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // je recup mes data
          // je veux les afficher
          // ce qui est affichée dans l'appli dépend de la source de vérité : le state
          // donc toi la data go dans le state
          // j'ai une intention : modifier le state
          // intention = modification du state ? dispatch d'une action et traduction dans le reducer
          const saveRecipesAction = saveRecipes(response.data);
          store.dispatch(saveRecipesAction);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
      // je laisse passer l'action au middleware/reducer suivant
      next(action);
  }
};

export default api;
