import userEvent from '@testing-library/user-event';
import React, { CSSProperties } from 'react';
import 'jest-styled-components';

import { fireEvent, render, screen, within } from '@test/utils';

import { TableFigureNext, TableNext } from './TableNext';
import { TableColumn } from './types';

interface Item {
  sku: string;
  name: string;
  stock: number;
  children?: Item[];
}

interface SimpleTableOptions {
  className?: string;
  columns?: Array<TableColumn<Item>>;
  items?: Item[];
  dataTestId?: string;
  emptyComponent?: React.ReactElement;
  headerless?: boolean;
  id?: string;
  itemName?: string;
  style?: CSSProperties;
}

const getSimpleTable = ({
  className,
  columns,
  dataTestId,
  emptyComponent,
  headerless,
  id,
  itemName,
  items,
  style,
}: SimpleTableOptions = {}) => {
  const defaultColumns: Array<TableColumn<Item>> = [
    { hash: 'sku', header: 'Sku', render: ({ sku }) => sku },
    { hash: 'name', header: 'Name', render: ({ name }) => name },
    { hash: 'stock', header: 'Stock', render: ({ stock }) => stock },
  ];

  const defaultItems: Item[] = [
    { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },
    { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },
    { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },
    { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },
    { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },
  ];

  return (
    <TableNext
      className={className}
      columns={columns || defaultColumns}
      data-testid={dataTestId}
      emptyComponent={emptyComponent}
      headerless={headerless}
      id={id}
      itemName={itemName}
      items={items || defaultItems}
      style={style}
    />
  );
};

const mockChildrenRows = [
  { sku: 'SM13', name: 'Color pink', stock: 10 },
  { sku: 'SM13', name: 'Color black', stock: 15 },
];

test('renders a simple table', () => {
  const { container } = render(getSimpleTable());

  expect(container.firstChild).toMatchSnapshot();
});

test('renders a table figure', () => {
  const { container } = render(<TableFigureNext />);

  expect(container.firstChild).toMatchSnapshot();
});

test('generates a table id automatically', () => {
  const { getByRole } = render(getSimpleTable());

  const table = getByRole('table');

  expect(table.id).toBeTruthy();
});

test('forwards id and testid when provided', () => {
  const id = 'testId';
  const dataTestId = 'dataTestId';

  const { getByRole } = render(getSimpleTable({ id, dataTestId }));

  const table = getByRole('table');

  expect(table.id).toBe(id);
  expect(table.dataset.testid).toBe(dataTestId);
});

test('does not forward styles', () => {
  const { container } = render(getSimpleTable({ className: 'test', style: { background: 'red' } }));

  expect(container.getElementsByClassName('test')).toHaveLength(0);
  expect(container.firstChild).not.toHaveStyle('background: red');
});

test('renders column with custom component', () => {
  const { getAllByTestId } = render(
    getSimpleTable({
      columns: [
        { hash: 'sku', header: 'Sku', render: ({ sku }: any) => sku },
        {
          hash: 'name',
          header: 'Name',
          render: ({ name }: any) => <h3 data-testid="name">{name}</h3>,
        },
      ],
    }),
  );

  expect(getAllByTestId('name')).toHaveLength(5);
});

test('renders column with tooltip icon', () => {
  const { getByTitle } = render(
    getSimpleTable({
      columns: [
        { hash: 'sku', header: 'Sku', render: ({ sku }: any) => sku },
        { hash: 'name', header: 'Name', tooltip: 'Some text', render: ({ name }: any) => name },
      ],
    }),
  );

  expect(getByTitle('Hover or focus for additional context.')).toBeTruthy();
});

test('renders tooltip when hovering on icon', async () => {
  const { getByTitle } = render(
    getSimpleTable({
      columns: [
        { hash: 'sku', header: 'Sku', render: ({ sku }: any) => sku },
        { hash: 'name', header: 'Name', tooltip: 'Some text', render: ({ name }: any) => name },
      ],
    }),
  );

  fireEvent.mouseOver(getByTitle('Hover or focus for additional context.'));

  const result = await screen.findByText('Some text');

  expect(result).toBeInTheDocument();
});

