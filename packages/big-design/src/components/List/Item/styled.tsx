import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';

import { withTransition } from '../../../helpers/transitions';

import { ListItemProps } from '.';

export const StyledListItem = styled.li<
  Omit<ListItemProps<unknown>, 'getItemProps' | 'item' | 'index'>
>`
  ${withTransition(['background-color', 'color'])}

  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-weight: ${({ theme, isSelected }) =>
    isSelected ? theme.typography.fontWeight.semiBold : theme.typography.fontWeight.regular};
  justify-content: space-between;
  min-height: ${({ theme }) => theme.helpers.remCalc(36)};
  min-width: ${({ autoWidth, theme }) => (autoWidth ? 'auto' : theme.helpers.remCalc(256))};
  outline: none;
  padding: ${({ theme }) => `${theme.spacing.xxSmall} ${theme.spacing.medium}`};

  a {
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary70};
    display: flex;
    height: 100%;
    text-decoration: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  ${({ actionType, isAction, isHighlighted, theme }) =>
    isHighlighted &&
    (isAction
      ? actionType === 'normal'
        ? css`
            background-color: ${theme.colors.primary10};
            color: ${theme.colors.primary};

            a {
              color: ${theme.colors.primary};
            }
          `
        : css`
            background-color: ${theme.colors.danger10};
            color: ${theme.colors.danger50};

            a {
              color: ${theme.colors.danger50};
            }
          `
      : css`
          background-color: ${theme.colors.secondary10};
        `)}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.secondary40};
      cursor: not-allowed;
    `}

  label {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  input[type='checkbox'] {
    position: initial;
  }
`;

export const StyledLink = styled.a`
  ${withTransition(['background-color', 'color'])}

  align-items: center;
  color: ${({ theme }) => theme.colors.secondary70};
  display: flex;
  height: 100%;
  text-decoration: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

StyledListItem.defaultProps = { theme: defaultTheme };
StyledLink.defaultProps = { theme: defaultTheme };
