import React from 'react';

import { NextLink, Prop, PropTable, PropTableWrapper } from '../components';

const paddingProps: Prop[] = [
  {
    name: 'padding',
    types: <NextLink href="/spacing">Spacing</NextLink>,
    description: 'Determines the padding to be applied.',
  },
  {
    name: 'paddingTop',
    types: <NextLink href="/spacing">Spacing</NextLink>,
    description: 'Determines the top padding to be applied.',
  },
  {
    name: 'paddingRight',
    types: <NextLink href="/spacing">Spacing</NextLink>,
    description: 'Determines the right padding to be applied.',
  },
  {
    name: 'paddingBottom',
    types: <NextLink href="/spacing">Spacing</NextLink>,
    description: 'Determines the bottom padding to be applied.',
  },
  {
    name: 'paddingLeft',
    types: <NextLink href="/spacing">Spacing</NextLink>,

    description: 'Determines the left padding to be applied.',
  },
  {
    name: 'paddingVertical',
    types: <NextLink href="/spacing">Spacing</NextLink>,

    description: 'Determines the top and bottom padding to be applied.',
  },
  {
    name: 'paddingHorizontal',
    types: <NextLink href="/spacing">Spacing</NextLink>,

    description: 'Determines the left and right padding to be applied.',
  },
];

export const PaddingPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable propList={paddingProps} title="Padding" {...props} />
);
