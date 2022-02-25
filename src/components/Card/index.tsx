import { CardContainer, DevInfoContainer, ImageContainer, ImageLine, LinksContainer, StyledCard, StyledImage } from "./styles";
import image from '../../assets/1602304.jpg';
import github from '../../assets/github-white.svg';
import linkedin from '../../assets/linkedin-white.svg';

function Card() {
  return (
    <CardContainer>
      <StyledCard>
        <ImageContainer>
          <StyledImage src={image} alt="Imagem de Perfil" />
        </ImageContainer>
        <ImageLine></ImageLine>
        <DevInfoContainer>
          <p className="dev-name">Carlos Oening</p>
          <p className="dev-role">Desenvolvedor Fullstack</p>
        </DevInfoContainer>
        <LinksContainer>
          <img src={github} alt="Github Icon" />
          <img src={linkedin} alt="Linkedin Icon" />
        </LinksContainer>
      </StyledCard>
    </CardContainer>
  );
}

export default Card;