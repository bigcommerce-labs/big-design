import styled, { css, keyframes } from 'styled-components';

import { defaultTheme } from '../../theme';

import { ProgressBarProps } from './ProgressBar';

export const StyledProgressBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary20};
  height: ${({ theme }) => theme.spacing.xxSmall};
  overflow: hidden;
  width: 100%;
`;

export const StyledProgressBarFiller = styled.div<ProgressBarProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  overflow: hidden;

  ${({ percent }) =>
    typeof percent === 'number'
      ? css`
          transition: width 0.2s ease-in;
          width: ${percent}%;
        `
      : css`
          animation: ${loading} 2s ease-in-out infinite;
          position: relative;
          width: 6.25%;
        `};
`;

const loading = keyframes`
  from {
    left: -10%;;
  }
  25% {
    width: 50%;
  }
  to {
    left: 100%;
  }

`;

StyledProgressBar.defaultProps = { theme: defaultTheme };
StyledProgressBarFiller.defaultProps = { theme: defaultTheme };
