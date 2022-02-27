import { useState } from "react";
import Card from "../../components/Card";
import Dev from "../../interfaces/dev";
import { CardsDisplay, OptionsContainer, SearchInput, SearchInputContainer, StyledDevs } from "./styles";
import searchIcon from '../../assets/search-icon.svg';
import { Button } from "../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import "swiper/css/navigation";
import Modal from "../../components/Modal";

function Devs() {

  const [ showModal, setShowModal ] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const [ devs, setDevs ] = useState<Dev[]>([
    {
      name: 'Carlos Oening',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening',
      avatar: null,
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Ricardo Passos',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: null,
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Teste',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: null,
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Teste 2',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: null,
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Teste 3',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: null,
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Teste 4',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: null,
      linkedinUser: 'carlosoening'
    },
  ]);

  SwiperCore.use([Navigation])

  function handleRemoveItem(props: any) {
    const newDevs = devs.filter((d, i) => i != props.id);
    setDevs(newDevs);
  }

  function handleSearchInputChange(event: any) {
    let value = event.target.value;
    console.log(value);
    setDevs(devs.filter(d => d.name.toLowerCase().includes(value.toLowerCase())));
  }

  return (
    <StyledDevs>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <OptionsContainer>
        <SearchInputContainer>
          <img src={searchIcon} alt="Search Icon" />
          <SearchInput placeholder="Buscar" onChange={handleSearchInputChange}></SearchInput>
        </SearchInputContainer>
        <Button width="200px" height="40px" fontSize="14px" onClick={openModal}>Adicionar Desenvolvedor</Button>
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