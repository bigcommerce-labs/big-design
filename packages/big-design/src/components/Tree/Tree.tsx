import React, { useMemo, useReducer, useState } from 'react';

import { useUniqueId } from '../../hooks';
import { typedMemo } from '../../utils';

import { createReducer, createReducerInit } from './reducer';
import { StyledUl } from './styled';
import { TreeNode } from './TreeNode';
import { TreeProps } from './types';

const InternalTree = <T extends unknown>({
  iconless,
  id,
  initialNodes,
  onCollapse,
  onExpand,
  onSelect,
  selectable,
}: TreeProps<T>): React.ReactElement<TreeProps<T>> => {
  const [nodes] = useState(initialNodes);
  const uniqueTreeId = useUniqueId('tree');
  const treeId = id ?? uniqueTreeId;
  const reducer = useMemo(() => createReducer<T>(), []);
  const reducerInit = useMemo(() => createReducerInit<T>(), []);
  const [state, dispatch] = useReducer(reducer, { nodes, selectable }, reducerInit);

  const renderedItems = useMemo(
    () =>
      nodes.map((node, index) => (
        <TreeNode
          {...node}
          dispatch={dispatch}
          iconless={iconless}
          key={index}
          onCollapse={onCollapse}
          onExpand={onExpand}
          onSelect={onSelect}
          selectable={selectable}
          state={state}
          treeId={treeId}
        />
      )),
    [iconless, nodes, onCollapse, onExpand, onSelect, selectable, state, treeId],
  );

  return (
    <StyledUl id={treeId} role="tree" aria-multiselectable={selectable === 'multi'} style={{ overflow: 'hidden' }}>
      {renderedItems}
    </StyledUl>
  );
};

export const Tree = typedMemo(InternalTree);
