import { Button, Flex, PlusIcon, Tooltip } from '@bigcommerce/big-design';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PopperProps } from 'react-popper';

const placement: Array<Exclude<PopperProps['placement'], undefined>> = [
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
];

storiesOf('Tooltip', module).add('Overview', () => (
  <Flex alignItems="center" direction="column">
    <div style={{ marginTop: 100 }}>
      <Tooltip content="Tooltip Content" placement={select('placement', placement, 'top')}>
        <Button>Hover</Button>
      </Tooltip>
    </div>
    <div style={{ marginTop: 100 }}>
      <Tooltip content="Tooltip Content" placement="right">
        <span>Hover</span>
      </Tooltip>
    </div>
    <div style={{ marginTop: 100 }}>
      <Tooltip content="Tooltip Content" placement="bottom">
        <PlusIcon />
      </Tooltip>
    </div>
  </Flex>
));
