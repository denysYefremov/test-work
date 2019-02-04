// @flow
import styled from 'styled-components';

const ToggleItem = styled.li`
  display: inline-block;
  border: 1px solid black;
  padding: calc(8px + ((100vw - 200px) / 800));
  cursor: pointer;
  background-color: var(--color-white);
  
  ${({ active }: { active: boolean }) => (
    active ? `
        background-color: var(--color-main-blue);
        color: var(--color-white);
      ` : null
  )}
  
  :hover {
    background-color: var(--color-main-blue);
    color: var(--color-white);
  }
  
  :not(:first-child) {
    border-left: none;
  }
  
  :first-child {
    border-radius: 24px 0 0 24px;
  }
  
  :last-child {
    border-radius: 0 24px 24px 0;
  }
`;

export default ToggleItem;
