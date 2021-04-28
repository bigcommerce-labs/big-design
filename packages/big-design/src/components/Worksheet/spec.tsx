import { act, fireEvent, render, screen, waitForElement } from '@testing-library/react';
import React from 'react';

import { useStore } from './hooks';
import { WorksheetColumn } from './types';
import { Worksheet } from './Worksheet';

interface Product {
  id: number;
  productName: string;
  visibleOnStorefront: boolean;
  otherField: string;
  otherField2: string;
  otherField3: string;
  numberField: number;
}

const columns: WorksheetColumn<Product>[] = [
  { hash: 'productName', header: 'Product name', validation: (value) => !!value },
  { hash: 'visibleOnStorefront', header: 'Visible on storefront', type: 'checkbox' },
  { hash: 'otherField', header: 'Other field' },
  {
    hash: 'otherField2',
    header: 'Other field',
    type: 'select',
    options: [
      { value: 'plastic', content: 'Plastic' },
      { value: 'leather', content: 'Leather' },
      { value: 'cloth', content: 'Cloth' },
    ],
    validation: (value) => !!value,
  },
  { hash: 'otherField3', header: 'Other field' },
  { hash: 'numberField', header: 'Number field', type: 'number', validation: (value) => value >= 50 },
];

const items: Product[] = [
  {
    id: 1,
    productName: 'Shoes Name Three',
    visibleOnStorefront: true,
    otherField: 'Text',
    otherField2: 'plastic',
    otherField3: 'Field',
    numberField: 50,
  },
  {
    id: 2,
    productName: 'Shoes Name Two',
    visibleOnStorefront: true,
    otherField: 'Text',
    otherField2: 'plastic',
    otherField3: 'Field',
    numberField: 50,
  },
  {
    id: 3,
    productName: 'Shoes Name One',
    visibleOnStorefront: false,
    otherField: 'Text',
    otherField2: 'leather',
    otherField3: 'Field',
    numberField: 50,
  },
  {
    id: 4,
    productName: 'Variant',
    visibleOnStorefront: true,
    otherField: 'Text',
    otherField2: 'leather',
    otherField3: 'Field',
    numberField: 50,
  },
  {
    id: 5,
    productName: '',
    visibleOnStorefront: true,
    otherField: 'Text',
    otherField2: '',
    otherField3: 'Field',
    numberField: 50,
  },
  {
    id: 6,
    productName: 'Variant',
    visibleOnStorefront: true,
    otherField: 'Text',
    otherField2: '',
    otherField3: 'Field',
    numberField: 50,
  },
  {
    id: 7,
    productName: 'Variant',
    visibleOnStorefront: false,
    otherField: 'Text',
    otherField2: 'leather',
    otherField3: 'Field',
    numberField: 49,
  },
  {
    id: 8,
    productName: 'Dress Name One',
    visibleOnStorefront: true,
    otherField: 'Text',
    otherField2: 'leather',
    otherField3: 'Field',
    numberField: 50,
  },
  {
    id: 9,
    productName: 'Fans Name One',
    visibleOnStorefront: true,
    otherField: 'Text',
    otherField2: 'leather',
    otherField3: 'Field',
    numberField: 50,
  },
];

let handleChange = jest.fn();
let handleErrors = jest.fn();

const initialStoreState = useStore.getState();

beforeEach(() => {
  act(() => {
    handleChange = jest.fn();
    handleErrors = jest.fn();
    useStore.setState(initialStoreState, true);
  });
});

test('renders worksheet', async () => {
  const { container } = render(<Worksheet columns={columns} items={items} onChange={handleChange} />);

  expect(container.firstChild).toMatchSnapshot();

  await waitForElement(() => screen.getAllByRole('combobox'));
});

