import { Reducer } from 'react';

import { NodeMap, TreeNodeId, TreeNodeProps, TreeProps, TreeState } from './types';

interface InitArgs<T> {
  nodes: TreeNodeProps<T>[];
  radio: boolean;
}

export const createReducerInit = <T>() => ({ nodes, radio }: InitArgs<T>): TreeState<T> => {
  const nodeMap = initializeNodeMap(nodes);
  const visibleNodeIds = initializeVisibleNodeIds(nodes, nodeMap);
  const selectedValues = initializeSelectedValues(nodes, radio);
  const focusedNode = initializeFocusNode(nodes, selectedValues, visibleNodeIds);
  const expandedNodeIds = initializeExpandedNodeIds(nodes);
  const flattenedNodeIds = initializeFlattenedNodeIds(nodes);

  return {
    nodeMap,
    expandedNodeIds,
    flattenedNodeIds,
    focusedNode,
    selectedValues,
    visibleNodeIds,
  };
};

export type Action<T> =
  | { type: 'TOGGLE_NODE'; id: TreeNodeId }
  | { type: 'FOCUS'; id: TreeNodeId }
  | { type: 'FOCUS_DOWN'; id: TreeNodeId }
  | { type: 'FOCUS_UP'; id: TreeNodeId }
  | { type: 'FOCUS_RIGHT'; id: TreeNodeId }
  | { type: 'FOCUS_LEFT'; id: TreeNodeId }
  | { type: 'FOCUS_FIRST' }
  | { type: 'FOCUS_LAST' }
  | { type: 'SELECTED_NODE'; values: T[] };

export const createReducer = <T>(): Reducer<TreeState<T>, Action<T>> => (state, action) => {
  switch (action.type) {
    case 'TOGGLE_NODE':
      if (state.expandedNodeIds.includes(action.id)) {
        return {
          ...state,
          expandedNodeIds: state.expandedNodeIds.filter((nodeId) => nodeId !== action.id),
          visibleNodeIds: removeChildNodes(state.visibleNodeIds, action.id, state.nodeMap),
        };
      }

      return {
        ...state,
        expandedNodeIds: insertNode(state.expandedNodeIds, action.id, state.flattenedNodeIds),
        visibleNodeIds: buildVisibleNodes(state.nodeMap[action.id].children, state),
      };

    case 'FOCUS':
      return {
        ...state,
        focusedNode: action.id,
      };

    case 'FOCUS_DOWN':
      return {
        ...state,
        focusedNode: getNextVisibleNode(state, action.id),
      };

    case 'FOCUS_UP':
      return {
        ...state,
        focusedNode: getPreviousVisibleNode(state, action.id),
      };

    case 'FOCUS_RIGHT':
      if (state.expandedNodeIds.includes(action.id)) {
        return {
          ...state,
          focusedNode: getNextVisibleNode(state, action.id),
        };
      }

      if (state.nodeMap[action.id].children.length > 0) {
        return {
          ...state,
          expandedNodeIds: insertNode(state.expandedNodeIds, action.id, state.flattenedNodeIds),
          visibleNodeIds: buildVisibleNodes(state.nodeMap[action.id].children, state),
        };
      }

      return state;

    case 'FOCUS_LEFT':
      if (state.expandedNodeIds.includes(action.id)) {
        return {
          ...state,
          expandedNodeIds: state.expandedNodeIds.filter((nodeId) => nodeId !== action.id),
          visibleNodeIds: removeChildNodes(state.visibleNodeIds, action.id, state.nodeMap),
        };
      }

      if (state.nodeMap[action.id].parent !== undefined) {
        return {
          ...state,
          focusedNode: state.nodeMap[action.id].parent,
        };
      }

      return state;

    case 'FOCUS_FIRST':
      return {
        ...state,
        focusedNode: state.visibleNodeIds[0],
      };

    case 'FOCUS_LAST':
      return {
        ...state,
        focusedNode: state.visibleNodeIds[state.visibleNodeIds.length - 1],
      };

    case 'SELECTED_NODE':
      if (action.values) {
        return {
          ...state,
          selectedValues: action.values,
        };
      }

      return state;

    default:
      return state;
  }
};

const initializeNodeMap = <T>(nodes: TreeProps<T>['nodes'], parent?: TreeNodeId): NodeMap =>
  nodes.reduce((acc, node) => {
    const childNodeMap = node.children ? initializeNodeMap(node.children, node.id) : {};

    return {
      ...acc,
      [node.id]: {
        id: node.id,
        children: node.children ? node.children.map((child) => child.id) : [],
        parent,
      },
      ...childNodeMap,
    };
  }, {});

const initializeExpandedNodeIds = <T>(nodes: TreeProps<T>['nodes']): TreeNodeId[] =>
  nodes.reduce<TreeNodeId[]>((acc, node) => {
    if (node.expanded) {
      const childrenIds = node.children && node.children.length > 0 ? initializeExpandedNodeIds(node.children) : [];

      return [...acc, node.id, ...childrenIds];
    }

    return acc;
  }, []);