test('tweaks column styles with props', () => {
  const { container } = render(
    getSimpleTable({
      columns: [
        {
          hash: '1',
          header: 'Sku',
          render: ({ sku }: any) => sku,
          align: 'right',
          verticalAlign: 'middle',
        },
        {
          hash: '2',
          header: 'Name',
          render: ({ name }: any) => name,
          width: 100,
          withPadding: false,
        },
      ],
    }),
  );

  const headers = container.querySelectorAll('th');
  const skuHeader = headers[0];
  const nameHeader = headers[1];

  expect(skuHeader.childNodes[0]).toHaveStyleRule('justify-content', 'flex-end');
  expect(skuHeader).not.toHaveStyleRule('vertical-align', 'center');

  expect(nameHeader).toHaveStyleRule('width', '100px');
  expect(skuHeader).not.toHaveStyleRule('padding', '0');

  const columns = container.querySelectorAll('tbody td');
  const skuTd = columns[0];
  const nameTd = columns[1];

  expect(skuTd).toHaveStyle(`
    text-align: right;
    vertical-align: middle;
  `);

  expect(nameTd).toHaveStyle(`
    width: 100px;
  `);
});

test('renders the total number of items + item name', () => {
  const { getByText } = render(getSimpleTable({ itemName: 'Test Items' }));

  const itemNameNode = getByText(`5 Test Items`);

  expect(itemNameNode).toBeInTheDocument();
});

test('renders a pagination component', async () => {
  const onItemsPerPageChange = jest.fn();
  const onPageChange = jest.fn();

  const { container, findByRole, getByTitle } = render(
    <TableNext
      columns={[
        { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },
        { header: 'Name', hash: 'name', render: ({ name }) => name },
        { header: 'Stock', hash: 'stock', render: ({ stock }) => stock },
      ]}
      items={[
        { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },
        { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },
        { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },
        { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },
        { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },
      ]}
      keyField="sku"
      pagination={{
        currentPage: 1,
        itemsPerPage: 3,
        totalItems: 5,
        itemsPerPageOptions: [3, 5, 10],
        onItemsPerPageChange,
        onPageChange,
      }}
    />,
  );

  fireEvent.click(getByTitle('Next page'));

  await findByRole('table');

  expect(onPageChange).toHaveBeenCalledWith(2);
  expect(container.firstChild).toMatchSnapshot();
});

