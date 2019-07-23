import { H1, H2, H3, Panel, ProgressCircle } from '@bigcommerce/big-design';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Code, CodePreview, PropTable } from '../components';

storiesOf('ProgressCircle', module).add('Overview', () => (
  <Panel>
    <H1>ProgressCircle</H1>
    <H2>Examples</H2>
    <H3 marginTop="xLarge">Determinant</H3>
    <CodePreview>
      {/* jsx-to-string:start */}
      <ProgressCircle error={false} percent={50} size="large" />
      {/* jsx-to-string:end */}
    </CodePreview>
    <p>
      Determinant Progress represents a known amount of time or completeness for a task. A <Code primary>percent</Code>{' '}
      prop needs to be passed to render a determinate progress.
    </p>

    <H3 marginTop="xLarge">Indeterminant</H3>
    <CodePreview>
      {/* jsx-to-string:start */}
      <ProgressCircle size={'large'} />
      {/* jsx-to-string:end */}
    </CodePreview>
    <p>
      Indeterminant Progress represents an unknown amount of time for a task to complete. Component will render an
      indeterminant progress when missing a <Code primary>percent</Code> prop.
    </p>

    <H2 marginTop="xxxLarge">Properties & Methods</H2>
    <PropTable>
      <PropTable.Prop name="error" types="boolean">
        Sets state to error.
      </PropTable.Prop>
      <PropTable.Prop name="percent" types="number">
        Sets the fill length from 0 to 100.
      </PropTable.Prop>
      <PropTable.Prop name="size" types={['xSmall', 'small', 'medium', 'large']} defaults="medium">
        Size of the component.
      </PropTable.Prop>
    </PropTable>
  </Panel>
));
