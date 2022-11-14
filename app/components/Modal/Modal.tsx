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
}) {
  const { title, footer, children, active, hideModal } = props;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()} />
          <ModalContainer>
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
