import React, { RefObject } from 'react';
import { Manager, Reference } from 'react-popper';
import scrollIntoView from 'scroll-into-view-if-needed';

import { uniqueId } from '../../utils';
import { Box } from '../Box';
import { Flex } from '../Flex/Flex';
import { FlexItem } from '../Flex/Item';
import { Label } from '../Form/Label';
import { Input } from '../Input';
import { ListCheckboxItem } from '../List/Item/CheckboxItem';
import { ListItem } from '../List/Item/Item';
import { List } from '../List/List';

import { StyledDropdownIcon, StyledStatusMessage } from './styled';
import { Action, Option, SelectProps } from './types';

interface SelectState {
  filterChildren: boolean;
  highlightedItem: HTMLLIElement | null;
  inputText: string;
  isOpen: boolean;
  selectedItem: HTMLLIElement | null;
}

export class Select extends React.PureComponent<SelectProps, SelectState> {
  readonly state: SelectState = {
    filterChildren: false,
    highlightedItem: null,
    inputText: '',
    isOpen: false,
    selectedItem: null,
  };

  private inputRef: RefObject<HTMLInputElement> = React.createRef();
  private listRef: HTMLUListElement | null = null;

  private readonly uniqueInputId = uniqueId('input_');
  private readonly uniqueLabelId = uniqueId('label_');
  private readonly uniqueSelectId = uniqueId('select_');

  private listItemsRefs: Array<{ ref: RefObject<HTMLLIElement>; option?: Option }> = [];

  componentDidMount() {
    this.updatedSelectedItem();
  }

  componentDidUpdate(prevProps: SelectProps) {
    const { options, value } = this.props;

    // Reset input if value was reset to empty string
    if (prevProps.value && !value) {
      this.updatedSelectedItem();

      return;
    }

    // Match input text to select value
    if (prevProps.value !== value) {
      this.updatedSelectedItem();

      return;
    }

    if (prevProps.options !== options) {
      this.updatedSelectedItem();

      return;
    }
  }

  render() {
    const {
      children,
      className,
      label,
      maxHeight,
      multi,
      onChange,
      placeholder,
      placement,
      style,
      value,
      ...rest
    } = this.props;

    const { isOpen } = this.state;

    const labelId = this.getLabelId();
    const selectId = this.getSelectId();

    this.listItemsRefs = [];

    const ariaLabelledBy = label ? { 'aria-labelledby': labelId } : {};
    const ariaMultiSelect = multi ? { 'aria-multiselectable': true } : {};
    const ariaOwns = isOpen ? { 'aria-owns': selectId } : {};

    return (
      <Manager>
        <div role="combobox" aria-expanded={isOpen} aria-haspopup="listbox" {...ariaOwns}>
          {this.renderLabel()}
          {this.renderInput()}
          <List
            {...rest}
            handleListRef={this.handleListRef}
            id={selectId}
            isOpen={isOpen}
            maxHeight={maxHeight}
            placement={placement}
            role="listbox"
            {...ariaLabelledBy}
            {...ariaMultiSelect}
          >
            {this.renderOptions()}
            {this.renderActions()}
          </List>
        </div>
        <StyledStatusMessage
          id={`a11y-status-message-${selectId}`}
          role="status"
          aria-live="polite"
          aria-relevant="additions text"
        />
      </Manager>
    );
  }

  private renderLabel() {
    const { label, required } = this.props;

    const inputId = this.getInputId();
    const labelId = this.getLabelId();

    return typeof label === 'string' ? (
      <Label htmlFor={inputId} id={labelId} renderOptional={!required}>
        {label}
      </Label>
    ) : null;
  }

