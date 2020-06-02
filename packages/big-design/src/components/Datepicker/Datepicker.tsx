import { ThemeInterface } from '@bigcommerce/big-design-theme';
import React, { forwardRef, memo, Ref } from 'react';
import ReactDatePicker from 'react-datepicker';

import { Input } from '../Input';

import Header from './Header';
import { StyledDatepicker } from './styled';

interface Props {
  dateFormat?: string;
  forwardedRef?: Ref<ReactDatePicker>;
  label?: string;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  required?: boolean;
  selected?: Date | null;
  filterDate?(date: Date): boolean;
  onChange(date: Date): void;
}

export interface ExtraProps {
  theme?: ThemeInterface;
}

export type DatepickerProps = Props;

const RawDatePicker: React.FC<DatepickerProps & ExtraProps> = ({
  dateFormat,
  filterDate,
  forwardedRef,
  label,
  locale,
  maxDate,
  minDate,
  required,
  selected,
  theme,
  onChange,
}) => (
  <StyledDatepicker theme={theme}>
    <ReactDatePicker
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <Header
          date={date}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
          prevMonthButtonDisabled={prevMonthButtonDisabled}
          nextMonthButtonDisabled={nextMonthButtonDisabled}
        />
      )}
      customInput={<Input label={label} />}
      className="calendar-input"
      calendarClassName="bc-datepicker"
      disabledKeyboardNavigation
      dateFormat={dateFormat || 'EE, dd MMM, yyyy'}
      filterDate={filterDate}
      locale={locale}
      maxDate={maxDate}
      minDate={minDate}
      selected={selected}
      placeholderText="DD /MM /YYYY"
      required={required}
      onChange={onChange}
      ref={forwardedRef}
    />
  </StyledDatepicker>
);

export const Datepicker = memo(
  forwardRef<ReactDatePicker, DatepickerProps>((props, ref) => <RawDatePicker {...props} forwardedRef={ref} />),
);
