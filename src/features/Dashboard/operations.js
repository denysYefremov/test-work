// @flow
import actions from './actions';

const getData = () => (dispatch: *): void => {
  let data = {
    duration: 0,
    duration_countdown: 3600,
    calories: 0.1875,
    speed: 9,
    grade: 0.0,
    heart_rate: 127.0,
    pace: 0.0,
    distance: 0.0,
  };

  // didn't find how to calculate grade
  const interval = setInterval(() => {
    dispatch(actions.saveDashboardData(data));
    data = {
      ...data,
      duration: data.duration + 0.5,
      duration_countdown: data.duration_countdown - 0.5,
      distance: data.duration / 3600 * data.speed,
      pace: data.distance > 0 ? (data.duration / 60) / data.distance : 0.0,
    };

    if (data.duration_countdown < 0) {
      clearInterval(interval);
    }
  }, 500);
};

export default {
  getData,
};