  private renderInput() {
    const { placeholder, error, required, disabled, onChange, options, value } = this.props;
    const { highlightedItem, inputText, isOpen } = this.state;
    const ariaActiveDescendant = highlightedItem ? { 'aria-activedescendant': highlightedItem.id } : {};
    const ariaControls = isOpen ? { 'aria-controls': this.getSelectId() } : {};

    const chips = this.renderChips();

    const onChipDelete = (chip: Option) => () => {
      const filteredValues = Array.isArray(value)
        ? value.filter(val => {
            const foundOption = options.find(option => option.value === val);

            return foundOption && foundOption.value !== chip.value;
          })
        : [];

      onChange(filteredValues);
      this.focusInput();
    };

    return (
      <Reference>
        {({ ref }) => (
          <span ref={ref}>
            <Input
              aria-autocomplete="list"
              autoComplete="off"
              chips={chips}
              disabled={disabled}
              error={error}
              iconRight={this.renderDropdownIcon()}
              id={this.getInputId()}
              onChange={this.handleOnInputChange}
              onChipDelete={chips && onChipDelete}
              onFocus={this.handleOnInputFocus}
              onKeyDown={this.handleOnInputKeyDown}
              placeholder={placeholder}
              ref={this.inputRef}
              required={required}
              type={'text'}
              value={inputText}
              {...ariaActiveDescendant}
              {...ariaControls}
            ></Input>
          </span>
        )}
      </Reference>
    );
  }

  private renderChips() {
    const { options, multi, value: values } = this.props;

    if (!multi || !values) {
      return;
    }

    return Array.isArray(values) ? values.map(value => options.find(option => option.value === value)) : [];
  }

  private renderDropdownIcon() {
    return (
      <Flex>
        <StyledDropdownIcon
          aria-haspopup={true}
          aria-label="toggle menu" // Will need to translate this label in the future
          onClick={this.toggleList}
          role="button"
          style={{ outline: 'none' }}
          tabIndex={-1}
        />
      </Flex>
    );
  }

  private renderOptions() {
    const { options, multi, value: selectValue } = this.props;
    const { filterChildren, highlightedItem, inputText } = this.state;

    return (
      Array.isArray(options) &&
      options.map((option, index) => {
        if (!option.content || !option.value) {
          return null;
        }

        if (!filterChildren || option.content.toLowerCase().startsWith(inputText.toLocaleLowerCase())) {
          const id = this.getOptionId(option, index);
          const isHighlighted = Boolean(highlightedItem && id === highlightedItem.id);
          const ref = React.createRef<HTMLLIElement>();

          if (!option.disabled) {
            this.listItemsRefs.push({ ref, option });
          }

          const { content, icon, value, ...rest } = option;
          const ariaSelected = value === selectValue ? { 'aria-selected': true } : {};

          return multi ? (
            <ListCheckboxItem
              {...rest}
              aria-selected={this.isChecked(option)}
              checked={this.isChecked(option)}
              data-highlighted={isHighlighted}
              id={id}
              key={index}
              onChange={() => this.handleOnCheckboxOptionChange(option)}
              onFocus={this.handleOnOptionHighlighted}
              onMouseOver={this.handleOnOptionHighlighted}
              ref={ref}
              role="option"
            >
              {content}
            </ListCheckboxItem>
          ) : (
            <ListItem
              {...rest}
              {...ariaSelected}
              data-highlighted={isHighlighted}
              id={id}
              key={index}
              onClick={() => this.handleOnOptionClick(option)}
              onFocus={this.handleOnOptionHighlighted}
              onMouseOver={this.handleOnOptionHighlighted}
              ref={ref}
              role="option"
            >
              {content}
            </ListItem>
          );
        }
      })
    );
  }

  private renderActions() {
    const { action } = this.props;
    const { highlightedItem } = this.state;

    if (!action || !action.content) {
      return null;
    }

    const id = this.getActionId(action);
    const isHighlighted = Boolean(highlightedItem && id === highlightedItem.id);
    const ref = React.createRef<HTMLLIElement>();

    if (!action.disabled) {
      this.listItemsRefs.push({ ref });
    }

    const { content, icon, ...rest } = action;

    return (
      <Box borderTop="box" marginTop="xSmall" paddingTop="xSmall">
        <ListItem
          {...rest}
          data-highlighted={isHighlighted}
          id={id}
          onClick={() => this.handleOnActionClick(action)}
          onFocus={this.handleOnOptionHighlighted}
          onMouseOver={this.handleOnOptionHighlighted}
          ref={ref}
          role="option"
        >
          <Flex alignItems="center" flexDirection="row">
            {icon && <FlexItem paddingRight="xSmall">{this.renderIcon(action, isHighlighted)}</FlexItem>}
            {content}
          </Flex>
        </ListItem>
      </Box>
    );
  }

