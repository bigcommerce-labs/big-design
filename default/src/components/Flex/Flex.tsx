import { defaultTheme } from '../../theme';

import { StyledFlex } from './styled';

export interface FlexProps {
  alignItems?: 'normal' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
}

export const Flex = StyledFlex;

Flex.defaultProps = {
  alignItems: 'stretch',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  theme: defaultTheme,
};
