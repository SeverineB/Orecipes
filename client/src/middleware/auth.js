import axios from 'axios';

import { HANDLE_LOGIN, HANDLE_LOGOUT, saveUser, deconnectUser } from 'src/actions/recipes';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      const state = store.getState();
      axios.post('http://orecipes.severinebianchi.com/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
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
      axios.post('http://orecipes.severinebianchi.com/logout', {
      })
        .then((response) => {
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
