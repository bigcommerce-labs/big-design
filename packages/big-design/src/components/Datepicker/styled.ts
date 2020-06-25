import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';

export const StyledDatepicker = styled.div`
  & .react-datepicker-wrapper {
    display: inline-block;
    width: 100%;
  }

  & .react-datepicker__input-container {
    display: inline-block;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    position: relative;
    width: 100%;
  }

  & .react-datepicker__month-container {
    margin: ${({ theme }) => theme.spacing.medium};
  }

  & .react-datepicker__month {
    margin-top: ${({ theme }) => theme.spacing.xSmall};
    text-align: center;
  }

  & .react-datepicker__header {
    border-top-left-radius: ${({ theme }) => theme.spacing.xxSmall};
    border-top-right-radius: ${({ theme }) => theme.spacing.xxSmall};
    position: relative;
    text-align: center;
  }

  & .react-datepicker__current-month {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  }

  & .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }

  & .react-datepicker__day,
  .react-datepicker__month-text {
    cursor: pointer;
  }

  & .react-datepicker__day-name,
  .react-datepicker__day {
    color: ${({ theme }) => theme.colors.secondary60};
    display: inline-block;
    line-height: ${({ theme }) => theme.lineHeight.xLarge};
    margin: ${({ theme }) => theme.spacing.xxSmall};
    text-align: center;
    width: ${({ theme }) => theme.lineHeight.xLarge};
  }

  & .react-datepicker__day:hover {
    background: ${({ theme }) => theme.colors.primary10};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    color: ${({ theme }) => theme.colors.secondary70};
    outline: none;
  }

  & .react-datepicker__day:focus {
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    color: ${({ theme }) => theme.colors.secondary70};
    outline: none;
  }

  & .react-datepicker__day--keyboard-selected {
    background: ${({ theme }) => theme.colors.primary10};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    color: ${({ theme }) => theme.colors.secondary70};
    outline: none;
  }

  & .react-datepicker__day:active {
    background: ${({ theme }) => theme.colors.primary20};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    color: ${({ theme }) => theme.colors.secondary70};
    outline: none;
  }

  & .react-datepicker__day--today::after {
    background: ${({ theme }) => theme.colors.primary};
    bottom: ${({ theme }) => theme.helpers.remCalc(1)};
    content: '';
    display: block;
    height: ${({ theme }) => theme.helpers.remCalc(2)};
    margin-left: ${({ theme }) => theme.spacing.xxSmall};
    position: relative;
    width: ${({ theme }) => theme.spacing.xLarge};
  }

  & .react-datepicker__day--selected {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    color: ${({ theme }) => theme.colors.white};
  }

  & .react-datepicker__day--selected:hover.react-datepicker__day--today::after {
    bottom: ${({ theme }) => theme.helpers.remCalc(1)};
  }

  & .react-datepicker__day--selected.react-datepicker__day--today::after {
    bottom: -${({ theme }) => theme.spacing.xxSmall};
  }

  & .react-datepicker__day--disabled {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & .react-datepicker__day--outside-month {
    opacity: 0;
    visibility: hidden;
  }

  & .bc-datepicker {
    ${({ theme }) => theme.shadow.floating};

    background: ${({ theme }) => theme.colors.white};
    display: flex;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    position: relative;
  }

  & .react-datepicker-popper {
    z-index: ${({ theme }) => theme.zIndex.popover};
  }
`;

StyledDatepicker.defaultProps = { theme: defaultTheme };
