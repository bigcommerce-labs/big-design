import React, { memo, useMemo } from 'react';

import { Cell } from '../Cell';
import { useStore } from '../hooks';
import { RowStatus } from '../RowStatus';
import { WorksheetColumn } from '../types';

interface RowProps {
  columns: WorksheetColumn<unknown>[];
  rowIndex: number;
}

export const Row: React.FC<RowProps> = memo(({ columns, rowIndex }) => {
  const row = useStore(useMemo(() => (state) => state.rows[rowIndex], [rowIndex]));

  return (
    <tr>
      <RowStatus rowIndex={rowIndex} />
      {columns.map((column, columnIndex) => (
        <Cell
          columnIndex={columnIndex}
          hash={column.hash}
          key={`${rowIndex}-${columnIndex}`}
          rowIndex={rowIndex}
          type={column.type || 'text'}
          validation={column.validation}
          value={row[column.hash]}
        />
      ))}
    </tr>
  );
});
