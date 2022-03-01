import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledDevs = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 146px);

  @media screen and (max-height: 815px) {
    margin-top: 80px;
  }
`;

export const CardsDisplay = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;

    .swiper {
      width: 100%;
      height: 100%;
      min-width: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }
    
    .swiper-wrapper {
      height: 500px;
    }

    .swiper-slide {
      width: 100%;
      max-width: 400px;
      height: 500px;
    }

    .swiper-button-prev, .swiper-button-next {
      width: 48px;
      height: 48px;
      color: #F9F9F980;
      border-radius: 50%;
      border: 3px solid #F9F9F980;
      &:after{
        font-size: 1.2em;
        font-weight: bold;
      }
    }
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  gap: 20px;
  top: 50px;
  right: 80px;
  z-index: 10;

  @media screen and (max-width: 1050px) {
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    top: 170px;
  }

  @media screen and (max-height: 815px) {
    top: 125px;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${colors.white};
  padding: 0 10px;
`;