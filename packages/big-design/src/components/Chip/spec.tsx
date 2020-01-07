import { fireEvent, render } from '@test/utils';
import 'jest-styled-components';
import React from 'react';

import { Chip } from './index';

test('renders the label', () => {
  const label = 'Test';
  const { queryByText } = render(<Chip label={label} />);

  expect(queryByText(label)).toBeInTheDocument();
});

test('renders without close button', () => {
  const { container, queryByRole } = render(<Chip label="Test" />);

  expect(queryByRole('button')).not.toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with close button if onRemove is present', () => {
  const { container, queryByRole } = render(<Chip label="Test" onDelete={jest.fn()} />);

  expect(queryByRole('button')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});

test('onDelete is called when close button is clicked', () => {
  const onDelete = jest.fn();

  const { getByRole } = render(<Chip label="Test" onDelete={onDelete} />);

  fireEvent.click(getByRole('button'));

  expect(onDelete).toHaveBeenCalled();
});