describe('selection', () => {
  test('selects cell on click', async () => {
    const { getByText } = render(<Worksheet columns={columns} items={items} onChange={handleChange} />);
    const cell = getByText('Shoes Name One').parentElement as HTMLTableDataCellElement;
    const row = cell.parentElement as HTMLTableRowElement;

    fireEvent.click(cell);

    expect(cell).toHaveStyle('border-color: #3C64F4');
    expect(row.firstChild).toHaveStyle('background-color: #3C64F4');

    await waitForElement(() => screen.getAllByRole('combobox'));
  });
});

describe('edition', () => {
  test('onChange is not called when value does not change', async () => {
    const { getByDisplayValue, getByText } = render(
      <Worksheet columns={columns} items={items} onChange={handleChange} />,
    );

    let cell;

    cell = getByText('Shoes Name One');

    fireEvent.doubleClick(getByText('Shoes Name One'));

    const input = getByDisplayValue('Shoes Name One') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Shoes Name One' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    cell = getByText('Shoes Name One');
    expect(cell).toBeDefined();
    expect(handleChange).not.toHaveBeenCalled();

    await waitForElement(() => screen.getAllByRole('combobox'));
  });

  test('onChange is called when value changes', async () => {
    const { getAllByDisplayValue, getAllByLabelText, getAllByRole, getByDisplayValue, getByText } = render(
      <Worksheet columns={columns} items={items} onChange={handleChange} />,
    );

    let cell;
    let input;

    cell = getByText('Shoes Name One');

    fireEvent.doubleClick(cell);

    input = getByDisplayValue('Shoes Name One') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Shoes Name One Edit' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    cell = getByText('Shoes Name One Edit');
    expect(cell).toBeDefined();
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith([
      {
        id: 3,
        productName: 'Shoes Name One Edit',
        visibleOnStorefront: false,
        otherField: 'Text',
        otherField2: 'leather',
        otherField3: 'Field',
        numberField: 50,
      },
    ]);

    fireEvent.doubleClick(cell);

    input = getByDisplayValue('Shoes Name One Edit') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Shoes Name One Edit 2' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    cell = getByText('Shoes Name One Edit 2');
    expect(cell).toBeDefined();
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith([
      {
        id: 3,
        productName: 'Shoes Name One Edit 2',
        visibleOnStorefront: false,
        otherField: 'Text',
        otherField2: 'leather',
        otherField3: 'Field',
        numberField: 50,
      },
    ]);

    let cells = getAllByDisplayValue('Plastic');

    act(() => {
      fireEvent.click(cells[0]);
    });

    const options = getAllByRole('option');

    act(() => {
      fireEvent.click(options[2]);
    });

    expect(handleChange).toHaveBeenCalledTimes(3);
    expect(handleChange).toHaveBeenCalledWith([
      {
        id: 3,
        productName: 'Shoes Name One Edit 2',
        visibleOnStorefront: false,
        otherField: 'Text',
        otherField2: 'leather',
        otherField3: 'Field',
        numberField: 50,
      },
      {
        id: 1,
        productName: 'Shoes Name Three',
        visibleOnStorefront: true,
        otherField: 'Text',
        otherField2: 'cloth',
        otherField3: 'Field',
        numberField: 50,
      },
    ]);

    cells = getAllByLabelText('Checked');

    act(() => {
      fireEvent.click(cells[0]);
    });

    expect(handleChange).toHaveBeenCalledTimes(4);
    expect(handleChange).toHaveBeenCalledWith([
      {
        id: 3,
        productName: 'Shoes Name One Edit 2',
        visibleOnStorefront: false,
        otherField: 'Text',
        otherField2: 'leather',
        otherField3: 'Field',
        numberField: 50,
      },
      {
        id: 1,
        productName: 'Shoes Name Three',
        visibleOnStorefront: false,
        otherField: 'Text',
        otherField2: 'cloth',
        otherField3: 'Field',
        numberField: 50,
      },
    ]);

    await waitForElement(() => screen.getAllByRole('combobox'));
  });

  test('edition does not mutate items array', () => {
    // At this point, if our previous tests mutated the items array, this value would be different
    expect(items[2]).toStrictEqual({
      id: 3,
      productName: 'Shoes Name One',
      visibleOnStorefront: false,
      otherField: 'Text',
      otherField2: 'leather',
      otherField3: 'Field',
      numberField: 50,
    });
  });
});

