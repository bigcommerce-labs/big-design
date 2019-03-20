import styled, { DefaultTheme, StyledComponent } from 'styled-components';

import { defaultTheme } from '../../../theme';
import { StyleableH4 } from '../../Typography/private';

import { LabelProps } from './Label';

export const StyledLabel = styled(StyleableH4).attrs({
  as: 'label',
})<LabelProps>`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xxSmall};
` as StyledComponent<'label', DefaultTheme>;

StyledLabel.defaultProps = { theme: defaultTheme };
