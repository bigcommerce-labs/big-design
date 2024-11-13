import {
  ArrowDropDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@bigcommerce/big-design-icons';
import React, { memo, useCallback, useEffect, useState } from 'react';

import { MarginProps } from '../../helpers';
import { Dropdown, DropdownItem } from '../Dropdown';
import { Flex, FlexItem } from '../Flex';

import { StyledButton } from './styled';

export interface PaginationLocalization {
  previousPage: string;
  nextPage: string;
}

const defaultLocalization: PaginationLocalization = {
  previousPage: 'Previous page',
  nextPage: 'Next page',
};

export interface PaginationProps extends MarginProps {
  currentPage: number;
  itemsPerPage: number;
  itemsPerPageOptions: number[];
  totalItems: number;
  onPageChange(page: number): void;
  onItemsPerPageChange(range: number): void;
  label?: string;
  localization?: PaginationLocalization;
  getRangeLabel?(start: number, end: number, totalItems: number): string;
}

const defaultGetRangeLabel = (start: number, end: number, totalItems: number): string => {
  if (start === end) {
    return `${start} of ${totalItems}`;
  }

  return `${start} - ${end} of ${totalItems}`;
};

export const Pagination: React.FC<PaginationProps> = memo(
  ({
    itemsPerPage,
    currentPage,
    totalItems,
    itemsPerPageOptions = [],
    onPageChange,
    onItemsPerPageChange,
    label = 'pagination',
    localization = defaultLocalization,
    getRangeLabel = defaultGetRangeLabel,
  }) => {
    const [maxPages, setMaxPages] = useState(Math.max(1, Math.ceil(totalItems / itemsPerPage)));
    const [itemRange, setItemRange] = useState({ start: 0, end: 0 });

    const handlePageOutOfBounds = useCallback(() => {
      if (currentPage < 1 || isNaN(currentPage) || currentPage === undefined) {
        onPageChange(1);
      } else if (currentPage > maxPages) {
        onPageChange(maxPages);
      }
    }, [currentPage, maxPages, onPageChange]);

    const handlePerPageOutOfBounds = useCallback(() => {
      if (itemsPerPage < 1 || isNaN(itemsPerPage) || itemsPerPage === undefined) {
        onItemsPerPageChange(itemsPerPageOptions[0]);
      }
    }, [itemsPerPage, onItemsPerPageChange, itemsPerPageOptions]);

    const calculateRange = useCallback(() => {
      let firstItemInRange = itemsPerPage * (currentPage - 1) + 1;
      let lastItemInRange = itemsPerPage * currentPage;

      firstItemInRange = Math.min(firstItemInRange, totalItems);
      lastItemInRange = Math.min(lastItemInRange, totalItems);

      if (lastItemInRange === 0 || isNaN(lastItemInRange) || isNaN(firstItemInRange)) {
        firstItemInRange = 0;
        lastItemInRange = 0;
      }

      setItemRange({ start: firstItemInRange, end: lastItemInRange });
    }, [itemsPerPage, currentPage, totalItems]);

    useEffect(() => {
      handlePageOutOfBounds();

      handlePerPageOutOfBounds();

      calculateRange();

      setMaxPages(Math.max(1, Math.ceil(totalItems / itemsPerPage)));
    }, [
      calculateRange,
      currentPage,
      handlePageOutOfBounds,
      handlePerPageOutOfBounds,
      itemsPerPage,
      totalItems,
    ]);

    const handlePageIncrease = () => {
      onPageChange(currentPage + 1);
    };

    const handlePageDecrease = () => {
      onPageChange(currentPage - 1);
    };

    const handleRangeChange = (item: DropdownItem) => {
      onItemsPerPageChange(Number(item.hash));
    };

    return (
      <Flex aria-label={label} flexDirection="row" role="navigation">
        <FlexItem>
          <Dropdown
            items={itemsPerPageOptions.map((range) => ({
              content: `${range}`,
              hash: `${range}`,
              onItemClick: handleRangeChange,
            }))}
            positionFixed={true}
            selectedItem={{
              content: `${itemsPerPage}`,
              hash: `${itemsPerPage}`,
              onItemClick: handleRangeChange,
            }}
            toggle={
              <StyledButton
                iconRight={<ArrowDropDownIcon size="xxLarge" />}
                type="button"
                variant="subtle"
              >
                {getRangeLabel(itemRange.start, itemRange.end, totalItems)}
              </StyledButton>
            }
          />
        </FlexItem>
        <FlexItem>
          <StyledButton
            disabled={currentPage <= 1}
            iconOnly={<ChevronLeftIcon title={localization.previousPage} />}
            onClick={handlePageDecrease}
            type="button"
            variant="subtle"
          />

          <StyledButton
            disabled={currentPage >= maxPages}
            iconOnly={<ChevronRightIcon title={localization.nextPage} />}
            onClick={handlePageIncrease}
            type="button"
            variant="subtle"
          />
        </FlexItem>
      </Flex>
    );
  },
);

Pagination.displayName = 'Pagination';
