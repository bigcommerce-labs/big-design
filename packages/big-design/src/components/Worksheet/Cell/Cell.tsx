import React, { memo, useCallback, useEffect, useMemo } from 'react';

import { Small } from '../../Typography';
import { useEditableCell, useStore } from '../hooks';
import { Cell as TCell } from '../types';

import { StyledCell } from './styled';

interface CellProps extends TCell<string | number> {
  validation?(value: string | number): boolean;
}

export const Cell: React.FC<CellProps> = memo(({ columnIndex, hash, rowIndex, type, value, validation }) => {
  const cell = useMemo(() => ({ columnIndex, rowIndex, hash, type, value }), [
    columnIndex,
    rowIndex,
    hash,
    type,
    value,
  ]);

  const { handleDoubleClick, handleBlur, handleKeyDown, isEditing, Editor } = useEditableCell(cell);
  const setSelectedRows = useStore(useMemo(() => (state) => state.setSelectedRows, []));
  const setSelectedCells = useStore(useMemo(() => (state) => state.setSelectedCells, []));
  const addInvalidCells = useStore(useMemo(() => (state) => state.addInvalidCells, []));
  const removeInvalidCells = useStore(useMemo(() => (state) => state.removeInvalidCells, []));

  const isSelected = useStore(
    useMemo(
      () => (state) =>
        state.selectedCells.reduce(
          (acc, selectedCell) =>
            acc || (selectedCell.columnIndex === cell.columnIndex && selectedCell.rowIndex === cell.rowIndex),
          false,
        ),
      [cell],
    ),
  );

  const isEdited = useStore(
    useMemo(
      () => (state) =>
        state.editedCells.reduce(
          (acc, editedCell) =>
            acc || (editedCell.columnIndex === cell.columnIndex && editedCell.rowIndex === cell.rowIndex),
          false,
        ),
      [cell],
    ),
  );

  const invalidCell = useStore(
    useMemo(
      () => (state) =>
        state.invalidCells.find(
          (invalidCell) => invalidCell.columnIndex === cell.columnIndex && invalidCell.rowIndex === cell.rowIndex,
        ),
      [cell.columnIndex, cell.rowIndex],
    ),
  );

  const isValid = useMemo(() => (typeof validation === 'function' ? validation(value) : true), [validation, value]);

  useEffect(() => {
    // Remove from invalidCells if now value is valid
    if (isValid && invalidCell) {
      removeInvalidCells([cell]);
    }

    // Add to invalidCells but only if value is different
    if (!isValid && (!invalidCell || invalidCell.value !== cell.value)) {
      addInvalidCells([cell]);
    }
  }, [addInvalidCells, cell, isValid, invalidCell, removeInvalidCells]);

  const handleClick = useCallback(() => {
    setSelectedRows([rowIndex]);
    setSelectedCells([cell]);
  }, [cell, rowIndex, setSelectedCells, setSelectedRows]);

  const renderedCell = useMemo(
    () =>
      isEditing ? (
        <Editor cell={cell} isEdited={isEdited} onBlur={handleBlur} onKeyDown={handleKeyDown} />
      ) : (
        // In case of NaN casting to string
        <Small>{value.toString()}</Small>
      ),
    [cell, handleBlur, handleKeyDown, isEdited, isEditing, value],
  );

  return (
    <StyledCell
      isEdited={isEdited}
      isSelected={isSelected}
      isValid={isValid}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {renderedCell}
    </StyledCell>
  );
});
