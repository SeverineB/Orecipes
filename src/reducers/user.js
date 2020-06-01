import { CHANGE_FIELD, SAVE_USER, DECONNECT_USER } from 'src/actions/recipes';

const initialState = {
 /*  username: '', */
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      /* console.log(`dans le reducer user je récupère l'action key ${action.key} l'action value est ${  action.value}`); */
      return {
        ...state,
        [action.key]: action.value,
      };
    case SAVE_USER:
      console.log(`j\'affiche le username ${action.username}`);
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
        username: action.username,
      };
    case DECONNECT_USER:
      return {
        ...state,
        isLogged: false,
        username: '',
      };
    default:
      return state;
  }
};

export default reducer;
