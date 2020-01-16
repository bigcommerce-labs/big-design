import React from 'react';

import { BoxProps } from '../Box';

import { StyledGrid } from './styled';
import { GridedProps } from './types';

export type GridProps = BoxProps & GridedProps;

export const Grid: React.FC<GridProps> = React.forwardRef(({ as, ...rest }, ref) => (
  <StyledGrid forwardedAs={as} forwardedRef={ref} {...rest} />
));
