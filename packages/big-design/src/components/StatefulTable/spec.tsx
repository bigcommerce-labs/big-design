import React from 'react';
import 'jest-styled-components';

import { fireEvent, render, waitForElement } from '@test/utils';

import { StatefulTable, StatefulTablePillTabFilter, StatefulTableProps } from './StatefulTable';

interface TestItem {
  name: string;
  stock: number;
}

/**
 * Generate items (104 so we can do A-Z * 4) that looks like:
 * [
 *    { name: 'Product A - 1', stock: 1 },
 *    { name: 'Product B - 2', stock: 2 },
 *    ...
 *    { name: 'Product A - 2', stock: 27 },
 *    { name: 'Product B - 2', stock: 28 },
 * ]
 */
const generateItems = (): TestItem[] =>
  [...Array(104)].map((_, index) => ({
    name: `Product ${String.fromCharCode(65 + (index % 26))} - ${Math.ceil((index + 1) / 26)}`,
    stock: index + 1,
  }));

const getSimpleTable = (props: Partial<StatefulTableProps<TestItem>> = {}) => (
  <StatefulTable
    columns={[
      { header: 'Name', hash: 'name', render: ({ name }) => <span data-testid="name">{name}</span>, sortKey: 'name' },
      {
        header: 'Stock',
        hash: 'stock',
        render: ({ stock }) => <span data-testid="stock">{stock}</span>,
        sortKey: 'stock',
      },
    ]}
    data-testid="simple-table"
    items={generateItems()}
    {...props}
  />
);

test('renders a non-paginated table by default', () => {
  const { container } = render(getSimpleTable());

  const rows = container.querySelectorAll('tbody > tr');

  expect(rows.length).toBe(104);
});

test('pagination can be enabled', async () => {
  const { container, getByTestId } = render(getSimpleTable({ pagination: true }));

  const rows = container.querySelectorAll('tbody > tr');

  expect(rows.length).toBe(25);
  await waitForElement(() => getByTestId('simple-table'));
});

test('dragAndDrop can be enabled', async () => {
  const spaceKey = { keyCode: 32 };
  const downKey = { keyCode: 40 };
  const name = 'Product A - 1';
  const onRowDrop = jest.fn();
  const { container, getAllByTestId } = render(getSimpleTable({ onRowDrop }));

  let dragEls = container.querySelectorAll('[data-rbd-draggable-id]') as NodeListOf<HTMLElement>;

  let names = getAllByTestId('name');
  // Item at index 0 has product name Product A - 1
  expect(names[0].textContent).toBe(name);

  dragEls[0].focus();
  expect(dragEls[0]).toHaveFocus();

  fireEvent.keyDown(dragEls[0], spaceKey);
  fireEvent.keyDown(dragEls[0], downKey);
  fireEvent.keyDown(dragEls[0], spaceKey);

  dragEls = container.querySelectorAll('[data-rbd-draggable-id]') as NodeListOf<HTMLElement>;

  names = getAllByTestId('name');

  // After drag and drop item at index 1 has product name Product A - 1
  expect(names[1].textContent).toBe(name);
  expect(onRowDrop).toHaveBeenCalled();
});

test('changing pagination page changes the displayed items', async () => {
  const { getByTitle, getAllByTestId, getByTestId } = render(getSimpleTable({ pagination: true }));

  const pageOneItemName = getAllByTestId('name')[0].textContent;
  fireEvent.click(getByTitle('Next page'));
  const pageTwoItemName = getAllByTestId('name')[0].textContent;

  expect(pageOneItemName).not.toBe(pageTwoItemName);
  await waitForElement(() => getByTestId('simple-table'));
});

test('renders rows without checkboxes by default', () => {
  const { queryAllByRole } = render(getSimpleTable());

  expect(queryAllByRole('checkbox').length).toBe(0);
});

test('renders rows without checkboxes when opting in to selectable', () => {
  const { queryAllByRole } = render(getSimpleTable({ selectable: true, pagination: false }));

  // 104 tbody rows + Select all checkbox
  expect(queryAllByRole('checkbox').length).toBe(105);
});

