// @flow
import * as React from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { calculateSize } from '../utils';

const Workspace = styled.div`
  width: ${({ width }: { width: number }) => width}px;
  height: ${({ height }: { height: number }) => height}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

type WorkspaceComponentState = {
  width: number,
  height: number,
};

/* Probably it is better to move to the HoC this component,
   but I don't see the usage of this HoC, so decided to leave it here */
class WorkspaceComponent extends React.Component<any, WorkspaceComponentState> {
  constructor(props: any) {
    super(props);
    this.state = calculateSize();
    this.resize = debounce(this.resize, 150);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = (): void => {
    this.setState(calculateSize);
  };

  render() {
    return <Workspace {...this.state} {...this.props} />;
  }
}

export default WorkspaceComponent;
