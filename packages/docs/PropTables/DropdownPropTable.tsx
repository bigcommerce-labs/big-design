import React from 'react';

import { Code, NextLink, Prop, PropTable, PropTableWrapper } from '../components';

const dropdownProps: Prop[] = [
  {
    name: 'disabled',
    types: 'boolean',
    defaultValue: 'false',
    description: 'Disables the toggle.',
  },
  {
    name: 'maxHeight',
    types: 'number',
    defaultValue: '250',
    description: 'Sets the max-height of the dropdown.',
  },
  {
    name: 'placement',
    types: [
      'auto',
      'auto-end',
      'auto-start',
      'bottom',
      'bottom-end',
      'bottom-start',
      'left',
      'left-end',
      'left-start',
      'right',
      'right-end',
      'right-start',
      'top',
      'top-end',
      'top-start',
    ],
    defaultValue: 'bottom-start',
    description: 'Sets the placement of the Dropdown relative to the anchor.',
  },
  {
    name: 'items',
    types: 'Array<DropdownItem | DropdownLinkItem> | Array<DropdownItemGroup>',
    required: true,
    description: (
      <>
        Accepts an array of <Code>DropdownItems and DropdownLinkItems</Code>. It also accept a{' '}
        <Code>DropdownItemGroup</Code> when you want to group items. See example for usage.
      </>
    ),
  },
  {
    name: 'toggle',
    types: 'ReactElement',
    required: true,
    description: 'Element used as anchor. Toggles the dropdown.',
  },
];

const dropdownItemProps: Prop[] = [
  {
    name: 'actionType',
    types: ['normal', 'destructive'],
    defaultValue: 'normal',
    description: "Indicates whether your item's action is of normal or destructive nature.",
  },
  {
    name: 'content',
    types: 'string',
    required: true,
    description: 'Sets the text content of the DropdownItem.',
  },
  {
    name: 'disabled',
    types: 'boolean',
    description: 'Sets the item to disabled.',
  },
  {
    name: 'hash',
    types: 'string',
    description: 'Stored hash of the item.',
  },
  {
    name: 'icon',
    types: (
      <NextLink href="/Icons/IconsPage" as="/icons">
        Icon
      </NextLink>
    ),
    description: (
      <>
        Pass in an{' '}
        <NextLink href="/Icons/IconsPage" as="/icons">
          Icon
        </NextLink>{' '}
        component to display to the left of the text.
      </>
    ),
  },
  {
    name: 'onItemClick',
    types: '(item: DropdownItem): void',
    required: true,
    description: 'Returns the item object.',
  },
  {
    name: 'tooltip',
    types: 'string',
    description: (
      <>
        Adds tooltip for disabled item. Default placement is set to <Code highlight={false}>right</Code>.
      </>
    ),
  },
  {
    name: 'type',
    types: "'text'",
    defaultValue: "'text'",
    description: 'Type of the item.',
  },
];

const dropdownLinkProps: Prop[] = [
  {
    name: 'actionType',
    types: ['normal', 'destructive'],
    defaultValue: 'normal',
    description: "Indicates whether your item's action is of normal or destructive nature.",
  },
  {
    name: 'content',
    types: 'string',
    required: true,
    description: 'Sets the text content of the DropdownLinkItem.',
  },
  {
    name: 'disabled',
    types: 'boolean',
    description: 'Sets the item to disabled.',
  },
  {
    name: 'icon',
    types: (
      <NextLink href="/Icons/IconsPage" as="/icons">
        Icon
      </NextLink>
    ),
    description: (
      <>
        Pass in an{' '}
        <NextLink href="/Icons/IconsPage" as="/icons">
          Icon
        </NextLink>{' '}
        component to display to the left of the text.
      </>
    ),
  },
  {
    name: 'tooltip',
    types: "{ message: string, placement?: 'left' | 'right' }",
    description: "Adds tooltip for disabled item. Placement is optional, if not passed - 'left' is set.",
  },
  {
    name: 'type',
    types: "'link'",
    required: true,
    description: (
      <>
        Wraps the <Code>content</Code> in a{' '}
        <NextLink href="/Link/LinkPage" as="/link">
          Link
        </NextLink>{' '}
        component.
      </>
    ),
  },
  {
    name: 'url',
    types: 'string',
    required: true,
    description: 'Valid URL of a linked resource.',
  },
  {
    name: 'target',
    types: "'_blank'",
    description: 'Indicates where to display the linked resource.',
  },
];

const dropdownItemGroupProps: Prop[] = [
  {
    name: 'label',
    types: 'string',
    description: 'Sets the label for the group.',
  },
  {
    name: 'separated',
    types: 'boolean',
    description: 'If true, adds a line separator above the group.',
  },
  {
    name: 'options',
    types: 'Array<DropdownItem | DropdownLinkItem>',
    required: true,
    description: (
      <>
        Accepts an array of <Code>DropdownItems</Code> and <Code>DropdownLinkItems</Code>. See example for usage.
      </>
    ),
  },
];

export const DropdownPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable title="Dropdown" propList={dropdownProps} {...props} />
);

export const DropdownItemPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable title="DropdownItem" propList={dropdownItemProps} {...props} />
);

export const DropdownLinkItemPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable title="DropdownLinkItem" propList={dropdownLinkProps} {...props} />
);

export const DropdownItemGroupPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable title="DropdownItemGroup" propList={dropdownItemGroupProps} {...props} />
);
