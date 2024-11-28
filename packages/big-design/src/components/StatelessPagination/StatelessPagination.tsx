import {
  ArrowDropDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@bigcommerce/big-design-icons';
import React, { memo, useMemo } from 'react';

import { MarginProps } from '../../helpers';
import { Dropdown, DropdownItem } from '../Dropdown';
import { Flex, FlexItem } from '../Flex';

import { StyledButton } from './styled';

export interface StatelessPaginationLocalization {
  previousPage?: string;
  nextPage?: string;
  rangeLabel?: string;
  label?: string;
}

const getDefaultLocalization = (
  itemsPerPage: number,
): Required<StatelessPaginationLocalization> => ({
  previousPage: 'Previous page',
  nextPage: 'Next page',
  label: 'pagination',
  rangeLabel: `Show ${itemsPerPage} items`,
});

export interface StatelessPaginationProps extends MarginProps {
  itemsPerPage: number;
  itemsPerPageOptions: number[];
  onItemsPerPageChange(range: number): void;
  disableNext?: boolean;
  onNext(): void;
  disablePrevious?: boolean;
  onPrevious(): void;
  localization?: StatelessPaginationLocalization;
}

export const StatelessPagination: React.FC<StatelessPaginationProps> = memo(
  ({
    itemsPerPage,
    itemsPerPageOptions,
    disableNext = false,
    onNext,
    disablePrevious = false,
    onPrevious,
    onItemsPerPageChange,
    localization: customLocalization,
  }) => {
    const localization: Required<StatelessPaginationLocalization> = useMemo(
      () => ({ ...getDefaultLocalization(itemsPerPage), ...customLocalization }),
      [customLocalization, itemsPerPage],
    );

    const handleRangeChange = (item: DropdownItem) => {
      onItemsPerPageChange(Number(item.hash));
    };

    return (
      <Flex aria-label={localization.label} flexDirection="row" role="navigation">
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
                {localization.rangeLabel}
              </StyledButton>
            }
          />
        </FlexItem>
        <FlexItem>
          <StyledButton
            disabled={disablePrevious}
            iconOnly={<ChevronLeftIcon title={localization.previousPage} />}
            onClick={() => onPrevious()}
            type="button"
            variant="subtle"
          />

          <StyledButton
            disabled={disableNext}
            iconOnly={<ChevronRightIcon title={localization.nextPage} />}
            onClick={() => onNext()}
            type="button"
            variant="subtle"
          />
        </FlexItem>
      </Flex>
    );
  },
);

StatelessPagination.displayName = 'StatelessPagination';
