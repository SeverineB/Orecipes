// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import api from '../middleware/api';
import auth from '../middleware/auth';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    api,
    auth,
    // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
