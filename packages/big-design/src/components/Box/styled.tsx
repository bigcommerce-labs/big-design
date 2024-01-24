import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { clearFix } from 'polished';
import { css, styled } from 'styled-components';

import { WithTransients } from 'src/utils/withTransients';

import { withDisplay, withMargins, withPaddings } from '../../mixins';

import { BoxProps } from './Box';

export const StyledBox = styled.div<WithTransients<BoxProps>>`
  ${withDisplay()}
  ${withMargins()}
  ${withPaddings()}
  box-sizing: border-box;

  ${({ $clearfix }) => $clearfix && clearFix()};

  ${({ $backgroundColor, theme }) =>
    $backgroundColor &&
    css`
      background-color: ${theme.colors[$backgroundColor]};
    `};

  ${({ $shadow, theme }) => $shadow && theme.shadow[$shadow]};

  ${({ $border, theme }) =>
    $border &&
    css`
      border: ${theme.border[$border]};
    `};

  ${({ $borderTop, theme }) =>
    $borderTop &&
    css`
      border-top: ${theme.border[$borderTop]};
    `};

  ${({ $borderRight, theme }) =>
    $borderRight &&
    css`
      border-right: ${theme.border[$borderRight]};
    `};

  ${({ $borderBottom, theme }) =>
    $borderBottom &&
    css`
      border-bottom: ${theme.border[$borderBottom]};
    `};

  ${({ $borderLeft, theme }) =>
    $borderLeft &&
    css`
      border-left: ${theme.border[$borderLeft]};
    `};

  ${({ $borderRadius, theme }) =>
    $borderRadius &&
    css`
      border-radius: ${theme.borderRadius[$borderRadius]};
    `};

  ${({ $zIndex, theme }) =>
    $zIndex &&
    css`
      z-index: ${theme.zIndex[$zIndex]};
    `};
`;

StyledBox.defaultProps = { theme: defaultTheme };
