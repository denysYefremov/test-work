// @flow
import styled from 'styled-components';

const ActiveButtonStyles = `
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 30%;
    left: 0;
    transform: scaleX(0.8);
    background-color: #fff;
  }
`;

const NotActiveButtonStyles = `
  :hover:before {
    visibility: visible;
    transform: scaleX(0.8);
  }
  
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 30%;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`;

const Button = styled.li`
  display: inline-block;
  padding: calc(14px + 2 * (100vw / 550)) 20px;
  padding-right: 0;
  cursor: ${({ disabled }: { disabled: boolean }) => (disabled ? 'default' : 'pointer')};
  color: ${({ disabled }: { disabled: boolean }) => (disabled ? '#c1c1c1' : '#fff')};
  position: relative;
  text-decoration: none;
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
  
  ${({ disabled, active }: { disabled: boolean, active: boolean }) => {
    if (disabled) {
      return '';
    }

    return active ? ActiveButtonStyles : NotActiveButtonStyles;
  }}
  
  :after {
    content: "";
    border-right: 1px solid white;
    margin-left: 21px;
  }
`;

export default Button;
