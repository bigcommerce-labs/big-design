import { Box, Flex, H0, H1, H2, Text } from '@bigcommerce/big-design';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { CodePreview } from '../../components';

import { FlexItemPropTable, FlexPropTable } from './';

const ExampleBox: React.FC<{ vertical?: boolean }> = ({ children, vertical }) => (
  <Box
    backgroundColor="secondary10"
    border="box"
    {...(vertical ? { marginVertical: 'xSmall' } : { marginHorizontal: 'xSmall' })}
    padding="small"
  >
    {children}
  </Box>
);

storiesOf('Flex', module).add('Overview', () => (
  <>
    <H0>Flex</H0>

    <Text>A flex container used for customizable layouts.</Text>

    <CodePreview scope={{ ExampleBox }}>
      {/* jsx-to-string:start */}
      <Flex alignContent="stretch" alignItems="stretch" direction="row" justifyContent="flex-start" wrap="nowrap">
        <Flex.Item alignSelf="auto" basis="auto" grow={0} order={0} shrink={1}>
          <ExampleBox>Item 1</ExampleBox>
        </Flex.Item>
        <Flex.Item alignSelf="auto" basis="auto" grow={0} order={0} shrink={1}>
          <ExampleBox>Item 2</ExampleBox>
        </Flex.Item>
        <Flex.Item alignSelf="auto" basis="auto" grow={0} order={0} shrink={1}>
          <ExampleBox>Item 3</ExampleBox>
        </Flex.Item>
        <Flex.Item alignSelf="auto" basis="auto" grow={0} order={0} shrink={1}>
          <ExampleBox>Item 4</ExampleBox>
        </Flex.Item>
      </Flex>
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>API</H1>

    <H2>Flex</H2>

    <FlexPropTable />

    <H2>Flex.Item</H2>

    <FlexItemPropTable />

    <H1>Examples</H1>

    <Text>
      Flex container's can space their element with uniform spacing in-between each flex item using the{' '}
      <code>justifyContent</code> prop.
    </Text>

    <CodePreview scope={{ ExampleBox }}>
      {/* jsx-to-string:start */}
      <Flex justifyContent="space-between">
        <Flex.Item>
          <ExampleBox>Item 1</ExampleBox>
        </Flex.Item>
        <Flex.Item>
          <ExampleBox>Item 2</ExampleBox>
        </Flex.Item>
        <Flex.Item>
          <ExampleBox>Item 3</ExampleBox>
        </Flex.Item>
        <Flex.Item>
          <ExampleBox>Item 4</ExampleBox>
        </Flex.Item>
      </Flex>
      {/* jsx-to-string:end */}
    </CodePreview>

    <Text>
      One way of creating a column based layout is using a combination of the <code>wrap</code> prop on the flex
      container with an additional <code>basis</code> prop on the flex items.
    </Text>

    <CodePreview scope={{ ExampleBox }}>
      {/* jsx-to-string:start */}
      <Flex wrap="wrap">
        <Flex.Item basis="100%">
          <ExampleBox vertical>Item 1</ExampleBox>
        </Flex.Item>
        <Flex.Item basis="100%">
          <ExampleBox vertical>Item 2</ExampleBox>
        </Flex.Item>
        <Flex.Item basis="100%">
          <ExampleBox vertical>Item 3</ExampleBox>
        </Flex.Item>
        <Flex.Item basis="100%">
          <ExampleBox vertical>Item 4</ExampleBox>
        </Flex.Item>
      </Flex>
      {/* jsx-to-string:end */}
    </CodePreview>

    <Text>
      Using the <code>order</code> prop you can reorganize content based on the size generated by setting the{' '}
      <code>grow</code> prop. <code>grow</code> allows the flex items to grow relative to the flex container's width.
    </Text>

    <CodePreview scope={{ ExampleBox }}>
      {/* jsx-to-string:start */}
      <Flex>
        <Flex.Item grow={2} order={2}>
          <ExampleBox>Item 1</ExampleBox>
        </Flex.Item>
        <Flex.Item order={4}>
          <ExampleBox>Item 2</ExampleBox>
        </Flex.Item>
        <Flex.Item grow={4} order={1}>
          <ExampleBox>Item 3</ExampleBox>
        </Flex.Item>
        <Flex.Item grow={1} order={3}>
          <ExampleBox>Item 4</ExampleBox>
        </Flex.Item>
      </Flex>
      {/* jsx-to-string:end */}
    </CodePreview>
  </>
));
