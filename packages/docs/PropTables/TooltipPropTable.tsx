import React from 'react';

import { PropTable } from '../components';

export const TooltipPropTable: React.FC = () => (
  <PropTable>
    <PropTable.Prop
      name="placement"
      defaults="top"
      types={[
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
      ]}
    >
      Sets the position of the Tooltip.
    </PropTable.Prop>
    <PropTable.Prop name="content" types="string">
      Content to display on hover.
    </PropTable.Prop>
  </PropTable>
);
