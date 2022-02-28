import { ButtonsContainer, CardContainer, DevInfoContainer, ImageContainer, ImageLine, LinksContainer, StyledCard, StyledImage } from "./styles";
import image from '../../assets/1602304.jpg';
import github from '../../assets/github-white.svg';
import linkedin from '../../assets/linkedin-white.svg';
import { Button } from "../Button";
import colors from "../../styles/colors";

function Card(props: any) {

  function removeItem() {
    props.onRemoveItem({ id: props.id });
  }

  function editItem() {
    props.onEditClick();
  }

  return (
    <CardContainer>
      <StyledCard>
        <ImageContainer>
          <StyledImage src={image} alt="Imagem de Perfil" />
        </ImageContainer>
        <ImageLine></ImageLine>
        <DevInfoContainer>
          <p className="dev-name">{props.name}</p>
          <p className="dev-role">{props.role}</p>
        </DevInfoContainer>
        <LinksContainer>
          <img src={github} alt="Github Icon" />
          <img src={linkedin} alt="Linkedin Icon" />
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