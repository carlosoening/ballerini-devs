import { useCallback, useEffect, useRef } from "react";
import { animated, useSpring } from 'react-spring';
import colors from "../../styles/colors";
import { Button } from "../Button";
import { Background, ModalContent, ModalWrapper, Text, Title } from "./styles";

interface Props {
  showModal: boolean;
  setShowModal: Function;
  title: string;
  text: string;
  onOk?: any;
  itemId?: number;
}

export default function ConfirmModal({ showModal, setShowModal, title, text, onOk, itemId }: Props) {

  const modalRef = useRef<any>();
  
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)` 
  });

  const keyPress = useCallback((e: any) => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  function ok() {
    onOk({ id: itemId });
    setShowModal(false);
  }

  return (
    <>
      {showModal ? (
        <Background ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <Title>
                  {title}
                </Title>
                <Text>{text}</Text>
                <div className="buttons">
                  <Button width="125px" height="40px" backgroundColor={colors.white} 
                    color="#000" fontSize="20px" onClick={() => setShowModal((prev: any) => !prev)}>
                    Cancelar
                  </Button>
                  <Button width="125px" height="40px" fontSize="20px" 
                    onClick={ok}>
                    OK
                  </Button>
                </div>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );  
}