test('items are unselected by default', () => {
  const { container } = render(getSimpleTable({ selectable: true }));
  const checkbox = container.querySelector('tbody > tr input') as HTMLInputElement;

  expect(checkbox.checked).toBe(false);
});

test('items can be selected by default', () => {
  const testItem = { name: 'Test Item', stock: 1 };
  const items: TestItem[] = [testItem];
  const { container } = render(getSimpleTable({ selectable: true, items, defaultSelected: [testItem] }));
  const checkbox = container.querySelector('tbody > tr input') as HTMLInputElement;

  expect(checkbox.checked).toBe(true);
});

test('onSelectionChange gets called when an item selection happens', () => {
  const testItemOne = { name: 'Test Item', stock: 1 };
  const testItemTwo = { name: 'Test Item Two', stock: 2 };
  const testItemThree = { name: 'Test Item Three', stock: 3 };
  const items: TestItem[] = [testItemOne, testItemTwo, testItemThree];
  const onSelectionChange = jest.fn();

  const { container } = render(
    getSimpleTable({ selectable: true, items, defaultSelected: [testItemThree], onSelectionChange }),
  );

  const checkbox = container.querySelector('tbody > tr input') as HTMLInputElement;

  fireEvent.click(checkbox);

  expect(onSelectionChange).toHaveBeenCalledWith([testItemThree, testItemOne]);
});

test('multi-page select', async () => {
  const onSelectionChange = jest.fn();

  const { container, getByTitle, getByTestId } = render(
    getSimpleTable({ selectable: true, onSelectionChange, pagination: true }),
  );

  let checkbox = container.querySelector('tbody > tr input') as HTMLInputElement;

  fireEvent.click(checkbox);
  fireEvent.click(getByTitle('Next page'));

  checkbox = container.querySelector('tbody > tr input') as HTMLInputElement;
  fireEvent.click(checkbox);

  expect(onSelectionChange).toHaveBeenCalledWith([
    { name: 'Product A - 1', stock: 1 },
    { name: 'Product Z - 1', stock: 26 },
  ]);
  await waitForElement(() => getByTestId('simple-table'));
});

test('select all selects all items in the current page', async () => {
  const testItemOne = { name: 'Test Item', stock: 1 };
  const testItemTwo = { name: 'Test Item Two', stock: 2 };
  const testItemThree = { name: 'Test Item Three', stock: 3 };
  const items: TestItem[] = [testItemOne, testItemTwo, testItemThree];
  const onSelectionChange = jest.fn();

  const { getAllByRole, getByTestId } = render(
    getSimpleTable({ selectable: true, items, onSelectionChange, pagination: true }),
  );

  const checkbox = getAllByRole('checkbox')[0];

  fireEvent.click(checkbox);

  expect(onSelectionChange).toHaveBeenCalledWith([testItemOne, testItemTwo, testItemThree]);
  await waitForElement(() => getByTestId('simple-table'));
});

test('unselect all should unselect all items in page', async () => {
  const testItemOne = { name: 'Test Item', stock: 1 };
  const testItemTwo = { name: 'Test Item Two', stock: 2 };
  const testItemThree = { name: 'Test Item Three', stock: 3 };
  const items: TestItem[] = [testItemOne, testItemTwo, testItemThree];
  const onSelectionChange = jest.fn();

  const { getAllByRole, getByTestId } = render(
    getSimpleTable({
      selectable: true,
      items,
      onSelectionChange,
      defaultSelected: [testItemOne, testItemTwo, testItemThree],
      pagination: true,
    }),
  );

  const checkbox = getAllByRole('checkbox')[0];

  fireEvent.click(checkbox);

  expect(onSelectionChange).toHaveBeenCalledWith([]);
  await waitForElement(() => getByTestId('simple-table'));
});

