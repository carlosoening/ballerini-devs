import { ButtonsContainer, CardContainer, DevInfoContainer, ImageContainer, ImageLine, LinksContainer, StyledCard, StyledImage } from "./styles";
import defaultImage from '../../assets/1602304.jpg';
import github from '../../assets/github-white.svg';
import linkedin from '../../assets/linkedin-white.svg';
import { Button } from "../Button";
import colors from "../../styles/colors";
import Dev from "../../interfaces/dev";

interface Props {
  dev: Dev;
  id: number;
  onRemoveItem: Function;
  onEditClick: Function;
}

function Card({dev, id, onRemoveItem, onEditClick}: Props) {

  function removeItem() {
    onRemoveItem({ id });
  }

  function editItem() {
    onEditClick();
  }

  return (
    <CardContainer>
      <StyledCard>
        <ImageContainer>
          <StyledImage src={`https://github.com/${dev.githubUser}.png`} 
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = defaultImage;
          }} alt="Imagem de Perfil" />
        </ImageContainer>
        <ImageLine></ImageLine>
        <DevInfoContainer>
          <p className="dev-name">{dev.name}</p>
          <p className="dev-role">{dev.role}</p>
        </DevInfoContainer>
        <LinksContainer>
          <a href={`https://github.com/${dev.githubUser}`} 
            target="_blank"><img src={github} alt="Github Icon" /></a>
          <a href={`https://linkedin.com/in/${dev.linkedinUser}`} 
            target="_blank"><img src={linkedin} alt="Linkedin Icon" /></a>
        </LinksContainer>
      </StyledCard>
      <ButtonsContainer>
        <Button 
          backgroundColor={colors.yellow}
          width="125px"
          height="40px"
          fontSize="20px"
          onClick={editItem}
        >
            Editar
        </Button>
        <Button 
          backgroundColor={colors.red}
          width="125px"
          height="40px"
          fontSize="20px"
          onClick={removeItem}
        >
            Deletar
        </Button>
      </ButtonsContainer>
    </CardContainer>
  );
}

export default Card;