describe('validation', () => {
  test('invalid cells have the red border', async () => {
    const { getByText } = render(
      <Worksheet columns={columns} items={items} onChange={handleChange} onErrors={handleErrors} />,
    );

    const cell = getByText('49').parentElement as HTMLTableDataCellElement;
    const row = cell.parentElement as HTMLTableRowElement;

    expect(cell).toHaveStyle('border-color: #db3643');
    expect(row.firstChild).toHaveStyle('background-color: #DB3643');

    await waitForElement(() => screen.getAllByRole('combobox'));
  });

  test('onErrors gets called with invalid cells', async () => {
    let cell;
    let input;

    const { getByDisplayValue, getByText } = render(
      <Worksheet columns={columns} items={items} onChange={handleChange} onErrors={handleErrors} />,
    );

    await waitForElement(() => screen.getAllByRole('combobox'));

    expect(handleErrors).toBeCalledTimes(1);
    expect(handleErrors).toBeCalledWith([
      {
        item: {
          id: 5,
          productName: '',
          visibleOnStorefront: true,
          otherField: 'Text',
          otherField2: '',
          otherField3: 'Field',
          numberField: 50,
        },
        errors: ['productName', 'otherField2'],
      },
      {
        item: {
          id: 6,
          productName: 'Variant',
          visibleOnStorefront: true,
          otherField: 'Text',
          otherField2: '',
          otherField3: 'Field',
          numberField: 50,
        },
        errors: ['otherField2'],
      },
      {
        item: {
          id: 7,
          productName: 'Variant',
          visibleOnStorefront: false,
          otherField: 'Text',
          otherField2: 'leather',
          otherField3: 'Field',
          numberField: 49,
        },
        errors: ['numberField'],
      },
    ]);

    cell = getByText('49') as HTMLElement;

    fireEvent.doubleClick(cell);

    input = getByDisplayValue('49') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 40 } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(handleErrors).toBeCalledTimes(2);
    expect(handleErrors).toBeCalledWith([
      {
        item: {
          id: 5,
          productName: '',
          visibleOnStorefront: true,
          otherField: 'Text',
          otherField2: '',
          otherField3: 'Field',
          numberField: 50,
        },
        errors: ['productName', 'otherField2'],
      },
      {
        item: {
          id: 6,
          productName: 'Variant',
          visibleOnStorefront: true,
          otherField: 'Text',
          otherField2: '',
          otherField3: 'Field',
          numberField: 50,
        },
        errors: ['otherField2'],
      },
      {
        item: {
          id: 7,
          productName: 'Variant',
          visibleOnStorefront: false,
          otherField: 'Text',
          otherField2: 'leather',
          otherField3: 'Field',
          numberField: 40,
        },
        errors: ['numberField'],
      },
    ]);

    cell = getByText('40');

    fireEvent.doubleClick(cell);

    input = getByDisplayValue('40') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 60 } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(handleErrors).toBeCalledTimes(3);
    expect(handleErrors).toBeCalledWith([
      {
        item: {
          id: 5,
          productName: '',
          visibleOnStorefront: true,
          otherField: 'Text',
          otherField2: '',
          otherField3: 'Field',
          numberField: 50,
        },
        errors: ['productName', 'otherField2'],
      },
      {
        item: {
          id: 6,
          productName: 'Variant',
          visibleOnStorefront: true,
          otherField: 'Text',
          otherField2: '',
          otherField3: 'Field',
          numberField: 50,
        },
        errors: ['otherField2'],
      },
    ]);
  });
});

