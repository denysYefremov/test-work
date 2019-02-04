// @flow
import { createAction } from 'redux-actions';

const NAMESPACE = 'DASHBOARD';

const saveDashboardData = createAction(
  `${NAMESPACE}/DATA/SAVE`,
);

export default {
  saveDashboardData,
};