describe('selectable', () => {
  let columns: Array<TableColumn<Item>>;
  let items: Item[];
  let onSelectionChange: jest.Mock;
  let onExpandedChange: jest.Mock;
  const itemName = 'Product';

  beforeEach(() => {
    onSelectionChange = jest.fn();
    onExpandedChange = jest.fn();
    items = [
      { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25, children: mockChildrenRows },
      { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34, children: mockChildrenRows },
      { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45, children: mockChildrenRows },
      { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },
      { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },
    ];
    columns = [
      { header: 'Sku', hash: 'sku', render: ({ sku }: any) => sku },
      { header: 'Name', hash: 'name', render: ({ name }: any) => name },
      { header: 'Stock', hash: 'stock', render: ({ stock }: any) => stock },
    ];
  });

  test('renders selectable actions and checkboxes', () => {
    const { container, getAllByRole } = render(
      <TableNext
        columns={columns}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems: {},
        }}
      />,
    );

    // One per item + Actions (select all) checkbox
    expect(getAllByRole('checkbox')).toHaveLength(items.length + 1);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders selectable actions, checkboxes when having parent rows and children rows', () => {
    const { container, getAllByRole } = render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems: {},
        }}
      />,
    );

    // One per parent row and child row + Actions (select all) checkbox
    expect(getAllByRole('checkbox')).toHaveLength(items.length + mockChildrenRows.length * 3 + 1);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('click on select all should call selectedItems with all items', async () => {
    render(
      <TableNext
        columns={columns}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems: {},
        }}
      />,
    );

    const [selectAllCheckbox] = await screen.findAllByRole<HTMLInputElement>('checkbox');
    const selectedItems = items.reduce((acc: Record<string, true>, _parentRow, parentRowIndex) => {
      acc[`${parentRowIndex}`] = true;

      return acc;
    }, {});

    // Select All
    expect(selectAllCheckbox.checked).toBe(false);

    fireEvent.click(selectAllCheckbox);

    expect(onSelectionChange).toHaveBeenCalledWith(selectedItems);
  });

  test('click on select all should call selectedItems with all parentRows and chilrenRows', async () => {
    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems: {},
        }}
      />,
    );

    const [selectAllCheckbox] = await screen.findAllByRole<HTMLInputElement>('checkbox');
    const selectedItems = items.reduce((acc: Record<string, true>, parentRow, parentRowIndex) => {
      acc[`${parentRowIndex}`] = true;

      const { children } = parentRow;

      if (children !== undefined) {
        children.forEach((_childRow, childRowIndex) => {
          acc[`${parentRowIndex}.${childRowIndex}`] = true;
        });
      }

      return acc;
    }, {});

    // Select All
    expect(selectAllCheckbox.checked).toBe(false);

    fireEvent.click(selectAllCheckbox);

    expect(onSelectionChange).toHaveBeenCalledWith(selectedItems);
  });

  test('select all when already all selected should deselect all items', async () => {
    const selectedItems = items.reduce((acc: Record<string, true>, _parentRow, parentRowIndex) => {
      acc[`${parentRowIndex}`] = true;

      return acc;
    }, {});

    render(
      <TableNext
        columns={columns}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems,
        }}
      />,
    );

    const [selectAllCheckbox] = await screen.findAllByRole<HTMLInputElement>('checkbox');

    // Deselect all
    expect(selectAllCheckbox.checked).toBe(true);

    fireEvent.click(selectAllCheckbox);

    expect(onSelectionChange).toHaveBeenCalledWith({});
  });

  test('select all (parent row + children rows) when already all selected should deselect all items', async () => {
    const selectedItems = items.reduce((acc: Record<string, true>, parentRow, parentRowIndex) => {
      acc[`${parentRowIndex}`] = true;

      const { children } = parentRow;

      if (children !== undefined) {
        children.forEach((_childRow, childRowIndex) => {
          acc[`${parentRowIndex}.${childRowIndex}`] = true;
        });
      }

      return acc;
    }, {});

    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems,
        }}
      />,
    );

    const [selectAllCheckbox] = await screen.findAllByRole<HTMLInputElement>('checkbox');

    // Deselect all
    expect(selectAllCheckbox.checked).toBe(true);

    fireEvent.click(selectAllCheckbox);

    expect(onSelectionChange).toHaveBeenCalledWith({});
  });

  test('select all children rows when selecting a parent row', async () => {
    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems: {},
        }}
      />,
    );

    const parentRow = await screen.findByRole('row', { name: /Smith Journal 13/ });
    const checkbox = await within(parentRow).findByRole<HTMLInputElement>('checkbox');

    // Select all
    expect(checkbox.checked).toBe(false);

    await userEvent.click(checkbox);

    const selectedItems: Record<string, true> = { 0: true };

    const { children } = items[0];

    if (children) {
      children.forEach((_childRow: Item, childRowIndex: number) => {
        selectedItems[`0.${childRowIndex}`] = true;
      });
    }

    expect(onSelectionChange).toHaveBeenCalledWith(selectedItems);
  });

  test('unselect all children rows when unselecting a parent row', async () => {
    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems: { 0: true, '0.0': true, '0.1': true },
        }}
      />,
    );

    const parentRow = await screen.findByRole('row', { name: /Smith Journal 13/ });
    const checkbox = await within(parentRow).findByRole<HTMLInputElement>('checkbox');

    // Deselect all
    expect(checkbox.checked).toBe(true);

    await userEvent.click(checkbox);

    expect(onSelectionChange).toHaveBeenCalledWith({});
  });

  test('selects a parent row when a single child row is selected', async () => {
    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems: {},
        }}
      />,
    );

    const [firstChildRow] = await screen.findAllByRole('row', { name: /Color pink/ });
    const childRowCheckbox = await within(firstChildRow).findByRole<HTMLInputElement>('checkbox');

    expect(childRowCheckbox.checked).toBe(false);

    await userEvent.click(childRowCheckbox);

    const selectedItems: Record<string, true> = { '0': true, '0.0': true };

    expect(onSelectionChange).toHaveBeenCalledWith(selectedItems);
  });

  test('unselects a parent row when a single child row is selected', async () => {
    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        itemName={itemName}
        items={items}
        selectable={{
          onSelectionChange,
          selectedItems: { '0': true, '0.0': true },
        }}
      />,
    );

    const [firstChildRow] = await screen.findAllByRole('row', { name: /Color pink/ });
    const childRowCheckbox = await within(firstChildRow).findByRole<HTMLInputElement>('checkbox');

    expect(childRowCheckbox.checked).toBe(true);

    await userEvent.click(childRowCheckbox);

    expect(onSelectionChange).toHaveBeenCalledWith({});
  });
});

