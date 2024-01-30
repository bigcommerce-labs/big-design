import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { css, styled } from 'styled-components';

import { WithTransients } from '../../../utils';
import { FlexProps } from '../../Flex';
import { withFlexedContainer } from '../../Flex/withFlex';

export const StyledFlex = styled.div<WithTransients<FlexProps & { stickyHeader?: boolean }>>`
  ${withFlexedContainer()}

  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.xLarge}`};

  ${({ theme, $stickyHeader }) =>
    $stickyHeader &&
    css`
      ${theme.breakpoints.tablet} {
        position: sticky;
        top: 0;
        z-index: ${theme.zIndex.sticky + 1};
      }
    `}
`;

StyledFlex.defaultProps = { theme: defaultTheme };
