import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './rootReducer';

const initialState = fromJS({});
const enhancers = [];
const middleware = [
  thunk,
];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