describe('sortable', () => {
  let columns: Array<TableColumn<Item>>;
  let items: Item[];
  let onSort: jest.Mock;

  beforeEach(() => {
    onSort = jest.fn();
    items = [
      { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },
      { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },
      { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },
      { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },
      { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },
    ];
    columns = [
      { header: 'Sku', hash: 'sku', render: ({ sku }: any) => sku, isSortable: true },
      { header: 'Name', hash: 'name', render: ({ name }: any) => name },
      { header: 'Stock', hash: 'stock', render: ({ stock }: any) => stock },
    ];
  });

  test('renders ASC header icon', () => {
    const { getByTestId } = render(
      <TableNext
        columns={columns}
        items={items}
        sortable={{
          columnHash: 'sku',
          direction: 'ASC',
          onSort,
        }}
      />,
    );

    expect(getByTestId('asc-icon')).toBeInTheDocument();
  });

  test('calls onSort when pressing a sortable header', () => {
    const { container } = render(
      <TableNext
        columns={columns}
        items={items}
        sortable={{
          columnHash: 'sku',
          direction: 'ASC',
          onSort,
        }}
      />,
    );

    const skuHeaders: NodeListOf<HTMLTableCellElement> = container.querySelectorAll('th');

    fireEvent.click(skuHeaders[0]);

    expect(onSort).toHaveBeenCalledWith('sku', 'DESC', columns[0]);
  });

  test('does not call onSort when pressing a non-sortable header', () => {
    const { container } = render(
      <TableNext
        columns={columns}
        items={items}
        sortable={{
          columnHash: 'sku',
          direction: 'ASC',
          onSort,
        }}
      />,
    );

    const nameHeader = container.querySelectorAll('th');

    fireEvent.click(nameHeader[1]);

    expect(onSort).not.toHaveBeenCalled();
  });

  test('calls onSort when pressing the direction icon', () => {
    const { getByTestId } = render(
      <TableNext
        columns={columns}
        items={items}
        sortable={{
          columnHash: 'sku',
          direction: 'ASC',
          onSort,
        }}
      />,
    );

    const sortIcon = getByTestId('asc-icon');

    fireEvent.click(sortIcon);

    expect(onSort).toHaveBeenCalledWith('sku', 'DESC', columns[0]);
  });

  test('renders custom actions', () => {
    const { getByTestId } = render(
      <TableNext
        actions={<div data-testid="customAction">Test Action</div>}
        columns={columns}
        items={items}
      />,
    );

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

  test('renders the emptyComponent when there are no items', () => {
    const emptyComponent = <p>There are no items!</p>;

    render(getSimpleTable({ items: [], emptyComponent }));

    expect(screen.getByText(/no items/i)).toBeInTheDocument();
  });

  test('does not render emptyComponent if there are items', () => {
    const emptyComponent = <p>There are no items!</p>;

    render(getSimpleTable({ emptyComponent }));

    expect(screen.queryByText(/no items/i)).not.toBeInTheDocument();
  });
});

describe('draggable', () => {
  let columns: Array<TableColumn<Item>>;
  let items: Item[];
  let onRowDrop: jest.Mock;
  let onExpandedChange: jest.Mock;

  beforeEach(() => {
    onRowDrop = jest.fn();
    items = [
      { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25, children: mockChildrenRows },
      { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34, children: mockChildrenRows },
      { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45, children: mockChildrenRows },
      { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },
      { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },
    ];
    columns = [
      { header: 'Sku', hash: 'sku', render: ({ sku }: any) => sku, isSortable: true },
      { header: 'Name', hash: 'name', render: ({ name }: any) => name },
      { header: 'Stock', hash: 'stock', render: ({ stock }: any) => stock },
    ];
  });

  test('renders drag and drop icon only', () => {
    const { container } = render(
      <TableNext columns={columns} items={items} onRowDrop={onRowDrop} />,
    );
    const dragIcons = container.querySelectorAll('svg');

    expect(dragIcons).toHaveLength(items.length);
  });

  test('render drag and drop icons and expanded icons only for parent rows when expanded mode is on', () => {
    const { container } = render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        items={items}
        onRowDrop={onRowDrop}
      />,
    );

    const dragIcons = container.querySelectorAll('svg');
    // Only parent rows;
    const totalDragIcons = items.length;
    // Only parents with chidren rows);
    const totalExpandedIcons = items.length - 2;

    // Total of drag icons (only parents) + expanded icons (only parents with chidren rows);
    expect(dragIcons).toHaveLength(totalDragIcons + totalExpandedIcons);
  });

  test('onRowDrop called with expected args when a row is dropped', async () => {
    const spaceKey = { keyCode: 32 };
    const downKey = { keyCode: 40 };

    render(<TableNext columns={columns} items={items} onRowDrop={onRowDrop} />);

    const dragEls = await screen.findAllByRole<HTMLButtonElement>('button');
    const dragEl = dragEls[0];

    dragEl.focus();

    expect(dragEl).toHaveFocus();

    fireEvent.keyDown(dragEl, spaceKey);
    fireEvent.keyDown(dragEl, downKey);
    fireEvent.keyDown(dragEl, spaceKey);

    expect(onRowDrop).toHaveBeenCalledWith(0, 1);
  });
});

describe('expandable', () => {
  let columns: Array<TableColumn<Item>>;
  let items: Item[];
  let onExpandedChange: jest.Mock;

  beforeEach(() => {
    onExpandedChange = jest.fn();
    items = [
      { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25, children: mockChildrenRows },
      { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34, children: mockChildrenRows },
      { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45, children: mockChildrenRows },
    ];
    columns = [
      { header: 'Sku', hash: 'sku', render: ({ sku }: any) => sku, isSortable: true },
      { header: 'Name', hash: 'name', render: ({ name }: any) => name },
      { header: 'Stock', hash: 'stock', render: ({ stock }: any) => stock },
    ];
  });

  test('render expanded icons only for parent rows', async () => {
    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        items={items}
      />,
    );

    const expandIcons = await screen.findAllByRole('button');

    expect(expandIcons).toHaveLength(items.length);
  });

  test('expands a parent row when clicking on the expand icon', async () => {
    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: {},
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        items={items}
      />,
    );

    const parentRow = await screen.findByRole('row', { name: /Smith Journal 13/i });
    const expandIcon = await within(parentRow).findByRole('button');

    await userEvent.click(expandIcon);

    expect(onExpandedChange).toHaveBeenCalledWith({ 0: true });
    expect(onExpandedChange).not.toHaveBeenCalledWith({ 1: true });
    expect(onExpandedChange).not.toHaveBeenCalledWith({ 2: true });
  });

  test('unexpands an expanded parent row when clicking on the expand icon', async () => {
    render(
      <TableNext
        columns={columns}
        expandable={{
          expandedRows: { 0: true, 1: true, 2: true },
          onExpandedChange,
          expandedRowSelector: ({ children }) => children,
        }}
        items={items}
      />,
    );

    const parentRow = await screen.findByRole('row', { name: /Smith Journal 13/i });
    const expandIcon = await within(parentRow).findByRole('button');

    await userEvent.click(expandIcon);

    expect(onExpandedChange).toHaveBeenCalledWith({ 1: true, 2: true });
    expect(onExpandedChange).not.toHaveBeenCalledWith({ 0: true, 1: true, 2: true });
  });
});
