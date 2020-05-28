import { CHANGE_FIELD } from 'src/actions/recipes';

const initialState = {
  value: '',
  users: [
    {
      email: 'bouclierman@herocorp.io',
      password: 'jennifer',
    },
    {
      email: 'acidman@herocorp.io',
      password: 'fructis',
    },
    {
      email: 'captain.sportsextremes@herocorp.io',
      password: 'pingpong',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      console.log(state.email);
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
