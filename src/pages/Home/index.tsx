import { HomeContentContainer, HomeContainer, HomeImageContainer } from "./styles";
import blobs from '../../assets/blobs.svg';
import programador from '../../assets/programador.svg';

function Home() {
  return (
      <HomeContainer>
        <HomeContentContainer>
          <p className="home-content-title">O maior banco de devs do Brasil</p>
          <p className="home-content-subtitle">Não importa se front ou back end, 
          fazer networking é muito importante. 
          Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
        </HomeContentContainer>
        <HomeImageContainer>
          <img src={programador} alt="Imagem de Programador"/>
        </HomeImageContainer>
        <img className="blobs-image" src={blobs} alt="Blobs" />
      </HomeContainer>
  );
}

export default Home;