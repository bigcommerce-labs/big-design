import { ReactNode } from 'react';

import { MarginProps } from '../../mixins';
import { FormProps } from '../Form';
import { InputProps } from '../Input';
import { PaginationProps } from '../Pagination';
import { PillTabsProps } from '../PillTabs';

import { TableColumnDisplayProps } from './mixins';

export interface TableSelectable<T> {
  selectedItems: T[];
  onSelectionChange(selectedItems: T[]): void;
}

export type TableSortDirection = 'ASC' | 'DESC';

export interface TableSortable<T> {
  direction: TableSortDirection;
  columnHash?: string;
  onSort(columnHash: string, direction: TableSortDirection, column: TableColumn<T>): void;
}

export interface TableItem {
  id?: string | number;
  [key: string]: any;
}

export interface TableColumn<T> extends TableColumnDisplayProps {
  align?: 'left' | 'center' | 'right';
  hash: string;
  header: string;
  hideHeader?: boolean;
  isSortable?: boolean;
  render: React.ComponentType<T> | ((props: T & { children?: ReactNode }, context?: any) => string | number);
  verticalAlign?: 'top' | 'middle';
  width?: number | string;
  withPadding?: boolean;
}

export type TablePaginationProps = Omit<PaginationProps, keyof MarginProps>;

export interface TableSearch {
  value: InputProps['value'];
  onChange: InputProps['onChange'];
  onSubmit: FormProps['onSubmit'];
}

export interface TableProps<T> extends React.TableHTMLAttributes<HTMLTableElement> {
  actions?: React.ReactNode;
  columns: Array<TableColumn<T>>;
  emptyComponent?: React.ReactElement;
  headerless?: boolean;
  itemName?: string;
  items: T[];
  keyField?: string;
  filters?: PillTabsProps;
  onRowDrop?(from: number, to: number): void;
  pagination?: TablePaginationProps;
  search?: TableSearch;
  selectable?: TableSelectable<T>;
  sortable?: TableSortable<T>;
  stickyHeader?: boolean;
}
