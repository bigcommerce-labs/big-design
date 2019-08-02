import { remCalc, theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';

interface StyledList {
  maxHeight?: number;
}

export const StyledList = styled.ul<StyledList>`
  ${({ theme }) => theme.elevation.raised};

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.secondary70};
  display: inline-block;
  margin: 0;
  max-height: ${({ maxHeight }) => (maxHeight ? remCalc(maxHeight) : '')};
  outline: none;
  overflow-y: scroll;
  padding: ${({ theme }) => theme.spacing.xSmall} 0;
`;

StyledList.defaultProps = { theme: defaultTheme };
