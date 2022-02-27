import { Background, CloseModalButton, ModalContent, ModalWrapper } from "./styles";

export default function Modal(props: any) {
  return (
    <>
      {props.showModal ? (
        <Background>
          <ModalWrapper showModal={props.showModal}>
            <ModalContent>
              <h1>Teste</h1>
            </ModalContent>
            <CloseModalButton aria-label="Close modal" 
              onClick={() => props.setShowModal((prev: any) => !prev)}/>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );  
}