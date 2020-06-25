import { ChevronLeftIcon, ChevronRightIcon } from '@bigcommerce/big-design-icons';
import React from 'react';

import { Flex } from '..';
import { Button } from '../Button';
import { Text } from '../Typography';

interface HeaderProps {
  date?: Date;
  nextMonthButtonDisabled?: boolean;
  months: string[];
  prevMonthButtonDisabled?: boolean;
  decreaseMonth?(): void;
  increaseMonth?(): void;
}

const Header: React.FC<HeaderProps> = ({
  date = new Date(),
  decreaseMonth,
  increaseMonth,
  months,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <Flex alignItems="center" justifyContent="space-between">
    <Button
      title="View previous month."
      type="button"
      iconOnly={<ChevronLeftIcon title="View previous month." />}
      onClick={decreaseMonth}
      disabled={prevMonthButtonDisabled}
      variant="subtle"
    />

    <Text as="span" marginBottom="none" bold>{`${months[date.getMonth()]} ${date.getFullYear()}`}</Text>

    <Button
      title="View next month."
      type="button"
      iconOnly={<ChevronRightIcon title="View next month." />}
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
      variant="subtle"
    />
  </Flex>
);

export default Header;
