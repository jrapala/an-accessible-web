import { createGlobalStyle } from 'styled-components';
import CSSReset from './CSSReset';
import CustomStyles from './CustomStyles';

const GlobalStyle = createGlobalStyle`
  ${CSSReset}
  ${CustomStyles}
`;

export default GlobalStyle;
