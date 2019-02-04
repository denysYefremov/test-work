// @flow
import { createAction } from 'redux-actions';

const NAMESPACE = 'TABS';

const activateTab = createAction(
  `${NAMESPACE}/ACTIVATE`,
  tabName => ({ activeTab: tabName }),
);

export default {
  activateTab,
};
