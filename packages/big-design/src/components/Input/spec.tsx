import { AddIcon } from '@bigcommerce/big-design-icons';
import { theme } from '@bigcommerce/big-design-theme';
import React, { createRef } from 'react';
import 'jest-styled-components';

import { render } from '@test/utils';

import { warning } from '../../utils';
import { FormControlDescription, FormControlError, FormControlLabel, FormGroup } from '../Form';

import { Input } from './index';

const basicBorderStyle = `1px solid ${theme.colors.secondary30}`;
const errorBorderStyle = `1px solid ${theme.colors.danger40}`;

test('forwards ref', () => {
  const ref = createRef<HTMLInputElement>();
  const { container } = render(<Input ref={ref} />);
  const input = container.querySelector('input');

  expect(ref.current).toBe(input);
});

test('renders an input tag', () => {
  const { container } = render(<Input />);

  expect(container.querySelector('input')).toBeInTheDocument();
});

test('renders an input with matched label', () => {
  const { queryByLabelText } = render(<Input label="Test Label" />);

  // This one checks for matching id and htmlFor
  expect(queryByLabelText('Test Label')).toBeInTheDocument();
});

test('create unique ids if not provided', () => {
  const { queryByTestId } = render(
    <>
      <Input label="Test Label" data-testid="item1" />
      <Input label="Test Label" data-testid="item2" />
    </>,
  );

  const item1 = queryByTestId('item1') as HTMLInputElement;
  const item2 = queryByTestId('item2') as HTMLInputElement;

  expect(item1).toBeDefined();
  expect(item2).toBeDefined();
  expect(item1.id).not.toBe(item2.id);
});

test('respects provided id', () => {
  const { container } = render(<Input id="test" label="Test Label" />);
  const input = container.querySelector('#test') as HTMLInputElement;

  expect(input.id).toBe('test');
});

test('matches label htmlFor with id provided', () => {
  const { container } = render(<Input id="test" label="Test Label" />);
  const label = container.querySelector('label') as HTMLLabelElement;

  expect(label.htmlFor).toBe('test');
});

test('respects provided labelId', () => {
  const { container } = render(<Input labelId="test" label="Test Label" />);
  const label = container.querySelector('#test') as HTMLLabelElement;

  expect(label.id).toBe('test');
});

test('renders a description', () => {
  const descriptionText = 'This is a description';
  const { queryByText } = render(<Input description={descriptionText} />);

  expect(queryByText(descriptionText)).toBeInTheDocument();
});

test('renders an error', () => {
  const errorText = 'This is an error';
  const { container, queryByText } = render(
    <FormGroup>
      <Input error={errorText} />
    </FormGroup>,
  );
  const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

  expect(queryByText(errorText)).toBeInTheDocument();
  expect(styledInputWrapper).toHaveStyleRule('border', errorBorderStyle);
});

test('accepts a Label Component', () => {
  const CustomLabel = (
    <FormControlLabel>
      This is a custom Label
      <a href="#" data-testid="test">
        has a url
      </a>
    </FormControlLabel>
  );

  const { queryByTestId } = render(<Input label={CustomLabel} />);

  expect(queryByTestId('test')).toBeInTheDocument();
});

test('does not accept non-Label Components', () => {
  const NotALabel = (
    <div>
      This is a not custom Label Component
      <a href="#" data-testid="test">
        has a url
      </a>
    </div>
  );

  const { queryByTestId } = render(<Input label={NotALabel} />);

  expect(queryByTestId('test')).not.toBeInTheDocument();
});

test('accepts a Description Component', () => {
  const CustomDescription = (
    <FormControlDescription>
      This is a custom Description
      <a href="#" data-testid="test">
        has a url
      </a>
    </FormControlDescription>
  );

  const { queryByTestId } = render(<Input description={CustomDescription} />);

  expect(queryByTestId('test')).toBeInTheDocument();
});

test('does not accept non-Description Components', () => {
  const NotADescription = (
    <div>
      This is a not custom description
      <a href="#" data-testid="test">
        has a url
      </a>
    </div>
  );

  const { queryByTestId } = render(<Input description={NotADescription} />);

  expect(queryByTestId('test')).not.toBeInTheDocument();
});

test('accepts an Error Component', () => {
  const CustomError = (
    <FormControlError>
      This is a custom Error Component
      <a href="#" data-testid="test">
        has a url
      </a>
    </FormControlError>
  );

  const { container, queryByTestId } = render(
    <FormGroup>
      <Input error={CustomError} />
    </FormGroup>,
  );
  const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

  expect(queryByTestId('test')).toBeInTheDocument();
  expect(styledInputWrapper).toHaveStyleRule('border', errorBorderStyle);
});

