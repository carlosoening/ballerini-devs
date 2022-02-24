import styled from "styled-components";
import colors from "../../styles/colors";

export const HomeContainer = styled.main`
  display: flex;
  width: 100%;
  height: calc(100vh - 146px);
  align-items: center;
  
  .blobs-image {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .blobs-image {
      z-index: -1;
    }
  }
`;

export const HomeContentContainer = styled.div`
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-family: Overpass;
    max-width: 560px;
    align-self: center;

  .home-content-title {
    font-weight: bold;
    font-style: normal;
    font-size: 48px;
    color: ${colors.title}
  }

  .home-content-subtitle {
    font-size: 24px;
    color: ${colors.gray}
  }

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const HomeImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  img {
    min-width: 430px;
    min-height: 430px;
    max-width: 760px;
    max-height: 760px;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    img {
      max-width: 400px;
    }
  }
`;