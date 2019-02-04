// @flow
import styled from 'styled-components';

const Tab = styled.div`
  width: 100%;
  height: calc(100% - (45px + 10 * ((100vw - 200px) / 600)));
  padding: calc(12px + 6 * ((100vw - 200px) / 600));
  display: ${({ hidden }: { hidden: boolean }) => (hidden ? 'none' : 'block')};
`;

export default Tab;
