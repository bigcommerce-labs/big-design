import { CheckIcon, ChevronRightIcon, FolderIcon } from '@bigcommerce/big-design-icons';
import React, { Dispatch, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { typedMemo } from '../../../utils';
import { StyledCheckbox } from '../../Checkbox/private';
import { FlexItemProps } from '../../Flex';
import { StyledRadio } from '../../Radio/styled';
import { DelayedSpinner } from '../DelayedSpinner';
import { useIsExpanded, useIsSelected } from '../hooks';
import { Action } from '../reducer';
import { StyledUl } from '../styled';
import { TreeNodeProps, TreeNodeRef, TreeProps, TreeState } from '../types';

import {
  StyledArrowWrapper,
  StyledFlex,
  StyledFlexItem,
  StyledGap,
  StyledLi,
  StyledSelectableWrapper,
  StyledText,
} from './styled';

interface PrivateTreeItemProps<T> {
  state: TreeState<T>;
  dispatch: Dispatch<Action<T>>;
  iconless?: boolean;
  selectable: TreeProps<T>['selectable'];
  onExpand?: TreeProps<T>['onExpand'];
  onCollapse?: TreeProps<T>['onCollapse'];
  onSelect?: TreeProps<T>['onSelect'];
}

const flexItemProps: FlexItemProps = { flexShrink: 0, marginLeft: 'xxSmall' };

const InternalTreeNode = <T extends unknown>({
  children,
  disabled,
  dispatch,
  icon,
  iconless,
  id,
  label,
  onCollapse,
  onExpand,
  onSelect,
  selectable,
  state,
  value,
}: TreeNodeProps<T> & PrivateTreeItemProps<T>): React.ReactElement<TreeNodeProps<T>> => {
  const thisRef = useRef<TreeNodeRef<T>>({ children });
  const nodeRef = useRef<HTMLLIElement | null>(null);
  const selectableRef = useRef<HTMLLabelElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const expanded = useIsExpanded(state, id);
  const selected = useIsSelected(state, value);

  // Could be multiple elements in which are clicked.
  // Typing to generic Element type since all other elements extend from it.
  const handleNodeToggle = async (e?: React.MouseEvent<Element>) => {
    dispatch({ type: 'FOCUS', id });

    // Prevents the collapse/expand when clicking on a radio or checkbox
    // Checks to see if every element inside the selectableRef gets clicked.
    if (
      (e?.target instanceof Node && selectableRef.current?.contains(e?.target)) ||
      thisRef.current.children === undefined
    ) {
      return;
    }

    dispatch({ type: 'TOGGLE_NODE', id });

    if (expanded) {
      if (typeof onCollapse === 'function') {
        const callbackValue = await onCollapse({
          children: thisRef.current.children,
          disabled,
          expanded,
          id,
          label,
          selected,
          value,
        });

        if (callbackValue) {
          thisRef.current = callbackValue;
        }
      }
    } else {
      if (typeof onExpand === 'function') {
        setIsLoading(true);

        const callbackValue = await onExpand({
          children: thisRef.current.children,
          disabled,
          expanded,
          id,
          label,
          selected,
          value,
        });

        if (callbackValue) {
          thisRef.current = callbackValue;
        }

        setIsLoading(false);
      }
    }
  };

  const handleNodeSelected = useCallback(() => {
    if (selectable === undefined || value === undefined || disabled) {
      return;
    }

    const newSelectedValues = new Set(state.selectedValues.values());

    if (selectable === 'multi') {
      if (newSelectedValues.has(value)) {
        newSelectedValues.delete(value);
      } else {
        newSelectedValues.add(value);
      }

      if (typeof onSelect === 'function') {
        onSelect(Array.from(newSelectedValues));
      }
    }

    if (selectable === 'radio') {
      newSelectedValues.clear();
      newSelectedValues.add(value);

      if (typeof onSelect === 'function') {
        onSelect(newSelectedValues.values().next().value);
      }
    }

    dispatch({ type: 'SELECTED_NODE', values: newSelectedValues });
  }, [disabled, dispatch, onSelect, selectable, state.selectedValues, value]);

  // Needs to handle the following keyboard events:
  // https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-22
  const handleKeyEvent = (e: React.KeyboardEvent<HTMLLIElement>) => {
    const key = e.key;

    if (e.altKey || e.currentTarget !== e.target) {
      return;
    }

    switch (key) {
      case ' ':
        e.preventDefault();

        handleNodeSelected();
        break;

      case 'Enter':
        if (nodeRef.current === e.currentTarget) {
          if (thisRef.current.children) {
            handleNodeToggle();
          } else if (selectable) {
            handleNodeSelected();
          }
        }
        break;

      case 'ArrowDown':
        e.preventDefault();

        dispatch({ type: 'FOCUS_DOWN', id });
        break;

      case 'ArrowUp':
        e.preventDefault();

        dispatch({ type: 'FOCUS_UP', id });
        break;

      case 'ArrowRight':
        if (thisRef.current?.children) {
          if (expanded) {
            dispatch({ type: 'FOCUS_DOWN', id });
          } else {
            handleNodeToggle();
          }
        }
        break;

      case 'ArrowLeft':
        if (thisRef.current?.children) {
          if (expanded) {
            handleNodeToggle();

            break;
          }
        }

        if (state.nodeMap.get(id)?.parent) {
          dispatch({ type: 'FOCUS_UP', id });
        }

        break;

      case 'Home':
        dispatch({ type: 'FOCUS_FIRST' });
        break;

      case 'End':
        dispatch({ type: 'FOCUS_LAST' });
        break;

      default:
        break;
    }
  };

  const additionalProps = useMemo(() => (selectable ? { 'aria-selected': selected } : {}), [selectable, selected]);

  const renderedArrow = useMemo(
    () =>
      thisRef.current.children ? (
        <StyledArrowWrapper expanded={expanded} flexShrink={0}>
          <ChevronRightIcon color="secondary60" focusable={false} size="xLarge" />
        </StyledArrowWrapper>
      ) : (
        <StyledGap />
      ),
    [expanded],
  );

  const renderedChildren = useMemo(
    () =>
      thisRef.current.children &&
      expanded && (
        <StyledUl role="group">
          {isLoading && thisRef.current.children.length < 1 ? (
            <TreeNode
              id={-1}
              label=""
              icon={<DelayedSpinner />}
              dispatch={dispatch}
              selectable={selectable}
              state={state}
            />
          ) : (
            thisRef.current.children?.map((child, index) => (
              <TreeNode
                {...child}
                dispatch={dispatch}
                iconless={iconless}
                key={index}
                onCollapse={onCollapse}
                onExpand={onExpand}
                onSelect={onSelect}
                selectable={selectable}
                state={state}
              />
            ))
          )}
        </StyledUl>
      ),
    [dispatch, expanded, iconless, isLoading, onCollapse, onExpand, onSelect, selectable, state],
  );

  const renderedIcon = useMemo(() => {
    if (iconless) {
      return null;
    }

    return icon ? (
      <StyledFlexItem {...flexItemProps}>{icon}</StyledFlexItem>
    ) : (
      <StyledFlexItem {...flexItemProps}>
        <FolderIcon color={disabled ? 'primary20' : 'primary30'} size="xLarge" />
      </StyledFlexItem>
    );
  }, [disabled, icon, iconless]);

  const renderedSelectable = useMemo(() => {
    if (value === undefined && selectable !== undefined) {
      return null;
    }

    if (selectable === 'radio') {
      return (
        <StyledSelectableWrapper {...flexItemProps}>
          <StyledRadio
            aria-hidden
            checked={selected}
            disabled={disabled}
            onClick={handleNodeSelected}
            ref={selectableRef}
          />
        </StyledSelectableWrapper>
      );
    }

    if (selectable === 'multi') {
      return (
        <StyledSelectableWrapper {...flexItemProps}>
          <StyledCheckbox
            aria-hidden
            checked={selected}
            disabled={disabled}
            onClick={handleNodeSelected}
            ref={selectableRef}
          >
            {selected ? <CheckIcon /> : null}
          </StyledCheckbox>
        </StyledSelectableWrapper>
      );
    }
  }, [disabled, handleNodeSelected, selected, selectable, value]);

  useEffect(() => {
    if (state.focusedNode === id) {
      nodeRef?.current?.focus();
    }
  }, [state.focusedNode, id]);

  return (
    <StyledLi
      aria-expanded={expanded}
      onKeyDown={handleKeyEvent}
      ref={nodeRef}
      role="treeitem"
      tabIndex={state.focusedNode === id ? 0 : -1}
      {...additionalProps}
    >
      <StyledFlex alignItems="center" flexDirection="row" onClick={handleNodeToggle} selected={selected}>
        {renderedArrow}
        {renderedSelectable}
        {renderedIcon}
        <StyledText as="span" ellipsis marginLeft="xxSmall" color={disabled ? 'secondary50' : 'secondary70'}>
          {label}
        </StyledText>
      </StyledFlex>
      {renderedChildren}
    </StyledLi>
  );
};

export const TreeNode = typedMemo(InternalTreeNode);
