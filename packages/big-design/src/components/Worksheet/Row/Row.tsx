import React, { useCallback, useMemo } from 'react';

import { typedMemo } from '../../../utils';
import { Cell } from '../Cell';
import { useWorksheetStore } from '../hooks';
import { RowStatus } from '../RowStatus';
import {
  InternalWorksheetColumn,
  WorksheetItem,
  WorksheetModalColumn,
  WorksheetNumberColumn,
  WorksheetTextColumn,
} from '../types';

interface RowProps<Item> {
  columns: Array<InternalWorksheetColumn<Item>>;
  rowIndex: number;
}

const InternalRow = <T extends WorksheetItem>({ columns, rowIndex }: RowProps<T>) => {
  const { store, useStore } = useWorksheetStore();

  const row: T = useStore(
    store,
    useMemo(() => (state) => state.rows[rowIndex], [rowIndex]),
  );
  const nextRow: T = useStore(
    store,
    useMemo(() => (state) => state.rows[rowIndex + 1] || null, [rowIndex]),
  );
  const expandableRows = useStore(
    store,
    useMemo(() => (state) => state.expandableRows, []),
  );

  const isExpanded = useStore(
    store,
    useMemo(() => (state) => !state.hiddenRows.includes(row.id), [row.id]),
  );
  const isDisabled = useStore(
    store,
    useMemo(() => (state) => state.disabledRows.includes(row.id), [row.id]),
  );

  const parentId = useMemo(() => {
    if (!expandableRows) {
      return;
    }

    const rowIds = Object.keys(expandableRows);

    return rowIds.find((rowId) => expandableRows[rowId].find((childId) => childId === row.id));
  }, [expandableRows, row.id]);

  const isChild = useMemo(() => parentId !== undefined, [parentId]);

  const hasFormatting = useCallback(
    (
      column: InternalWorksheetColumn<T>,
    ): column is WorksheetTextColumn<T> | WorksheetNumberColumn<T> | WorksheetModalColumn<T> => {
      return (
        column.type === undefined ||
        column.type === 'text' ||
        column.type === 'number' ||
        column.type === 'modal'
      );
    },
    [],
  );

  const isLastChild = useMemo(
    () =>
      expandableRows
        ? Object.values(expandableRows)
            .reduce((accum, item) => [...accum, item[item.length - 1]], [])
            .includes(row.id)
        : false,
    [expandableRows, row.id],
  );

  const getIsCellDisabled = useCallback(
    ({ enabled, disabled }: InternalWorksheetColumn<T>) => {
      if (typeof enabled === 'boolean' && enabled) {
        return false;
      }

      return disabled || isDisabled;
    },
    [isDisabled],
  );

  if (isChild && !isExpanded) {
    return null;
  }

  return (
    <tr>
      <RowStatus rowIndex={rowIndex} />
      {columns.map((column, columnIndex) => (
        <Cell
          columnIndex={columnIndex}
          disabled={getIsCellDisabled(column)}
          formatting={hasFormatting(column) ? column.formatting : undefined}
          hash={column.hash}
          isChild={isChild}
          isLastChild={isLastChild}
          key={`${rowIndex}-${columnIndex}`}
          nextRowValue={(nextRow && nextRow[column.hash]) || ''}
          notation={column.notation}
          options={column.type === 'select' ? column.config.options : undefined}
          rowId={row.id}
          rowIndex={rowIndex}
          type={column.type ?? 'text'}
          validation={column.validation}
          value={row[column.hash] ?? ''}
        />
      ))}
    </tr>
  );
};

export const Row = typedMemo(InternalRow);
