import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';

import { Pagination } from './index';

test('render pagination component', () => {
  const changePage = jest.fn();
  const changeRange = jest.fn();
  const { container } = render(
    <Pagination
      itemsPerPage={3}
      currentPage={1}
      totalItems={10}
      itemsPerPageOptions={[2, 3, 5]}
      onPageChange={changePage}
      onItemsPerPageChange={changeRange}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('render pagination component with invalid page info', () => {
  const changePage = jest.fn();
  const changeRange = jest.fn();
  const { container } = render(
    <Pagination
      itemsPerPage={3}
      currentPage={-2}
      totalItems={10}
      itemsPerPageOptions={[2, 3, 5]}
      onPageChange={changePage}
      onItemsPerPageChange={changeRange}
    />,
  );
  expect(changePage).toHaveBeenCalled();
  expect(container.firstChild).toMatchSnapshot();
});

test('render pagination component with invalid range info', () => {
  const changePage = jest.fn();
  const changeRange = jest.fn();
  const { container } = render(
    <Pagination
      itemsPerPage={-5}
      currentPage={1}
      totalItems={10}
      itemsPerPageOptions={[2, 3, 5]}
      onPageChange={changePage}
      onItemsPerPageChange={changeRange}
    />,
  );
  expect(changeRange).toHaveBeenCalled();
  expect(container.firstChild).toMatchSnapshot();
});

test('render pagination component with no items', () => {
  const changePage = jest.fn();
  const changeRange = jest.fn();
  const { container } = render(
    <Pagination
      itemsPerPage={3}
      currentPage={1}
      totalItems={0}
      itemsPerPageOptions={[2, 3, 5]}
      onPageChange={changePage}
      onItemsPerPageChange={changeRange}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('trigger range change', () => {
  const changePage = jest.fn();
  const changeRange = jest.fn();
  const { getByText } = render(
    <Pagination
      itemsPerPage={2}
      currentPage={1}
      totalItems={10}
      itemsPerPageOptions={[2, 3, 5]}
      onPageChange={changePage}
      onItemsPerPageChange={changeRange}
    />,
  );
  fireEvent.click(getByText('1 - 2 of 10'));
  fireEvent.keyDown(getByText('2'), { key: 'ArrowDown', code: 40 });
  fireEvent.keyDown(getByText('3'), { key: 'Enter', code: 13 });

  expect(changeRange).toHaveBeenCalled();
});

test('trigger page decrease', () => {
  const changePage = jest.fn();
  const changeRange = jest.fn();
  const { getByTitle } = render(
    <Pagination
      itemsPerPage={3}
      currentPage={2}
      totalItems={10}
      itemsPerPageOptions={[2, 3, 5]}
      onPageChange={changePage}
      onItemsPerPageChange={changeRange}
    />,
  );

  const title = getByTitle('Previous page');
  const svg = title.parentNode as HTMLElement;
  const span = svg.parentNode as HTMLElement;
  const button = span.parentNode as HTMLButtonElement;

  fireEvent.click(button);

  expect(changePage).toHaveBeenCalled();
});

test('trigger page increase', () => {
  const changePage = jest.fn();
  const changeRange = jest.fn();
  const { getByTitle } = render(
    <Pagination
      itemsPerPage={3}
      currentPage={1}
      totalItems={10}
      itemsPerPageOptions={[2, 3, 5]}
      onPageChange={changePage}
      onItemsPerPageChange={changeRange}
    />,
  );

  const title = getByTitle('Next page');
  const svg = title.parentNode as HTMLElement;
  const span = svg.parentNode as HTMLElement;
  const button = span.parentNode as HTMLButtonElement;

  fireEvent.click(button);

  expect(changePage).toHaveBeenCalled();
});
