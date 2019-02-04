// @flow
import styled from 'styled-components';

const TabsContainer = styled.ul`
  width: 100%;
  height: calc(45px + 10 * ((100vw - 200px) / 600));
  background: var(--color-main-blue);
  position: absolute;
  bottom: 0;
  
  margin: 0;
  padding: 0;
`;

export default TabsContainer;
