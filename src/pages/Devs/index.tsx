import { useState } from "react";
import Card from "../../components/Card";
import Dev from "../../interfaces/dev";
import { CardsDisplay, OptionsContainer, SearchInputContainer, StyledDevs } from "./styles";
import searchIcon from '../../assets/search-icon.svg';
import { Button } from "../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import "swiper/css/navigation";
import DevModal from "../../components/DevModal";
import { Input } from "../../components/Input";
import { ModalTypeEnum } from "../../enums/modal-type.enum";
import ConfirmModal from "../../components/ConfirmModal";

function Devs() {

  const [ showDevModal, setShowDevModal ] = useState<boolean>(false);

  const [ showConfirmModal, setShowConfirmModal ] = useState<boolean>(false);

  const [ modalType, setModalType ] = useState<string>(ModalTypeEnum.ADD);

  const [ editItem, setEditItem ] = useState<any>();

  const openModal = () => {
    setShowDevModal(prev => !prev);
  }

  function openModalAdd() {
    setModalType(ModalTypeEnum.ADD);
    openModal();
  }

  const [ devs, setDevs ] = useState<Dev[]>([
    {
      name: 'Carlos Oening',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening',
      avatar: '',
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Ricardo Passos',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: '',
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Teste',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: '',
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Teste 2',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: '',
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Teste 3',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: '',
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Teste 4',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: '',
      linkedinUser: 'carlosoening'
    },
  ]);

  SwiperCore.use([Navigation])

  function handleRemoveItem(props: any) {
    setShowConfirmModal((prev: boolean) => !prev);
  }

  function handleSearchInputChange(event: any) {
    let value = event.target.value;
    setDevs(devs.filter(d => d.name.toLowerCase().includes(value.toLowerCase())));
  }

  function handleAddItem(event: any) {
    setDevs([...devs, event]);
  }

  function handleEditClick(item: Dev) {
    setEditItem(item);
    setModalType(ModalTypeEnum.EDIT);
    openModal();
  }

  return (
    <StyledDevs>
      <DevModal 
        showModal={showDevModal} 
        setShowModal={setShowDevModal} 
        onAddItem={handleAddItem}
        editItem={editItem}
        modalType={modalType}
      />
      <ConfirmModal
        title="Confirmar Deleção"
        text="Você tem certeza que deseja deletar este item?"
        showModal={showConfirmModal}
        setShowModal={setShowConfirmModal}
      ></ConfirmModal>
      <OptionsContainer>
        <SearchInputContainer>
          <img src={searchIcon} alt="Search Icon" />
          <Input placeholder="Buscar" onChange={handleSearchInputChange}></Input>
        </SearchInputContainer>
        <Button width="200px" height="40px" fontSize="14px" onClick={openModalAdd}>Adicionar Desenvolvedor</Button>
      </OptionsContainer>
      <CardsDisplay>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          navigation
          breakpoints={{
            1200: {
            slidesPerGroup: 1,
            slidesPerView: 3,
            },
          }}
        >
          {devs.map((d, i) => {
            return (
              <SwiperSlide key={`key_${d.name}`} >
                <Card
                  id={i}
                  name={d.name} 
                  role={d.role}
                  githubUser={d.githubUser}
                  onRemoveItem={handleRemoveItem}
                  onEditClick={() => handleEditClick(d)}
                >
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CardsDisplay>
    </StyledDevs>
  );
}

export default Devs;