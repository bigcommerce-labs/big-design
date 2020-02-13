import { CloseIcon } from '@bigcommerce/big-design-icons';
import React, { memo, useMemo } from 'react';

import { excludePaddingProps } from '../../mixins';
import { getMessagingIcon, SharedMessagingProps } from '../../utils';
import { Box } from '../Box';
import { GridItem } from '../Grid';

import { StyledAlert, StyledCloseButton, StyledHeader, StyledLink, StyledMessageItem } from './styled';

// TODO:
// - animation
// - buttons

export interface AlertProps extends SharedMessagingProps {
  key?: string;
}

export const Alert: React.FC<AlertProps> = memo(({ className, style, header, ...props }) => {
  const filteredProps = excludePaddingProps(props);
  const icon = props.type && getMessagingIcon(props.type);

  const renderedMessages = useMemo(
    () =>
      props.messages.map(({ text, link }, index) => (
        <Box key={index}>
          <StyledMessageItem>{text}</StyledMessageItem> {link && <StyledLink {...link}>{link.text}</StyledLink>}
        </Box>
      )),
    [props.messages],
  );

  const renderedHeadline = useMemo(() => header && <StyledHeader>{header}</StyledHeader>, [header]);

  return (
    <StyledAlert {...filteredProps} role="alert">
      <GridItem gridArea="icon">{icon}</GridItem>
      <GridItem gridArea="messages">
        {renderedHeadline}
        {renderedMessages}
      </GridItem>
      {props.onClose && (
        <GridItem>
          <StyledCloseButton onClick={props.onClose} iconOnly={<CloseIcon size="large" />} />
        </GridItem>
      )}
    </StyledAlert>
  );
});

Alert.defaultProps = {
  messages: [],
  type: 'success',
};
