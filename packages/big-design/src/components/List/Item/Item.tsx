import { CheckIcon } from '@bigcommerce/big-design-icons';
import { UseSelectPropGetters } from 'downshift';
import React, { cloneElement, forwardRef, isValidElement, LiHTMLAttributes, memo, Ref } from 'react';

import { typedMemo } from '../../../utils';
import { Checkbox } from '../../Checkbox';
import { DropdownItem, DropdownLinkItem } from '../../Dropdown';
import { Flex, FlexItem } from '../../Flex';
import { SelectAction, SelectOption } from '../../Select';
import { Tooltip } from '../../Tooltip';
import { Small } from '../../Typography';

import { StyledLink, StyledListItem } from './styled';

export interface ListItemProps<T> extends LiHTMLAttributes<HTMLLIElement> {
  actionType?: 'normal' | 'destructive';
  autoWidth?: boolean;
  disabled?: boolean;
  index: number;
  isAction?: boolean;
  isChecked?: boolean;
  isHighlighted: boolean;
  isSelected?: boolean;
  item: DropdownItem | DropdownLinkItem | SelectOption<T> | SelectAction;
  getItemProps: UseSelectPropGetters<any>['getItemProps'];
  addItem?(item: SelectOption<T>): void;
  removeItem?(item: SelectOption<T>): void;
}

interface PrivateProps {
  forwardedRef: Ref<HTMLLIElement>;
}

type Items<T> = DropdownItem | DropdownLinkItem | SelectOption<T> | SelectAction;

const StyleableListItem = typedMemo(
  <T extends unknown>({
    actionType = 'normal' as const,
    autoWidth = false,
    forwardedRef,
    index,
    isAction = false,
    isChecked = false,
    isHighlighted,
    isSelected = false,
    item,
    getItemProps,
    addItem,
    removeItem,
    ...props
  }: ListItemProps<T> & PrivateProps): ReturnType<React.FC<ListItemProps<T> & PrivateProps>> =>
    removeItem && addItem ? (
      <StyledListItem
        {...getItemProps({
          ...props,
          disabled: item.disabled,
          index,
          item,
          onClick: () => {
            if (item.disabled) {
              return;
            }

            const hasValue = (
              item: DropdownItem | DropdownLinkItem | SelectOption<T> | SelectAction,
            ): item is SelectOption<T> => 'value' in item;

            if (hasValue(item)) {
              isChecked ? removeItem(item) : addItem(item);
            }
          },
          ref: forwardedRef,
        })}
        actionType={actionType}
        autoWidth={autoWidth}
        isAction={isAction}
        isHighlighted={isHighlighted}
      >
        <Checkbox
          checked={isChecked}
          disabled={item.disabled}
          description={item.description}
          label={item.content}
          onChange={() => null}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          tabIndex={-1}
        />
      </StyledListItem>
    ) : (
      <StyledListItem
        {...getItemProps({
          ...props,
          disabled: item.disabled,
          index,
          item,
          ref: forwardedRef,
        })}
        actionType={actionType}
        autoWidth={autoWidth}
        isAction={isAction}
        isHighlighted={isHighlighted}
        isSelected={isSelected}
      >
        {getContent(item, isHighlighted)}
        {isSelected && <CheckIcon color="primary" size="large" />}
      </StyledListItem>
    ),
);

export const ListItem = memo(
  forwardRef<HTMLLIElement, ListItemProps<unknown>>((props, ref) => (
    <StyleableListItem {...props} forwardedRef={ref} />
  )),
);

const getContent = (item: Items<unknown>, isHighlighted: boolean) => {
  const { content, disabled, description, icon } = item;

  const baseContent = (
    <Flex alignItems="center" flexDirection="row">
      {icon && (
        <FlexItem
          alignSelf={description ? 'flex-start' : undefined}
          paddingRight="xSmall"
          paddingTop={description ? 'xSmall' : undefined}
        >
          {renderIcon(item, isHighlighted)}
        </FlexItem>
      )}
      {description ? (
        <FlexItem paddingVertical="xSmall">
          {content}
          <Small color={descriptionColor(disabled)}>{description}</Small>
        </FlexItem>
      ) : (
        content
      )}
    </Flex>
  );

  const finalContent =
    'type' in item && item.type === 'link' && !disabled ? wrapInLink(item, baseContent) : baseContent;

  return disabled && 'tooltip' in item && item.tooltip ? wrapInTooltip(item.tooltip, finalContent) : finalContent;
};

const renderIcon = (item: Items<unknown>, isHighlighted: boolean) => {
  return (
    isValidElement(item.icon) &&
    cloneElement(item.icon, {
      color: iconColor(item, isHighlighted),
      size: 'large',
    })
  );
};

const iconColor = (item: Items<unknown>, isHighlighted: boolean) => {
  if (item.disabled) {
    return 'secondary40';
  }

  if (!isHighlighted || !('onActionClick' in item)) {
    return 'secondary60';
  }

  return 'actionType' in item ? (item.actionType === 'destructive' ? 'danger50' : 'primary') : 'primary';
};

const descriptionColor = (isDisabled: boolean | undefined) => (isDisabled ? 'secondary40' : 'secondary60');

const wrapInLink = (item: DropdownLinkItem, content: React.ReactChild) => {
  return (
    <StyledLink href={item.url} tabIndex={-1} target={item.target}>
      {content}
    </StyledLink>
  );
};

const wrapInTooltip = (tooltip: string, tooltipTrigger: React.ReactChild) => {
  return (
    <Tooltip
      placement="left"
      trigger={tooltipTrigger}
      modifiers={[{ name: 'preventOverflow' }, { name: 'offset', options: { offset: [0, 20] } }]}
      inline={false}
    >
      {tooltip}
    </Tooltip>
  );
};
