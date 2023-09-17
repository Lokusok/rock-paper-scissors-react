import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background-color: #282A2E;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-family: Roboto, sans-serif;
  }

  #root {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