const initializeFlattenedNodeIds = <T>(nodes: TreeProps<T>['nodes']): TreeNodeId[] =>
  nodes.reduce<TreeNodeId[]>((acc, node) => {
    const childrenIds = node.children && node.children.length > 0 ? initializeFlattenedNodeIds(node.children) : [];

    return [...acc, node.id, ...childrenIds];
  }, []);

const initializeVisibleNodeIds = <T>(nodes: TreeProps<T>['nodes'], nodeMap: NodeMap): TreeNodeId[] =>
  nodes.reduce<TreeNodeId[]>((acc, node) => {
    const childrenIds =
      node.expanded && node.children && node.children.length > 0
        ? initializeVisibleNodeIds(node.children, nodeMap)
        : [];

    return [...acc, node.id, ...childrenIds];
  }, []);

const initializeSelectedValues = <T>(nodes: TreeProps<T>['nodes'], radio: boolean): T[] => {
  let selectedValues: T[] = [];
  const queue = [...nodes];

  for (let i = 0; i < queue.length; i++) {
    const node = queue[i];
    if (node.children) {
      queue.splice(i + 1, 0, ...node.children);
    }

    if (node.value !== undefined && !node.disabled) {
      if (radio && (node.selected || selectedValues.length < 1)) {
        selectedValues = [node.value];
      } else {
        // If a multi-select tree...
        if (node.selected && !node.disabled) {
          selectedValues.push(node.value);
        }
      }
    }
  }

  return selectedValues;
};

const initializeFocusNode = <T>(nodes: TreeProps<T>['nodes'], selectedValues: T[], visibleNodeIds: TreeNodeId[]) => {
  const initialFocusedNode = recursiveInitializeFocusNode(nodes, selectedValues, visibleNodeIds);

  return initialFocusedNode !== null ? initialFocusedNode : nodes[0].id;
};

const recursiveInitializeFocusNode = <T>(
  nodes: TreeProps<T>['nodes'],
  selectedValues: T[],
  visibleNodeIds: TreeNodeId[],
): TreeNodeId | null =>
  nodes.reduce<TreeNodeId | null>((acc, node) => {
    if (acc === null) {
      if (visibleNodeIds.includes(node.id)) {
        const childId =
          node.children && node.children.length > 0
            ? recursiveInitializeFocusNode(node.children, selectedValues, visibleNodeIds)
            : null;

        if (node.value !== undefined && selectedValues.includes(node.value)) {
          return node.id;
        }

        return childId;
      }
    }

    return acc;
  }, null);

const getNextVisibleNode = <T>(state: TreeState<T>, id: TreeNodeId): TreeNodeId => {
  const index = state.visibleNodeIds.indexOf(id);

  if (index !== -1 && index + 1 < state.visibleNodeIds.length) {
    return state.visibleNodeIds[index + 1];
  }

  return id;
};

const getPreviousVisibleNode = <T>(state: TreeState<T>, id: TreeNodeId): TreeNodeId => {
  const index = state.visibleNodeIds.indexOf(id);

  if (index !== -1 && index - 1 >= 0) {
    return state.visibleNodeIds[index - 1];
  }

  return id;
};

// Inserts id in the correct order and returns a new array.
const insertNode = (idList: TreeNodeId[], id: TreeNodeId, flattenedNodeIds: TreeNodeId[]): TreeNodeId[] => {
  if (idList.includes(id)) {
    return idList;
  }

  const newArr = [...idList, id];

  return flattenedNodeIds.filter((nodeId) => newArr.includes(nodeId));
};

const getChildNodes = (id: TreeNodeId, nodeMap: NodeMap): TreeNodeId[] =>
  nodeMap[id].children.reduce<TreeNodeId[]>((acc, childId) => {
    if (nodeMap[childId].children.length > 0) {
      return [...acc, childId, ...getChildNodes(childId, nodeMap)];
    }

    return [...acc, childId];
  }, []);

const removeChildNodes = (idList: TreeNodeId[], id: TreeNodeId, nodeMap: NodeMap): TreeNodeId[] => {
  if (nodeMap[id].children.length > 0) {
    const childIds = getChildNodes(id, nodeMap);

    return idList.filter((nodeId) => !childIds.includes(nodeId));
  }

  return idList;
};

const buildVisibleNodes = <T>(nodes: TreeNodeId[], state: TreeState<T>): TreeNodeId[] => {
  let list = [...state.visibleNodeIds];

  nodes.forEach((node) => {
    list = insertNode(list, node, state.flattenedNodeIds);

    const childs = state.nodeMap[node].children;

    if (state.expandedNodeIds.includes(node) && childs) {
      list = buildVisibleNodes(childs, { ...state, visibleNodeIds: list });
    }
  });

  return list;
};
