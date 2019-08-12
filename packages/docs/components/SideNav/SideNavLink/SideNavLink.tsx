import { Link } from '@bigcommerce/big-design';
import styled from 'styled-components';

import { List, NextLink } from '../../';

const StyledLink = styled(Link)`
  display: ${({ theme }) => theme.display.inlineBlock};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

export const SideNavLink: React.FC<{ href: string; as?: string }> = props => (
  <List.Item>
    <NextLink href={props.href}>
      <StyledLink>{props.children}</StyledLink>
    </NextLink>
  </List.Item>
);
