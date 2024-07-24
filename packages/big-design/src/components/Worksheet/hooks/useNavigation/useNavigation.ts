import { useCallback, useMemo } from 'react';

import { Cell, InternalWorksheetColumn, WorksheetItem } from '../../types';
import { useWorksheetStore } from '../useWorksheetStore';

interface Coordinate {
  columnIndex: number;
  rowIndex: number;
}

type Navigate = (offset: Coordinate) => void;

export const useNavigation = <T extends WorksheetItem>(selectedCell: Cell<T>) => {
  const { store, useStore } = useWorksheetStore();

  const rows: T[] = useStore(
    store,
    useMemo(() => (state) => state.rows, []),
  );
  const columns: Array<InternalWorksheetColumn<T>> = useStore(
    store,
    useMemo(() => (state) => state.columns, []),
  );
  const hiddenRows = useStore(
    store,
    useMemo(() => (state) => state.hiddenRows, []),
  );

  const setSelectedCells = useStore(store, (state) => state.setSelectedCells);
  const setSelectedRows = useStore(store, (state) => state.setSelectedRows);

  const isValidPosition = useCallback(
    (position: Coordinate) => {
      const rowLength = rows.length;
      const columnsLength = columns.length;

      // Check to see if the next indexes fit inside the matrix
      return (
        position.rowIndex >= 0 &&
        position.rowIndex < rowLength &&
        position.columnIndex >= 0 &&
        position.columnIndex < columnsLength
      );
    },
    [columns, rows],
  );

  const isHidden = useCallback(
    (rowIndex: number) => {
      const row = rows[rowIndex];
      const { id } = row;

      return hiddenRows.includes(id);
    },
    [hiddenRows, rows],
  );

  // This function will look for the next non hidden offset,
  // depending on the direction of the offset.
  const getNextOffset = useCallback(({ columnIndex, rowIndex }: Coordinate) => {
    if (rowIndex === 0) {
      if (columnIndex > 0) {
        return { columnIndex: ++columnIndex, rowIndex };
      }

      return { columnIndex: --columnIndex, rowIndex };
    }

    if (rowIndex > 0) {
      return { rowIndex: ++rowIndex, columnIndex };
    }

    return { rowIndex: --rowIndex, columnIndex };
  }, []);

  const navigate: Navigate = useCallback(
    (offset: Coordinate) => {
      if (!selectedCell) {
        return;
      }

      const newPosition: Coordinate = {
        columnIndex: selectedCell.columnIndex + offset.columnIndex,
        rowIndex: selectedCell.rowIndex + offset.rowIndex,
      };

      if (isValidPosition(newPosition)) {
        if (isHidden(newPosition.rowIndex)) {
          navigate(getNextOffset(offset));

          return;
        }

        const hash = columns[newPosition.columnIndex].hash;
        const type = columns[newPosition.columnIndex].type || 'text';
        const value = rows[newPosition.rowIndex][hash];
        const disabled = columns[newPosition.columnIndex].disabled || false;

        const cell = { ...newPosition, disabled, hash, type, value };

        setSelectedCells([cell]);
        setSelectedRows([newPosition.rowIndex]);
      }
    },
    [
      columns,
      getNextOffset,
      isHidden,
      isValidPosition,
      rows,
      selectedCell,
      setSelectedCells,
      setSelectedRows,
    ],
  );

  return useMemo(() => ({ navigate }), [navigate]);
};
