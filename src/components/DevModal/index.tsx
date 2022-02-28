import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';
import { ModalTypeEnum } from "../../enums/modal-type.enum";
import Dev from "../../interfaces/dev";
import colors from "../../styles/colors";
import { Button } from "../Button";
import { Input } from "../Input";
import { Background, FieldsContainer, ModalContent, ModalWrapper, Title } from "./styles";

interface Props {
  showModal: boolean;
  setShowModal: Function;
  onAddItem: Function;
  modalType: string;
  editItem: Dev;
}

export default function DevModal({ showModal, setShowModal, onAddItem, editItem, modalType }: Props) {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [role, setRole] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    if (modalType === ModalTypeEnum.EDIT && showModal) {
      setName(editItem.name);
      setAvatar(editItem.avatar);
      setRole(editItem.role);
      setGithub(editItem.githubUser);
      setLinkedin(editItem.linkedinUser || '');
      console.log(editItem)
    } else if (!showModal) {
      setName('');
      setAvatar('');
      setRole('');
      setGithub('');
      setLinkedin('');
    }
  }, [showModal]);

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
  }, [keyPress])

  function addItem() {
    onAddItem({name, avatar, role, github, linkedin});
    setShowModal(false);
  }

  function saveEditItem() {
    editItem.name = name;
    editItem.avatar = avatar;
    editItem.role = role;
    editItem.githubUser = github;
    editItem.linkedinUser = linkedin;
    setShowModal(false);
    return;
  }

  return (
    <>
      {showModal ? (
        <Background ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <Title>
                  {modalType === ModalTypeEnum.ADD
                    ? 'Adicionar Desenvolvedor' 
                    : 'Editar Desenvolvedor'}
                </Title>
                <FieldsContainer>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Avatar"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Cargo"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}/>
                  <div className="buttons">
                    <Button width="125px" height="40px" backgroundColor={colors.white} 
                      color="#000" fontSize="20px" onClick={() => setShowModal((prev: any) => !prev)}>
                      Cancelar
                    </Button>
                    <Button width="125px" height="40px" fontSize="20px" 
                      onClick={modalType === ModalTypeEnum.ADD ? addItem : saveEditItem}>
                      {modalType === ModalTypeEnum.ADD ? 'Adicionar' : 'Salvar'}
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