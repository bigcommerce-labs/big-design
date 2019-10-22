import { Form, Grid, H0, H1, Link, Select, Text } from '@bigcommerce/big-design';
import { DeleteIcon } from '@bigcommerce/big-design-icons';
import React from 'react';

import { Code, CodePreview } from '../../components';
import { SelectOptionPropTable, SelectPropTable } from '../../PropTables';

export default () => (
  <>
    <H0>Selects</H0>

    <Text>
      Select are typeable inputs with selectable dropdown items.{' '}
      <Link href="https://design.bigcommerce.com/components/selects" target="_blank">
        Selects Design Guidelines
      </Link>
      .
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      {function Example() {
        const [value, setValue] = React.useState('');
        const handleChange = val => setValue(val);

        return (
          <Form.Group>
            <Select
              action={{
                actionType: 'destructive',
                content: 'Remove Country',
                icon: <DeleteIcon />,
                onClick: () => null,
              }}
              label="Countries"
              maxHeight={300}
              onChange={handleChange}
              options={[
                { value: 'us', content: 'United States' },
                { value: 'mx', content: 'Mexico' },
                { value: 'ca', content: 'Canada' },
                { value: 'en', content: 'England' },
                { value: 'fr', content: 'France' },
                { value: 'gr', content: 'Germany' },
                { value: 'ar', content: 'Argentina' },
                { value: 'ru', content: 'Russia', disabled: true },
                { value: 'ch', content: 'Chile' },
                { value: 'bo', content: 'Bolivia' },
                { value: 'jp', content: 'Japan' },
                { value: 'cn', content: 'China' },
                { value: 'sk', content: 'South Korea' },
                { value: 'au', content: 'Australia' },
                { value: 'ug', content: 'Uganda' },
              ]}
              placeholder={'Choose country'}
              placement={'bottom-start'}
              required
              value={value}
            />
          </Form.Group>
        );
      }}
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>API</H1>
    <SelectPropTable />
    <SelectOptionPropTable />

    <H1>Multiselect</H1>

    <Text>
      Select has the ability to render a list of items as multiselectable. Select will return an <Code>array</Code> of
      the select options.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      {function Example() {
        const [value, setValue] = React.useState(['ca']);
        const handleChange = val => setValue(val);

        return (
          <Form.Group>
            <Select
              label="States"
              maxHeight={300}
              multi={true}
              onChange={handleChange}
              options={[
                { value: 'tx', content: 'Texas' },
                { value: 'ca', content: 'California' },
                { value: 'or', content: 'Oregon' },
                { value: 'ar', content: 'Arkansas' },
                { value: 'nv', content: 'Nevada', disabled: true },
              ]}
              placeholder={'Choose states'}
              placement={'bottom-start'}
              required
              value={value}
            />
          </Form.Group>
        );
      }}
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>Position</H1>

    <Text>
      Select can be anchored in different directions with the <Code primary>position</Code> property. It will
      automatically find a position if there's not enough space in the chosen direction.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      {/* <Grid gridColumns="repeat(4, 1fr)">
        <Select label="Select" placeholder="Choose from above" onItemChange={() => null} placement="top">
          <Select.Option value={1}>Option</Select.Option>
          <Select.Option value={2}>Option</Select.Option>
          <Select.Option value={3}>Option</Select.Option>
          <Select.Option value={4}>Option</Select.Option>
        </Select>
        <Select label="Select" placeholder="Choose from below" onItemChange={() => null} placement="bottom-start">
          <Select.Option value={1}>Option</Select.Option>
          <Select.Option value={2}>Option</Select.Option>
          <Select.Option value={3}>Option</Select.Option>
          <Select.Option value={4}>Option</Select.Option>
        </Select>
        <Select label="Select" placeholder="Choose from the right" onItemChange={() => null} placement="right-start">
          <Select.Option value={1}>Option</Select.Option>
          <Select.Option value={2}>Option</Select.Option>
          <Select.Option value={3}>Option</Select.Option>
          <Select.Option value={4}>Option</Select.Option>
        </Select>
        <Select label="Select" placeholder="Choose from the left" onItemChange={() => null} placement="left-end">
          <Select.Option value={1}>Option</Select.Option>
          <Select.Option value={2}>Option</Select.Option>
          <Select.Option value={3}>Option</Select.Option>
          <Select.Option value={4}>Option</Select.Option>
        </Select>
      </Grid> */}
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>Max Height</H1>

    <Text>
      Once the content is longer than the max-height, the Dropdown will be scrollable. It is possible to modify the
      dimension by passing a <Code primary>maxHeight</Code> property.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      {/* <Grid gridColumns="repeat(3, 1fr)">
        <Select label="Select" placeholder="Default" onItemChange={() => null}>
          <Select.Option value={1}>Option</Select.Option>
          <Select.Option value={2}>Option</Select.Option>
          <Select.Option value={3}>Option</Select.Option>
          <Select.Option value={4}>Option</Select.Option>
          <Select.Option value={5}>Option</Select.Option>
          <Select.Option value={6}>Option</Select.Option>
          <Select.Option value={7}>Option</Select.Option>
          <Select.Option value={8}>Option</Select.Option>
        </Select>
        <Select label="Select" placeholder="Smaller" onItemChange={() => null} maxHeight={150}>
          <Select.Option value={1}>Option</Select.Option>
          <Select.Option value={2}>Option</Select.Option>
          <Select.Option value={3}>Option</Select.Option>
          <Select.Option value={4}>Option</Select.Option>
          <Select.Option value={5}>Option</Select.Option>
          <Select.Option value={6}>Option</Select.Option>
          <Select.Option value={7}>Option</Select.Option>
          <Select.Option value={8}>Option</Select.Option>
        </Select>
        <Select label="Select" placeholder="Larger" onItemChange={() => null} maxHeight={350}>
          <Select.Option value={1}>Option</Select.Option>
          <Select.Option value={2}>Option</Select.Option>
          <Select.Option value={3}>Option</Select.Option>
          <Select.Option value={4}>Option</Select.Option>
          <Select.Option value={5}>Option</Select.Option>
          <Select.Option value={6}>Option</Select.Option>
          <Select.Option value={7}>Option</Select.Option>
          <Select.Option value={8}>Option</Select.Option>
        </Select>
      </Grid> */}
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>Disabled</H1>

    <Text>
      It is possible to disable the entire select component, similar to how you would disable a native HTML select
      element, by using the <Code primary>disabled</Code> property.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      {/* <Select label="Select" placeholder="Default" onItemChange={() => null} disabled>
        <Select.Option value={1}>Option</Select.Option>
        <Select.Option value={2}>Option</Select.Option>
      </Select> */}
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>Select.Action</H1>

    <Text>Select.Action allows you to add custom actions to the dropdown.</Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      {/* <Select value={1} onItemChange={() => null} onActionClick={innerText => alert(innerText)}>
        <Select.Option value={1}>Action Example</Select.Option>
        <Select.Action>Action</Select.Action>
      </Select> */}
      {/* jsx-to-string:end */}
    </CodePreview>
  </>
);