test('sorts alphabetically', () => {
  const { getAllByTestId, getByText } = render(getSimpleTable({ pagination: false }));

  let items = getAllByTestId('name');
  let firstItemContent = items[0].textContent;
  let lastItemContent = items[items.length - 1].textContent;

  // Descending order
  fireEvent.click(getByText('Name'));
  items = getAllByTestId('name');
  firstItemContent = items[0].textContent;
  lastItemContent = items[items.length - 1].textContent;

  expect(firstItemContent).toBe('Product Z - 4');
  expect(lastItemContent).toBe('Product A - 1');

  // Ascending order
  fireEvent.click(getByText('Name'));
  items = getAllByTestId('name');
  firstItemContent = items[0].textContent;
  lastItemContent = items[items.length - 1].textContent;

  expect(firstItemContent).toBe('Product A - 1');
  expect(lastItemContent).toBe('Product Z - 4');
});

test('sorts numerically', () => {
  const { getAllByTestId, getByText } = render(getSimpleTable({ pagination: false }));

  let items = getAllByTestId('stock');
  let firstItemContent = items[0].textContent;
  let lastItemContent = items[items.length - 1].textContent;

  // Descending order
  fireEvent.click(getByText('Stock'));
  items = getAllByTestId('stock');
  firstItemContent = items[0].textContent;
  lastItemContent = items[items.length - 1].textContent;

  expect(firstItemContent).toBe('104');
  expect(lastItemContent).toBe('1');

  // Ascending order
  fireEvent.click(getByText('Stock'));
  items = getAllByTestId('stock');
  firstItemContent = items[0].textContent;
  lastItemContent = items[items.length - 1].textContent;

  expect(firstItemContent).toBe('1');
  expect(lastItemContent).toBe('104');
});

test('sorts using a custom sorting function', () => {
  const { getAllByTestId, getByText } = render(
    getSimpleTable({
      columns: [
        { header: 'Name', hash: 'name', render: ({ name }) => <span data-testid="name">{name}</span>, sortKey: 'name' },
        {
          header: 'Stock',
          hash: 'stock',
          render: ({ stock }) => <span data-testid="stock">{stock}</span>,
          sortFn: (a, b, dir) => (dir === 'ASC' ? a.stock - b.stock : b.stock - a.stock),
        },
      ],
      pagination: false,
    }),
  );

  let items = getAllByTestId('stock');
  let firstItemContent = items[0].textContent;
  let lastItemContent = items[items.length - 1].textContent;

  // Descending order
  fireEvent.click(getByText('Stock'));

  items = getAllByTestId('stock');
  firstItemContent = items[0].textContent;
  lastItemContent = items[items.length - 1].textContent;

  expect(firstItemContent).toBe('104');
  expect(lastItemContent).toBe('1');

  // Ascending order
  fireEvent.click(getByText('Stock'));
  items = getAllByTestId('stock');
  firstItemContent = items[0].textContent;
  lastItemContent = items[items.length - 1].textContent;

  expect(firstItemContent).toBe('1');
  expect(lastItemContent).toBe('104');
});

test('renders custom actions', () => {
  const { getByTestId } = render(getSimpleTable({ actions: <div data-testid="customAction">Test Action</div> }));

  const customAction = getByTestId('customAction');

  expect(customAction).toBeInTheDocument();
  expect(customAction).toBeVisible();
});

test('renders headers by default and hides then via prop', () => {
  const { container, rerender } = render(getSimpleTable());

  expect(container.querySelector('th')).toBeVisible();

  rerender(getSimpleTable({ headerless: true }));

  expect(container.querySelector('th')).toBeInTheDocument();
  expect(container.querySelector('th')).not.toBeVisible();
});

test('renders pill tabs with the pillTabFilters prop', () => {
  const filters: StatefulTablePillTabFilter<TestItem> = {
    pillTabs: [{ title: 'In stock', id: 'in_stock' }],
    filter: (_itemId, items) => items.filter((item) => item.stock > 0),
  };
  const { getByText } = render(getSimpleTable({ filters }));
  const customFilter = getByText('In stock');

  expect(customFilter).toBeInTheDocument();
  expect(customFilter).toBeVisible();
});

