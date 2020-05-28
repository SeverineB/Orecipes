import {} from 'src/actions';
import { CHANGE_FIELD } from 'src/actions/recipes';

const initialState = {
 value: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: 
      console.log(action);
        return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
    }
  };

export default reducer;
