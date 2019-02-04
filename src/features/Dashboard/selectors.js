// @flow
import { createSelector } from 'reselect';
import { Map } from 'immutable';

const selectDomain = state => state.get('dashboard', new Map({}));

export const selectDashboardData = createSelector(
  selectDomain,
  domain => domain.toJS(),
);

export default {
  selectDashboardData,
};
