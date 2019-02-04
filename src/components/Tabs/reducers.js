// @flow
import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import actions from './actions';

const DEFAULT_STATE = fromJS({
  activeTab: '',
});

export default handleActions({
  [actions.activateTab]: (state, { payload }) => state.set('activeTab', payload.activeTab),
}, DEFAULT_STATE);
