// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';

import Toggles from 'components/Toggles';
import H1 from 'components/h1';

import operations from './operations';
import { selectDashboardData } from './selectors';

type DashboardProps = {
  data: {
    duration: number,
    duration_countdown: number,
    calories: number,
    speed: number,
    grade: number,
    heart_rate: number,
    pace: number,
    distance: number,
  },
  getData: () => void,
}

type DashboardState = {
  unitSystem: string,
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  state = {
    unitSystem: 'metric',
  };

  componentDidMount() {
    this.props.getData();
  }

  changeUnitSystem = unitSystem => this.setState({ unitSystem });

  calculateUnit = (unit: number) => {
    const { unitSystem } = this.state;
    if (unitSystem === 'metric') {
      return unit;
    }

    return unit / 1.609;
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <H1>Dashboard</H1>
        <hr />
        <Toggles
          items={[
            { label: 'Metric', value: 'metric' },
            { label: 'Imperial', value: 'imperial' },
          ]}
          onChange={this.changeUnitSystem}
        />
        <ul>
          <li>
            <b>Duration: </b>
            {moment.utc(Math.round(data.duration) * 1000).format('HH:mm:ss')}
          </li>
          <li>
            <b>Remaining: </b>
            {moment.utc(Math.floor(data.duration_countdown) * 1000).format('HH:mm:ss')}
          </li>
          <li>
            <b>Calories burn rate: </b>
            {`${parseFloat(data.calories)} cal/sec`}
          </li>
          <li>
            <b>Speed: </b>
            {`${this.calculateUnit(data.speed).toFixed(1)} ${this.state.unitSystem === 'metric' ? 'kph' : 'mph'}`}
          </li>
          <li>
            <b>Grade: </b>
            {`${data.grade.toFixed(1)} %`}
          </li>
          <li>
            <b>Heart rate: </b>
            {`${parseFloat(data.heart_rate)} bpm`}
          </li>
          <li>
            <b>Pace: </b>
            {`${moment.utc(this.calculateUnit(data.pace) * 1000 * 60).format('mm:ss')}
              ${this.state.unitSystem === 'metric' ? 'min/km' : 'min/mile'}`}
          </li>
          <li>
            <b>Distance: </b>
            {`${this.calculateUnit(data.distance).toFixed(2)} ${this.state.unitSystem === 'metric' ? 'km' : 'miles'}`}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectDashboardData,
});

const mapDispatchToProps = {
  getData: operations.getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
