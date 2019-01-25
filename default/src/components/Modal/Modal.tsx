import React from 'react';
import { createPortal } from 'react-dom';

import { StyledModal, StyledModalActions, StyledModalContent } from './styled';

export interface ModalProps {
  backdrop: boolean;
  isOpen: boolean;
  requestCloseOnClickOutside: boolean;
  requestCloseOnEscKey: boolean;
  onRequestClose(): void;
}

export class Modal extends React.PureComponent<ModalProps> {
  static defaultProps: Partial<ModalProps> = {
    backdrop: true,
    isOpen: false,
    requestCloseOnClickOutside: true,
    requestCloseOnEscKey: true,
    onRequestClose: () => null,
  };

  static Actions = StyledModalActions;

  private backdropRef = React.createRef<HTMLDivElement>();
  private modalContainer = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }

  render() {
    const { children, isOpen, onRequestClose, ...props } = this.props;

    const modalContent = (
      <StyledModal onKeyDown={this.onKeyDown} onClick={this.onClickAway} ref={this.backdropRef} {...props}>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModal>
    );

    return isOpen && createPortal(modalContent, this.modalContainer);
  }

  private onClickAway = (event: React.MouseEvent) => {
    if (this.props.requestCloseOnClickOutside && this.backdropRef.current === event.target) {
      this.props.onRequestClose();
    }
  };

  private onKeyDown = (event: React.KeyboardEvent) => {
    if (this.props.requestCloseOnEscKey && event.key === 'Escape') {
      this.props.onRequestClose();
    }
  };
}
