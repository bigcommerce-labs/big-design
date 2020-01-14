import {
  Box,
  Button,
  Checkbox,
  Fieldset,
  Form,
  FormGroup,
  H0,
  H1,
  Input,
  Link,
  Radio,
  Select,
  Text,
  Textarea,
} from '@bigcommerce/big-design';
import React from 'react';

import { Code, CodePreview } from '../../components';
import {
  FormDescriptionPropTable,
  FormErrorPropTable,
  FormFieldsetPropTable,
  FormGroupPropTable,
  FormLabelPropTable,
  FormPropTable,
} from '../../PropTables';

export default () => (
  <>
    <H0>Forms</H0>

    <Text>
      Form fields are essential to any website or web application. <Code>id</Code>'s' will be auto-generated for
      input/textarea and labels <Code>for</Code> attribute, unless manually specifying one.{' '}
      <Link href="https://design.bigcommerce.com/components/forms" target="_blank">
        Form Fields Design Guidelines
      </Link>
      .
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      <Form>
        <FormGroup>
          <Input
            label="Email"
            type="email"
            description="Please provide a valid email address."
            placeholder="Email address"
          />
        </FormGroup>
        <FormGroup>
          <Input label="Password" type="password" placeholder="Password" />
        </FormGroup>
        <Box marginTop="xxLarge">
          <Button>Sign In</Button>
        </Box>
      </Form>
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>API</H1>
    <FormPropTable />
    <FormErrorPropTable id="error" />
    <FormLabelPropTable id="label" />
    <FormDescriptionPropTable id="label" />
    <FormGroupPropTable />
    <FormFieldsetPropTable />

    <H1>Input Types</H1>

    <Text>
      BigDesign comes with various input types: <Code>Input</Code>, <Code>Checkbox</Code>, <Code>Radio</Code>,{' '}
      <Code>Select</Code>, and <Code>Textarea</Code>.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      <Form>
        <FormGroup>
          <Input label="Example Input" placeholder="Example" />
        </FormGroup>
        <FormGroup>
          <Checkbox checked={true} onChange={() => null} label="Example Checkbox" />
        </FormGroup>
        <FormGroup>
          <Radio checked={true} onChange={() => null} label="Example Radio" />
        </FormGroup>
        <FormGroup>
          <Select
            label="Example Select"
            onItemChange={() => null}
            options={[
              { value: 1, content: 'Option' },
              { value: 2, content: 'Option' },
              { value: 3, content: 'Option' },
              { value: 4, content: 'Option' },
            ]}
            placeholder="Example"
          />
        </FormGroup>
        <FormGroup>
          <Textarea label="Example Textarea" placeholder="Example" />
        </FormGroup>
      </Form>
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>Layout</H1>

    <Text>
      You can up to 3 <Code>Input</Code> components in row to add more dimension to a <Code>FormGroup</Code>.{' '}
      <Code>Radio</Code> and <Code>Checkbox</Code> components will never display inline inside a <Code>FormGroup</Code>.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      <Form>
        <FormGroup>
          <Input label="Company" placeholder="BigCommerce" required />
        </FormGroup>
        <FormGroup>
          <Input label="First Name" placeholder="John" required />
          <Input label="Last Name" placeholder="Doe" required />
        </FormGroup>
        <FormGroup>
          <Input label="City" placeholder="Austin" required />
          <Input label="State" placeholder="Texas" required />
          <Input label="Postal Code" placeholder="78726" required />
        </FormGroup>
        <Fieldset legend="Shipping Method">
          <FormGroup>
            <Radio label="Free – Three Day Shipping" checked onChange={() => null} />
            <Radio label="$4.99 – Two Day Shipping" />
            <Radio label="$9.99 – One Day Shipping" />
          </FormGroup>
        </Fieldset>
      </Form>
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>Validation</H1>

    <Text>
      All form controls are tied to <Code primary>onChange</Code> or equivalent event handlers. Validation messages can
      be passed through the <Code>error</Code> prop. All input errors in an <Code>FormGroup</Code> will appear at the
      bottom of the group component component.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      {function Example() {
        const ERROR_MSG = 'Must be less than or equal to 3 characters long.';

        const [value, setValue] = React.useState('BigCommerce');
        const [error, setError] = React.useState(ERROR_MSG);

        const handleSubmit = event => {
          const form = event.currentTarget;

          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
        };

        const handleChange = event => {
          const { target } = event;
          const regex = RegExp(target.pattern, 'g');

          regex.test(target.value) ? setError('') : setError(ERROR_MSG);

          setValue(target.value);
        };

        return (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                label="Example"
                description="Remove characters to preview validation."
                value={value}
                error={error}
                onChange={handleChange}
                pattern="^.{1,3}$"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input label="City" error="You must enter a valid City." placeholder="Austin" required />
              <Input label="State" placeholder="Texas" required />
              <Input label="Postal Code" error="You must enter a valid Postal Code." placeholder="78726" required />
            </FormGroup>
          </Form>
        );
      }}
      {/* jsx-to-string:end */}
    </CodePreview>
  </>
);