test('it executes the filter function on click', async () => {
  const filters: StatefulTablePillTabFilter<TestItem> = {
    pillTabs: [{ title: 'In stock', id: 'in_stock' }],
    filter: (_itemId, items) => items.filter((item) => item.stock === 1),
  };
  const { container, getByText, getByTestId } = render(getSimpleTable({ filters }));

  const customFilter = getByText('In stock');

  fireEvent.click(customFilter);
  await waitForElement(() => getByTestId('simple-table'));

  const rows = container.querySelectorAll('tbody > tr');

  expect(rows.length).toBe(1);
});

test('can paginate on filtered rows', async () => {
  const filters: StatefulTablePillTabFilter<TestItem> = {
    pillTabs: [{ title: 'Low stock', id: 'in_stock' }],
    filter: (_itemId, items) => items.filter((item) => item.stock < 40),
  };
  const { getByText, getByTestId } = render(getSimpleTable({ filters, pagination: true }));
  const customFilter = getByText('Low stock');

  fireEvent.click(customFilter);
  await waitForElement(() => getByTestId('simple-table'));

  const itemText = getByText('1 - 25 of 39');

  expect(itemText).toBeInTheDocument();
});

test('can undo filter actions', async () => {
  const filters: StatefulTablePillTabFilter<TestItem> = {
    pillTabs: [{ title: 'Stock 1', id: 'in_stock' }],
    filter: (_itemId, items) => items.filter((item) => item.stock === 1),
  };
  const { container, getByText, getByTestId } = render(getSimpleTable({ filters }));
  const customFilter = getByText('Stock 1');

  fireEvent.click(customFilter);

  let rows = container.querySelectorAll('tbody > tr');

  expect(rows.length).toBe(1);

  fireEvent.click(customFilter);
  await waitForElement(() => getByTestId('simple-table'));

  rows = container.querySelectorAll('tbody > tr');
  expect(rows.length).toBe(104);
});

test('can stack filter actions (OR logic)', async () => {
  const filters: StatefulTablePillTabFilter<TestItem> = {
    pillTabs: [
      { title: 'Stock 1', id: 'stock_1' },
      { title: 'Stock 2', id: 'stock_2' },
    ],
    filter: (itemId, items) =>
      itemId === 'stock_1' ? items.filter((item) => item.stock === 1) : items.filter((item) => item.stock === 2),
  };
  const { container, getByText, getByTestId } = render(getSimpleTable({ filters }));
  const customFilter1 = getByText('Stock 1');
  const customFilter2 = getByText('Stock 2');

  fireEvent.click(customFilter1);
  await waitForElement(() => getByTestId('simple-table'));
  fireEvent.click(customFilter2);
  await waitForElement(() => getByTestId('simple-table'));

  const rows = container.querySelectorAll('tbody > tr');

  expect(rows.length).toBe(2);
});

test('can undo stacked filter actions', async () => {
  const filters: StatefulTablePillTabFilter<TestItem> = {
    pillTabs: [
      { title: 'Stock 1', id: 'stock_1' },
      { title: 'Stock 2', id: 'stock_2' },
    ],
    filter: (itemId, items) =>
      itemId === 'stock_1' ? items.filter((item) => item.stock === 1) : items.filter((item) => item.stock === 2),
  };
  const { container, getByText, getByTestId } = render(getSimpleTable({ filters }));
  const customFilter1 = getByText('Stock 1');
  const customFilter2 = getByText('Stock 2');

  fireEvent.click(customFilter1);
  fireEvent.click(customFilter2);
  await waitForElement(() => getByTestId('simple-table'));

  let rows = container.querySelectorAll('tbody > tr');
  expect(rows.length).toBe(2);

  fireEvent.click(customFilter1);
  await waitForElement(() => getByTestId('simple-table'));

  rows = container.querySelectorAll('tbody > tr');
  expect(rows.length).toBe(1);

  fireEvent.click(customFilter2);
  await waitForElement(() => getByTestId('simple-table'));

  rows = container.querySelectorAll('tbody > tr');
  expect(rows.length).toBe(104);
});
