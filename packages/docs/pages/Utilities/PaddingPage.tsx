import { Box, H0, H1, Link, Text } from '@bigcommerce/big-design';
import React from 'react';

import { CodePreview } from '../../components';
import { PaddingPropTable } from '../../PropTables';

export default () => (
  <>
    <H0>Padding</H0>

    <Text>
      Some of our components expose a simple way to modify their padding. The following example showcases the simples
      way to use the padding prop by giving it a <Link href="/big-design/utilities/spacing">Spacing</Link> value.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      <Box padding="medium" backgroundColor="primary20">
        Example
      </Box>
      {/* jsx-to-string:end */}
    </CodePreview>

    <Text>
      You can also specify paddings with an object to handle different paddings with different
      <Link href="/big-design/utilities/breakpoints"> breakpoints</Link>. All values must be of
      <Link href="/big-design/utilities/spacing"> Spacing</Link> type.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      <Box padding={{ mobile: 'none', tablet: 'medium', desktop: 'xLarge' }} backgroundColor="primary20">
        Example
      </Box>
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>API</H1>

    <PaddingPropTable />
  </>
);
