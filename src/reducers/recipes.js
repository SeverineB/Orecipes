import { SAVE_RECIPES } from 'src/actions/recipes';

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
