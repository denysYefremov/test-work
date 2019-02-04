import { combineReducers } from 'redux-immutable';
import featureReducers from '../features';
import componentReducers from '../components';

export default combineReducers({
  ...featureReducers,
  ...componentReducers,
});
