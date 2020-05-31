import { CHANGE_FIELD, IS_LOGGED } from 'src/actions/recipes';

const initialState = {
  username: '',
  logged: false,
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
    case IS_LOGGED:
      return {
        logged: !state.logged,
      };
    default:
      return state;
  }
};

export default reducer;
