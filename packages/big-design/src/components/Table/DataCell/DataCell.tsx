import React, { memo, TableHTMLAttributes } from 'react';

import { DisplayProps } from '../../../mixins';

import { StyledTableDataCell, StyledTableDataCheckbox } from './styled';

export interface DataCellProps extends TableHTMLAttributes<HTMLTableCellElement>, DisplayProps {
  align?: 'left' | 'center' | 'right';
  isCheckbox?: boolean;
  verticalAlign?: 'top' | 'middle';
  width?: number | string;
  withBorder?: boolean;
  withPadding?: boolean;
}

export const DataCell: React.FC<DataCellProps> = memo(
  ({
    align,
    display,
    children,
    isCheckbox,
    verticalAlign,
    width,
    withBorder = true,
    withPadding = true,
  }: DataCellProps) => {
    return isCheckbox ? (
      <StyledTableDataCheckbox align={align} display={display} width={width} withBorder={withBorder}>
        {children}
      </StyledTableDataCheckbox>
    ) : (
      <StyledTableDataCell
        align={align}
        display={display}
        verticalAlign={verticalAlign}
        width={width}
        withBorder={withBorder}
        withPadding={withPadding}
      >
        {children}
      </StyledTableDataCell>
    );
  },
);
