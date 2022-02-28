import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import colors from "../../styles/colors";

interface ModalProps {
  showModal: any;
}

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  left: 0;
`;

export const ModalWrapper = styled.div<ModalProps>`
  max-width: 460px;
  height: fit-content;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: rgba(52, 51, 51, 1);
  color: #000;
  position: relative;
  align-self: center;
  z-index: 1000;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  z-index: 1000;
  color: #141414;
  margin: 10px 20px;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  gap: 50px;

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 1000;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: ${colors.white};
`;