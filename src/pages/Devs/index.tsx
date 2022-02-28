import { useEffect, useState } from "react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import searchIcon from '../../assets/search-icon.svg';
import { Button } from "../../components/Button";
import Card from "../../components/Card";
import ConfirmModal from "../../components/ConfirmModal";
import DevModal from "../../components/DevModal";
import { Input } from "../../components/Input";
import { ModalTypeEnum } from "../../enums/modal-type.enum";
import Dev from "../../interfaces/dev";
import { CardsDisplay, OptionsContainer, SearchInputContainer, StyledDevs } from "./styles";


function Devs() {

  const [ showDevModal, setShowDevModal ] = useState<boolean>(false);

  const [ showConfirmModal, setShowConfirmModal ] = useState<boolean>(false);
  const [ confirmModalTitle, setConfirmModalTitle ] = useState<string>('');
  const [ confirmModalText, setConfirmModalText ] = useState<string>('');

  const [ modalType, setModalType ] = useState<string>(ModalTypeEnum.ADD);

  const [ editItem, setEditItem ] = useState<any>();
  const [ deleteItemId, setDeleteItemId ] = useState<any>();

  const openDevModal = () => {
    setShowDevModal(prev => !prev);
  }

  function openModalAdd() {
    setModalType(ModalTypeEnum.ADD);
    openDevModal();
  }
  
  const [ devs, setDevs ] = useState<Dev[]>([
    {
      name: 'Carlos Oening',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening',
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Ricardo Passos',
      role: 'Fullstack Developer',
      githubUser: 'ricardopassos',
      linkedinUser: 'ricardopassos'
    },
  ]);

  const [ data, setData ] = useState(devs);

  useEffect(() => setData(devs), [devs]);

  SwiperCore.use([Navigation])

  function handleRemoveItem(event: any) {
    setConfirmModalTitle('Confirmar Exclusão');
    setConfirmModalText('Você tem certeza que deseja deletar este item?');
    setDeleteItemId(event.id)
    setShowConfirmModal((prev: boolean) => !prev);
  }

  function handleSearchInputChange(event: any) {
    let value = event.target.value;
    setData(devs.filter(d => d.name.toLowerCase().includes(value.toLowerCase())));
  }

  function handleAddItem(event: any) {
    setDevs([...devs, event]);
  }

  function handleEditClick(item: Dev) {
    setEditItem(item);
    setModalType(ModalTypeEnum.EDIT);
    openDevModal();
  }

  function handleOk(event: any) {
    const newDevs = devs.filter((d, i) => i != event.id);
    setDevs(newDevs);
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
        title={confirmModalTitle}
        text={confirmModalText}
        showModal={showConfirmModal}
        itemId={deleteItemId}
        setShowModal={setShowConfirmModal}
        onOk={handleOk}
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
          {data.map((d, i) => {
            return (
              <SwiperSlide key={`key_${d.name}`} >
                <Card
                  id={i}
                  dev={d}
                  onRemoveItem={(event: any) => handleRemoveItem(event)}
                  onEditClick={() => handleEditClick(d)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CardsDisplay>
    </StyledDevs>
  );
}

export default Devs;