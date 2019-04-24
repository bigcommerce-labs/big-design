import styled, { css } from 'styled-components';

import { withMargins } from '../../mixins';
import { defaultTheme } from '../../theme';

import { LozengeProps } from './Lozenge';

export const StyledLozenge = styled.span<LozengeProps>`
  ${withMargins()};

  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  text-align: center;
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing.xxSmall};

  ${({ theme, variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colors.secondary60};
    `}

  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colors.brand};
    `}

  ${({ theme, variant }) =>
    variant === 'success' &&
    css`
      background-color: ${theme.colors.success50};
    `}

  ${({ theme, variant }) =>
    variant === 'warning' &&
    css`
      color: ${theme.colors.secondary70};
      background-color: ${theme.colors.warning40};
    `}

  ${({ theme, variant }) =>
    variant === 'danger' &&
    css`
      background-color: ${theme.colors.danger40};
    `}
`;

StyledLozenge.defaultProps = {
  theme: defaultTheme,
  variant: 'secondary',
};
