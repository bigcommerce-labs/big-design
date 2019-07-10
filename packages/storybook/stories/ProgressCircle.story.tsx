import { ProgressCircle } from '@bigcommerce/big-design';
import {
  ProgressCircleSizes,
  ProgressCircleStatuses,
} from '@bigcommerce/big-design/dist/src/components/ProgressCircle/ProgressCircle';
import { number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import ProgressCircleReadme from '../../big-design/src/components/ProgressCircle/README.md';

const label = 'percentage';
const defaultValue = 10;
const options = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

const sizes: ProgressCircleSizes[] = ['large', 'medium', 'small', 'xSmall'];
const statuses: ProgressCircleStatuses[] = ['complete', 'error', 'incomplete', 'indeterminant'];

storiesOf('ProgressCircle', module)
  .addParameters({
    readme: {
      content: ProgressCircleReadme,
    },
  })
  .add('Determinant', () => (
    <ProgressCircle
      percent={number(label, defaultValue, options)}
      size={select('size', sizes, 'large')}
      status={select('status', statuses, 'incomplete')}
    />
  ))
  .add('Indeterminant', () => (
    <ProgressCircle size={select('size', sizes, 'large')} status={select('status', statuses, 'indeterminant')} />
  ));
