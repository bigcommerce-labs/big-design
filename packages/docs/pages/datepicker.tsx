import { Datepicker, Form, FormGroup, H1, Panel, Text } from '@bigcommerce/big-design';
import React, { useState } from 'react';

import { Code, CodePreview, PageNavigation } from '../components';
import { DatepickerPropTable } from '../PropTables';

const DatepickerPage = () => {
  const items = [
    {
      id: 'examples',
      title: 'Examples',
      render: () => (
        <>
          <Panel>
            <Text>Use to select a single date from the calendar.</Text>
            <CodePreview>
              {/* jsx-to-string:start */}
              {function Example() {
                const [date, setDate] = useState<string>();

                return (
                  <Form>
                    <FormGroup>
                      <Datepicker
                        label="Pick a date"
                        min="06/03/2020"
                        max="06/19/2020"
                        onDateChange={(value: string) => setDate(value)}
                        value={date}
                        locale="en-US"
                      />
                    </FormGroup>
                  </Form>
                );
              }}
              {/* jsx-to-string:end */}
            </CodePreview>
          </Panel>
          <Panel header="Error states">
            <Text>
              Datepicker allows you to pass in an <Code primary>error</Code> message that will control the styles of a
              counter. The logic on the datepicker can be controlled with the <Code primary>onDateChange</Code> prop.
            </Text>

            <CodePreview>
              {/* jsx-to-string:start */}
              {function Example() {
                const [date, setDate] = useState<string>();
                const [errors, setErrors] = useState('Please select a date.');
                const handleChange = (value: string) => {
                  if (value) {
                    setErrors('');
                  } else {
                    setErrors('Please select a date.');

                    return;
                  }

                  return setDate(value);
                };

                return (
                  <Form>
                    <FormGroup>
                      <Datepicker
                        error={errors}
                        label="Pick a date"
                        onDateChange={handleChange}
                        value={date}
                        required
                      />
                    </FormGroup>
                  </Form>
                );
              }}
              {/* jsx-to-string:end */}
            </CodePreview>
          </Panel>
        </>
      ),
    },
    {
      id: 'props',
      title: 'Props',
      render: () => <DatepickerPropTable />,
    },
  ];

  return (
    <>
      <H1>Datepicker</H1>

      <PageNavigation items={items} />
    </>
  );
};

export default DatepickerPage;
