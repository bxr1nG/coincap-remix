import styled from 'styled-components';

export const ModalBlock = styled('div')`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
  position: fixed;
  display: flex;
  opacity: 1;
  z-index: 100;

  animation: 0.3s ease 0s 1 opacityFromZeroToOne;
  @keyframes opacityFromZeroToOne {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalOverlay = styled('a')`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(247, 248, 249, 0.75);
  cursor: default;
  display: block;
  position: absolute;
`;

export const ModalClose = styled('a')`
  float: right;
  text-decoration: none;
  cursor: pointer;
`;

export const ModalContainer = styled('div')`
  background: ${(props) => props.theme.palette.common.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 75vh;
  max-width: 500px;
  padding: 1rem;
  width: 100%;
  z-index: 1;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.borderRadius};

  animation: 0.3s ease 0s 1 slideInFromBottom;
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const ModalBody = styled('div')`
  overflow-y: auto;
  position: relative;
`;

export const ModalHeader = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitle = styled('span')`
  font: ${(props) => props.theme.font.heading};
  font-size: 1.25rem;
`;

export const ModalFooter = styled('div')`
  text-align: right;
`;