  private renderIcon(action: Action, isHighlighted: boolean) {
    return (
      React.isValidElement(action.icon) &&
      React.cloneElement(action.icon, {
        color: action.disabled
          ? 'secondary40'
          : isHighlighted
          ? action.actionType === 'destructive'
            ? 'danger50'
            : 'primary'
          : 'secondary60',
        size: 'large',
      })
    );
  }

  private toggleList = () => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    return this.state.isOpen ? this.closeList() : this.openList();
  };

  private openList() {
    const { selectedItem } = this.state;

    this.setState({ isOpen: true }, () => {
      document.addEventListener('mousedown', this.handleOnClickOutside, false);

      if (selectedItem) {
        this.updateHighlightedItem(selectedItem, true, true);
      }

      this.focusInput();
    });
  }

  private closeList() {
    const { selectedItem } = this.state;

    const text = selectedItem && selectedItem.textContent;

    this.setState({ filterChildren: false, highlightedItem: null, inputText: text ? text : '' }, () => {
      document.removeEventListener('mousedown', this.handleOnClickOutside, false);

      // Need to wait for the state to be updated before we close for VO
      this.setState({ isOpen: false });
    });
  }

  private focusInput() {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus({ preventScroll: true });
    }
  }

  private getInputId() {
    return this.uniqueInputId;
  }

  private getLabelId() {
    return this.uniqueLabelId;
  }

  private getSelectId() {
    const { id } = this.props;

    return id || this.uniqueSelectId;
  }

  private getOptionId(option: Option, index: number) {
    const { id } = option;

    return id || `${this.getSelectId()}-option-${index}`;
  }

  private getActionId(action: Action) {
    const { id } = action;

    return id || `${this.getSelectId()}-action`;
  }

  private isChecked(option: Option) {
    const { value: values } = this.props;

    return Array.isArray(values) && Boolean(values.find(value => value === option.value));
  }

  private updateHighlightedItem(element: HTMLLIElement | null, scroll?: boolean, instantScroll?: boolean) {
    if (!element) {
      return;
    }

    this.setState({ highlightedItem: element }, () => {
      return scroll && this.scrollIntoView(instantScroll);
    });
  }

  private updatedSelectedItem() {
    const { value, multi } = this.props;

    if (!value || multi) {
      return this.setState({ inputText: '', selectedItem: null });
    }

    const selectedOption = this.listItemsRefs.find(item => item.option && item.option.value === value);

    if (selectedOption && selectedOption.option) {
      this.setState({ inputText: selectedOption.option.content, selectedItem: selectedOption.ref.current });
    }
  }

  private handleListRef = (node: HTMLElement | null) => {
    this.listRef = node as HTMLUListElement;
  };

  private handleOnActionClick = (action: Action) => {
    if (action.onClick) {
      action.onClick(this.state.inputText);
    }

    this.toggleList();
  };

  private handleOnClickOutside = (event: MouseEvent) => {
    if (!this.listRef) {
      return;
    }

    if (
      (this.listRef && this.listRef.contains(event.target as Node)) ||
      (this.inputRef &&
        this.inputRef.current &&
        this.inputRef.current.parentElement &&
        this.inputRef.current.parentElement.parentElement &&
        this.inputRef.current.parentElement.parentElement.contains(event.target as Node))
    ) {
      return;
    }

    this.toggleList();
  };

  private handleOnCheckboxOptionChange = (option: Option) => {
    const { onChange, value: values } = this.props;
    const { highlightedItem } = this.state;

    if (option.disabled || !highlightedItem || !Array.isArray(values)) {
      return;
    }

    const checkbox = highlightedItem.querySelector('input[type="checkbox"]') as HTMLInputElement;

    if (checkbox.checked) {
      onChange(values.concat(option.value));
    } else {
      onChange(values.filter(value => value !== option.value));
    }

    this.focusInput();
  };

  private handleOnOptionClick = (option: Option) => {
    const { onChange } = this.props;

    if (option.disabled) {
      return;
    }

    onChange(option.value);
    this.toggleList();
  };

  private handleOnOptionHighlighted = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent> | React.FocusEvent<HTMLLIElement>,
  ) => {
    return this.updateHighlightedItem(event.currentTarget);
  };

  private handleOnInputFocus = () => {
    if (!this.state.isOpen) {
      this.toggleList();
    }
  };

  private handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.state.isOpen) {
      this.toggleList();
    }

    this.setState({ filterChildren: true, inputText: event.target.value }, () => {
      this.scrollIntoView(true);

      /**
       * VO CODE
       * Need to think about way to translate this text in the future. There are no tools to translate atm.
       * Might become an optional prop that can change the text.
       */

      if (!this.listRef) {
        return;
      }

      const length = this.listRef.children.length;
      const status = document.getElementById(`a11y-status-message-${this.getSelectId()}`);

      if (!status) {
        return;
      }

      status.innerHTML = '';
      const node = document.createElement('div');
      let text;

      switch (length) {
        case 0: {
          text = document.createTextNode('0 results are available.');
          break;
        }
        case 1: {
          text = document.createTextNode(
            '1 result is available, use up and down arrow keys to navigate. Press Enter key to select.',
          );
          break;
        }
        default: {
          text = document.createTextNode(
            `${length} results are available, use up and down arrow keys to navigate. Press Enter key to select.`,
          );
        }
      }

      node.appendChild(text);
      status.appendChild(node);
    });
  };

  /**
   * Accessibility Listbox Keyboard Support
   * Learn more: https://www.w3.org/TR/wai-aria-practices/#Listbox
   */

  private handleOnInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!this.listItemsRefs.length || !this.listRef) {
      return;
    }

    const highlightedItemIndex = this.listItemsRefs.findIndex(item => item.ref.current === this.state.highlightedItem);
    const nextItem = this.listItemsRefs[highlightedItemIndex + 1]
      ? this.listItemsRefs[highlightedItemIndex + 1].ref.current
      : this.listItemsRefs[0].ref.current;
    const prevItem = this.listItemsRefs[highlightedItemIndex - 1]
      ? this.listItemsRefs[highlightedItemIndex - 1].ref.current
      : this.listItemsRefs[this.listItemsRefs.length - 1].ref.current;

    if (!this.listRef) {
      return;
    }

    switch (event.key) {
      case 'Enter': {
        if (this.state.isOpen) {
          event.preventDefault();
          this.clickHighlightedItem();
        } else {
          this.toggleList();
        }
        break;
      }
      case 'Backspace': {
        if (this.state.inputText === '' && this.props.multi) {
          return Array.isArray(this.props.value)
            ? this.props.onChange(this.props.value.slice(0, this.props.value.length - 1))
            : this.props.onChange([]);
        }
        break;
      }
      case ' ': {
        if (!this.state.isOpen) {
          event.preventDefault();
          this.toggleList();
        }
        break;
      }
      case 'ArrowUp':
      case 'ArrowLeft': {
        event.preventDefault();
        this.updateHighlightedItem(prevItem, true);
        break;
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        event.preventDefault();
        this.updateHighlightedItem(nextItem, true);
        break;
      }
      case 'Home': {
        event.preventDefault();
        this.updateHighlightedItem(this.listItemsRefs[0].ref.current, true);
        break;
      }
      case 'End': {
        event.preventDefault();
        this.updateHighlightedItem(this.listItemsRefs[this.listItemsRefs.length - 1].ref.current, true);
        break;
      }
      case 'Tab':
      case 'Esc':
      case 'Escape': {
        this.closeList();
        break;
      }
    }
  };

  private scrollIntoView = (instantScroll = false) => {
    const element = this.state.highlightedItem;

    if (!element) {
      return;
    }

    scrollIntoView(element, {
      behavior: instantScroll ? 'instant' : 'smooth',
      block: 'nearest',
      inline: 'nearest',
      scrollMode: 'if-needed',
    });
  };

  private clickHighlightedItem() {
    const { highlightedItem } = this.state;

    if (!highlightedItem) {
      return;
    }

    const checkbox = highlightedItem && (highlightedItem.querySelector('input[type="checkbox"]') as HTMLInputElement);

    return checkbox ? checkbox.click() : highlightedItem.click();
  }
}
