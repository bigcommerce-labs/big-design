import { AddCircleOutlineIcon, RemoveCircleOutlineIcon } from '@bigcommerce/big-design-icons';
import React, {
  cloneElement,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  Ref,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useUniqueId } from '../../hooks';
import { typedMemo, warning } from '../../utils';
import { FormControlDescription, FormControlError, FormControlLabel } from '../Form';

import { StyledCounterButton, StyledCounterInput, StyledCounterWrapper } from './styled';

export interface CounterProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactChild;
  labelId?: string;
  description?: React.ReactChild;
  error?: React.ReactNode | React.ReactNode[];
  value: number;
  step?: number;
  onCountChange(count: number): void;
}

interface PrivateProps {
  forwardedRef: Ref<HTMLInputElement>;
}

export const StylableCounter: React.FC<CounterProps & PrivateProps> = typedMemo(
  ({
    min = 0,
    max = 100,
    step = 1,
    forwardedRef,
    label,
    labelId,
    description,
    error,
    disabled,
    value,
    onCountChange,
    ...props
  }) => {
    const [focus, setFocus] = useState(false);
    const uniqueCounterId = useUniqueId('counter');
    const id = props.id ? props.id : uniqueCounterId;

    useEffect(() => {
      if (!Number.isInteger(value)) {
        onCountChange(Math.round(value));
      }
    }, [onCountChange, value]);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      const { onFocus } = props;

      setFocus(true);

      return onFocus && onFocus(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const { onBlur } = props;

      setFocus(false);

      return onBlur && onBlur(event);
    };

    const handleIncrease = (event: React.KeyboardEvent | React.MouseEvent) => {
      event.preventDefault();

      if (value + step > max) {
        return;
      }
      // Checks that the provided value is a multiple of the step
      if (value % step === 0) {
        onCountChange(value + step);
      }
      // If not, returns nearest higher value that is a multiple of the step
      else {
        onCountChange(value + (step - (value % step)));
      }
    };

    const handleDecrease = (event: React.KeyboardEvent | React.MouseEvent) => {
      event.preventDefault();

      if (value - step < min) {
        return;
      }
      // Checks that the provided value is a multiple of the step
      if (value % step === 0) {
        onCountChange(value - step);
      }
      // If not, returns nearest lower value that is a multiple of the step
      else {
        onCountChange(value - (value % step));
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.currentTarget.value);
      if (isNaN(newValue)) {
        return;
      }
      if (!Number.isInteger(newValue)) {
        onCountChange(Math.round(newValue));
      }
      if (newValue >= min && newValue <= max) {
        onCountChange(newValue);
      }

      return;
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          handleIncrease(event);
          break;
        case 'ArrowDown':
          handleDecrease(event);
          break;
        case 'Enter':
          event.preventDefault();
          break;
        case 'Escape':
          onCountChange(0);
          break;
        default:
          break;
      }
    };

    const renderedLabel = useMemo(() => {
      if (!label) {
        return null;
      }

      if (typeof label === 'string') {
        return (
          <FormControlLabel id={labelId} htmlFor={id} renderOptional={!props.required}>
            {label}
          </FormControlLabel>
        );
      }

      if (isValidElement(label) && label.type === FormControlLabel) {
        return cloneElement(label as React.ReactElement<React.LabelHTMLAttributes<HTMLLabelElement>>, {
          id: labelId,
          htmlFor: id,
        });
      }

      warning('label must be either a string or a FormControlLabel component.');
    }, [id, label, labelId, props.required]);

    const renderedDescription = useMemo(() => {
      if (!description) {
        return null;
      }

      if (typeof description === 'string') {
        return <FormControlDescription>{description}</FormControlDescription>;
      }

      if (isValidElement(description) && description.type === FormControlDescription) {
        return description;
      }

      warning('description must be either a string or a FormControlDescription component.');
    }, [description]);

    const errors = useMemo(() => {
      const validateError = (err: CounterProps['error']) => {
        if (!err) {
          return null;
        }

        if (typeof err === 'string') {
          return err;
        }

        if (isValidElement(err) && err.type === FormControlError) {
          return err;
        }

        warning('error must be either a string or a FormControlError component.');
      };

      if (Array.isArray(error)) {
        error.forEach(validateError);

        return error;
      }

      return validateError(error);
    }, [error]);

    return (
      <div>
        {renderedLabel}
        {renderedDescription}
        <StyledCounterWrapper disabled={disabled} error={errors} focus={focus}>
          <StyledCounterButton
            onClick={handleDecrease}
            disabled={disabled || value <= min}
            iconOnly={<RemoveCircleOutlineIcon title="Decrease count" />}
          />
          <StyledCounterInput
            {...props}
            ref={forwardedRef}
            onKeyDown={handleKeyPress}
            value={value}
            disabled={disabled}
            error={errors}
            id={id}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <StyledCounterButton
            onClick={handleIncrease}
            disabled={disabled || value >= max}
            iconOnly={<AddCircleOutlineIcon title="Increase count" />}
          />
        </StyledCounterWrapper>
      </div>
    );
  },
);

export const Counter = typedMemo(
  forwardRef<HTMLInputElement, CounterProps>(({ className, style, ...props }, ref) => (
    <StylableCounter {...props} forwardedRef={ref} />
  )),
);
