import { Fragment } from 'react';
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle
} from './styles';

function Modal(props: {
  title: string;
  footer: JSX.Element;
  children: JSX.Element;
  active: boolean;
  hideModal: () => void;
  large?: boolean;
}) {
  const { title, footer, children, active, hideModal, large } = props;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()} />
          <ModalContainer large={!!large}>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hideModal()}>&#9587;</ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
}

export default Modal;
