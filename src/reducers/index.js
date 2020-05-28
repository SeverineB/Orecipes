import { combineReducers } from 'redux';

import recipes from './recipes';
import user from './user';

// combineReducers est une fonction bien pratique fournie par redux qui rassemble plusieurs reducers en 1
// c'est ce mega reducer combiné qu'on donne au store

// on passe un objet à combineReducers
// en clé on donne un nom à notre "sous-state", en valeur on passe la fonction reducer pour faire évoluer ce fragment de state
export default combineReducers({
  recipes,
  user,
  // recipes: recipes,
});
