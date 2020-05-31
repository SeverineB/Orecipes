export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const IS_LOGGED = 'IS_LOGGED';

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

export const isLogged = (logged) => ({
  type: IS_LOGGED,
  logged,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});
