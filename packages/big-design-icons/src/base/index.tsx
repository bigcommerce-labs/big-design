import {
  Colors,
  theme as defaultTheme,
  Spacing,
  ThemeInterface,
} from '@bigcommerce/big-design-theme';
import React, {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import styled from 'styled-components';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  className?: string;
  color?: keyof Colors;
  size?: keyof Spacing | number;
  theme?: ThemeInterface;
  title?: string;
}

export interface PrivateIconProps {
  svgRef?: React.Ref<SVGSVGElement>;
  titleId?: string;
}

export function createStyledIcon(
  Icon: ForwardRefExoticComponent<PropsWithoutRef<IconProps> & RefAttributes<SVGSVGElement>>,
) {
  const StyledIcon = styled(Icon)`
    vertical-align: middle;

    ${({ color, theme }) => color && { color: theme.colors[color] }}

    ${({ size, theme }) =>
      size && {
        height: typeof size === 'number' ? theme.helpers.remCalc(size) : theme.spacing[size],
        width: typeof size === 'number' ? theme.helpers.remCalc(size) : theme.spacing[size],
      }}
  `;

  StyledIcon.defaultProps = {
    theme: defaultTheme,
    size: 'xLarge',
  };

  return StyledIcon;
}
