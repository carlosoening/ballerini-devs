import { HomeContentContainer, HomeContainer, HomeImageContainer } from "./styles";
import blobs from '../../assets/blobs.svg';
import programador from '../../assets/programador.svg';
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
      <HomeContainer>
        <HomeContentContainer>
          <div className="home-content-text">
            <p className="home-content-title">O maior banco de devs do Brasil</p>
            <p className="home-content-subtitle">Não importa se front ou back end, 
              fazer networking é muito importante. 
              Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
          </div>
          <Link to="/devs">
            <Button>Entre agora</Button>
          </Link>
        </HomeContentContainer>
        <HomeImageContainer>
          <img src={programador} alt="Imagem de Programador"/>
        </HomeImageContainer>
        <img className="blobs-image" src={blobs} alt="Blobs" />
      </HomeContainer>
  );
}

export default Home;