import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height:100vh;
    width:100%;
    background: ${colors.background};
    font-size: 14px;
    color: ${colors.text};
    font-family: 'Maven Pro', sans-serif;
  }
`;