test('does not accept non-Error Components', () => {
  const NotAnError = (
    <div>
      This is a not a custom error component
      <a href="#" data-testid="test">
        has a url
      </a>
    </div>
  );

  const { container, queryByTestId } = render(
    <FormGroup>
      <Input error={NotAnError} />
    </FormGroup>,
  );
  const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

  expect(queryByTestId('test')).not.toBeInTheDocument();
  expect(styledInputWrapper).toHaveStyleRule('border', basicBorderStyle);
});

test('renders iconLeft', () => {
  const { queryByTestId } = render(<Input iconLeft={<AddIcon data-testid="icon" />} />);

  expect(queryByTestId('icon')).toBeInTheDocument();
});

test('renders iconRight', () => {
  const { queryByTestId } = render(<Input iconRight={<AddIcon data-testid="icon" />} />);

  expect(queryByTestId('icon')).toBeInTheDocument();
});

test('renders both icons', () => {
  const { queryByTestId } = render(
    <Input iconRight={<AddIcon data-testid="icon-right" />} iconLeft={<AddIcon data-testid="icon-left" />} />,
  );

  expect(queryByTestId('icon-left')).toBeInTheDocument();
  expect(queryByTestId('icon-right')).toBeInTheDocument();
});

test('renders all together', () => {
  const { container } = render(
    <Input
      label="This is a label"
      description="This is a description"
      iconRight={<AddIcon data-testid="icon-right" />}
      iconLeft={<AddIcon data-testid="icon-left" />}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('error shows with valid string', () => {
  const error = 'Error';
  const { container, rerender } = render(
    <FormGroup>
      <Input error="" />
    </FormGroup>,
  );
  const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

  expect(container.querySelector('[class*="StyledError"]')).not.toBeInTheDocument();
  expect(styledInputWrapper).toHaveStyleRule('border', basicBorderStyle);

  rerender(
    <FormGroup>
      <Input error={error} />
    </FormGroup>,
  );

  expect(container.querySelector('[class*="StyledError"]')).toBeInTheDocument();
  expect(styledInputWrapper).toHaveStyleRule('border', errorBorderStyle);
});

describe('error shows when an array of strings', () => {
  test('empty array', () => {
    const { container } = render(
      <FormGroup>
        <Input error={[]} />
      </FormGroup>,
    );
    const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

    expect(container.querySelector('[class*="StyledError"]')).not.toBeInTheDocument();
    expect(styledInputWrapper).toHaveStyleRule('border', basicBorderStyle);
  });

  test('array with empty strings', () => {
    const { container } = render(
      <FormGroup>
        <Input error={['', '']} />
      </FormGroup>,
    );
    const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

    expect(container.querySelector('[class*="StyledError"]')).not.toBeInTheDocument();
    expect(styledInputWrapper).toHaveStyleRule('border', basicBorderStyle);
  });

  test('array with valid strings', () => {
    const errors = ['Error 0', 'Error 1'];
    const { container, getByText } = render(
      <FormGroup>
        <Input error={errors} />
      </FormGroup>,
    );
    const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

    expect(styledInputWrapper).toHaveStyleRule('border', errorBorderStyle);
    errors.forEach((error) => expect(getByText(error)).toBeInTheDocument());
  });
});

test('error shows when an array of Errors', () => {
  const testIds = ['error_0', 'error_1'];
  const errors = testIds.map((id) => (
    <FormControlError data-testid={id} key={id}>
      Error
    </FormControlError>
  ));
  const { container, getByTestId } = render(
    <FormGroup>
      <Input error={errors} />
    </FormGroup>,
  );
  const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

  testIds.forEach((id) => expect(getByTestId(id)).toBeInTheDocument());
  expect(styledInputWrapper).toHaveStyleRule('border', errorBorderStyle);
});

describe('error does not show when invalid type', () => {
  test('single element', () => {
    const error = <div data-testid="err">Error</div>;
    const { container, queryByTestId } = render(
      <FormGroup>
        <Input error={error} />
      </FormGroup>,
    );
    const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

    expect(warning).toHaveBeenCalledTimes(1);
    expect(queryByTestId('err')).not.toBeInTheDocument();
    expect(styledInputWrapper).toHaveStyleRule('border', basicBorderStyle);
  });

  test('array of elements', () => {
    const errors = [
      'Error',
      <FormControlError key="1">Error</FormControlError>,
      <div data-testid="err" key="2">
        Error
      </div>,
    ];

    const { container, queryByTestId } = render(
      <FormGroup>
        <Input error={errors} />
      </FormGroup>,
    );
    const styledInputWrapper = container.querySelector('[class*="StyledInputWrapper"]');

    expect(warning).toHaveBeenCalledTimes(1);
    expect(queryByTestId('err')).not.toBeInTheDocument();
    expect(styledInputWrapper).toHaveStyleRule('border', errorBorderStyle);
  });
});

test('appends (optional) text to label if input is not required', () => {
  const { container } = render(<Input label="Test Label" />);
  const label = container.querySelector('label');

  expect(label).toHaveStyleRule('content', "' (optional)'", { modifier: '::after' });
});