describe('TextEditor', () => {
  test('renders TextEditor', async () => {
    const { getByDisplayValue, getByText } = render(
      <Worksheet columns={columns} items={items} onChange={handleChange} />,
    );

    const cell = getByText('Shoes Name One');

    fireEvent.doubleClick(cell);

    const input = getByDisplayValue('Shoes Name One') as HTMLInputElement;

    expect(input).toBeDefined();

    await waitForElement(() => screen.getAllByRole('combobox'));
  });

  test('TextEditor shows the appropriate state', async () => {
    const { getByDisplayValue, getByText } = render(
      <Worksheet columns={columns} items={items} onChange={handleChange} />,
    );

    let input;
    let cell;

    cell = getByText('Shoes Name One');

    expect(cell.parentNode).toHaveStyle('background-color: rgb(255, 255, 255);');

    fireEvent.doubleClick(cell);

    input = getByDisplayValue('Shoes Name One') as HTMLInputElement;

    expect(input).toHaveStyle('background-color: white;');

    fireEvent.change(input, { target: { value: 'Shoes Name One Edit' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    cell = getByText('Shoes Name One Edit');

    expect(cell.parentNode).toHaveStyle('background-color: #FFF9E6;');

    fireEvent.doubleClick(cell);

    input = getByDisplayValue('Shoes Name One Edit') as HTMLInputElement;

    expect(input).toHaveStyle('background-color: #FFF9E6;');

    await waitForElement(() => screen.getAllByRole('combobox'));
  });

  test('column type number returns number', async () => {
    const { getByDisplayValue, getByText } = render(
      <Worksheet columns={columns} items={items} onChange={handleChange} />,
    );

    const cell = getByText('49') as HTMLElement;

    fireEvent.doubleClick(cell);

    const input = getByDisplayValue('49') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 80 } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(handleChange).toHaveBeenCalledWith([
      {
        id: 7,
        productName: 'Variant',
        visibleOnStorefront: false,
        otherField: 'Text',
        otherField2: 'leather',
        otherField3: 'Field',
        numberField: 80,
      },
    ]);

    await waitForElement(() => screen.getAllByRole('combobox'));
  });
});

describe('SelectEditor', () => {
  test('renders SelectEditor', async () => {
    const { getAllByRole } = render(<Worksheet columns={columns} items={items} onChange={handleChange} />);

    const cells = getAllByRole('combobox');

    expect(cells.length).toBe(9);

    await waitForElement(() => screen.getAllByRole('combobox'));
  });

  test('SelectEditor shows the appropriate state', async () => {
    const { getAllByRole, getAllByDisplayValue } = render(
      <Worksheet columns={columns} items={items} onChange={handleChange} />,
    );

    const cells = getAllByDisplayValue('Plastic');

    expect(cells[0]).toHaveStyle('background-color: white');

    act(() => {
      fireEvent.click(cells[0]);
    });

    const options = getAllByRole('option');

    act(() => {
      fireEvent.click(options[2]);
    });

    expect(cells[0]).toHaveStyle('background-color: #FFF9E6;');

    await waitForElement(() => screen.getAllByRole('combobox'));
  });
});

describe('CheckboxEditor', () => {
  test('renders CheckboxEditor', async () => {
    const { getAllByLabelText } = render(<Worksheet columns={columns} items={items} onChange={handleChange} />);

    let cells = getAllByLabelText('Checked');

    expect(cells.length).toBe(7);

    cells = getAllByLabelText('Unchecked');

    expect(cells.length).toBe(2);

    await waitForElement(() => screen.getAllByRole('combobox'));
  });

  test('CheckboxEditor shows the appropriate state', async () => {
    const { getAllByLabelText } = render(<Worksheet columns={columns} items={items} onChange={handleChange} />);

    const cells = getAllByLabelText('Checked');
    const cell = cells[0];

    act(() => {
      fireEvent.click(cell);
    });

    expect(cell.parentElement?.parentElement?.parentElement).toHaveStyle('background-color: #FFF9E6;');

    await waitForElement(() => screen.getAllByRole('combobox'));
  });
});
