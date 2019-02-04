// @flow
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-small: calc(14px + 2 * ((100vw - 200px) / 600));
    --line-height-small: calc(14px + 4 * ((100vw - 200px) / 600));
    --font-size-medium: calc(14px + 4 * ((100vw - 200px) / 600));
    --line-height-medium: calc(14px + 6 * ((100vw - 200px) / 600));
    --font-size-large: calc(14px + 14 * ((100vw - 200px) / 600));
    --line-height-large: calc(14px + 16 * ((100vw - 200px) / 600));
    --color-main-blue: #1478cf;
    --color-white: #f7f7f7;
    --color-black: #3a3a3a;
  }

  body {
    background-color: black;
    font-size: var(--font-size-medium);
    line-height: var(--line-height-medium);
    color: var(--color-black);
    
    * {
      box-sizing: border-box;
    }
  }
`;

export default GlobalStyles;
