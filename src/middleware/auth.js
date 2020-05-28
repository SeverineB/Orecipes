import axios from 'axios';

import { HANDLE_LOGIN, changeField } from 'src/actions/recipes';

// Toutes les actions passent dans tous les middlewares tour à tour dans l'ordre donné à createStore tant que les middlewares laissent passer avec next, l'action termine sa course dans le reducer

const auth = (store) => (next) => (action) => {
  // je vais réagir au cas par cas selon les types des actions
  switch (action.type) {
    // je réagis spécifiquement aux actions m'intéressent
    case HANDLE_LOGIN: {
      // j'ai accès au store donc au state
      const state = store.getState();
      // axios.post(url[, data[, config]])
      console.log('je lance la requête');
      axios.post('http://localhost:3001/login', {
        email: 'acidman@herocorp.io',
        password: 'fructis',
      })
        .then((response) => {
          console.log('response', response.data);
          // j'ai le pseudo fourni par l'api
          // mon intention : ranger ce pseudo dans mon state
          // je vais dispatcher une action
          const actionToSavePseudo = changeField('pseudo', response.data);
          store.dispatch(actionToSavePseudo);
        })
        .catch((error) => {
          /* console.error(error); */
        });
      break;
    }
    // pour toutes les autres, je les laisse passer sans rien faire
    default:
      next(action);
  }
};

export default auth;
