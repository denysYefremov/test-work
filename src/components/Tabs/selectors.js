// @flow
import { Map } from 'immutable';
import { createSelector } from 'reselect';

const getDomain = state => state.get('tabs', new Map());

const getActiveTab = createSelector(
  getDomain,
  domain => domain.get('activeTab'),
);

export default {
  getActiveTab,
};
