import styled from "styled-components";
import colors from "../../styles/colors";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  margin: auto;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background-color: rgba(249, 249, 249, 0.14);
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  border: 2px solid ${colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 30px 0;
`;

export const StyledImage = styled.img`
  height: 175px;
`;

export const ImageLine = styled.div`
  width: 120px;
  height: 0px;
  border: 1px solid ${colors.green};
`;

export const DevInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  font-weight: 500;

 .dev-name {
    font-size: 25px;
 }

 .dev-role {
    font-size: 15px;
 }
`;

export const LinksContainer = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 20px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-height: 815px) {
    margin-top: 15px;
  }
`;