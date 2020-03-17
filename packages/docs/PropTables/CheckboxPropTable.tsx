import { Text } from '@bigcommerce/big-design';
import React from 'react';

import { Code, NextLink, Prop, PropTable, PropTableWrapper } from '../components';

import { messagingLinkItemProps } from './shared';

const checkboxProps: Prop[] = [
  {
    name: 'label',
    types: ['string', 'CheckboxLabel'],
    required: true,
    description: 'Label to display next to a <Code>Checkbox</Code> component.',
  },
  {
    name: 'hiddenLabel',
    types: 'boolean',
    description: (
      <>
        Renders <Code primary>Checkbox</Code> with a visually hidden label, retains accessibility for screen readers.
      </>
    ),
  },
  {
    name: 'isIndeterminate',
    types: 'boolean',
    description: (
      <>
        Styles and sets the checkbox into a indeterminate state. Note that the <Code primary>checked</Code> prop will
        take precedence over <Code primary>isIndeterminate</Code>.
      </>
    ),
  },
  {
    name: 'description',
    types: ['CheckboxDescription'],
    description: (
      <>
        See <NextLink href="#checkbox-description-prop-table">below</NextLink> for usage.
      </>
    ),
  },
];

const checkboxDescriptionProps: Prop[] = [
  {
    name: 'text',
    types: ['string'],
    required: true,
    description: (
      <>
        Description to display below <Code>Label</Code>
      </>
    ),
  },
  {
    name: 'link',
    types: ['CheckboxDescriptionLink'],
    description: (
      <>
        See <NextLink href="#checkbox-description-link-prop-table">below</NextLink> for usage.
      </>
    ),
  },
];

export const CheckboxPropTable: React.FC<PropTableWrapper> = props => (
  <>
    <Text>
      Supports all native <Code>&lt;input /&gt;</Code> element attributes.
    </Text>
    <PropTable title="Checkbox" propList={checkboxProps} {...props} />
  </>
);

export const CheckboxDescriptionPropTable: React.FC<PropTableWrapper> = props => (
  <PropTable
    title="CheckboxDescription"
    propList={checkboxDescriptionProps}
    {...props}
    id="checkbox-description-prop-table"
  />
);

export const CheckboxDescriptionLinkPropTable: React.FC<PropTableWrapper> = props => (
  <PropTable
    title="CheckboxDescriptionLink"
    propList={messagingLinkItemProps}
    {...props}
    id="checkbox-description-link-prop-table"
  />
);
