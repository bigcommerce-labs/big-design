import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift';
import React, {
  cloneElement,
  createRef,
  isValidElement,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { usePopper } from 'react-popper';

import { useUniqueId } from '../../hooks';
import { typedMemo, warning } from '../../utils';
import { Box } from '../Box';
import { FormControlLabel } from '../Form';
import { Input } from '../Input';
import { List } from '../List';
import { SelectAction, SelectOption, SelectOptionGroup } from '../Select';
import { DropdownButton, StyledDropdownIcon, StyledInputContainer } from '../Select/styled';

import { MultiSelectProps } from './types';

export const MultiSelect = typedMemo(
  <T,>({
    action,
    autoComplete = 'off',
    autoWidth = false,
    className,
    disabled,
    filterable = true,
    id,
    inputRef,
    label,
    labelId,
    maxHeight,
    onClose,
    onOpen,
    onOptionsChange,
    options,
    placeholder,
    placement = 'bottom-start' as const,
    positionFixed = false,
    required,
    style,
    value,
    ...props
  }: MultiSelectProps<T>): ReturnType<React.FC<MultiSelectProps<T>>> => {
    const defaultRef: RefObject<HTMLInputElement> = createRef();
    const multiSelectUniqueId = useUniqueId('multi-select');

    const [inputValue, setInputValue] = useState('');

    const flattenOptions = useCallback((optionsToFlatten: MultiSelectProps<T>['options']) => {
      const isGroups = (
        groupOptions: Array<SelectOptionGroup<T> | SelectOption<T>>,
      ): groupOptions is Array<SelectOptionGroup<T>> =>
        groupOptions.every((option) => 'options' in option && !('value' in option));

      return isGroups(optionsToFlatten)
        ? optionsToFlatten
            .map((group) => group.options)
            .reduce((acum, curr) => acum.concat(curr), [])
        : optionsToFlatten;
    }, []);

    // We need to pass Downshift only options without groups for accessibility tracking
    const flattenedOptions = useMemo(
      () => (action ? [...flattenOptions(options), action] : flattenOptions(options)),
      [action, flattenOptions, options],
    );

    // Find the selected options
    const selectedOptions = useMemo(() => {
      return (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        flattenedOptions.filter(
          (option): option is SelectOption<T> =>
            'value' in option && !!value && value.find((val) => val === option.value) !== undefined,
        ) || []
      );
    }, [flattenedOptions, value]);

    // Initialize with flattened options
    const [filteredOptions, setFilteredOptions] = useState(flattenedOptions);

    // Need to set items if options prop changes
    useEffect(() => setFilteredOptions(flattenedOptions), [flattenedOptions]);

    useEffect(() => {
      setInputValue('');
    }, [selectedOptions]);

    const getFirstMatchingOptionIndex = (
      localFilteredOptions: Array<SelectOption<T> | SelectAction>,
    ) => {
      return localFilteredOptions.findIndex((option) => !option.disabled);
    };

    const filterOptions = (inputVal = '') => {
      return flattenedOptions.filter(
        (option) =>
          option === action ||
          option.content.toLowerCase().startsWith(inputVal.trim().toLowerCase()),
      );
    };

    const handleOnIsOpenChange = ({
      isOpen: localIsOpen,
    }: Partial<UseComboboxState<SelectOption<T> | SelectAction | null>>) => {
      if (filterable && !localIsOpen) {
        // Reset the items if filtered
        setFilteredOptions(flattenedOptions);
      }

      if (localIsOpen && typeof onOpen === 'function') {
        onOpen();
      }

      if (!localIsOpen && typeof onClose === 'function') {
        onClose();
      }
    };

    const handleOnSelectedItemChange = (
      changes: Partial<UseComboboxState<SelectOption<T> | SelectAction | null>>,
    ) => {
      if (action && changes.selectedItem === action) {
        action.onActionClick(inputValue);
      }
    };

    const removeItem = useCallback(
      (item: SelectOption<T>) => {
        if (!item.value) {
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        const newOptions = selectedOptions.filter((i) => i.value !== item.value) || [];

        onOptionsChange(
          newOptions.map((option) => option.value),
          newOptions,
        );

        setFilteredOptions(flattenedOptions);
      },
      [flattenedOptions, onOptionsChange, selectedOptions],
    );

    const addSelectedItem = useCallback(
      (item: SelectOption<T>) => {
        if (!item.value) {
          return;
        }

        const newOptions = [...selectedOptions, item];

        onOptionsChange(
          newOptions.map((option) => option.value),
          newOptions,
        );

        setFilteredOptions(flattenedOptions);
      },
      [flattenedOptions, onOptionsChange, selectedOptions],
    );

    const handleStateReducer = (
      state: UseComboboxState<SelectOption<T> | SelectAction | null>,
      actionAndChanges: UseComboboxStateChangeOptions<SelectOption<T> | SelectAction | null>,
    ) => {
      switch (actionAndChanges.type) {
        case useCombobox.stateChangeTypes.InputBlur:
          return { ...actionAndChanges.changes, inputValue: '' };

        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick: {
          if (!actionAndChanges.changes.selectedItem) {
            return actionAndChanges.changes;
          }

          const isSelectAction = (item: SelectAction | SelectOption<T>): item is SelectAction =>
            item === action;

          // Prevent action from changing the input value
          if (isSelectAction(actionAndChanges.changes.selectedItem)) {
            return { ...actionAndChanges.changes, inputValue: state.inputValue };
          }

          const isChecked = Boolean(
            selectedOptions.find(
              (i) =>
                actionAndChanges.changes.selectedItem &&
                'value' in actionAndChanges.changes.selectedItem &&
                i.value === actionAndChanges.changes.selectedItem.value,
            ),
          );

          if (isChecked) {
            removeItem(actionAndChanges.changes.selectedItem);
          } else {
            addSelectedItem(actionAndChanges.changes.selectedItem);
          }

          return {
            ...actionAndChanges.changes,
            highlightedIndex: state.highlightedIndex,
            inputValue: '',
            isOpen: true,
          };
        }

        default:
          return actionAndChanges.changes;
      }
    };

    const {
      getComboboxProps,
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      getToggleButtonProps,
      highlightedIndex,
      isOpen,
      openMenu,
      setHighlightedIndex,
    } = useCombobox({
      id: multiSelectUniqueId,
      initialHighlightedIndex: 0,
      inputId: id,
      inputValue,
      itemToString: (option) => (option ? option.content : ''),
      items: filteredOptions,
      labelId,
      // @ts-expect-error need other properties from hook in method
      onInputValueChange: handleSetInputValue, // eslint-disable-line @typescript-eslint/no-use-before-define
      onIsOpenChange: handleOnIsOpenChange,
      onSelectedItemChange: handleOnSelectedItemChange,
      selectedItem: null,
      stateReducer: handleStateReducer,
    });

    const handleSetInputValue = ({
      inputValue: localInputValue,
      isOpen: localIsOpen,
    }: Partial<UseComboboxState<SelectOption<T> | SelectAction | null>>) => {
      if (filterable && localIsOpen === true) {
        const newFilteredOptions = filterOptions(localInputValue);
        const firstMatchingOptionIndex = getFirstMatchingOptionIndex(newFilteredOptions);

        setFilteredOptions(newFilteredOptions);

        // Auto highlight first matching option
        setHighlightedIndex(firstMatchingOptionIndex);
      }

      setInputValue(localInputValue || '');
    };

    // Popper
    const referenceRef = useRef(null);
    const popperRef = useRef(null);

    const { styles, attributes, update } = usePopper(referenceRef.current, popperRef.current, {
      modifiers: [
        {
          name: 'eventListeners',
          options: {
            scroll: isOpen,
            resize: isOpen,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 4],
          },
        },
      ],
      strategy: positionFixed ? 'fixed' : 'absolute',
      placement,
    });

    // Reset the value when Multiselect is closed
    useEffect(() => {
      if (!isOpen) {
        setInputValue('');
      }
    }, [isOpen]);

    const setCallbackRef = useCallback(
      (ref: HTMLInputElement) => {
        if (typeof inputRef === 'function') {
          inputRef(ref);
        }
      },
      [inputRef],
    );

    const getInputRef = useCallback(() => {
      if (inputRef && typeof inputRef === 'object') {
        return inputRef;
      } else if (typeof inputRef === 'function') {
        return setCallbackRef;
      }

      return defaultRef;
    }, [defaultRef, inputRef, setCallbackRef]);

    const renderLabel = useMemo(() => {
      if (!label) {
        return null;
      }

      if (typeof label === 'string') {
        return (
          <FormControlLabel {...getLabelProps()} renderOptional={!required}>
            {label}
          </FormControlLabel>
        );
      }

      if (isValidElement(label) && label.type === FormControlLabel) {
        return cloneElement(
          label,
          // disabling because type is from downshift
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          getLabelProps(),
        );
      }

      warning('label must be either a string or a FormControlLabel component.');
    }, [getLabelProps, label, required]);

    const renderToggle = useMemo(() => {
      return (
        <DropdownButton
          {...getToggleButtonProps({
            disabled,
            type: 'button',
          })}
          aria-label="toggle menu"
          variant="subtle"
        >
          <StyledDropdownIcon />
        </DropdownButton>
      );
    }, [disabled, getToggleButtonProps]);

    const renderInput = useMemo(() => {
      return (
        <StyledInputContainer ref={referenceRef}>
          <Input
            {...getInputProps({
              ...props,
              autoComplete,
              disabled,
              onClick: () => {
                if (!isOpen) {
                  openMenu();
                }
              },
              onFocus: (event) => {
                if (typeof props.onFocus === 'function') {
                  props.onFocus(event);
                }
              },
              onKeyDown: (event) => {
                switch (event.key) {
                  case 'Backspace':
                    if (!inputValue) {
                      removeItem(selectedOptions[selectedOptions.length - 1]);
                    }

                    break;

                  case 'Enter':
                    event.preventDefault();

                    if (isOpen === false) {
                      openMenu();
                      // https://github.com/downshift-js/downshift/issues/734
                      // @ts-expect-error downshift issue
                      event.nativeEvent.preventDownshiftDefault = true;
                    }

                    break;

                  case 'Escape':
                    // Reset select
                    if (isOpen === false) {
                      onOptionsChange([], []);
                    }

                    break;
                }
              },
              placeholder,
              ref: getInputRef(),
            })}
            chips={selectedOptions.map((option: SelectOption<T>) => ({
              label: option.content,
              onDelete: disabled ? undefined : () => removeItem(option),
            }))}
            iconRight={renderToggle}
            readOnly={!filterable}
            required={required && selectedOptions.length === 0}
          />
        </StyledInputContainer>
      );
    }, [
      autoComplete,
      disabled,
      filterable,
      getInputProps,
      getInputRef,
      inputValue,
      isOpen,
      onOptionsChange,
      openMenu,
      placeholder,
      props,
      removeItem,
      renderToggle,
      required,
      selectedOptions,
    ]);

    return (
      <div>
        {renderLabel}
        <div {...getComboboxProps()}>{renderInput}</div>
        <Box ref={popperRef} style={styles.popper} {...attributes.poppper} zIndex="popover">
          <List
            action={action}
            addItem={addSelectedItem}
            autoWidth={autoWidth}
            filteredItems={filteredOptions}
            getItemProps={getItemProps}
            getMenuProps={getMenuProps}
            highlightedIndex={highlightedIndex}
            isOpen={isOpen}
            items={options}
            maxHeight={maxHeight}
            removeItem={removeItem}
            selectedItems={selectedOptions}
            update={update}
          />
        </Box>
      </div>
    );
  },
);
