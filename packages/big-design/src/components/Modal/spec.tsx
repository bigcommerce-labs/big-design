import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';

import { Button } from '../Button';

import { Modal } from './Modal';

test('render open modal', () => {
  const text = 'This is a modal';
  const { queryByText } = render(<Modal isOpen={true}>{text}</Modal>);

  expect(document.body).toMatchSnapshot();
  expect(queryByText(text)).toBeInTheDocument();
});

test('render open modal without backdrop', () => {
  const text = 'This is a modal';
  const { queryByText } = render(
    <Modal isOpen={true} backdrop={false}>
      {text}
    </Modal>,
  );

  expect(document.body).toMatchSnapshot();
  expect(queryByText(text)).toBeInTheDocument();
});

test('render closed modal', () => {
  const text = 'This is a modal';

  const { queryByText } = render(<Modal isOpen={false}>{text}</Modal>);

  expect(document.body).toMatchSnapshot();
  expect(queryByText(text)).not.toBeInTheDocument();
});

test('open/hides when props changes', () => {
  const text = 'This is a modal';
  const { queryByText, rerender } = render(<Modal isOpen={false}>{text}</Modal>);

  expect(queryByText(text)).not.toBeInTheDocument();
  rerender(<Modal isOpen={true}>{text}</Modal>);
  expect(queryByText(text)).toBeInTheDocument();
});

test('triggers onClose when pressing esc', () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  const { queryByText } = render(
    <Modal isOpen={true} onClose={onClose}>
      {text}
    </Modal>,
  );

  const element = queryByText(text) as HTMLElement;

  fireEvent.keyDown(element, { key: 'Escape' });

  expect(onClose).toHaveBeenCalled();
});

test('does not trigger onClose when pressing esc and closeOnEscKey is false', () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  const { queryByText } = render(
    <Modal isOpen={true} onClose={onClose} closeOnEscKey={false}>
      {text}
    </Modal>,
  );

  const element = queryByText(text) as HTMLElement;

  fireEvent.keyDown(element, { key: 'Escape' });

  expect(onClose).not.toHaveBeenCalled();
});

test('trigger onClose when clicking outside the modal', () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  const { queryByRole } = render(
    <Modal isOpen={true} onClose={onClose} closeOnClickOutside={true}>
      {text}
    </Modal>,
  );

  const element = queryByRole('dialog') as HTMLElement;

  fireEvent.click(element);

  expect(onClose).toHaveBeenCalled();
});

test('do not trigger onClose when clicking outside the modal and closeOnClickOutside is false', () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  const { queryByRole } = render(
    <Modal isOpen={true} onClose={onClose}>
      {text}
    </Modal>,
  );

  const element = queryByRole('dialog') as HTMLElement;

  fireEvent.click(element);

  expect(onClose).not.toHaveBeenCalled();
});

test('do not trigger onClose when clicking inside the modal', () => {
  const onClose = jest.fn();

  const { queryByTestId } = render(
    <Modal isOpen={true} onClose={onClose}>
      <p data-testid="inside-modal">Content</p>
    </Modal>,
  );

  const element = queryByTestId('inside-modal') as HTMLElement;

  fireEvent.click(element);

  expect(onClose).not.toHaveBeenCalled();
});

test('render close button on modal variation', () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  const { queryByTitle } = render(
    <Modal isOpen={true} onClose={onClose} variant="modal">
      {text}
    </Modal>,
  );

  expect(queryByTitle('Close')).toBeInTheDocument();
});

test('do not render close button on dialog variation', () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  const { queryByTitle, queryByText } = render(
    <Modal isOpen={true} onClose={onClose} variant="dialog">
      {text}
    </Modal>,
  );

  expect(queryByText(text)).toBeInTheDocument();
  expect(queryByTitle('Close')).not.toBeInTheDocument();
});

test('do not pull focus to open modal that is rerendered', () => {
  const text = 'This is a modal';
  const { queryByText, queryByRole, rerender } = render(
    <Modal isOpen={false}>
      {text}
      <input id="focusTest" />
    </Modal>,
  );

  // Modal not opened
  expect(queryByText(text)).not.toBeInTheDocument();

  // Modal Opened
  rerender(
    <Modal isOpen={true}>
      {text}
      <input id="focusTest" />
    </Modal>,
  );

  // Expect Modal to have focus
  expect(queryByText(text)).toBeInTheDocument();
  expect(document.activeElement).toBe(queryByRole('dialog'));

  const input = document.getElementById('focusTest');

  // Focus on input
  if (input !== null) {
    input.focus();
    expect(input).toHaveFocus();

    // Rerender as open
    rerender(
      <Modal isOpen={true}>
        {text}
        <input id="focusTest" />
      </Modal>,
    );

    // Expect input to still have focus and not modal
    expect(input).toHaveFocus();
    expect(document.activeElement).not.toBe(queryByRole('dialog'));
  }
});

test('body has scroll locked on modal open', () => {
  const { rerender } = render(<Modal isOpen={false} />);

  expect(document.body.style.overflowY).toEqual('');

  rerender(<Modal isOpen={true} />);

  expect(document.body.style.overflowY).toEqual('hidden');

  rerender(<Modal isOpen={false} />);

  expect(document.body.style.overflowY).toEqual('');
});

test('renders header', () => {
  const { getByText } = render(<Modal isOpen={true} header="Header Title" />);

  expect(getByText('Header Title')).toBeInTheDocument();
});

test('renders header border', () => {
  render(<Modal isOpen={true} header="Header Title" withHeaderBorder={true} />);

  expect(document.body).toMatchSnapshot();
});

test('renders actions', () => {
  const actions = (
    <>
      <Button variant="subtle">Cancel</Button>
      <Button>Apply</Button>
    </>
  );

  const { getAllByRole } = render(<Modal isOpen={true} actions={actions} />);
  expect(getAllByRole('button').length).toBe(3);
});

test('renders actions border', () => {
  const actions = (
    <>
      <Button variant="subtle">Cancel</Button>
      <Button>Apply</Button>
    </>
  );

  render(<Modal isOpen={true} actions={actions} withActionsBorder={true} />);

  expect(document.body).toMatchSnapshot();
});
