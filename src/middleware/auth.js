import axios from 'axios';

import { HANDLE_LOGIN, HANDLE_LOGOUT, changeField } from 'src/actions/recipes';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      // accès au state
      const state = store.getState();
      console.log(`Middleware auth : j'affiche le state ${state.user.email}`);
      console.log('je lance la requête');
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          /*  console.log('response', response.data); */
          // j'ai le pseudo fourni par l'api
          // mon intention : ranger ce pseudo dans mon state
          // je vais dispatcher une action
          const saveUsername = changeField('username', response.data.info.username);
          store.dispatch(saveUsername);
          const saveLoggedValue = changeField('logged', response.data.logged);
          store.dispatch(saveLoggedValue);
          console.log(response.data.logged, response.data.info.username);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case HANDLE_LOGOUT: {
      const state = store.getState();
      axios.post('http://localhost:3001/logout', {
      })
        .then((response) => {
          const emptyEmail = changeField('email', '');
          store.dispatch(emptyEmail);
          const emptyPassword = changeField('password', '');
          store.dispatch(emptyPassword);
          const emptyUsername = changeField('username', '');
          store.dispatch(emptyUsername);
          const saveLoggedValue = changeField('logged', response.data.logged);
          store.dispatch(saveLoggedValue);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    /* case IS_LOGGED: {
      const state = store.getState();
      axios.post('http://localhost:3001/isLogged', {
        logged: state.user.logged,
      })
        .then((response) => {
          const saveLoggedValue = changeField('logged', response.data.logged);
          store.dispatch(saveLoggedValue);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    } */
    // pour toutes les autres, je les laisse passer sans rien faire
    default:
      next(action);
  }
};

export default auth;
