import React from 'react';

import { typedMemo } from '../../../../utils';
import { Flex, FlexItem } from '../../../Flex';
import { Small } from '../../../Typography';
import { useStore } from '../../hooks';
import { Cell, WorksheetItem, WorksheetModalColumn } from '../../types';

import { StyledButton } from './styled';

export interface ModalEditorProps<Item> {
  cell: Cell<Item>;
  formatting?: WorksheetModalColumn<Item>['formatting'];
}

const InternalModalEditor = <T extends WorksheetItem>({ cell, formatting }: ModalEditorProps<T>) => {
  const setOpenModal = useStore((state) => state.setOpenModal);
  const { hash, value } = cell;

  const handleClick = () => {
    setOpenModal(hash);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <FlexItem paddingRight="small">
        <Small>{formatting ? formatting(value) : `${value}`}</Small>
      </FlexItem>
      <StyledButton onClick={handleClick} variant="subtle">
        Edit
      </StyledButton>
    </Flex>
  );
};

export const ModalEditor = typedMemo(InternalModalEditor);
