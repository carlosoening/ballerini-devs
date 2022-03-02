import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';
import { ModalTypeEnum } from "../../enums/modal-type.enum";
import Dev from "../../interfaces/dev";
import colors from "../../styles/colors";
import { Button } from "../Button";
import ConfirmModal from "../ConfirmModal";
import { Input } from "../Input";
import { Background, FieldsContainer, ModalContent, ModalWrapper, Title } from "./styles";

interface Props {
  showModal: boolean;
  setShowModal: Function;
  onAddItem: Function;
  modalType: string;
  editItem: Dev;
  data: Dev[];
}

export default function DevModal({ showModal, setShowModal, onAddItem, editItem, modalType, data }: Props) {

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [githubUser, setGithubUser] = useState("");
  const [linkedinUser, setLinkedinUser] = useState("");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (modalType === ModalTypeEnum.EDIT && showModal) {
      setName(editItem.name);
      setRole(editItem.role);
      setGithubUser(editItem.githubUser);
      setLinkedinUser(editItem.linkedinUser || '');
    } else if (!showModal) {
      setName('');
      setRole('');
      setGithubUser('');
      setLinkedinUser('');
    }
  }, [showModal]);

  useEffect(() => {
    if (name && role && githubUser && linkedinUser) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, role, githubUser, linkedinUser]);

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
    const filteredData = data.filter(d => {
      return ((d.name.toLowerCase() === name.toLowerCase() ) 
      || (d.githubUser.toLowerCase() === githubUser.toLowerCase())
      || (d.linkedinUser?.toLowerCase() === linkedinUser.toLowerCase()));
    });
    if (filteredData.length > 0) {
      alert("Este dev já foi adicionado!");
      return;
    };
    onAddItem({name, role, githubUser, linkedinUser});
    setShowModal(false);
  }

  function saveEditItem() {
    editItem.name = name;
    editItem.role = role;
    editItem.githubUser = githubUser;
    editItem.linkedinUser = linkedinUser;
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
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Cargo"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Github"
                    value={githubUser}
                    onChange={(e) => setGithubUser(e.target.value)}/>
                  <Input width="100%" height="38px" fontSize="18px" placeholder="Linkedin"
                    value={linkedinUser}
                    onChange={(e) => setLinkedinUser(e.target.value)}/>
                  <div className="buttons">
                    <Button width="125px" height="40px" backgroundColor={colors.white} 
                      color="#000" fontSize="20px" onClick={() => setShowModal((prev: any) => !prev)}>
                      Cancelar
                    </Button>
                    <Button width="125px" height="40px" fontSize="20px" 
                      onClick={modalType === ModalTypeEnum.ADD ? addItem : saveEditItem}
                      disabled={disabled}
                    >
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