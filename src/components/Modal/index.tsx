import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';
import colors from "../../styles/colors";
import { Button } from "../Button";
import { Input } from "../Input";
import { Background, FieldsContainer, ModalContent, ModalWrapper, Title } from "./styles";

export default function Modal(props: any) {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [role, setRole] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const modalRef = useRef<any>();
  
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: props.showModal ? 1 : 0,
    transform: props.showModal ? `translateY(0%)` : `translateY(-100%)` 
  });

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
  }

  const keyPress = useCallback((e: any) => {
    if (e.key === 'Escape' && props.showModal) {
      props.setShowModal(false);
    }
  }, [props.setShowModal, props.showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress])

  function addItem() {
    props.onAddItem({name, avatar, role, github, linkedin});
    props.setShowModal(false);
  }

  return (
    <>
      {props.showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={props.showModal}>
              <ModalContent>
                <Title>Adicionar Desenvolvedor</Title>
                <FieldsContainer>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Nome" 
                    onChange={(e) => setName(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Avatar"
                    onChange={(e) => setAvatar(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Cargo"
                    onChange={(e) => setRole(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Github"
                    onChange={(e) => setGithub(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Linkedin"
                    onChange={(e) => setLinkedin(e.target.value)}/>
                  <div className="buttons">
                    <Button width="125px" height="40px" backgroundColor={colors.white} 
                      color="#000" fontSize="20px" onClick={() => props.setShowModal((prev: any) => !prev)}>
                      Cancelar
                    </Button>
                    <Button width="125px" height="40px" fontSize="20px" 
                      onClick={addItem}>
                      Adicionar
                    </Button>
                  </div>
                </FieldsContainer>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );  
}