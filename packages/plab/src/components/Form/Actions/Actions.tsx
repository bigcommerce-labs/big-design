import React from 'react';

import { StyledFormActions } from './styled';

export const Actions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, style, ...props }) => (
  <StyledFormActions {...props} />
);
