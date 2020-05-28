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
      console.log(state);
      // axios.post(url[, data[, config]])
      console.log('je lance la requête');
      axios.post('http://localhost:3001/login', {
        email: state.email,
        password: state.password,
      })
        .then((response) => {
          console.log('response', response.data);
          // j'ai le pseudo fourni par l'api
          // mon intention : ranger ce pseudo dans mon state
          // je vais dispatcher une action
          const actionToSavePseudo = changeField('username', response.data);
          store.dispatch(actionToSavePseudo);
          console.log('je suis bien connecté');
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
