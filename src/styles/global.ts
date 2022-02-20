import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.background};
    font-size: 14px;
    color: ${colors.text};
    font-family: 'Maven Pro', sans-serif;
  }
`;