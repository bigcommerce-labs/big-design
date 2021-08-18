import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';

import { StyleableButton } from '../../../Button/private';

export const StyledExpandButton = styled(StyleableButton)`
  height: ${({ theme }) => theme.spacing.large};
`;

StyledExpandButton.defaultProps = { theme: defaultTheme };
