import axios from 'axios';

import { HANDLE_LOGIN, HANDLE_LOGOUT, saveUser, deconnectUser } from 'src/actions/recipes';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      // accès au state
      const state = store.getState();
      /*   console.log(`Middleware auth : j'affiche le state ${state.user.email}`); */
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          /* console.log(response.data); */
          // get the connected user infos and update state
          const saveUserInfos = saveUser(response.data.info.username);
          store.dispatch(saveUserInfos);
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
          // disconnect the current user and update state
          const deconnectUserInfos = deconnectUser(response.data.info.username);
          store.dispatch(deconnectUserInfos);
          console.log('déconnexion ok');
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth;
