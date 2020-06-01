export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const DECONNECT_USER = 'DECONNECT_USER';
export const IS_LOGGED = 'DECONNECT_USER';

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes,
});

export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const saveUser = (username) => ({
  type: SAVE_USER,
  username,
});

export const deconnectUser = () => ({
  type: DECONNECT_USER,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});
