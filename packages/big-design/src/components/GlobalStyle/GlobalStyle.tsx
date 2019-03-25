import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

import { defaultTheme } from '../../theme';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600');

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;

GlobalStyle.defaultProps = { theme: defaultTheme };
