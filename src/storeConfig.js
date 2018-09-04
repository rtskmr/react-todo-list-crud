/**
 * Configure redux store with middleware:
 * - redux thunk 
 * - reducers
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer  from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
