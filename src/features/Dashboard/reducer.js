// @flow
import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import actions from './actions';

const DEFAULT_STATE = fromJS({
  duration: 0,
  duration_countdown: 0,
  calories: 0.0,
  speed: 0,
  grade: 0.0,
  heart_rate: 0.0,
  pace: 0.0,
  distance: 0.0,
});

export default handleActions({
  [actions.saveDashboardData]: (state, { payload }) => fromJS(payload),
}, DEFAULT_STATE);
